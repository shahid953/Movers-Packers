import React from 'react';
import { Calculator, Package, CheckSquare, Home, Baby, Leaf, Building, Truck } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    { name: 'Moving Cost Calculator', icon: Calculator },
    { name: 'Packing Calculator', icon: Package },
    { name: 'Moving Checklist', icon: CheckSquare }
  ];

  const tips = [
    { name: 'Pre-Move Tips', icon: Home },
    { name: 'Moving with Kids', icon: Baby },
    { name: 'Plant Moving Tips', icon: Leaf },
    { name: 'Office Relocation Tips', icon: Building },
    { name: 'Unloading Tips', icon: Truck }
  ];

  const guides = [
    'What to Pack in Your Essentials Box?',
    'What to Do on Moving Day?',
    'Essential Checklist for a New Home'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Useful Tools & <span className="text-yellow-600">Tips</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to make your move smooth and organized
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculators */}
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Calculators</h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <tool.icon className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700 font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tips</h3>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <tip.icon className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700 font-medium">{tip.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Helpful Guides */}
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Helpful Guides</h3>
            <div className="space-y-3">
              {guides.map((guide, index) => (
                <div key={index} className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-gray-700 font-medium">{guide}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;