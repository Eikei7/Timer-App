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
          timer={timer}
          setStartValues={setStartValues}
        />
      )}
      {view === 'AnalogueTimer' && (
        <AnalogueTimer 
          changeView={changeView} 
          startValues={startValues}
          timer={timer}
        />
      )}
      {view === 'AlarmView' && (
        <AlarmView 
          changeView={changeView}
          timer={timer}
        />
      )}
      {view === 'DigitalTimer' && (
        <DigitalTimer 
          startValues={startValues}
          changeView={changeView}
          timer={timer}
        />
      )}
      {view === 'TextTimer' && (
        <TextTimer 
        minutes={startValues.minutes} 
        seconds={startValues.seconds} 
        timer={timer} 
        changeView={changeView}
      />
      )}
    </div>
  );
};

export default App;
