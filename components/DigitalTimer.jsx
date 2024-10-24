import React, { useEffect, useState } from 'react';
import useTimer from 'easytimer-react-hook';

const DigitalTimer = ({ startValues, changeView, timer }) => {
  const [timeValues, setTimeValues] = useState(timer.getTimeValues());

  useEffect(() => {
    // Kolla om timern redan körs, om inte starta den
    if (!timer.isRunning()) {
      console.log('Startar timern med:', startValues.minutes, 'minuter');
      timer.start({
        countdown: true,
        startValues: startValues,
      });
    }

    // Lyssna på uppdateringar av sekunder och uppdatera state
    const updateTime = () => {
      console.log('Tid uppdaterad:', timer.getTimeValues());
      setTimeValues(timer.getTimeValues());
    };

    timer.addEventListener('secondsUpdated', updateTime);

    // Hantera när tiden är slut
    timer.addEventListener('targetAchieved', () => {
      console.log('Tiden är slut!');
      changeView('AlarmView');
    });

    return () => {
      timer.removeEventListener('secondsUpdated', updateTime);
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
      {timer.isTargetAchieved && <p>Time's up!</p>}
      
      <button onClick={abortTimer} className="abort-btn">
        ABORT TIMER
      </button>
    </div>
  );
};

export default DigitalTimer;
