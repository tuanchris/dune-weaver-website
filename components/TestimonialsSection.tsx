import React, { useState, useRef, useEffect } from 'react';
import { Section } from './Section';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Likandoo',
    role: 'Maker',
    content: 'Everything worked flawlessly. The Table looks even better than expected and the patterns are so Beautiful  😄',
    initials: 'LD',
    avatarColor: 'bg-avatar-green',
  },
  {
    name: 'RealGoose',
    role: 'Maker',
    content: 'Sharing an update on this DW Mini. Started running 3/20/25 and has been running 24/7 on my desk at work. That\'s 3,864 hours and counting!',
    initials: 'RG',
    avatarColor: 'bg-avatar-blue',
  },
  {
    name: 'm8tec',
    role: 'Maker',
    content: "Thanks for creating this project, making it freely available for everyone to rebuild, maintaining it and even giving support here. It is not self-evident that you are doing that. It's a very fascinating machine and it made a lot of fun to work with you at it.",
    initials: 'MT',
    avatarColor: 'bg-avatar-purple',
  },
  {
    name: 'MaxVonEvil',
    role: 'Maker',
    content: 'So, a colleague of mine have been building our duneweaver tables in tandem for the last couple of weeks when time allowed. It was a super fun project where we both learned a lot. ',
    initials: 'MV',
    avatarColor: 'bg-avatar-amber',
  },
  {
    name: 'Aaron N',
    role: 'Maker',
    content: 'Thank you for the awesome work on this project! The Duneweaver software is working great and my wife has even allowed me to put it in the living room! ',
    initials: 'AN',
    avatarColor: 'bg-avatar-pink',
  },
  {
    name: 'M0neyM',
    role: 'Maker',
    content: 'Finished Pro, so appreciative of this project and all the help through discord. ',
    initials: 'MM',
    avatarColor: 'bg-avatar-indigo',
  },
  {
    name: 'Loc',
    role: 'Maker',
    content: 'Just built a Dune Weaver Mini! Overall, very happy with it -- Thanks Tuan for sharing this awesome project with us!',
    initials: 'L',
    avatarColor: 'bg-avatar-green',
  },
  {
    name: 'Chiumanfu',
    role: 'Maker',
    content: "I have give you credit for a very well thought out design... one of the best DIY designs I've come across!",
    initials: 'C',
    avatarColor: 'bg-avatar-blue',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    scrollToIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const handleIndicatorClick = (index: number) => {
    scrollToIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0;
          scrollToIndex(newIndex);
          return newIndex;
        });
      }, 3000); // Change testimonial every 3 seconds
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Resume auto-play after 10 seconds of inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const resumeTimeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);

      return () => clearTimeout(resumeTimeout);
    }
  }, [isAutoPlaying, currentIndex]);

  return (
    <Section id="testimonials" background="sand">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
          What Makers Are Saying
        </h2>
        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
          Hear from the makers who have brought Dune Weaver into their lives.
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-theme-surface rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-theme-focus"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6 text-sand-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-theme-surface rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-theme-focus"
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6 text-sand-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Testimonials Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] snap-center"
            >
              <div className="bg-theme-surface rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-theme-text-inverse font-bold text-lg mr-4 flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-theme-text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-theme-text-tertiary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-theme-text-secondary leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-theme-focus w-8'
                  : 'bg-theme-border-strong hover:bg-theme-text-muted'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
