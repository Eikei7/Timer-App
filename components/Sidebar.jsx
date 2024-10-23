import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ changeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Logotypen som alltid är synlig */}
      <div className="logo" onClick={toggleMenu}>
        <img src="/path-to-logo.png" alt="Logo" />
      </div>

      {/* Sidomenyn */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => { changeView('AnalogueTimer'); toggleMenu(); }}>Analogue Timer</li>
          <li onClick={() => { changeView('TextTimer'); toggleMenu(); }}>Text Timer</li>
          <li onClick={() => { changeView('DigitalTimer'); toggleMenu(); }}>Digital Timer</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
