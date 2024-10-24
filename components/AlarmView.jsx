const AlarmView = ({ changeView }) => {
    return (
      <div className="alarm-view">
        <img src="../img/alarm-bell.png" alt="Alarm clock" />
        <h1>Time's up!</h1>
        <button className="newtimer-btn" onClick={() => changeView('SetTimer')}>SET NEW TIMER</button>
      </div>
    );
  };
  
  export default AlarmView;
