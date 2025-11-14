import Head from 'next/head';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CommunitySection } from '@/components/CommunitySection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dune Weaver - Build mesmerizing kinetic sand art</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen pt-16 bg-sand-900">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TestimonialsSection />
        <CommunitySection />
      </main>

      <Footer />
    </>
  );
}
