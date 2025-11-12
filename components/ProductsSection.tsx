import React from 'react';
import { Section } from './Section';
import { ProductCard, Product } from './ProductCard';

const products: Product[] = [
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
  {
    name: 'OG DW – Original',
    description: 'The original open-source Dune Weaver design. A proven build with a passionate community and extensive documentation. Perfect for tinkerers.',
    badge: {
      text: 'MakerWorld',
      type: 'makerworld',
    },
    ctaText: 'Download Free',
    ctaLink: '#',
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <Section id="products" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Build
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From free open-source designs to premium builds, there's a Dune Weaver for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </Section>
  );
};
