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
    return <span className="text-gray-700 text-sm md:text-base">{value}</span>;
  };

  return (
    <div className="mt-16 md:mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Feature Comparison
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compare features across all Dune Weaver models to find the perfect fit.
        </p>
      </div>

      {/* Desktop View - Table */}
      <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-orange-50 to-orange-100 border-b-2 border-orange-200">
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                Feature
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                Pro
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                Mini Pro
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                OG
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                Mini
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b border-gray-100 hover:bg-orange-50 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {feature.name}
                </td>
                <td className="px-6 py-4 text-center">{renderCell(feature.pro)}</td>
                <td className="px-6 py-4 text-center">{renderCell(feature.miniPro)}</td>
                <td className="px-6 py-4 text-center">{renderCell(feature.og)}</td>
                <td className="px-6 py-4 text-center">{renderCell(feature.mini)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet View - Cards */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Dune Weaver Pro', key: 'pro' as const, badge: '💎 Patreon', badgeColor: 'bg-orange-500' },
          { name: 'Dune Weaver Mini Pro', key: 'miniPro' as const, badge: '💎 Patreon', badgeColor: 'bg-orange-500' },
          { name: 'Dune Weaver OG', key: 'og' as const, badge: 'MakerWorld', badgeColor: 'bg-blue-500' },
          { name: 'Dune Weaver Mini', key: 'mini' as const, badge: 'MakerWorld', badgeColor: 'bg-blue-500' },
        ].map((product) => (
          <div key={product.key} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${product.badgeColor}`}>
                {product.badge}
              </span>
            </div>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm font-semibold text-gray-700">{feature.name}</span>
                  <div className="text-right">
                    {renderCell(feature[product.key])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
