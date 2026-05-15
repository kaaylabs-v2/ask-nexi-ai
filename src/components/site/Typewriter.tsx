import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Types text out with a blinking cursor. */
export function Typewriter({
  text,
  speed = 28,
  startDelay = 200,
  className = "",
  onDone,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const start = setTimeout(function step() {
      if (i <= text.length) {
        setShown(text.slice(0, i));
        i++;
        setTimeout(step, speed);
      } else if (onDone) {
        onDone();
      }
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={className}>
      {shown}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] align-middle bg-current ml-0.5"
      />
    </span>
  );
}
