import React from 'react';

// Configuration for hero video - easily configurable
// You can change this to any video path in /public/videos/
const ABOUT_HERO_VIDEO = '/videos/about/video1.MOV';

export const AboutHeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={ABOUT_HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
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
              Open-source kinetic sand tables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
