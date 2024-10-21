import '../css/styles.css';

const AlarmView = ({ changeView }) => {
    return (
      <div className="alarm-view">
        <h1>Time's up!</h1>
        <button onClick={() => changeView('SetTimer')}>Set new timer</button>
      </div>
    );
  };
  
  export default AlarmView;
  