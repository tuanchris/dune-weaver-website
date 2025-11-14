import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface TableType {
  id: string;
  name: string;
  description: string;
  image: string;
  badge: {
    text: string;
    type: 'patreon' | 'makerworld';
  };
}

const tableTypes: TableType[] = [
  {
    id: 'dwp-pro',
    name: 'Dune Weaver Pro',
    description: 'The ultimate kinetic sand table. Full-sized with professional-grade components, advanced controls, and the largest drawing surface for spectacular patterns.',
    image: '/images/dune-weaver-pro.jpg',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
  },
  {
    id: 'dwmp-mini-pro',
    name: 'Dune Weaver Mini Pro',
    description: 'A compact powerhouse combining portability with professional features. Perfect for your desk with premium build quality and advanced pattern capabilities.',
    image: '/images/dune-weaver-mini-pro.jpg',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
  },
  {
    id: 'dw-mini',
    name: 'Dune Weaver Mini',
    description: 'A free, beginner-friendly desktop sand table. Great for learning and experimentation. Print it yourself and start creating beautiful patterns today.',
    image: '/images/dune-weaver-mini.jpg',
    badge: {
      text: 'MakerWorld',
      type: 'makerworld',
    },
  },
  {
    id: 'og-dw',
    name: 'Dune Weaver OG',
    description: 'The original open-source Dune Weaver design. A proven build with a passionate community and extensive documentation. Perfect for tinkerers.',
    image: '/images/dune-weaver-og.jpg',
    badge: {
      text: 'MakerWorld',
      type: 'makerworld',
    },
  },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Dune Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore stunning sand art patterns created by our community. Choose a table type to see what it can create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tableTypes.map((table) => (
              <Link
                key={table.id}
                href={`/gallery/${table.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                      {table.name}
                    </h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        table.badge.type === 'patreon'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {table.badge.text}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{table.description}</p>
                  <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                    View Gallery
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="h-48 relative bg-gray-100">
                  <Image
                    src={table.image}
                    alt={table.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
