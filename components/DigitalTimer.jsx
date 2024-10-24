import React, { useEffect, useState } from 'react';
import useTimer from 'easytimer-react-hook';

const DigitalTimer = ({ startValues, changeView }) => {
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    precision: 'seconds',
    updateWhenTargetAchieved: true
  });

  const [timeValues, setTimeValues] = useState(timer.getTimeValues());

  useEffect(() => {
    console.log('Startvärden:', startValues);

    if (startValues && startValues.minutes > 0) {
      console.log('Startar timern med:', startValues.minutes, 'minuter');
      timer.start({
        countdown: true,
        startValues: startValues
      });
    }

    timer.addEventListener('secondsUpdated', () => {
      console.log('Tid uppdaterad:', timer.getTimeValues());
      setTimeValues(timer.getTimeValues());
    });

    timer.addEventListener('targetAchieved', () => {
      console.log('Tiden är slut!');
      changeView('AlarmView');
    });

    return () => {
      console.log('Timer stoppas');
      timer.stop();
    };
  }, [startValues, timer, changeView]);

  // Funktion för att avbryta timern och navigera tillbaka till SetTimer
  const abortTimer = () => {
    console.log('Timer avbruten');
    timer.stop();
    changeView('SetTimer');
  };

  // Lägg till nolla framför sekunderna om de är mindre än 10
  const formattedSeconds = String(timeValues.seconds).padStart(2, '0');

  return (
    <div className="digital-timer">
      <h1 className="digital-text">{timeValues.minutes} : {formattedSeconds}</h1>
      {isTargetAchieved && <p>Time's up!</p>}
      
      <button onClick={abortTimer} className="abort-btn">
        ABORT TIMER
      </button>
    </div>
  );
};

export default DigitalTimer;
