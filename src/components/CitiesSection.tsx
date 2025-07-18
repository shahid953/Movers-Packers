import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const CitiesSection = () => {
  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad',
    'Kolkata', 'Chennai', 'Pune', 'Ahmedabad'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Start Your Move Across <span className="text-yellow-600">India</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your city and get connected with verified packers and movers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                  <span className="text-lg font-semibold text-gray-900">{city}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-2 bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
            <span>See All Cities</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;