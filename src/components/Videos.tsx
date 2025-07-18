import React from 'react';
import Navigation from './Navigation'; // your existing nav
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import video1 from './assets/video1.mp4';
import video2 from './assets/video2.mp4';

const App = () => {
  return (
    <>
      <Navigation />

      

      {/* Videos Section */}
      <section id="videos" className="py-8 px-4 bg-white">
        <h2 className="text-xl font-bold text-center text-yellow-600 mb-6">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <video controls className="w-full rounded shadow">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="w-full rounded shadow">
            <source src={video2} type="video/mp4" />
          </video>
          {/* Add more videos as needed */}
        </div>
      </section>

      
    </>
  );
};

export default App;
