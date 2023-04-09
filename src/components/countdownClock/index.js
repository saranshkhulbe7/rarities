import { useEffect, useState } from "react";

import { Countdown } from "daisyui";

function CountdownClock({ endDateTime }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      const now = new Date();
      let remainingTime = endDateTime.getTime() - now.getTime();

      // Check if the remaining time is negative
      if (remainingTime < 0) {
        setCompleted(true);
        clearInterval(intervalId);
        return;
      }

      // Convert the remaining time to days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      remainingTime -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      remainingTime -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(remainingTime / (1000 * 60));
      remainingTime -= minutes * (1000 * 60);
      const seconds = Math.floor(remainingTime / 1000);

      // Update the countdown state with the remaining time
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-5">
      {!completed ? (
        <>
          <div>
            <span className="countdown font-mono text-sm">
              <span style={{ "--value": countdown.days }}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-sm">
              <span style={{ "--value": countdown.hours }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-sm">
              <span style={{ "--value": countdown.minutes }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-sm">
              <span style={{ "--value": countdown.seconds }}></span>
            </span>
            sec
          </div>
        </>
      ) : (
        <div>The countdown has completed.</div>
      )}
    </div>
  );
}

export default CountdownClock;
