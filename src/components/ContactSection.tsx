import React from 'react';
import { Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-yellow-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any queries or assistance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-2xl font-bold text-yellow-600 mb-2">+91 7903772516</p>
            <p className="text-2xl font-bold text-yellow-600 mb-2">+91 9512794571</p>
            <p className="text-2xl font-bold text-yellow-600 mb-2">+91 9142225833</p>
            <p className="text-gray-600">24/7 Customer Support</p>
          </div>

          {/* Working Hours */}
          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
            <p className="text-lg font-semibold text-gray-900 mb-2">7:00 AM - 9:00 PM</p>
            <p className="text-gray-600">Monday to Sunday</p>
          </div>

          {/* Social Media */}
          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;