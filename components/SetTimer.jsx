import React, { useState } from 'react';
import useTimer from 'easytimer-react-hook';

const SetTimer = ({ changeView, setTimer, isActive }) => {
  const [minutes, setMinutes] = useState(0);
  const [intervals, setIntervals] = useState(true);
  const [breaks, setBreaks] = useState(true);

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
    console.log('Startvärden skickas till TextTimer:', minutes); // Logga startvärden innan de skickas
    timer.start({
      countdown: true,
      startValues: { minutes: minutes }
    });
    setTimer(timer);
    changeView('DigitalTimer', { startValues: { minutes } }); // Skickar minuter som prop till DigitalTimer
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
