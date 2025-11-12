import React from 'react';
import { Button } from './Button';
import { Section } from './Section';

export const HeroSection: React.FC = () => {
  return (
    <Section background="sand" className="pt-20 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side: Text content */}
        <div className="text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Dune Weaver
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
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

        {/* Right side: Hero image */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/hero-dune-weaver.jpeg"
            alt="Dune Weaver kinetic sand art"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};
