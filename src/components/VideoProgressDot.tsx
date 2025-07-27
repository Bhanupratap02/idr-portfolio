import { useEffect, useState } from "react";

interface Props {
  active: boolean;
  duration: number;
  onClick: () => void;
}

export default function VideoProgressDot({ active, duration, onClick }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) {
      setProgress(0);
      return;
    }

    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);
      if (percentage < 100) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [active, duration]);

  return (
    <div
      onClick={onClick}
      className="relative w-5 h-5 cursor-pointer"
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="10"
          cy="10"
          r="9"
          stroke="#ccc"
          strokeWidth="2"
          fill="none"
        />
        {active && (
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke="#1D4ED8"
            strokeWidth="2"
            fill="none"
            strokeDasharray={2 * Math.PI * 9}
            strokeDashoffset={((100 - progress) / 100) * 2 * Math.PI * 9}
            className="transition-all"
          />
        )}
      </svg>
    </div>
  );
}
