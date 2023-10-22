import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../assets/background1.jpg';
import LOGO from '../assets/हण.png';
import Spline from '@splinetool/react-spline';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100vh',
    position: 'relative',
    backgroundSize: 'repeat',
  };

  return (
    <motion.div
      className="w-full bg-black bg-cover bg-center bg-fixed h-[100%]"
      style={backgroundStyle}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <Link to="/"> {/* Link to the main screen */}
        <img
          className="w-[15%] h-auto ml-6 pt-2 fixed align-top"
          src={LOGO}
          alt=""
          style={{ cursor: 'pointer' }} {/* Add cursor pointer style to indicate it's clickable */}
        />
      </Link>
      <section className="w-full h-screen flex justify-center items-end">
        <Spline
          className="h-[40%]"
          scene="https://prod.spline.design/2FUDusKCgJEjcqrq/scene.splinecode"
        />
        <Link
          className="flex justify-center item-end mr-10 hover:bg-white hover:text-black mb-20 rounded-rs bg-transparent border-2 text-white p-2 w-[12%] hover: ease-in duration-300"
          to="/explore"
        >
          Explore Eclipses
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;
