# Media Optimization Script

This script optimizes all images and videos in the `public` directory for web use.

## Features

- **Image Optimization**: Compresses JPG, PNG, and WebP images while maintaining quality
- **Smart Resizing**: Automatically resizes images wider than 1920px to optimize for web display
- **Video Optimization**: Converts and compresses videos to web-optimized MP4 format (requires FFmpeg)
- **In-place Replacement**: Replaces original files with optimized versions
- **Progress Logging**: Shows size reduction and dimension changes for each file

## Installation

Install FFmpeg (optional, for video optimization):

```bash
# Ubuntu/Debian
sudo apt-get install ffmpeg

# macOS
brew install ffmpeg

# Windows
# Download from https://ffmpeg.org/download.html
```

## Usage

### Optimize all media in public directory

```bash
npm run optimize
```

### Optimize specific subdirectory

```bash
node scripts/optimize-media.js images/gallery
node scripts/optimize-media.js gallery/dwp-pro
```

### Run directly

```bash
./scripts/optimize-media.js
```

## What it does

### Images (JPG, PNG, WebP)
- Resizes images wider than 1920px (maintains aspect ratio)
- Compresses images to 85% quality
- Uses progressive encoding for JPEGs
- Maintains original format
- Only replaces if the optimized version is smaller

### Videos (MOV, MP4, AVI, MKV)
- Converts to MP4 format with H.264 codec
- Scales down to max 1920x1080 (maintains aspect ratio)
- Optimizes for web streaming (faststart flag)
- Compresses audio to 128kbps AAC

## Examples

```bash
# After adding new product images
npm run optimize

# After uploading gallery photos
node scripts/optimize-media.js gallery

# After adding hero images
node scripts/optimize-media.js images
```

## Tips

- Run this script before committing new media assets
- Back up important files before first run
- The script is safe to run multiple times (won't re-optimize already optimized files)
- Videos require FFmpeg to be installed
