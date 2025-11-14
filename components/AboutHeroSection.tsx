import React from 'react';

// Configuration for hero image - easily configurable
// You can change this to any image path in /public/images/
// Available options: hero-dune-weaver.jpeg, dune-weaver-pro.jpg, dune-weaver-og.jpg, etc.
const ABOUT_HERO_IMAGE = '/images/dune-weaver-pro.jpg';

export const AboutHeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ABOUT_HERO_IMAGE}
          alt="About Dune Weaver"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="text-left max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              About Dune Weaver
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg">
              Creating mesmerizing art through technology and sand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
