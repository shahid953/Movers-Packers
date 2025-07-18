import React from 'react';
import Navigation from './Navigation'; // your existing nav
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';


const App = () => {
  return (
    <>
      <Navigation />

      {/* Banners Section */}
      <section id="banners" className="py-8 px-4 bg-gray-50">
        <h2 className="text-xl font-bold text-center text-yellow-600 mb-6">Banners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src={banner1} alt="Banner 1" className="w-full h-auto rounded shadow" />
          <img src={banner2} alt="Banner 2" className="w-full h-auto rounded shadow" />
          {/* Add more banners as needed */}
        </div>
      </section>
    </>
  );
};

export default App;
