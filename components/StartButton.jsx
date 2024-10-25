import { motion } from 'framer-motion';

const StartButton = ({ startTimer }) => {
  return (
    <motion.button
      onClick={startTimer}
      className="start-btn"
      whileTap={{ scale: 0.9 }} // Gör knappen 10% mindre när den trycks
    >
      START TIMER
    </motion.button>
  );
};

export default StartButton;
