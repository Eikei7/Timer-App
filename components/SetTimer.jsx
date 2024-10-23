import React, { useState } from 'react';
import useTimer from 'easytimer-react-hook';

const SetTimer = ({ changeView, setTimer, isActive }) => {
  const [minutes, setMinutes] = useState(0);

  const [timer] = useTimer({
    countdown: true, 
    precision: 'seconds'
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
    // Starta timern
    timer.start({
      countdown: true,
      startValues: { minutes: minutes }
    });

    // Skicka minuterna till TextTimer och byt vy
    setTimer(timer);
    changeView('AnalogueTimer', { startValues: { minutes } }); // Skicka minuter och sekunder (sekunder är 0 när den startar)
  };

  return (
    <div className={`set-timer ${isActive ? 'active' : ''}`}>
      <div className="timer-setting">
        <button onClick={decreaseMinutes} className="arrow-btn">&lt;</button>
        <div className="timer-display">
          <span className="timer-value">{minutes}</span>
          {minutes > 0 && (
            <div className="timer-label">
              {minutes === 1 ? 'minute' : 'minutes'}
            </div>
          )}
        </div>
        <button onClick={increaseMinutes} className="arrow-btn">&gt;</button>
      </div>

      <button onClick={startTimer} className="start-btn">START TIMER</button>
    </div>
  );
};

export default SetTimer;
