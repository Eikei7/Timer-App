import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EasyTimer from 'easytimer.js';
import LoadingScreen from './LoadingScreen';
import SetTimer from './SetTimer';
import AnalogueTimer from './AnalogueTimer';
import AlarmView from './AlarmView';
import TextTimer from './TextTimer';

const App = () => {
  const [view, setView] = useState('Loading');
  const [timer, setTimer] = useState(new EasyTimer());

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div className="app-container">
      {view === 'Loading' && <LoadingScreen changeView={changeView} />}
      {view === 'SetTimer' && <SetTimer changeView={changeView} setTimer={setTimer} />}
      {view === 'AnalogueTimer' && <AnalogueTimer changeView={changeView} timer={timer} />}
      {view === 'AlarmView' && <AlarmView changeView={changeView} />}
      {view === 'TextTimer' && <TextTimer changeView={changeView} timer={timer} />}
    </div>
  );
};

export default App;
