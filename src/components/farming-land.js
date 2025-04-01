import React from 'react';
import Carousel from "./carousel";
import { farmSlides, farmImages } from "./constants";

const FarmingLand = () => {
  return (
    <div>
      <div className='flex h-full flex-row items-center p-6'>
        <div className="mt-8 w-1/2">
          <Carousel slides={farmSlides} />
        </div>
        <div className='ml-6 p-4 w-1/2'>
          <h2 className='text-2xl font-bold text-green-700'>Farming Land</h2>
          <p className='mt-3 text-gray-400'>
            Step into the lush, vibrant Land of <span className='font-bold'>Farming Land 3D</span>, 
            a stunningly crafted Unity asset designed for immersive farming simulations. 
            Whether you're creating a casual farm-building game, an open-world farming adventure, 
            or a multiplayer agricultural experience, this asset provides everything you need.
          </p>
          <ul className='mt-3 list-disc list-inside text-gray-700'>
            <li>High-quality 3D models of farming equipment, crops, animals, and landscapes</li>
            <li>Realistic environments with dynamic lighting and weather effects</li>
            <li>Modular design for customizable farms, barns, and fields</li>
            <li>Interactive elements like tractors, irrigation systems, and harvesting mechanics</li>
            <li>Various farm animals including cows, chickens, and sheep</li>
          </ul>
          <p className='mt-3 text-gray-400'>
            Bring your farming vision to life with <span className='font-bold'>Farming Land 3D</span>—where creativity meets agriculture!
          </p>
        </div>
      </div>
      <div className='flex h-full flex-row mt-4 p-6'>
        <div className="grid grid-cols-2 gap-4 w-1/2">
          {farmImages.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="w-full rounded-lg shadow-md" />
            </div>
          ))}
        </div>
        <div className='ml-6 p-4 w-1/2'>
          <h3 className='text-xl font-semibold text-green-700'>Why Choose Farming Land?</h3>
          <p className='mt-2'>
            Designed for game developers, this asset provides a seamless and immersive farming experience. 
            Every detail, from soil textures to barn structures, has been meticulously crafted to ensure realism. 
            The package includes a variety of farm props, tools, and animations to bring your farming simulation to life.
          </p>
          <p className='mt-3'>
            Whether you aim to create a relaxing farming experience or a competitive agricultural challenge, 
            <span className='font-bold'> Farming Land</span> is the perfect asset to power your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmingLand;
