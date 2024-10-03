import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MacTheMachine from '../images/mac-the-machine.jpg';
import CarrotBuds from '../images/carrotbuds.jpg';
import VegOne from '../images/veg-1.jpeg';
import VegTwo from '../images/veg-2.jpg';
import VegThree from '../images/veg-3.jpg';

const Games = () => {
  const games = [
    { title: 'Mac the Machine', image: MacTheMachine, description: 'A thrilling adventure...', color: 'orange', status: 'published', router: 'mac-the-machine' },
    { title: 'Carrot Buds', image: CarrotBuds, description: 'An exciting journey...', color: 'blue', status: 'development', router: '' },
    { title: 'Mac the Machine', image: MacTheMachine, description: 'A thrilling adventure...', color: 'orange', status: 'published', router: 'mac-the-machine' },
    { title: 'Carrot Buds', image: VegOne, description: 'An exciting journey...', color: 'blue', status: 'development', router: '' },
    { title: 'Mac the Machine', image: VegTwo, description: 'A thrilling adventure...', color: 'orange', status: 'published', router: 'mac-the-machine' },
    { title: 'Carrot Buds', image: VegThree, description: 'An exciting journey...', color: 'blue', status: 'development', router: '' }
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-8 text-center">Our Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 justify-center">
        {games.map((game, index) => (
          <div key={index} className="p-4 rounded-lg">
            <h3 className="text-xl sm:text-2xl mt-4">{game.title}</h3>
            <div className="mt-2">
              <img src={game.image} alt={game.title} className="w-full h-40 sm:h-64 object-cover rounded-lg" />
            </div>
            <p className="mt-2 mb-4 text-sm sm:text-base">{game.description}</p>
            {game.status === 'published' ? (
              <a href={`/games/${game.router}`} className="text-blue-500 hover:underline text-sm sm:text-base">Learn More</a>
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

export default Games;
