import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are the charges for shifting in India?',
      answer: 'Charges vary based on distance, volume of goods, and services required. We provide free quotes for accurate pricing.'
    },
    {
      question: 'How do I book a moving service?',
      answer: 'You can book through our website by filling the form, calling us, or through our mobile app. Our team will guide you through the process.'
    },
    {
      question: 'Are my items insured during transit?',
      answer: 'Yes, we provide comprehensive insurance coverage for all your belongings during transit for your peace of mind.'
    },
    {
      question: 'Do you offer international relocation?',
      answer: 'Yes, we provide international moving services with proper documentation and customs clearance assistance.'
    },
    {
      question: 'Can I reschedule my move?',
      answer: 'Yes, you can reschedule your move with prior notice. Additional charges may apply based on the timing.'
    },
    {
      question: 'How are quotes calculated?',
      answer: 'Quotes are calculated based on volume of goods, distance, packing requirements, and additional services needed.'
    },
    {
      question: 'What is a pre-move survey?',
      answer: 'A pre-move survey is a detailed assessment of your belongings to provide accurate cost estimates and planning.'
    },
    {
      question: 'Can I track my shipment?',
      answer: 'Yes, we provide real-time tracking of your shipment through our website and mobile app.'
    },
    {
      question: 'What documents do I need?',
      answer: 'You need identity proof, address proof, and inventory list. We help you with all required documentation.'
    },
    {
      question: 'What are the working hours?',
      answer: 'We are available from 7:00 AM to 9:00 PM, Monday to Sunday for customer support and services.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-yellow-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our moving services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-yellow-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-yellow-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-600 text-white px-8 py-4 rounded-xl inline-block">
            <h3 className="text-xl font-bold mb-2">We Can Solve Your Moving Problems</h3>
            <p className="text-yellow-100">— With Comfort!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;