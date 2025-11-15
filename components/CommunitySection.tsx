import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

interface CommunityLink {
  name: string;
  description: string;
  link: string;
  icon: string;
}

const communityLinks: CommunityLink[] = [
  {
    name: 'Discord',
    description: 'Join our community, get help, and share your builds',
    link: 'https://discord.com/invite/YZ8PTezVHt',
    icon: '💬',
  },
  {
    name: 'GitHub',
    description: 'Explore the source code, report issues, and contribute',
    link: 'https://github.com/tuanchris/dune-weaver/',
    icon: '🐙',
  },
  {
    name: 'Patreon',
    description: 'Support the project and get access to premium builds',
    link: 'https://www.patreon.com/cw/duneweaver/shop',
    icon: '💎',
  },
  {
    name: 'MakerWorld',
    description: 'Download free models and see community remixes',
    link: 'https://makerworld.com/en/@tuanchris',
    icon: '🔧',
  },
];

export const CommunitySection: React.FC = () => {
  return (
    <Section id="community" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
          Join the Community
        </h2>
        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
          Connect with other makers, get support, and share your creations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {communityLinks.map((link, index) => (
          <div
            key={index}
            className="bg-theme-background-sand rounded-xl p-6 text-center border border-theme-border-sand hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-4xl mb-3">{link.icon}</div>
            <h3 className="text-xl font-bold text-theme-text-primary mb-2">{link.name}</h3>
            <p className="text-theme-text-secondary mb-4 text-sm">{link.description}</p>
            <Button href={link.link} variant="outline" className="w-full">
              Visit {link.name}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};
