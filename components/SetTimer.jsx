import '../css/styles.css';

const SetTimer = ({ changeView, setTimer }) => {
    const [minutes, setMinutes] = useState(0);
  
    const startTimer = () => {
      const timer = new EasyTimer();
      timer.start({ countdown: true, startValues: { minutes: minutes } });
      setTimer(timer);
      changeView('AnalogueTimer');
    };
  
    return (
      <div className="set-timer">
        <input 
          type="number" 
          value={minutes} 
          onChange={(e) => setMinutes(e.target.value)} 
        />
        <button onClick={startTimer}>Start Timer</button>
      </div>
    );
  };
  
  export default SetTimer;
  