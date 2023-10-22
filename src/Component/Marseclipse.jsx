import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import Background from '../assets/background1.jpg';
import LOGO from '../assets/हण.png';
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion'

function Marseclipse() {
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
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      
      >
        <div>
          <img className="w-[15%] h-auto ml-6 pt-2 fixed align-top" src={LOGO} alt="" />
        </div>
        <section className='w-full h-screen flex justify-center items-end'>
        {/* <motion.div
    animate={{ x: 100 }}
    transition={{ delay: 3 }} */}
          <Spline className='h-[40%] mr-190' scene="https://prod.spline.design/MTDoa9epV9kNRPv6/scene.splinecode" />
        <Link className='flex items-end justify-end hover:border-2 text-white mr-12 mb-6' to={"/Marseclipse"}>Now let's See Mars🌕 </Link>
        </section>
      </motion.div>
    );

}
export default Marseclipse;


