import { useEffect, useState } from 'react';
import useTimer from 'easytimer-react-hook';

const AnalogueTimer = ({ changeView, startValues }) => {
  // Använd useTimer-hooken
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    startValues: startValues, // Tar emot startvärden från props
    precision: 'seconds', // Uppdateras varje sekund
  });

  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    // Lyssna på uppdateringar av sekunder
    timer.addEventListener('secondsUpdated', () => {
      setTime(timer.getTimeValues());
    });

    // Lyssna när målet är uppnått (tiden har gått ut)
    if (isTargetAchieved) {
      changeView('AlarmView');
    }

    // Cleanup-funktion för att stoppa timern när komponenten avmonteras
    return () => {
      timer.stop();
    };
  }, [timer, isTargetAchieved, changeView]);

  return (
    <div className="clock">
      {/* Här kan du animera visarna med Framer Motion eller CSS */}
      <div className="clock-face">
        <div className="hand minute-hand" style={{ transform: `rotate(${time.minutes * 6}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${time.seconds * 6}deg)` }}></div>
      </div>
      <button onClick={() => changeView('SetTimer')}>Cancel</button>
    </div>
  );
};

export default AnalogueTimer;
