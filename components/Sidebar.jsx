import React, { useState } from 'react';

const Sidebar = ({ changeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="logo" onClick={toggleMenu}>
        <img src="./img/timer-100.png" alt="Logo" />
      </div>

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
