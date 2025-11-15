import React from 'react';
import { Section } from './Section';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-6">
          About Dune Weaver
        </h2>
        <p className="text-lg text-theme-text-secondary leading-relaxed mb-4">
          Dune Weaver is an open-source kinetic sand table that creates mesmerizing patterns in sand using precise motion control.  Whether you're a maker, artist, or just love beautiful mechanical motion, Dune Weaver offers multiple builds
          to suit your needs.
        </p>
      </div>
    </Section>
  );
};
