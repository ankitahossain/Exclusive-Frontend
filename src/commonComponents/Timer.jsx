import React, { useEffect, useState } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = String(currentTime.getDate()).padStart(2, "0");
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");

  return (
    <div className="flex items-center gap-x-4">
      <div>
        <p className="text-xs font-medium">Day</p>
        <h1 className="text-[32px] font-bold">{days}</h1>
      </div>

      <span className="text-red-500 text-3xl font-bold">:</span>

      <div>
        <p className="text-xs font-medium">Hours</p>
        <h1 className="text-[32px] font-bold">{hours}</h1>
      </div>

      <span className="text-red-500 text-3xl font-bold">:</span>

      <div>
        <p className="text-xs font-medium">Minutes</p>
        <h1 className="text-[32px] font-bold">{minutes}</h1>
      </div>

      <span className="text-red-500 text-3xl font-bold">:</span>

      <div>
        <p className="text-xs font-medium">Seconds</p>
        <h1 className="text-[32px] font-bold">{seconds}</h1>
      </div>
    </div>
  );
};

export default Timer;