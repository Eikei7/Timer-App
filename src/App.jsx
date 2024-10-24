import React, { useState } from 'react';
import Timer from 'easytimer.js';
import LoadingScreen from '../components/LoadingScreen';
import DigitalTimer from '../components/DigitalTimer';
import AlarmView from '../components/AlarmView';
import AnalogueTimer from '../components/AnalogueTimer';
import SetTimer from '../components/SetTimer';
import TextTimer from '../components/TextTimer';
import Sidebar from '../components/Sidebar';
import './App.css';

const App = () => {
  const [view, setView] = useState('Loading');
  const [timer, setTimer] = useState(new Timer());
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
          setTimer={setTimer} 
        />
      )}
      {view === 'AnalogueTimer' && (
        <AnalogueTimer 
          changeView={changeView} 
          startValues={startValues}
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
