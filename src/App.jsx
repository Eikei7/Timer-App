import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import DigitalTimer from '../components/DigitalTimer';
import AlarmView from '../components/AlarmView';
import AnalogueTimer from '../components/AnalogueTimer';
import SetTimer from '../components/SetTimer';
import TextTimer from '../components/TextTimer';
import Sidebar from '../components/Sidebar';
import './App.css';
import useTimer from 'easytimer-react-hook';
import { s } from 'framer-motion/client';

const App = () => {
  const [view, setView] = useState('Loading');
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    precision: 'seconds',
    updateWhenTargetAchieved: true
  });
  const [startValues, setStartValues] = useState({ minutes: 0 });

  const changeView = (newView, data = {}) => {
    setView(newView);
    if (data.startValues) {
      setStartValues(data.startValues);
    }
  };

  return (
    <div className="app-container">
      <Sidebar hideLogo={view === 'AlarmView'} changeView={changeView} />
      {view === 'Loading' && (
        <LoadingScreen 
          changeView={changeView} 
        />
      )}
      {view === 'SetTimer' && (
        <SetTimer 
          changeView={changeView} 
          timer={timer} // Skicka timer som prop istället för setTimer
          setStartValues={setStartValues} // Använd för att spara startvärden
        />
      )}
      {view === 'AnalogueTimer' && (
        <AnalogueTimer 
          changeView={changeView} 
          startValues={startValues}
          timer={timer} // Skicka timer-instansen
        />
      )}
      {view === 'AlarmView' && (
        <AlarmView 
          changeView={changeView} 
        />
      )}
      {view === 'DigitalTimer' && (
        <DigitalTimer 
          startValues={startValues}
          changeView={changeView}
          timer={timer} // Skicka timer-instansen
        />
      )}
      {view === 'TextTimer' && (
        <TextTimer 
          minutes={startValues.minutes} 
          seconds={startValues.seconds} 
        />
      )}
    </div>
  );
};

export default App;
