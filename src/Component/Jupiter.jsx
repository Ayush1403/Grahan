import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import Background from '../assets/background1.jpg';
import LOGO from '../assets/हण.png';
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion'
import Transition from '../Transition';
function Jupiter() {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundSize: "repeat",
      };
    return (
      <motion.div className="w-full bg-black bg-cover bg-center bg-fixed h-[100%]" style={backgroundStyle}
      initial={{x: 0}}
      animate={{x: 1}}
      exit={{x: 0}}
      
      >
        <div>
        <Link to="/*"> {/* Link to the main screen */}
        <img
          className="w-[15%] h-auto ml-6 pt-2 fixed align-top"
          src={LOGO}
          alt=""
          style={{ cursor: 'pointer' }} 
        />
      </Link>
        </div>
        <section className='w-full h-screen flex justify-center items-end'>
        {/* <motion.div
    animate={{ x: 100 }}
    transition={{ delay: 3 }} */}
          <Spline className='h-[40%] nb-20' scene="https://prod.spline.design/WcajfEf8d0lfDnO7/scene.splinecode" />
       
        </section>
      </motion.div>
    );

}
export default Jupiter;


