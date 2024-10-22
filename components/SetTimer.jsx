import React, { useState } from 'react';
import useTimer from 'easytimer-react-hook';

const SetTimer = ({ changeView, setTimer, isActive }) => {
  const [minutes, setMinutes] = useState(0);
  const [intervals, setIntervals] = useState(true);
  const [breaks, setBreaks] = useState(true);

  // Användning av useTimer-hooken
  const [timer] = useTimer({
    countdown: true, // Nedräkning
    startValues: { minutes: minutes }, // Startvärde
    precision: 'seconds' // Uppdateras varje sekund
  });

  const increaseMinutes = () => {
    setMinutes(minutes + 1);
  };

  const decreaseMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    }
  };

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
      <div className="timer-setting">
        <button onClick={decreaseMinutes} className="arrow-btn">&lt;</button>
        <span className="timer-value">{minutes} min</span>
        <button onClick={increaseMinutes} className="arrow-btn">&gt;</button>
      </div>

      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={intervals}
            onChange={() => setIntervals(!intervals)}
          />
          Intervals
        </label>
        <label>
          <input
            type="checkbox"
            checked={breaks}
            onChange={() => setBreaks(!breaks)}
          />
          5 min break / interval
        </label>
      </div>

      <button onClick={startTimer} className="start-btn">Start Timer</button>
    </div>
  );
};

export default SetTimer;
