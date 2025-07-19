import React from 'react';
import { Package, MapPin, DollarSign, Megaphone, CreditCard, Shield, FileText, Star, HelpCircle, Map, Phone, Car, Bike, Home, Building, Package2, Warehouse, Globe, Bug, BookOpen, Trophy, BarChart, Newspaper, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* For Businesses */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">For Businesses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><MapPin className="h-4 w-4" /><span>List Your Business</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><DollarSign className="h-4 w-4" /><span>Buy Leads</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Megaphone className="h-4 w-4" /><span>Advertise With Us</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><CreditCard className="h-4 w-4" /><span>Pay Now</span></a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Company Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Package className="h-4 w-4" /><span>About Us</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Shield className="h-4 w-4" /><span>Privacy Policy</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><FileText className="h-4 w-4" /><span>Terms and Conditions</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Star className="h-4 w-4" /><span>Customer Reviews</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><HelpCircle className="h-4 w-4" /><span>FAQ</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Map className="h-4 w-4" /><span>Sitemap</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Phone className="h-4 w-4" /><span>Contact Us</span></a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Car className="h-4 w-4" /><span>Car Transport</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Bike className="h-4 w-4" /><span>Bike Transport</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Home className="h-4 w-4" /><span>Local Shifting</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Building className="h-4 w-4" /><span>Office Relocation</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Package2 className="h-4 w-4" /><span>Luggage Transport</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Warehouse className="h-4 w-4" /><span>Warehousing & Storage</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Home className="h-4 w-4" /><span>Home Shifting</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Globe className="h-4 w-4" /><span>International Moving</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Bug className="h-4 w-4" /><span>Pest Control</span></a></li>
            </ul>
          </div>

          {/* Media & Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Media & Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><BookOpen className="h-4 w-4" /><span>Blog</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Trophy className="h-4 w-4" /><span>Success Stories</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><BarChart className="h-4 w-4" /><span>Infographics</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Newspaper className="h-4 w-4" /><span>News</span></a></li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"><Gamepad2 className="h-4 w-4" /><span>Web Stories</span></a></li>
            </ul>
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-bold mb-6 text-yellow-400">Global Presence</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Globe className="h-4 w-4" />
              <span>Movers in USA</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Globe className="h-4 w-4" />
              <span>Removals in UK</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Globe className="h-4 w-4" />
              <span>Packers & Movers in UAE</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Globe className="h-4 w-4" />
              <span>Moving Companies in China</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2010 - 2025 <span className="text-yellow-400 font-semibold">Mamta Packers and Movers</span> — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;