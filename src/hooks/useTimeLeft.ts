import { useState, useEffect } from 'react';

interface TimeLeft {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (endDate: Date) => {
  const difference = +endDate - +new Date();

  return difference > 0
    ? {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    : {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
};

export const useTimeLeft = (endDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(endDate),
  );

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);
  });

  return { timeLeft };
};
