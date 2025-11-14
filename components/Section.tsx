import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'sand';
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  background = 'white',
}) => {
  const backgroundStyles = {
    white: 'bg-theme-background-primary',
    gray: 'bg-theme-background-secondary',
    sand: 'bg-theme-background-tertiary',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
