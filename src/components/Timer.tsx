import React from 'react';
import { Timer as TimerIcon } from 'lucide-react';
import { formatTime } from '../utils/timeUtils';

interface TimerProps {
  duration: number;
  isActive: boolean;
}

export default function Timer({ duration, isActive }: TimerProps) {
  const [timeLeft, setTimeLeft] = React.useState(duration);
  const [timerActive, setTimerActive] = React.useState(false);

  React.useEffect(() => {
    let interval: number;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000) as unknown as number;
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const handleTimerClick = () => {
    if (!timerActive && timeLeft === 0) {
      setTimeLeft(duration);
    }
    setTimerActive(!timerActive);
  };

  return (
    <button
      onClick={handleTimerClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
        timerActive
          ? 'bg-green-500 hover:bg-green-600'
          : 'bg-orange-500 hover:bg-orange-600'
      } text-white`}
    >
      <TimerIcon size={18} className={timerActive ? 'animate-spin' : ''} />
      {timeLeft > 0 ? formatTime(timeLeft) : 'Start Timer'}
    </button>
  );
}