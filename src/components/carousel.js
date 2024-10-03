import React, { useState, useEffect } from 'react';
import MacTheMachine from '../images/mac-the-machine.jpg';
import CarrotBuds from '../images/carrotbuds.jpg';
import VegThree from '../images/veg-3.jpg';
import { ReactComponent as ArrowOpen } from '../images/arrow-open.svg';

const images = [
  { src: MacTheMachine, content: 'Mac the Machine', url1: 'https://example.com/mac-the-machine', url2: 'https://example.com/mac-the-machine', btn1: 'Watch Trailer', btn2: 'Buy Now' },
  { src: CarrotBuds, content: 'Carrot Buds', url1: 'https://example.com/carrot-buds', url2: 'https://example.com/carrot-buds', btn1: 'Watch Trailer', btn2: 'Pre Order Now' },
  { src: MacTheMachine, content: 'Mac the Machine', url1: 'https://example.com/mac-the-machine', url2: 'https://example.com/mac-the-machine', btn1: 'Watch Trailer', btn2: 'Buy Now' },
  { src: VegThree, content: 'Carrot Buds', url1: 'https://example.com/carrot-buds', url2: 'https://example.com/carrot-buds', btn1: 'Watch Trailer', btn2: 'Pre Order Now' }
];

const CarouselButton = ({ url, text }) => (
  <a href={url} className="bg-black text-white py-2 px-4 w-48 text-center rounded-3xl shadow-md border border-transparent hover:border-white hover:bg-opacity-70 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg" target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const NavigationButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-3 rounded-full shadow-md hover:bg-gray-700 hover:bg-opacity-20 transition-colors duration-300"
    style={{ [direction === 'Previous' ? 'left' : 'right']: '1rem' }}
  >
    <ArrowOpen className={`w-3 h-3 ${direction === 'Previous' ? 'rotate-180' : ''}`} />
  </button>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 7500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-6xl h-96 mx-auto overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            <img src={image.src} alt={`Slide ${index}`} className="w-full h-96 object-cover rounded-lg" />
            {/* Overlapping Buttons */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-10 uppercase">
              <CarouselButton url={image.url1} text={image.btn1} />
              <CarouselButton url={image.url2} text={image.btn2} />
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <NavigationButton direction="Previous" onClick={goToPrevious} />
      <NavigationButton direction="Next" onClick={goToNext} />
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full border border-white transition-colors duration-300 ${currentIndex === index ? 'bg-black' : 'bg-gray-500 bg-opacity-80'}`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
