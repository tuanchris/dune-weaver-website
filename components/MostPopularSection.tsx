import React from 'react';
import { Section } from './Section';
import { ProductCard, Product } from './ProductCard';

const popularProducts: Product[] = [
  {
    name: 'DWMP – Mini Pro',
    description: 'A compact powerhouse combining portability with professional features. Perfect for your desk with premium build quality and advanced pattern capabilities.',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
    ctaText: 'Get on Patreon',
    ctaLink: '#',
  },
  {
    name: 'DWP – Dune Weaver Pro',
    description: 'The ultimate kinetic sand table. Full-sized with professional-grade components, advanced controls, and the largest drawing surface for spectacular patterns.',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
    ctaText: 'Get on Patreon',
    ctaLink: '#',
  },
  {
    name: 'DW Mini',
    description: 'A free, beginner-friendly desktop sand table. Great for learning and experimentation. Print it yourself and start creating beautiful patterns today.',
    badge: {
      text: 'MakerWorld',
      type: 'makerworld',
    },
    ctaText: 'Download Free',
    ctaLink: '#',
  },
];

export const MostPopularSection: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Most Popular Builds
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our community's favorite designs and start your kinetic sand art journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {popularProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </Section>
  );
};
