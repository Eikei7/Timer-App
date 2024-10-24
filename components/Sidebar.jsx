import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ changeView, hideLogo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Logotypen som alltid är synlig om 'hideLogo' inte är sant */}
      {!hideLogo && (
        <div className="logo" onClick={toggleMenu}>
          <img src="./img/timer-100.png" alt="Logo" />
        </div>
      )}

      {/* Sidomenyn, animerad med Framer Motion */}
      <motion.div 
        className="sidebar"
        initial={{ x: '-100%', opacity: 0 }} // Startläge: utanför skärmen och osynlig
        animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }} // När öppen: x = 0 och tonas in
        transition={{ type: 'tween', duration: 0.5 }} // Tona in och glida in under 0.5s
      >
        <ul>
          <li onClick={() => { changeView('AnalogueTimer'); toggleMenu(); }}>ANALOGUE TIMER</li>
          <li onClick={() => { changeView('TextTimer'); toggleMenu(); }}>TEXT TIMER</li>
          <li onClick={() => { changeView('DigitalTimer'); toggleMenu(); }}>DIGITAL TIMER</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
