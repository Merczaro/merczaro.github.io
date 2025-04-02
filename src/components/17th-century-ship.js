import React from 'react';
import Carousel from "./carousel";
import { shipSlides, shipImages } from "./constants";

const CenturyShip = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Carousel & Description Section */}
      <div className='flex flex-col sm:flex-row items-center gap-6'>
        <div className="w-full sm:w-1/2">
          <Carousel slides={shipSlides} />
        </div>
        <div className='w-full sm:w-1/2 p-4'>
          <h2 className='text-2xl font-bold text-green-700'>Century Ship</h2>
          <p className='mt-3 text-gray-400'>
            Step aboard the magnificent <span className='font-bold'>17th Century Ship</span>, 
            a beautifully crafted Unity asset designed for historical exploration and adventure. 
            Whether you're creating an open-world naval experience, a historical simulation, 
            or an immersive pirate voyage, this asset delivers an unparalleled experience.
          </p>
          <ul className='mt-3 list-disc list-inside text-gray-700'>
            <li>Highly detailed 3D model of an authentic 17th-century sailing ship</li>
            <li>Fully explorable interior including the captain’s quarters, cargo hold, and crew cabins</li>
            <li>Realistic sailing mechanics with animated sails and rigging</li>
            <li>Dynamic lighting and ocean effects for a truly immersive voyage</li>
            <li>Period-accurate props, including navigational tools, cannons, and barrels</li>
          </ul>
          <p className='mt-3 text-gray-400'>
            Embark on a journey through time with <span className='font-bold'>Century Ship</span>—where history meets exploration!
          </p>
        </div>
      </div>
      
      {/* Image Gallery & Additional Info Section */}
      <div className='flex flex-col sm:flex-row gap-6 mt-6'>
        <div className="grid grid-cols-2 gap-4 w-full sm:w-1/2">
          {shipImages.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="w-full rounded-lg shadow-md" />
            </div>
          ))}
        </div>
        <div className='w-full sm:w-1/2 p-4'>
          <h3 className='text-xl font-semibold text-green-700'>Step Aboard the Century Ship</h3>
          <p className='mt-2 text-gray-400'>
            Crafted for both game developers and history enthusiasts, this asset delivers a meticulously detailed,
            historically authentic setting aboard a majestic 17th-century vessel. Players can explore every inch of the ship,
            from its intricately carved woodwork to its fully furnished cabins, immersing themselves in the rich atmosphere of the era.
          </p>
          <p className='mt-3 text-gray-400'>
            Whether you want to create a thrilling pirate adventure or a serene maritime exploration, 
            <span className='font-bold'>Century Ship</span> is the perfect foundation for your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenturyShip;