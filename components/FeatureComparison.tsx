import React from 'react';

interface Feature {
  name: string;
  pro: string | boolean;
  miniPro: string | boolean;
  og: string | boolean;
  mini: string | boolean;
}

const features: Feature[] = [
  {
    name: 'Size (diameter)',
    pro: '75cm - 29.5in',
    miniPro: '25.4cm - 10in',
    og: '42cm - 16.5in',
    mini: '25.4cm - 10in',
  },
  {
    name: 'Motor',
    pro: 'Nema 17',
    miniPro: 'Nema 17/28BYJ-48',
    og: 'Nema 17',
    mini: '28BYJ-48',
  },
  {
    name: 'Microcontroller',
    pro: 'DLC32',
    miniPro: 'DLC32/ESP32',
    og: 'DLC32',
    mini: 'ESP32',
  },
  {
    name: 'Noise level',
    pro: 'Quiet',
    miniPro: 'Quiet/Moderate',
    og: 'Quiet',
    mini: 'Moderate',
  },
  {
    name: 'Pattern Resolution',
    pro: 'High',
    miniPro: 'Medium',
    og: 'Medium-High',
    mini: 'Medium',
  },
  {
    name: 'Price',
    pro: 'Paid',
    miniPro: 'Paid',
    og: 'Free',
    mini: 'Free',
  },
  {
    name: 'Wiring complexity',
    pro: 'Low',
    miniPro: 'Low/Medium',
    og: 'Low',
    mini: 'Medium',
  },
  {
    name: 'Documentation',
    pro: 'Extensive',
    miniPro: 'Extensive',
    og: 'Basic',
    mini: 'Basic',
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export const FeatureComparison: React.FC = () => {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return (
        <div className={value ? 'text-green-600' : 'text-red-400'}>
          {value ? <CheckIcon /> : <XIcon />}
        </div>
      );
    }
    return <span className="text-theme-text-secondary text-sm md:text-base">{value}</span>;
  };

  return (
    <div className="mt-16 md:mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
          Feature Comparison
        </h2>
        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
          Compare features across all Dune Weaver models to find the perfect fit.
        </p>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto rounded-xl border border-theme-border-light shadow-lg">
        <table className="w-full bg-theme-surface">
          <thead>
            <tr className="border border-theme-border-light">
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-bold text-theme-text-secondary uppercase tracking-wider whitespace-nowrap sticky left-0 bg-theme-surface z-10">
                Feature
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-theme-text-secondary uppercase tracking-wider whitespace-nowrap">
                Pro
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-theme-text-secondary uppercase tracking-wider whitespace-nowrap">
                Mini Pro
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-theme-text-secondary uppercase tracking-wider whitespace-nowrap">
                OG
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-bold text-theme-text-secondary uppercase tracking-wider whitespace-nowrap">
                Mini
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-sand-800' : 'bg-sand-900'
                } border border-theme-border-light transition-colors`}
              >
                <td className="px-4 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm font-semibold text-theme-text-primary whitespace-nowrap sticky left-0 bg-inherit z-10">
                  {feature.name}
                </td>
                <td className="px-4 lg:px-6 py-3 lg:py-4 text-center whitespace-nowrap">{renderCell(feature.pro)}</td>
                <td className="px-4 lg:px-6 py-3 lg:py-4 text-center whitespace-nowrap">{renderCell(feature.miniPro)}</td>
                <td className="px-4 lg:px-6 py-3 lg:py-4 text-center whitespace-nowrap">{renderCell(feature.og)}</td>
                <td className="px-4 lg:px-6 py-3 lg:py-4 text-center whitespace-nowrap">{renderCell(feature.mini)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
