import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faReddit, faYoutube, faSteam } from '@fortawesome/free-brands-svg-icons';

const QuickLink = ({ href, text }) => (
  <li>
    <a href={href} className="text-white transition-transform duration-300 ease-in-out hover:scale-160 z-10">
      {text}
    </a>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="relative hover:text-gray-400">
    <FontAwesomeIcon icon={icon} className="w-6 h-6 transition-transform transform hover:scale-150 z-10" />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 lg:mb-0 w-full lg:w-auto text-center lg:text-left">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <QuickLink href="/about" text="About Us" />
            <QuickLink href="/games" text="Our Games" />
            <QuickLink href="/contact" text="Contact" />
          </ul>
        </div>

        <div className="w-full lg:w-auto text-center lg:text-right mt-4">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center lg:justify-end space-x-4">
            <SocialLink href="https://x.com/yorakeysStudios" icon={faTwitter} />
            <SocialLink href="https://www.instagram.com/yorakeysstudios/" icon={faInstagram} />
            <SocialLink href="https://reddit.com" icon={faReddit} />
            <SocialLink href="https://www.youtube.com/@yorakeys_studios" icon={faYoutube} />
            <SocialLink href="https://store.steampowered.com" icon={faSteam} />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Yorakeys Studios. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
