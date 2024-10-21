import React from 'react';
import useTimer from 'easytimer-react-hook';

const TextTimer = () => {
  // Användning av useTimer-hooken
  const [timer, isTargetAchieved] = useTimer({
    countdown: true, // Sätter timern som en nedräkning
    startValues: { minutes: 1 }, // Startvärde på 10 minuter
    target: { minutes: 0 }, // Stoppvärde på 0 minuter (nedräkning till noll)
    precision: 'seconds', // Uppdateras varje sekund
    updateWhenTargetAchieved: true // Uppdatera när målet nås
  });

  // Starta timern (kan även styras via en knapp om du föredrar det)
  timer.start({
    countdown: true,
    startValues: { minutes: 10 }
  });

  return (
    <div>
      <h1>Timer: {timer.getTimeValues().toString()}</h1>
      {isTargetAchieved && <p>Tiden är slut!</p>}
    </div>
  );
};

export default TextTimer;

  