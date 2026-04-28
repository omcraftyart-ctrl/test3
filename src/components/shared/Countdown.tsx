import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { StyledText } from '../../data/weddingContent';

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

type CountdownProps = {
  targetDate: Date;
  completedText?: StyledText;
  labels?: {
    days: StyledText;
    hours: StyledText;
    minutes: StyledText;
    seconds: StyledText;
  };
};

export function Countdown({
  targetDate,
  completedText = { value: 'Our Wedding is Complete!', style: {} },
  labels = {
    days: { value: 'Days', style: {} },
    hours: { value: 'Hours', style: {} },
    minutes: { value: 'Minutes', style: {} },
    seconds: { value: 'Seconds', style: {} },
  },
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft((prev) => ({ ...prev, finished: true }));
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        finished: false,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.finished) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-primary-accent text-3xl md:text-5xl font-normal font-headings mt-6 block text-center"
        style={completedText.style}
      >
        {completedText.value}
      </motion.span>
    );
  }

  const items = [
    { label: labels.days, value: timeLeft.days },
    { label: labels.hours, value: timeLeft.hours },
    { label: labels.minutes, value: timeLeft.minutes },
    { label: labels.seconds, value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-[80%] mx-auto grid grid-cols-2 gap-y-8 gap-x-6 pb-2">
      {items.map((item) => (
        <div key={item.label.value} className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-headings text-primary-accent leading-none">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-sm font-body text-secondary-accent mt-1" style={item.label.style}>
            {item.label.value}
          </span>
        </div>
      ))}
    </div>
  );
}
