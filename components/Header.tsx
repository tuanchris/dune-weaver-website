import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="font-bold text-xl text-gray-900">Dune Weaver</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-gray-700 hover:text-sand-600 transition-colors">
              About
            </Link>
            <Link href="/#products" className="text-gray-700 hover:text-sand-600 transition-colors">
              Products
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-sand-600 transition-colors font-medium">
              Documentation
            </Link>
            <Link href="/#community" className="text-gray-700 hover:text-sand-600 transition-colors">
              Community
            </Link>
            <a
              href="https://github.com/tuanchris/dune-weaver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-sand-600 transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link href="/" className="text-sm text-sand-600 hover:text-sand-700 font-medium">
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
