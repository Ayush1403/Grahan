// App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Home} from './Component';
import {Cards} from './Component';
import {Solareclipse }from './Component';
import {Mars} from './Component';
import {Jupiter} from './Component';
import Transition from './Transition';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path="/*" element={<Home />} />
      <Route path="/explore" element={<Cards />} />
      <Route path="/Solareclipse" element={<Solareclipse />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
    </Routes>
    </AnimatePresence>
  );
};
export default App;
