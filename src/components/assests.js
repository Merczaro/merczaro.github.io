import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import farmingWorld1 from '../images/farming-world-1.jpg';
import farmingWorld3 from '../images/farming-world-3.jpg';
import centuryShip from '../images/century-ship.jpg';

const Assests = () => {
  const assests = [
    { 
      title: 'Farming Land', 
      image: farmingWorld1, 
      description: 'A high-quality 3D farming environment with rich details. Perfect for open-world and simulation games.', 
      color: 'orange', 
      status: 'published', 
      router: 'farming-land' 
    },
    { 
      title: '17th Century Ship', 
      image: centuryShip, 
      description: 'A meticulously crafted 17th-century ship model. Ideal for historical, naval, and adventure games.', 
      color: 'blue', 
      status: 'published', 
      router: '17th-century-ship' 
    },
    { 
      title: 'Sci-fi Farming Land', 
      image: farmingWorld3, 
      description: 'A futuristic farming world with immersive sci-fi elements. Designed for next-gen game environments', 
      color: 'black', 
      status: 'development', 
      router: '' 
    }
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-8 text-center">Our 3D Assests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 justify-center">
        {assests.map((assest, index) => (
          <div key={index} className="p-4 rounded-lg">
            <h3 className="text-xl sm:text-2xl mt-4">{assest.title}</h3>
            <div className="mt-2">
              <img src={assest.image} alt={assest.title} className="w-full h-40 sm:h-64 object-cover rounded-lg" />
            </div>
            <p className="mt-2 mb-4 text-sm sm:text-base">{assest.description}</p>
            {assest.status === 'published' ? (
              <Link to={`/store/${assest.router}`} className="text-blue-500 hover:underline text-sm sm:text-base">
                Know More
              </Link>
            ) : (
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <FontAwesomeIcon icon={faSpinner} spin /> Under Development..
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assests;
