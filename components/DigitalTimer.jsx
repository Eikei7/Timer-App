import React, { useEffect, useState } from 'react';

const DigitalTimer = ({ startValues, changeView, timer }) => {
  const [timeValues, setTimeValues] = useState(timer.getTimeValues());

  useEffect(() => {
    if (!timer.isRunning()) {
      console.log('Startar timern med:', startValues.minutes, 'minuter');
      timer.start({
        countdown: true,
        startValues: startValues,
      });
    }

    const updateTime = () => {
      console.log('Tid uppdaterad:', timer.getTimeValues());
      setTimeValues(timer.getTimeValues());
    };

    timer.addEventListener('secondsUpdated', updateTime);

    timer.addEventListener('targetAchieved', () => {
      console.log('Tiden är slut!');
      changeView('AlarmView');
    });

    return () => {
      timer.removeEventListener('secondsUpdated', updateTime);
    };
  }, [startValues, timer, changeView]);

  const abortTimer = () => {
    timer.stop();
    console.log('Timern stoppad');
    changeView('SetTimer', { startValues: { minutes: 0, seconds: 0 } });
  }
  const formattedSeconds = String(timeValues.seconds).padStart(2, '0');

  return (
    <div className="digital-timer">
      <h1 className="digital-text">{timeValues.minutes} : {formattedSeconds}</h1>
      {timer.isTargetAchieved && <p>Time's up!</p>}
      
      <button onClick={abortTimer} className="abort-btn">
        ABORT TIMER
      </button>
    </div>
  );
};

export default DigitalTimer;
