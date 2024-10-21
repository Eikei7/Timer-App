import React, { useState } from 'react';
import useTimer from 'easytimer-react-hook';

const SetTimer = ({ changeView, setTimer, isActive }) => {
  const [minutes, setMinutes] = useState(0);

  // Användning av useTimer-hooken
  const [timer] = useTimer({
    countdown: true, // Nedräkning
    startValues: { minutes: minutes }, // Startvärde
    precision: 'seconds' // Uppdateras varje sekund
  });

  const startTimer = () => {
    // Starta timern när användaren klickar på knappen
    timer.start({
      countdown: true,
      startValues: { minutes: minutes }
    });
    
    // Sätt timern i övergripande state och byt vy
    setTimer(timer);
    changeView('AnalogueTimer');
  };

  return (
    <div className={`set-timer ${isActive ? 'active' : ''}`}>
      <input 
        type="number" 
        value={minutes} 
        onChange={(e) => setMinutes(e.target.value)} 
        placeholder="Ange minuter"
      />
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
};

export default SetTimer;
