import React from 'react';
import Mac1 from '../images/MAC-1.jpeg'; // Import the image

const RobotRescue = () => {
  return (
    <div className="p-8 mt-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 flex-shrink-0 mb-6 md:mb-0">
          <img
            src={Mac1}
            alt="Robot Rescue Game"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-end">
          <h1 className="text-4xl font-bold mb-16 text-center">Robot Rescue</h1>
          <p className="text-lg text-justify mb-4">
            In "Robot Rescue," players embark on an exciting adventure where a brave robot must save its creator's baby from perilous situations. The game combines thrilling action with heartfelt moments as the robot navigates through challenging environments and overcomes obstacles.
          </p>
        </div>
      </div>
      <div className="mt-6 mb-8">
        <p className="text-lg mb-4 text-justify">
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
        </p>
        <p className="text-lg mb-4 text-justify">
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
        </p>
      </div>
      <div className="mt-6">
        <div className="relative pb-[56.25%] mb-6">
          <iframe
            className="absolute inset-0 w-full mx-auto h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ViYqd6x5o6Y"
            title="Robot Rescue Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-6 mb-8">
        <p className="text-lg mb-4 text-justify">
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
          Featuring captivating gameplay and stunning visuals, "Robot Rescue" offers a unique blend of adventure and emotional storytelling. Join the robot on its quest to protect and rescue in this unforgettable gaming experience.
        </p>
      </div>
    </div>
  );
};

export default RobotRescue;
