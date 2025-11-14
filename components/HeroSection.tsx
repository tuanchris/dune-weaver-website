import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Section } from './Section';

// Configuration for hero videos
const HERO_VIDEOS = [
  '/videos/hero/video1.mov',
  '/videos/hero/video2.mov',
  '/videos/hero/video3.mov',
];

const INITIAL_IMAGE = '/images/hero-dune-weaver.jpeg';
const IMAGE_DISPLAY_DURATION = 5000; // 5 seconds
const VIDEO_TRANSITION_DURATION = 1000; // 1 second crossfade

export const HeroSection: React.FC = () => {
  const [showImage, setShowImage] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // After 5 seconds, transition from image to video
    const imageTimer = setTimeout(() => {
      if (isVideoReady) {
        setShowImage(false);
      }
    }, IMAGE_DISPLAY_DURATION);

    return () => clearTimeout(imageTimer);
  }, [isVideoReady]);

  useEffect(() => {
    // Preload and setup first video
    if (videoRefs.current[0]) {
      videoRefs.current[0].load();

      const handleCanPlay = () => {
        setIsVideoReady(true);
      };

      videoRefs.current[0].addEventListener('canplay', handleCanPlay);

      return () => {
        if (videoRefs.current[0]) {
          videoRefs.current[0].removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []);

  const handleVideoEnd = () => {
    // Cycle to next video
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % HERO_VIDEOS.length);
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image - shown for first 5 seconds */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={INITIAL_IMAGE}
          alt="Dune Weaver kinetic sand art"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Background Videos - cycle after image */}
      {HERO_VIDEOS.map((videoSrc, index) => {
        // Determine video type from file extension
        const videoType = videoSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4';

        return (
          <video
            key={videoSrc}
            ref={(el) => (videoRefs.current[index] = el)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              !showImage && index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay={index === currentVideoIndex && !showImage}
            muted
            playsInline
            onEnded={handleVideoEnd}
            preload={index === 0 ? 'auto' : 'metadata'}
          >
            <source src={videoSrc} type={videoType} />
          </video>
        );
      })}

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
