import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const newYearDate = new Date(
      `January 1, ${new Date().getFullYear() + 1} 00:00:00`
    ).getTime();

    const countdownInterval = setInterval(() => {
      const currentDate = new Date().getTime();

      const timeRemaining = newYearDate - currentDate;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      {(countdown.days > 0 ||
        countdown.hours > 0 ||
        countdown.minutes > 0 ||
        countdown.seconds > 0) && (
        <motion.p
          initial={{ scale: 0.4, x: 1000 }}
          animate={{ scale: 1, x: 0 }}
          transition={{delay:1.5,duration:.5}}
          className="text-primary font-semibold absolute bottom-20"
        >
          CountDown :{" "}
          <span className=" text-sm md:text-xl font-[800]">
            {countdown.days > 0 ? countdown.days + " days, " : ""}
            {countdown.hours > 0 ? countdown.hours + " hours, " : ""}
            {countdown.minutes > 0 ? countdown.minutes + " minutes, " : ""}
            {countdown.seconds > 0 ? countdown.seconds + " seconds" : ""}
          </span>
        </motion.p>
      )}
    </>
  );
};

export default CountdownTimer;
