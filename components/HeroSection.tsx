import React from 'react';
import { Button } from './Button';
import { Section } from './Section';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-dune-weaver.jpeg"
        alt="Dune Weaver kinetic sand art"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="text-left max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Dune Weaver
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 md:mb-8 drop-shadow-lg">
              Build mesmerizing kinetic sand art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#products" variant="primary">
                Explore Dune Weaver
              </Button>
              <Button href="#community" variant="secondary">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
