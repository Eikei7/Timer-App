import React from 'react';

// Funktion som omvandlar siffror till engelska ord
const numberToWords = (num) => {
  const words = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
    'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty',
    'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 'forty',
    'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven', 'forty-eight', 'forty-nine', 'fifty',
    'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine'
  ];

  return words[num];
};

// Funktion som omvandlar tid till engelska ord
const convertTimeToWords = (minutes, seconds) => {
  let timeInWords = "";

  // Hantera minuter
  if (minutes > 0) {
    if (minutes === 1) {
      timeInWords += "one minute";
    } else {
      timeInWords += `${numberToWords(minutes)} minutes`;
    }
  }

  // Hantera sekunder
  if (seconds > 0) {
    if (minutes > 0) {
      timeInWords += " and ";
    }
    if (seconds === 1) {
      timeInWords += "one second";
    } else {
      timeInWords += `${numberToWords(seconds)} seconds`;
    }
  }

  // Om både minuter och sekunder är 0
  if (minutes === 0 && seconds === 0) {
    timeInWords = "no time left";
  }

  return timeInWords;
};

const TextTimer = ({ minutes, seconds, timer, changeView }) => {
  const timeInWords = convertTimeToWords(minutes, seconds);

  // Funktion för att avbryta och återställa timern
  const abortTimer = () => {
    timer.stop();
    console.log('Timern stoppad');
    changeView('SetTimer', { startValues: { minutes: 0, seconds: 0 } }); // Återgå till SetTimer-vyn
  }

  return (
    <div className="time-in-words">
      <h2>{timeInWords}</h2>
      <button onClick={abortTimer} className="abort-btn">
        ABORT TIMER
      </button>
    </div>
  );
};

export default TextTimer;
