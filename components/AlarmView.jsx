const AlarmView = ({ changeView }) => {
    return (
      <div className="alarm-view">
        <h1>Tiden är ute!</h1>
        <button onClick={() => changeView('SetTimer')}>Gå tillbaka</button>
      </div>
    );
  };
  
  export default AlarmView;
  