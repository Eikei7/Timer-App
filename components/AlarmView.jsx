import React from 'react';

const AlarmView = ({ changeView }) => {
  return (
    <div className="alarm-view">
      <div className="alarm-view">
      <div className="circle-container">
        <div className="circle circle4"></div>
        <div className="circle circle3"></div>
        <div className="circle circle2"></div>
        <div className="circle circle1"></div>
      </div>

      <img src="../img/alarm-bell.png" alt="Alarm clock" />
      <h1>Time's up!</h1>
      <button className="newtimer-btn" onClick={() => changeView('SetTimer')}>
        SET NEW TIMER
      </button>
    </div>
  </div>
  );
};

export default AlarmView;
