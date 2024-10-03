import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navIcon from '../images/nav-icon.svg';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/games', label: 'Games' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10 flex justify-between items-center shadow-lg">
      <Link to="/home" className="flex items-center w-full md:w-auto">
        <img src={logo} alt="Yorakeys Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-2xl font-bold">Yorakeys</h1>
      </Link>
      <div className="hidden md:flex flex-1 justify-end space-x-4">
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-3 py-2 rounded-md text-sm transition-colors duration-300 ${
              location.pathname === path
                ? 'bg-gray-700 text-gray-300'
                : 'text-white hover:bg-gray-400 hover:text-black'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <img src={navIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-gray-100 absolute top-full left-0 w-full mt-1 p-2 shadow-lg">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 text-center rounded-md text-sm transition-colors duration-300 ${
                location.pathname === path
                  ? 'bg-gray-700 text-gray-300'
                  : 'text-white hover:bg-gray-700 hover:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
