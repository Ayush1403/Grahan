import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import Background from '../assets/background1.jpg';
import LOGO from '../assets/हण.png';
import { Link } from 'react-router-dom';

function Jupitereclipse() {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundSize: "repeat",
    };
    const linkStyle = {
        position: "absolute",
        bottom: "10px", // Adjust as needed
        right: "10px", // Adjust as needed
        textDecoration: "none",
        color: "white",
        border: "2px solid transparent",
        transition: "border 0.3s",
    };

    return (
        <div>
            <img className="w-[15%] h-auto ml-6 pt-2 fixed align-top" src={LOGO} alt="" />
            <div className="w-full h-full flex justify-center items-end relative">
                <Spline className="w-full" scene="https://prod.spline.design/MTDoa9epV9kNRPv6/scene.splinecode" />
                <Link className="flex items-end justify-end hover:border-2 text-white h-auto mr-12 mb-6" to="/Marseclipse" >
                    Now let's See Mars🌕
                </Link>
            </div>
        </div>
    );
}

export default Jupitereclipse;
