import React from 'react';
import Image from '../images/image.jpg';

const Section = ({ title, image, text, reverse }) => (
  <section className="mb-8 sm:mb-16">
    <div className={`flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <img src={image} alt={title} className="w-full md:w-1/2 h-40 sm:h-64 object-cover rounded-lg" />
      <p className="flex-1 text-sm sm:text-base">{text}</p>
    </div>
  </section>
);

const About = () => {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-16 text-center">About Yorakeys</h1>
      <Section
        title="Our History"
        image={Image}
        text="Yorakeys was founded in 2024 with the dream of creating unique and immersive gaming experiences. Starting from scratch, the journey began with a vision: to push the boundaries of what is possible in the world of gaming. From humble beginnings, Yorakeys is committed to delivering high-quality games that captivate and inspire players around the globe."
      />
      <Section
        title="Our Vision"
        image={Image}
        text="At Yorakeys, our vision is to become a leading innovator in the gaming industry. We strive to create games that not only entertain but also inspire and challenge players. We believe in the power of storytelling and immersive gameplay to create experiences that are both memorable and meaningful. Our goal is to develop games that push the limits of creativity and technology, bringing new and exciting experiences to gamers everywhere."
        reverse
      />
      <Section
        title="Our Mission"
        image={Image}
        text="Our mission is to turn imaginary dreams into reality through innovative and engaging games. We are dedicated to creating high-quality games that are not only fun to play but also offer a unique and enriching experience. By combining cutting-edge technology with creative storytelling, we aim to craft games that resonate with players on a deeper level. At Yorakeys, we believe in the power of games to bring people together and create lasting memories."
      />
    </div>
  );
};

export default About;
