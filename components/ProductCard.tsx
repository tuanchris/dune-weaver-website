import React from 'react';
import { Button } from './Button';

export interface Product {
  name: string;
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
    patreon: 'bg-orange-500 text-white',
    makerworld: 'bg-blue-500 text-white',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[product.badge.type]}`}>
          {product.badge.text}
        </span>
      </div>

      <p className="text-gray-600 mb-6 flex-grow">
        {product.description}
      </p>

      <Button href={product.ctaLink} variant="primary" className="w-full">
        {product.ctaText}
      </Button>
    </div>
  );
};
