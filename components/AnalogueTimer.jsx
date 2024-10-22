import { useEffect, useState } from 'react';
import useTimer from 'easytimer-react-hook';

const AnalogueTimer = ({ changeView, startValues }) => {
  // Använd useTimer-hooken för nedräkning
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    startValues: startValues, // Tar emot startvärden från props
    precision: 'seconds', // Uppdateras varje sekund
  });

  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    // Lyssna på uppdateringar av sekunder
    const updateSeconds = () => {
      setTime(timer.getTimeValues());
    };

    // Registrera eventet för uppdatering av sekunder
    timer.addEventListener('secondsUpdated', updateSeconds);

    // Hantera när målet nås (nedräkningen är slut)
    timer.addEventListener('targetAchieved', () => {
      changeView('AlarmView');
    });

    // Cleanup-funktion för att ta bort event listeners när komponenten avmonteras
    return () => {
      timer.removeEventListener('secondsUpdated', updateSeconds);
      timer.stop();
    };
  }, [timer, changeView]);

  // Beräkna vinkeln för visarna baserat på tiden
  const minuteDegrees = (time.minutes + time.seconds / 60) * 6; // 360°/60 = 6° per minut
  const secondDegrees = time.seconds * 6; // 360°/60 = 6° per sekund

  return (
    <div className="clock">
      {/* Animera visarna med CSS transform baserat på beräknad vinkel */}
      <div className="clock-face">
        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
      </div>
      <button onClick={() => changeView('SetTimer')}>Cancel</button>
    </div>
  );
};

export default AnalogueTimer;
