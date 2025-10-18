import { useState, useEffect, useRef } from "react";
import formatTime from "../util/formatTime";

type StopWatchProps = {
  isRunning: boolean;
};

const StopWatch = ({ isRunning }: StopWatchProps) => {
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  return (
    <div className="card timer-layout">
      <div className="type-interface">{formatTime(time)}</div>
    </div>
  );
};

export default StopWatch;
