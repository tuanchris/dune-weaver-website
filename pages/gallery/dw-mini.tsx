import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface GalleryImage {
  id: number;
  alt: string;
  pattern: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, alt: 'DW Mini - Simple Spiral', pattern: 'Simple Spiral' },
  { id: 2, alt: 'DW Mini - Concentric Circles', pattern: 'Concentric Circles' },
  { id: 3, alt: 'DW Mini - Basic Geometry', pattern: 'Basic Geometry' },
  { id: 4, alt: 'DW Mini - Wave Pattern', pattern: 'Wave Pattern' },
  { id: 5, alt: 'DW Mini - Zigzag Design', pattern: 'Zigzag Design' },
  { id: 6, alt: 'DW Mini - Star Pattern', pattern: 'Star Pattern' },
];

export default function DWMiniGallery() {
  return (
    <>
      <Head>
        <title>DW Mini Gallery - Dune Weaver</title>
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
                DW Mini
              </h1>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                MakerWorld
              </span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A free, beginner-friendly desktop sand table. Perfect for learning and
              creating beautiful patterns at home.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 flex items-center justify-center">
                  <div className="text-center p-8">
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
                    <p className="text-sm text-gray-400 italic">
                      Community images coming soon
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{image.pattern}</h3>
                  <p className="text-sm text-gray-500">DW Mini</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Share Your Creations
              </h2>
              <p className="text-gray-600 mb-6">
                Have you created amazing patterns with your DW Mini? Share them with
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

      <Footer />
    </>
  );
}
