const AnalogueTimer = ({ changeView, timer }) => {
    const [time, setTime] = useState(timer.getTimeValues());
  
    useEffect(() => {
      timer.addEventListener('secondsUpdated', () => {
        setTime(timer.getTimeValues());
      });
  
      timer.addEventListener('targetAchieved', () => {
        changeView('AlarmView');
      });
  
      return () => {
        timer.stop();
      };
    }, [timer, changeView]);
  
    return (
      <div className="analogue-timer">
        {/* Här kan du animera visarna med Framer Motion eller CSS */}
        <div className="clock-face">
          <div className="hand minute-hand" style={{ transform: `rotate(${time.minutes * 6}deg)` }}></div>
          <div className="hand second-hand" style={{ transform: `rotate(${time.seconds * 6}deg)` }}></div>
        </div>
        <button onClick={() => changeView('SetTimer')}>Avbryt</button>
      </div>
    );
  };
  
  export default AnalogueTimer;
  