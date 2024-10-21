import React, { useState } from 'react';
import EasyTimer from 'easytimer.js';
import LoadingScreen from '../components/LoadingScreen';
import TextTimer from '../components/TextTimer';
import AlarmView from '../components/AlarmView';
import AnalogueTimer from '../components/AnalogueTimer';
import SetTimer from '../components/SetTimer';

const App = () => {
  const [view, setView] = useState('Loading');
  const [timer, setTimer] = useState(new EasyTimer());

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div className="app-container">
      <AnalogueTimer />
    </div>
  );
};

export default App;
