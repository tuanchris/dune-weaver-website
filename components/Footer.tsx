import React from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Dune Weaver Pro', href: 'https://www.patreon.com/posts/dune-weaver-pro-137394378', external: true },
      { name: 'Dune Weaver Mini Pro', href: 'https://www.patreon.com/posts/dune-weaver-mini-141674449', external: true },
      { name: 'Dune Weaver OG', href: 'https://makerworld.com/en/models/841332-dune-weaver-a-3d-printed-kinetic-sand-table#profileId-787553', external: true },
      { name: 'Dune Weaver Mini', href: 'https://makerworld.com/en/models/896314-mini-dune-weaver-not-your-typical-marble-run#profileId-854412', external: true },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'About', href: '/about' },
      { name: 'Troubleshooting', href: '/docs/troubleshooting' },
    ],
    community: [
      { name: 'Discord', href: 'https://discord.com/invite/YZ8PTezVHt', external: true },
      { name: 'GitHub', href: 'https://github.com/tuanchris/dune-weaver/', external: true },
      { name: 'Patreon', href: 'https://www.patreon.com/cw/duneweaver/shop', external: true },
      { name: 'MakerWorld', href: 'https://makerworld.com/en/@tuanchris', external: true },
    ],
    guides: [
      { name: 'Getting Started', href: '/docs/home' },
      { name: 'Assembly Guides', href: '/docs/dwmp-assembly' },
      { name: 'Installing Firmware', href: '/docs/installing-firmware' },
      { name: 'Wiring Guide', href: '/docs/wiring' },
    ],
  };

  return (
    <footer className="bg-theme-footer-bg text-theme-footer-text py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Site Map Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Products Column */}
          <div>
            <h3 className="font-bold text-theme-text-inverse text-sm uppercase mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-theme-text-inverse transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-theme-text-inverse transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-theme-text-inverse text-sm uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-theme-text-inverse transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="font-bold text-theme-text-inverse text-sm uppercase mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-theme-text-inverse transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-theme-text-inverse transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h3 className="font-bold text-theme-text-inverse text-sm uppercase mb-4">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-theme-text-inverse transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-theme-footer-text/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div
                  className="w-8 h-8 bg-theme-text-inverse flex-shrink-0"
                  style={{
                    maskImage: `url(${getAssetPath('/images/logo.svg')})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: `url(${getAssetPath('/images/logo.svg')})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                  }}
                />
                <p className="font-bold text-theme-text-inverse text-2xl">Dune Weaver</p>
              </div>
              <p className="text-sm">Build a mesmerizing kinetic sand machine.</p>
            </div>

            <div className="text-sm text-center md:text-right">
              <p>&copy; {currentYear} Dune Weaver</p>
              <p className="text-xs mt-1">Open source project</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
