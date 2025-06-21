"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  const [[page, direction], setPage] = useState([0, 0]);

  const itemIndex = ((page % items.length) + items.length) % items.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto h-[400px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) {
              paginate(1);
            } else if (swipe > 10000) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full"
        >
          {renderItem(items[itemIndex])}
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute top-1/2 left-4 z-10 cursor-pointer p-2 bg-black/30 rounded-full"
        onClick={() => paginate(-1)}
      >
        <FaChevronLeft size={24} />
      </div>
      <div
        className="absolute top-1/2 right-4 z-10 cursor-pointer p-2 bg-black/30 rounded-full"
        onClick={() => paginate(1)}
      >
        <FaChevronRight size={24} />
      </div>
    </div>
  );
}
