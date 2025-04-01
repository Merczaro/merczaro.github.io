import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Mac1 from '../images/MAC-1.jpeg';
import { Link } from 'react-router-dom';

const Games = () => {
  const games = [
    { 
      title: 'Mac the Machine', 
      image: Mac1, 
      description: 'Mac the Machine is a third-person action-adventure game focused on a mission to save the creator and his baby, where you will transform yourself to overcome the challenges ahead. Take on the role of Mac, explore stunning landscapes, solve puzzles, and uncover your true purpose in a heartfelt story.', 
      color: 'orange', 
      status: 'development', 
      router: 'mac-the-machine'
    }
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-8 text-center">Our Games</h1>
      <div className={`grid ${games.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4 sm:gap-8 justify-center`}>
        {games.map((game, index) => (
          <div key={index} className={`p-4 rounded-lg ${games.length === 1 ? 'mx-auto w-3/4' : ''}`}>
            <h3 className="text-xl sm:text-2xl mt-4">{game.title}</h3>
            <div className="mt-2">
              <img src={game.image} alt={game.title} className="w-full h-40 sm:h-64 object-cover rounded-lg" />
            </div>
            <p className="mt-2 mb-4 text-sm sm:text-base">{game.description}</p>
            {
              game.status === 'published' ? (
              <Link to={`/games/${game.router}`} className="text-blue-500 hover:underline text-sm sm:text-base">
                Learn More
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

export default Games;
