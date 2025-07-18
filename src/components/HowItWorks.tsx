import React from 'react';
import { FileText, DollarSign, Calendar, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Share Your Relocation Details',
      description: 'Submit your requirements via our simple online form.',
      number: '1'
    },
    {
      icon: DollarSign,
      title: 'Get 3 Free Moving Quotes',
      description: 'Receive free quotes from top-rated packers and movers.',
      number: '2'
    },
    {
      icon: Calendar,
      title: 'Schedule a Pre-Move Survey',
      description: 'Accurate cost estimates are provided after a detailed assessment.',
      number: '3'
    },
    {
      icon: CheckCircle,
      title: 'Compare & Hire',
      description: 'Evaluate quotes and choose the best service provider for your needs.',
      number: '4'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-yellow-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes moving simple and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-yellow-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;