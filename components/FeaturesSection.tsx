import React from 'react';
import { Section } from './Section';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Truly Open Source',
    description: 'No cloud dependencies. No subscription fees. No planned obsolescence.',
    icon: '🔓',
  },
  {
    title: 'Printability First',
    description: 'If it could be 3D printed, it should be. No relying on specialty hardware like timing belts or linear rails when a clever printed solution works better.',
    icon: '🖨️',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <Section id="features" background="sand">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Built on Principles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Designed with freedom and accessibility in mind
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
