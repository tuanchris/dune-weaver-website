import React from 'react';
import { Button } from './Button';
import { Section } from './Section';

export const HeroSection: React.FC = () => {
  return (
    <Section background="sand" className="pt-20 md:pt-32">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Dune Weaver
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 md:mb-12">
          Build mesmerizing kinetic sand art.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#products" variant="primary">
            Explore Builds
          </Button>
          <Button href="https://discord.com/invite/YZ8PTezVHt" variant="secondary">
            Join Our Community
          </Button>
        </div>
      </div>
    </Section>
  );
};
