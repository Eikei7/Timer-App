import '../css/styles.css';

const TextTimer = ({ timer }) => {
    const [time, setTime] = useState(timer.getTimeValues());
  
    useEffect(() => {
      timer.addEventListener('secondsUpdated', () => {
        setTime(timer.getTimeValues());
      });
  
      return () => {
        timer.stop();
      };
    }, [timer]);
  
    return (
      <div className="text-timer">
        <h1>{`${time.minutes} minuter och ${time.seconds} sekunder`}</h1>
      </div>
    );
  };
  
  export default TextTimer;
  