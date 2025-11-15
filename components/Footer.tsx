import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-footer-bg text-theme-footer-text py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-theme-text-inverse text-lg mb-1">Dune Weaver</p>
            <p className="text-sm">Build a mesmerizing kinetic sand machine.</p>
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
