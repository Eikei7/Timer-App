import '../css/styles.css';
import { motion } from 'framer-motion';

const LoadingScreen = ({ changeView }) => {
    return (
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img 
          src="./img/timer-1000.png" 
          alt="Logo"
          whileHover={{ scale: 1.2 }}
          onClick={() => changeView('SetTimer')}
        />
        <h2 className="appTitle">TimeDeck</h2>
        <p className="appText">For all your timing needs</p>
      </motion.div>
    );
  };
  
  export default LoadingScreen;
  