import React, { useState } from 'react';
import Timer from 'easytimer.js';
import LoadingScreen from '../components/LoadingScreen';
import TextTimer from '../components/TextTimer';
import AlarmView from '../components/AlarmView';
import AnalogueTimer from '../components/AnalogueTimer';
import SetTimer from '../components/SetTimer';

const App = () => {
  const [view, setView] = useState('Loading');
  const [timer, setTimer] = useState(new Timer());

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div className="app-container">
      <LoadingScreen 
        changeView={changeView} 
        isActive={view === 'Loading'} 
      />
      <SetTimer 
        changeView={changeView} 
        setTimer={setTimer} 
        isActive={view === 'SetTimer'} 
      />
      <AnalogueTimer 
        changeView={changeView} 
        timer={timer} 
        isActive={view === 'AnalogueTimer'} 
      />
      <AlarmView 
        changeView={changeView} 
        isActive={view === 'AlarmView'} 
      />
      <TextTimer 
        changeView={changeView} 
        timer={timer} 
        isActive={view === 'TextTimer'} 
      />
    </div>
  );
};

export default App;
