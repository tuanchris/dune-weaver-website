import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import fs from 'fs/promises';
import path from 'path';
import sizeOf from 'image-size';
import { useState, useEffect } from 'react';

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
  const galleryDir = path.join(process.cwd(), 'public/gallery/dwmp-mini-pro');

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
        src: `/gallery/dwmp-mini-pro/${filename}`,
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

export default function DWMPMiniProGallery({ media }: Props) {
  const hasMedia = media.length > 0;
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = media.findIndex(m => m.filename === selectedMedia.filename);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : media.length - 1;
        setSelectedMedia(media[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = media.findIndex(m => m.filename === selectedMedia.filename);
        const nextIndex = currentIndex < media.length - 1 ? currentIndex + 1 : 0;
        setSelectedMedia(media[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, media]);

  return (
    <>
      <Head>
        <title>DWMP Mini Pro Gallery - Dune Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/gallery"
              className="text-amber-600 hover:text-amber-700 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Gallery
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
                DWMP – Mini Pro
              </h1>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700">
                💎 Patreon
              </span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A compact powerhouse combining portability with professional features.
              Explore beautiful patterns created by the community.
            </p>
          </div>

          {/* Gallery Grid */}
          {hasMedia ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
              {media.map((item) => (
                <div
                  key={item.filename}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid mb-6"
                  onClick={() => setSelectedMedia(item)}
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      preload="metadata"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xl text-gray-500 mb-2">No images yet</p>
                <p className="text-gray-400">
                  Add images to <code className="px-2 py-1 bg-gray-100 rounded text-sm">public/gallery/dwmp-mini-pro/</code> and rebuild
                </p>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Share Your Creations
              </h2>
              <p className="text-gray-600 mb-6">
                Have you created amazing patterns with your DWMP Mini Pro? Share them with
                the community and get featured in our gallery!
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                Submit Your Photos
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-full max-h-[90vh] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full" style={{ aspectRatio: selectedMedia.aspectRatio || 1 }}>
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            )}
            <div className="text-white text-center mt-4 text-lg">
              {selectedMedia.alt}
            </div>
          </div>

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = media.findIndex(m => m.filename === selectedMedia.filename);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : media.length - 1;
                  setSelectedMedia(media[prevIndex]);
                }}
                aria-label="Previous"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = media.findIndex(m => m.filename === selectedMedia.filename);
                  const nextIndex = currentIndex < media.length - 1 ? currentIndex + 1 : 0;
                  setSelectedMedia(media[nextIndex]);
                }}
                aria-label="Next"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}
