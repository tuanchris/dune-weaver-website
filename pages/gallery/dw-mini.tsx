import fs from 'fs/promises';
import path from 'path';
import sizeOf from 'image-size';
import { GalleryPageTemplate, GalleryPageConfig } from '@/components/GalleryPageTemplate';
import { getAssetPath } from '@/lib/assetPath';

interface GalleryMedia {
  filename: string;
  alt: string;
  src: string;
  type: 'image' | 'video';
  width?: number;
  height?: number;
  aspectRatio?: number;
}

interface Props {
  media: GalleryMedia[];
}

export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), 'public/gallery/dw-mini');

  try {
    const files = await fs.readdir(galleryDir);

    // Filter for image and video files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];

    const mediaFiles = files.filter(file => {
      const lowerFile = file.toLowerCase();
      return imageExtensions.some(ext => lowerFile.endsWith(ext)) ||
             videoExtensions.some(ext => lowerFile.endsWith(ext));
    });

    // Sort alphabetically
    mediaFiles.sort();

    // Create media objects
    const media: GalleryMedia[] = await Promise.all(mediaFiles.map(async filename => {
      // Convert filename to readable alt text
      const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
      const alt = nameWithoutExt
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());

      // Determine if file is image or video
      const lowerFile = filename.toLowerCase();
      const type: 'image' | 'video' = videoExtensions.some(ext => lowerFile.endsWith(ext)) ? 'video' : 'image';

      // Get image dimensions for images (not videos)
      const baseMedia = {
        filename,
        alt,
        src: getAssetPath(`/gallery/dw-mini/${filename}`),
        type,
      };

      if (type === 'image') {
        try {
          const filePath = path.join(galleryDir, filename);
          const buffer = await fs.readFile(filePath);
          const dimensions = sizeOf(buffer);
          if (dimensions && dimensions.width && dimensions.height) {
            return {
              ...baseMedia,
              width: dimensions.width,
              height: dimensions.height,
              aspectRatio: dimensions.width / dimensions.height,
            };
          }
        } catch (error) {
          console.warn(`Failed to get dimensions for ${filename}:`, error);
        }
        // If dimension reading failed, return with default square aspect ratio
        return { ...baseMedia, aspectRatio: 1 };
      } else {
        // For videos, use 16:9 aspect ratio as default
        return { ...baseMedia, aspectRatio: 16 / 9 };
      }
    }));

    return {
      props: {
        media,
      },
    };
  } catch (error) {
    // If directory doesn't exist or is empty, return empty array
    return {
      props: {
        media: [],
      },
    };
  }
}

const config: GalleryPageConfig = {
  pageTitle: 'Dune Weaver Mini Gallery',
  heading: 'Dune Weaver Mini',
  description: 'A free, beginner-friendly desktop sand table. Perfect for learning and creating beautiful patterns at home.',
  badge: {
    text: 'MakerWorld',
    bgColor: 'bg-badge-makerworld-bg',
    textColor: 'text-badge-makerworld-text',
  },
  callToActionModelName: 'Dune Weaver Mini',
  productLink: 'https://makerworld.com/en/models/896314-mini-dune-weaver-not-your-typical-marble-run#profileId-854412',
  productLinkText: 'Download Free',
};

export default function DWMiniGallery({ media }: Props) {
  return <GalleryPageTemplate media={media} config={config} />;
}
