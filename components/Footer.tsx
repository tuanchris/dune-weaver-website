import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-900 text-sand-200 py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-lg mb-1">Dune Weaver</p>
            <p className="text-sm">Open-source kinetic sand art</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="/#products" className="hover:text-white transition-colors">
              Products
            </a>
            <a href="/#community" className="hover:text-white transition-colors">
              Community
            </a>
            <a href="https://github.com/tuanchris/dune-weaver/" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {currentYear} Dune Weaver</p>
            <p className="text-xs mt-1">Open source project</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
