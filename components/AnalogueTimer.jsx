import { useEffect, useState } from 'react';
import useTimer from 'easytimer-react-hook';

const AnalogueTimer = ({ changeView, startValues }) => {
  // Användning av useTimer-hooken för nedräkning
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    precision: 'seconds'
  });

  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    console.log('Startvärden:', startValues);
    // Starta timern med startvärden från props
    if (startValues && startValues.minutes > 0) {
      console.log('Startar timern med:', startValues.minutes, 'minuter');
      timer.start({
        countdown: true,
        startValues: startValues
      });
    }

    // Lyssna på uppdateringar av sekunder och uppdatera state
    const updateSeconds = () => {
      setTime(timer.getTimeValues());
    };

    timer.addEventListener('secondsUpdated', updateSeconds);
    console.log('Tid uppdaterad:', timer.getTimeValues());
    // Hantera när målet nås (nedräkningen är slut)
    timer.addEventListener('targetAchieved', () => {
      changeView('AlarmView'); // Byt vy till AlarmView när tiden är ute
    });

    // Cleanup-funktion för att ta bort event listeners när komponenten avmonteras
    return () => {
      timer.removeEventListener('secondsUpdated', updateSeconds);
      timer.stop(); // Stoppa timern när komponenten avmonteras
    };
  }, [startValues, timer, changeView]);

  // Beräkna vinkeln för visarna baserat på tiden
  const minuteDegrees = (time.minutes + time.seconds / 60) * 6; // 360° / 60 = 6° per minut
  const secondDegrees = time.seconds * 6; // 360° / 60 = 6° per sekund

  return (
    <div className="clock">
      <div className="clock-face">
      <img src='../img/clockface.png' width="400"/>
        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
      </div>
      <button className="abort-btn" onClick={() => changeView('SetTimer')}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogueTimer;
