import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const timer = useRef();
  const handleStart = () => {
    timer = setTimeStarted(true);
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearInterval(timer);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost.</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running" : "Time is inactive"}
      </p>
    </section>
  );
}
