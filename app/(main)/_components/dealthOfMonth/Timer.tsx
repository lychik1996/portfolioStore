'use client';

import { useEffect, useState } from 'react';
import timerIntervalFunc from '../../../../components/timerFunction';

let count = '2024-09-12T12:00:00';
export default function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const startDate = new Date(count);  
    const timerId = timerIntervalFunc(startDate, setTime);
    return () => clearInterval(timerId);
  }, []);
  
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col justify-between items-center gap-1">
        <div
          className="orbitron  w-10 flex items-center justify-center h-10 text-xl bg-white rounded-md"
          style={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.16)' }}
        >
          {time.days < 10 && '0'}
          {time.days}
        </div>
        <p>Days</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <div
          className="orbitron  w-10 flex items-center justify-center h-10 text-xl bg-white rounded-md"
          style={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.16)' }}
        >
          {time.hours < 10 && '0'}
          {time.hours}
        </div>
        <p>Hr</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <div
          className="orbitron  w-10 flex items-center justify-center h-10 text-xl bg-white rounded-md"
          style={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.16)' }}
        >
          {time.minutes < 10 && '0'}
          {time.minutes}
        </div>
        <p>Mins</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <div
          className="orbitron w-10 flex items-center justify-center h-10 text-xl bg-white rounded-md"
          style={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.16)' }}
        >
          {time.seconds < 10 && '0'}
          {time.seconds}
        </div>
        <p>Sec</p>
      </div>
    </div>
  );
}
