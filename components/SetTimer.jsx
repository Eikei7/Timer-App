import React, { useState } from 'react';

const SetTimer = ({ changeView, timer, setStartValues }) => {
  const [minutes, setMinutes] = useState(0);

  const increaseMinutes = () => {
    setMinutes(minutes + 1);
  };

  const decreaseMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    }
  };

  const startTimer = () => {
    if (minutes === 0) {
      alert("Please set a timer greater than 0 minutes");
      return;
    }

    // timer.reset();
    // setStartValues({ 0 : minutes });
    timer.start({
      countdown: true,
      startValues: { minutes } // Skicka endast minuter
    });

    setStartValues({ minutes });
    console.log("Startvärden skickade:", { minutes });
    changeView('AnalogueTimer', { startValues: { minutes } });
  };

  return (
    <div className="set-timer">
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
