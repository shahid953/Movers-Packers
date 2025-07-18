import React from 'react';
import { Search, Facebook, Instagram, Twitter, Package } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Logo - Center */}
          <div className="flex items-center space-x-2 mx-8">
            {/* <div className="bg-yellow-400 p-2 rounded-lg">
              <Package className="h-8 w-8 text-white" />
            </div> */}
            <div className="bg-white-400 p- 2 rounded-lg">
               <img src = "/photo/logo.jpg" width="40" height="40"/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mamta Packers</h1>
              <p className="text-sm text-gray-600">& Movers</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;