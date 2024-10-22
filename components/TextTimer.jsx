import React from 'react';

// Funktion som omvandlar tid till ord
const convertTimeToWords = (minutes, seconds) => {
  let timeInWords = "";

  // Hantera minuter
  if (minutes > 0) {
    if (minutes === 1) {
      timeInWords += "en minut";
    } else {
      timeInWords += `${minutes} minuter`;
    }
  }

  // Hantera sekunder
  if (seconds > 0) {
    if (minutes > 0) {
      timeInWords += " och ";
    }
    if (seconds === 1) {
      timeInWords += "en sekund";
    } else {
      timeInWords += `${seconds} sekunder`;
    }
  }

  // Om både minuter och sekunder är 0
  if (minutes === 0 && seconds === 0) {
    timeInWords = "ingen tid kvar";
  }

  return timeInWords;
};

// Komponent som visar tiden i ord
const TextTimer = ({ minutes, seconds }) => {
  const timeInWords = convertTimeToWords(minutes, seconds);

  return (
    <div>
      <h2>{timeInWords}</h2>
    </div>
  );
};

export default TextTimer;
