import React from 'react';
import { Section } from './Section';
import { ProductCard, Product } from './ProductCard';

const addons: Product[] = [
  {
    name: 'Customize Your Dune Weaver',
    image: '/images/customize-addon.jpg',
    description: 'Personalize your Dune Weaver with custom designs, colors, and configurations. Make it uniquely yours with our comprehensive customization guide.',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
    ctaText: 'Get on Patreon',
    ctaLink: 'https://www.patreon.com/posts/customize-your-142340553?source=storefront',
  },
  {
    name: 'Desert Compass',
    image: '/images/desert-compass.jpg',
    description: 'An elegant accessory for your Dune Weaver. This beautiful addition enhances the aesthetic of your sand table while adding a unique decorative element.',
    badge: {
      text: '💎 Patreon',
      type: 'patreon',
    },
    ctaText: 'Get on Patreon',
    ctaLink: 'https://www.patreon.com/posts/desert-compass-141889140?source=storefront',
  },
];

export const AddonsSection: React.FC = () => {
  return (
    <Section id="addons" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Enhance Your Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover add-ons and customizations to make your Dune Weaver truly unique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {addons.map((addon, index) => (
          <ProductCard key={index} product={addon} />
        ))}
      </div>
    </Section>
  );
};
