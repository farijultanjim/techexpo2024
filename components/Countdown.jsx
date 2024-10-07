import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="flex justify-center space-x-4 bg-accent w-fit p-3 rounded-md shadow-lg bg-opacity-60">
      {["days", "hours", "minutes", "seconds"].map((interval) => (
        <div key={interval} className="text-center">
          <div className="text-2xl sm:text-4xl font-bold">
            {addLeadingZero(timeLeft[interval])}
          </div>
          <div className="text-xs sm:text-sm uppercase">{interval}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
