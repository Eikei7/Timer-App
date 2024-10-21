const LoadingScreen = ({ changeView }) => {
    return (
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img 
          src="/logo.png" 
          alt="Logo"
          whileHover={{ scale: 1.2 }}
          onClick={() => changeView('SetTimer')}
        />
        <p>Din slogan här</p>
      </motion.div>
    );
  };
  
  export default LoadingScreen;
  