import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-sand-800 hover:text-sand-600 transition-colors">
            Dune Weaver
          </Link>

          <nav className="flex items-center gap-6">
            <a href="#about" className="text-gray-700 hover:text-sand-600 transition-colors">
              About
            </a>
            <a href="#products" className="text-gray-700 hover:text-sand-600 transition-colors">
              Products
            </a>
            <a href="#community" className="text-gray-700 hover:text-sand-600 transition-colors">
              Community
            </a>
            <Link href="/blog" className="text-gray-700 hover:text-sand-600 transition-colors font-semibold">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
