import React from 'react';
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
    name: 'Sarah Chen',
    role: 'Maker & Artist',
    content: 'The Dune Weaver has become the centerpiece of my studio. Watching it create intricate patterns is incredibly meditative, and my clients are always mesmerized by it.',
    initials: 'SC',
    avatarColor: 'bg-blue-500',
  },
  {
    name: 'Michael Torres',
    role: 'Hobbyist',
    content: 'Building my own Dune Weaver was one of the most rewarding projects I\'ve done. The documentation is excellent, and the community is incredibly helpful.',
    initials: 'MT',
    avatarColor: 'bg-green-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content: 'I\'ve installed Dune Weavers in several office spaces. They create a calming atmosphere and serve as beautiful conversation pieces that never get old.',
    initials: 'ER',
    avatarColor: 'bg-purple-500',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <Section id="testimonials" background="sand">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-sand-900 mb-4">
          What People Are Saying
        </h2>
        <p className="text-lg text-sand-700 max-w-2xl mx-auto">
          Hear from the makers and enthusiasts who have brought Dune Weaver into their lives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div
                className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0`}
              >
                {testimonial.initials}
              </div>
              <div>
                <h3 className="text-lg font-bold text-sand-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-sand-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sand-800 leading-relaxed italic">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
