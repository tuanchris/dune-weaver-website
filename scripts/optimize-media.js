#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const sharp = require('sharp');

const execAsync = promisify(exec);

// Configuration
const IMAGE_QUALITY = 85; // Quality for JPEG/WebP (1-100)
const MAX_WIDTH = 1920; // Maximum width for images (maintains aspect ratio)
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const VIDEO_EXTENSIONS = ['.mov', '.mp4', '.avi', '.mkv'];
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Parse command line arguments
const args = process.argv.slice(2);
const targetPath = args[0] ? path.join(PUBLIC_DIR, args[0]) : PUBLIC_DIR;

/**
 * Recursively find all files in a directory
 */
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Get file size in KB
 */
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

/**
 * Optimize an image file
 */
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = getFileSizeKB(filePath);

  try {
    let image = sharp(filePath);
    const metadata = await image.metadata();

    const originalDimensions = `${metadata.width}x${metadata.height}`;
    let needsResize = metadata.width > MAX_WIDTH;
    let resizeInfo = '';

    // Create a temporary output path
    const tempPath = filePath + '.tmp';

    // Resize if needed
    if (needsResize) {
      const newHeight = Math.round((MAX_WIDTH / metadata.width) * metadata.height);
      image = image.resize(MAX_WIDTH, newHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
      resizeInfo = ` [${originalDimensions}→${MAX_WIDTH}x${newHeight}]`;
    }

    // Optimize based on format
    if (ext === '.png') {
      // Optimize PNG
      await image
        .png({ quality: IMAGE_QUALITY, compressionLevel: 9 })
        .toFile(tempPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Optimize JPEG
      await image
        .jpeg({ quality: IMAGE_QUALITY, progressive: true })
        .toFile(tempPath);
    } else if (ext === '.webp') {
      // Optimize WebP
      await image
        .webp({ quality: IMAGE_QUALITY })
        .toFile(tempPath);
    } else {
      console.log(`⏭️  Skipping unsupported format: ${filePath}`);
      return;
    }

    const newSize = getFileSizeKB(tempPath);

    // Only replace if the new file is smaller or similar size (optimization worked)
    if (parseFloat(newSize) < parseFloat(originalSize)) {
      fs.renameSync(tempPath, filePath);
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      console.log(`✅ ${path.relative(PUBLIC_DIR, filePath)}: ${originalSize}KB → ${newSize}KB (${savings}% smaller)${resizeInfo}`);
    } else {
      // New file is larger, keep original
      fs.unlinkSync(tempPath);
      console.log(`⏭️  ${path.relative(PUBLIC_DIR, filePath)}: Already optimized (${originalSize}KB)${resizeInfo ? ` ${originalDimensions}` : ''}`);
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

/**
 * Check if ffmpeg is available
 */
async function checkFFmpeg() {
  try {
    await execAsync('ffmpeg -version');
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Optimize a video file
 */
async function optimizeVideo(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = getFileSizeKB(filePath);

  try {
    // Create temporary output path
    const tempPath = filePath + '.tmp.mp4';

    // FFmpeg command for web optimization
    // - H.264 codec for compatibility
    // - CRF 23 for good quality/size balance (lower = better quality, 18-28 is reasonable)
    // - Faststart for web streaming
    // - Scale to max 1920px width while maintaining aspect ratio
    const ffmpegCmd = `ffmpeg -i "${filePath}" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" -y "${tempPath}" 2>&1`;

    console.log(`🎬 Processing video: ${path.relative(PUBLIC_DIR, filePath)}...`);

    const { stdout, stderr } = await execAsync(ffmpegCmd);

    const newSize = getFileSizeKB(tempPath);

    // Determine output extension
    const outputPath = filePath.replace(ext, '.mp4');

    // Replace original file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    fs.renameSync(tempPath, outputPath);

    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`✅ ${path.relative(PUBLIC_DIR, filePath)}: ${originalSize}KB → ${newSize}KB (${savings}% smaller)${ext !== '.mp4' ? ' [converted to MP4]' : ''}`);
  } catch (error) {
    console.error(`❌ Error optimizing video ${filePath}:`, error.message);
    // Clean up temp file if it exists
    const tempPath = filePath + '.tmp.mp4';
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting media optimization...\n');

  // Verify target path exists
  if (!fs.existsSync(targetPath)) {
    console.error(`❌ Error: Path not found: ${targetPath}`);
    process.exit(1);
  }

  // Get all files
  const allFiles = getAllFiles(targetPath);

  // Separate images and videos
  const images = allFiles.filter(file =>
    IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );

  const videos = allFiles.filter(file =>
    VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );

  console.log(`Found ${images.length} images and ${videos.length} videos\n`);

  // Optimize images
  if (images.length > 0) {
    console.log('📸 Optimizing images...\n');
    for (const image of images) {
      await optimizeImage(image);
    }
    console.log('');
  }

  // Optimize videos
  if (videos.length > 0) {
    const hasFFmpeg = await checkFFmpeg();

    if (!hasFFmpeg) {
      console.log('⚠️  FFmpeg not found. Skipping video optimization.');
      console.log('   Install FFmpeg to enable video optimization: https://ffmpeg.org/download.html\n');
    } else {
      console.log('🎬 Optimizing videos...\n');
      for (const video of videos) {
        await optimizeVideo(video);
      }
      console.log('');
    }
  }

  console.log('✨ Optimization complete!');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
