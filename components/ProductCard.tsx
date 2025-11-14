import React from 'react';
import { Button } from './Button';

export interface Product {
  name: string;
  image?: string;
  description: string;
  badge: {
    text: string;
    type: 'patreon' | 'makerworld';
  };
  ctaText: string;
  ctaLink: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const badgeStyles = {
    patreon: 'bg-theme-badge-patreon-bg text-theme-badge-patreon-text',
    makerworld: 'bg-theme-badge-makerworld-bg text-theme-badge-makerworld-text',
  };

  return (
    <div className="bg-theme-background-primary rounded-xl shadow-lg p-6 flex flex-col h-full border border-theme-border-light hover:shadow-xl transition-shadow duration-200">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-theme-text-primary mb-2">{product.name}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[product.badge.type]}`}>
          {product.badge.text}
        </span>
      </div>

      {product.image && (
        <div className="mb-4 rounded-lg overflow-hidden bg-theme-background-secondary aspect-square flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <p className="text-theme-text-secondary mb-6 flex-grow">
        {product.description}
      </p>

      <Button href={product.ctaLink} variant="primary" className="w-full">
        {product.ctaText}
      </Button>
    </div>
  );
};
