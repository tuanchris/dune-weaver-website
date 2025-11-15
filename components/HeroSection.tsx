import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Section } from './Section';
import { getAssetPath } from '@/lib/assetPath';

// Configuration for hero videos
const HERO_VIDEOS = [
  getAssetPath('/videos/hero/video1.mp4'),
  getAssetPath('/videos/hero/video2.mp4'),
  getAssetPath('/videos/hero/video3.mov'),
  getAssetPath('/videos/hero/video4.mp4'),
  getAssetPath('/videos/hero/video5.mp4'),
];

const INITIAL_IMAGE = getAssetPath('/images/hero-dune-weaver.jpeg');
const VIDEO_TRANSITION_DURATION = 1000; // 1 second crossfade

export const HeroSection: React.FC = () => {
  const [showImage, setShowImage] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Debug: log state changes
  useEffect(() => {
    console.log('State update - showImage:', showImage, 'isVideoReady:', isVideoReady, 'currentVideoIndex:', currentVideoIndex);
  }, [showImage, isVideoReady, currentVideoIndex]);

  useEffect(() => {
    // Transition from image to video as soon as video is ready
    if (isVideoReady) {
      console.log('Video ready, transitioning from image to video');
      setShowImage(false);
    }
  }, [isVideoReady]);

  useEffect(() => {
    // Preload and setup first video
    if (videoRefs.current[0]) {
      console.log('Setting up first video:', HERO_VIDEOS[0]);
      const firstVideo = videoRefs.current[0];

      const handleCanPlay = () => {
        console.log('First video can play');
        setIsVideoReady(true);
      };

      const handleError = (e: Event) => {
        console.error('Video load error:', e);
        const videoEl = e.target as HTMLVideoElement;
        if (videoEl.error) {
          console.error('Video error code:', videoEl.error.code);
          console.error('Video error message:', videoEl.error.message);
        }
      };

      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded');
      };

      // Log initial state
      console.log('Video initial readyState:', firstVideo.readyState);
      console.log('Video src:', firstVideo.currentSrc || 'not set');

      // Check if video is already ready (in case events fired before listeners were attached)
      if (firstVideo.readyState >= 3) {
        console.log('Video already ready (readyState:', firstVideo.readyState, ')');
        setIsVideoReady(true);
      }

      firstVideo.addEventListener('canplay', handleCanPlay);
      firstVideo.addEventListener('error', handleError);
      firstVideo.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Trigger load if not already loading
      if (firstVideo.readyState === 0) {
        console.log('Calling load() on video');
        firstVideo.load();
      } else {
        console.log('Video already loading or loaded, readyState:', firstVideo.readyState);
      }

      return () => {
        firstVideo.removeEventListener('canplay', handleCanPlay);
        firstVideo.removeEventListener('error', handleError);
        firstVideo.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    } else {
      console.log('First video ref not available');
    }
  }, []);

  useEffect(() => {
    // Play current video when showImage becomes false or when currentVideoIndex changes
    console.log('Play effect triggered - showImage:', showImage, 'currentVideoIndex:', currentVideoIndex);

    if (!showImage && videoRefs.current[currentVideoIndex]) {
      const currentVideo = videoRefs.current[currentVideoIndex];
      console.log('Playing video:', HERO_VIDEOS[currentVideoIndex]);

      // Reset and play the current video
      currentVideo.currentTime = 0;
      currentVideo.play().catch((error) => {
        console.error('Error playing video:', error);
      });

      // Pause other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentVideoIndex) {
          video.pause();
        }
      });
    }
  }, [showImage, currentVideoIndex]);

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
      {HERO_VIDEOS.map((videoSrc, index) => (
        <video
          key={videoSrc}
          ref={(el) => { videoRefs.current[index] = el; }}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            !showImage && index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          onEnded={handleVideoEnd}
          preload={index === 0 ? 'auto' : 'metadata'}
        />
      ))}

      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-theme-overlay"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="text-left max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-theme-text-inverse mb-4 drop-shadow-lg">
              Dune Weaver
            </h1>
            <p className="text-lg md:text-xl text-theme-text-inverse mb-6 md:mb-8 drop-shadow-lg">
              Build a mesmerizing kinetic sand machine.
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
