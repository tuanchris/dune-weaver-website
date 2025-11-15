import React from 'react';
import { Section } from './Section';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Printability First',
    description: 'If it could be 3D printed, it should be. ',
    icon: '🖨️',
  },
  {
    title: 'Truly Open Source',
    description: 'No cloud dependencies. No subscription fees. No planned obsolescence.',
    icon: '🔓',
  },
  {
    title: 'Living Room Ready',
    description: 'Pass the living room test with whisper-quiet operation and beautiful design. ',
    icon: '🎨',
  },
  {
    title: 'Affordable to Build',
    description: 'Build your own for a fraction of the cost of commercial alternatives',
    icon: '💰',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <Section id="features" background="sand">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
          Built on Principles
        </h2>
        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
          Designed with freedom and accessibility in mind
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-theme-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-theme-border-light"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-theme-text-primary mb-3">
              {feature.title}
            </h3>
            <p className="text-theme-text-secondary leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
