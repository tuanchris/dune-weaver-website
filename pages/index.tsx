import Head from 'next/head';
import { HeroSection } from '@/components/HeroSection';
import { MostPopularSection } from '@/components/MostPopularSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { CommunitySection } from '@/components/CommunitySection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dune Weaver - Build mesmerizing kinetic sand art</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
        <MostPopularSection />
        <AboutSection />
        <ProductsSection />
        <CommunitySection />
      </main>

      <Footer />
    </>
  );
}
