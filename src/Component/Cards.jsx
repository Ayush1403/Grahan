import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Earth from '../assets/card1.png';
import Mars from '../assets/card2.png';
import Jupiter from '../assets/card3.png';
import Background from '../assets/background1.jpg';
import Transition from '../Transition';

const cardData = [
  {
    title: 'Earth 3D Eclipse',
    description: 'Earth has lunar eclipses when its shadow falls on the Moon and solar eclipses when the Moon comes between Earth and the Sun, creating captivating celestial events.',
    path: '/Solareclipse',
    Image: Earth,
  },
  {
    title: 'Mars Eclipse',
    description: "A Martian eclipse unveils the Red Planet's topography as its moon passes before the sun, casting a captivating shadow over the Martian surface",
    path: '/Mars',
    Image: Mars,
  },
  {
    title: 'Jupiter',
    description: 'Jupiter doesn`t experience solar or lunar eclipses due to its size and lack of a solid surface, but it does exhibit mutual events as its moons pass in front of or behind each other, observable from Earth with a telescope.',
    path: '/Jupiter',
    Image: Jupiter,
  },
];

const Cards = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100vh',
    position: 'relative',
    backgroundSize: 'cover', // Use 'cover' to ensure the background image isn't split
  };

  const handleHover = (index) => {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach((card, i) => {
      if (i === index) {
        card.classList.add('hovered');
      } else {
        card.classList.add('reduced');
      }
    });
  };

  const handleMouseLeave = () => {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach((card) => {
      card.classList.remove('hovered', 'reduced');
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-contain bg-cover text-white" style={backgroundStyle}>
        <h1 className='text-7xl font-bold mt-14' style={{ textShadow: '2px 2px 4px white' }}>Select what you want to see in 3D.</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-xl items-center p-9 justify-center h-screen w-full text-white">
        {cardData.map((data, index) => (
          <Link key={index} to={data.path} className="group" onMouseEnter={() => handleHover(index)} onMouseLeave={handleMouseLeave}>
            <div
              className="relative bg-opacity-25 shadow-2xl rounded-rs w-full aspect-w-1 aspect-h-1 bg-blue-950 p-6 shadow-lg flex flex-col overflow-hidden transition-transform duration-600 transform scale-100 group-hover:scale-105 card"
            >
              <img className='rounded-rs'
                src={data.Image}
                alt={data.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <h2 className="mt-9 font-extrabold">{data.title}</h2>
              <div className="tooltip opacity-0 w-full p-6 h-[40%] bg-white text-black p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-300 text-center mt-10 items-center justify-center">
                {data.description}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Cards;
