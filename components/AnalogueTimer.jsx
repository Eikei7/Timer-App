import { useEffect, useState } from 'react';

const AnalogueTimer = ({ changeView, startValues, timer }) => {
  const [time, setTime] = useState(timer.getTimeValues());

  useEffect(() => {
    // Starta timern med startvärden från props, om minuter är större än 0
    if (startValues && startValues.minutes > 0) {
      console.log("Startvärden mottagna i AnalogueTimer:", startValues);
      timer.start({
        countdown: true,
        startValues: startValues,
      });
    }

    const updateTime = () => {
      const timeValues = timer.getTimeValues();
      setTime(timeValues);

      // Logga minuter och sekunder när tiden uppdateras
      console.log(`Tid uppdaterad: ${timeValues.minutes} minuter och ${timeValues.seconds} sekunder`);
    };

    timer.addEventListener('secondsUpdated', updateTime);

    // Hantera när tiden är slut
    timer.addEventListener('targetAchieved', () => {
      console.log('Tiden är slut!');
      changeView('AlarmView');
    });

    // Rensa event listeners när komponenten avmonteras
    return () => {
      timer.removeEventListener('secondsUpdated', updateTime);
    };
  }, [startValues, timer, changeView]);

  const abortTimer = () => {
    timer.stop();
    console.log('Timern stoppad');
    changeView('SetTimer', { startValues: { minutes: 0, seconds: 0 } });
  }
  // Beräkna vinkeln för visarna baserat på tiden
  const minuteDegrees = (time.minutes + time.seconds / 60) * 6;
  const secondDegrees = time.seconds * 6;

  return (
    <div className="clock">
      <div className="clock-face">
        <img src='../img/clockface.png' width="403" alt="Clock Face"/>
        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
      </div>
      <button className="abort-btn" onClick={abortTimer}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogueTimer;
