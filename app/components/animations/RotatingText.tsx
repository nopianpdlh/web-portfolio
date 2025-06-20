"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";

// Utility class merge
function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  rotationInterval?: number;
  auto?: boolean;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      rotationInterval = 2000,
      auto = true,
      className,
      wordClassName,
      charClassName,
      ...rest
    },
    ref
  ) => {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, [texts]);

    const previous = useCallback(() => {
      setIndex((i) => (i - 1 + texts.length) % texts.length);
    }, [texts]);

    const jumpTo = useCallback(
      (i: number) => setIndex(i % texts.length),
      [texts]
    );

    const reset = useCallback(() => setIndex(0), []);

    useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }));

    useEffect(() => {
      if (!auto) return;
      const id = setInterval(next, rotationInterval);
      return () => clearInterval(id);
    }, [auto, rotationInterval, next]);

    const currentText = texts[index];
    const words = useMemo(
      () =>
        currentText.split(" ").map((word, i) => ({
          id: i,
          chars: [...word],
        })),
      [currentText]
    );

    // Default animation (hardcoded to avoid TypeScript complexity)
    const defaultInitial = { y: "100%", opacity: 0 };
    const defaultAnimate = { y: 0, opacity: 1 };
    const defaultExit = { y: "-100%", opacity: 0 };
    const defaultTransition: Transition = {
      type: "spring",
      damping: 25,
      stiffness: 300,
    };

    return (
      <span className={cn("inline-flex relative", className)} {...rest}>
        <span className="sr-only">{currentText}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="inline-flex overflow-hidden"
            aria-hidden
          >
            {words.map((word, wi) => (
              <span key={wi} className={cn("inline-flex", wordClassName)}>
                {word.chars.map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={defaultInitial}
                    animate={defaultAnimate}
                    exit={defaultExit}
                    transition={defaultTransition}
                    className={cn("inline-block", charClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="w-1" /> {/* space */}
              </span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
