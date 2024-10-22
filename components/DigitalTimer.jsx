import React, { useEffect, useState } from 'react';
import useTimer from 'easytimer-react-hook';

const DigitalTimer = ({ startValues }) => {
  // Användning av useTimer-hooken
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    precision: 'seconds',
    updateWhenTargetAchieved: true
  });

  const [timeValues, setTimeValues] = useState(timer.getTimeValues());

  useEffect(() => {
    console.log('Startvärden:', startValues); // Logga startvärden för att se om de tas emot

    if (startValues && startValues.minutes > 0) {
      console.log('Startar timern med:', startValues.minutes, 'minuter'); // Logga när timern startar
      timer.start({
        countdown: true,
        startValues: startValues
      });
    }

    // Lyssna på uppdateringar av sekunder och uppdatera state
    timer.addEventListener('secondsUpdated', () => {
      console.log('Tid uppdaterad:', timer.getTimeValues()); // Logga uppdaterad tid
      setTimeValues(timer.getTimeValues());
    });

    // Logga när målet uppnås
    timer.addEventListener('targetAchieved', () => {
      console.log('Tiden är slut!');
    });

    return () => {
      console.log('Timer stoppas'); // Logga när timern stoppas
      timer.stop(); // Stoppa timern när komponenten avmonteras
    };
  }, [startValues, timer]);

  return (
    <div className="text-timer">
      <h1>Timer: {timeValues.minutes}m {timeValues.seconds}s</h1>
      {isTargetAchieved && <p>Tiden är slut!</p>}
    </div>
  );
};

export default DigitalTimer;
