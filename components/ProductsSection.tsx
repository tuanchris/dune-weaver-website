import React from 'react';
import { Section } from './Section';
import { ProductCard, Product } from './ProductCard';
import { FeatureComparison } from './FeatureComparison';

const products: Product[] = [
  {
    name: 'Dune Weaver Pro',
    image: '/images/dune-weaver-pro.jpg',
    description: 'The ultimate kinetic sand table. Full-sized with professional-grade components, advanced controls, and the largest drawing surface for spectacular patterns.',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
    ctaText: 'Get on Patreon',
    ctaLink: 'https://www.patreon.com/posts/dune-weaver-pro-137394378',
  },
  {
    name: 'Dune Weaver Mini Pro',
    image: '/images/dune-weaver-mini-pro.jpg',
    description: 'A compact powerhouse combining portability with professional features. Perfect for your desk with premium build quality and advanced pattern capabilities.',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
    ctaText: 'Get on Patreon',
    ctaLink: 'https://www.patreon.com/posts/dune-weaver-mini-141674449',
  },
  {
    name: 'Dune Weaver OG',
    image: '/images/dune-weaver-og.jpg',
    description: 'The original open-source Dune Weaver design. A proven build with a passionate community and extensive documentation. Perfect for tinkerers.',
    badge: {
      text: 'MakerWorld',
      type: 'makerworld',
    },
    ctaText: 'Download Free',
    ctaLink: 'https://makerworld.com/en/models/841332-dune-weaver-a-3d-printed-kinetic-sand-table#profileId-787553',
  },
  {
    name: 'Dune Weaver Mini',
    image: '/images/dune-weaver-mini.jpg',
    description: 'A free, beginner-friendly desktop sand table. Great for learning and experimentation. Print it yourself and start creating beautiful patterns today.',
    badge: {
      text: 'MakerWorld',
      type: 'makerworld',
    },
    ctaText: 'Download Free',
    ctaLink: 'https://makerworld.com/en/models/896314-mini-dune-weaver-not-your-typical-marble-run#profileId-854412',
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <Section id="products" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
          Choose Your Dune Weaver
        </h2>
        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
          From free open-source designs to premium builds, there's a Dune Weaver for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <FeatureComparison />
    </Section>
  );
};
