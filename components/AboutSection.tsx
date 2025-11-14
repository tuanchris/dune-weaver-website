import React from 'react';
import { Section } from './Section';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sand-50 mb-6">
          About Dune Weaver
        </h2>
        <p className="text-lg text-sand-200 leading-relaxed mb-4">
          Dune Weaver is an open-source kinetic sand table that creates mesmerizing patterns in sand using precise robotic control.
          Watch as your table draws intricate designs, from simple spirals to complex mathematical patterns.
        </p>
        <p className="text-lg text-sand-200 leading-relaxed">
          Whether you're a maker, artist, or just love beautiful mechanical motion, Dune Weaver offers multiple builds
          to suit your needs—from compact desktop versions to full-featured professional models.
        </p>
      </div>
    </Section>
  );
};
