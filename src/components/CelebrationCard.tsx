import { useState, useEffect } from 'react';
import TimeUnit from './TimeUnit';

interface CelebrationCardProps {
  name: string;
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CelebrationCard({ name, targetDate }: CelebrationCardProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-yellow-200 to-rose-600 p-6 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-4">{name}</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" animate={animate} />
        <TimeUnit value={timeLeft.minutes} label="Minutos" animate={animate} />
        <TimeUnit value={timeLeft.seconds} label="Segundos" animate={animate} />
      </div>
    </div>
  );
}