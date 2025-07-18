import React from 'react';
import Navigation from './Navigation'; // your existing nav
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';
import img from './img.jpg';
const App = () => {
  return (
    <>
      <Navigation />

      {/* Photos Section */}
      <section id="photos" className="py-8 px-4 bg-gray-50">
        <h2 className="text-xl font-bold text-center text-yellow-600 mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src="pic1" width="40px" height="40px" className="w-full h-auto rounded shadow" />
          
          {/* Add more images as needed */}
        </div>
      </section>

      
    </>
  );
};

export default App;
