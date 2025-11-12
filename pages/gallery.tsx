import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Dune Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-8">Gallery</h1>
          <p className="text-gray-600">Content coming soon...</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
