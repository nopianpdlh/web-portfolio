"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type SpringOptions,
  type MotionValue,
} from "framer-motion";
import {
  useMemo,
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement,
} from "react";

type RouteItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

type NavDockProps = {
  routes: RouteItem[];
  className?: string;
  magnification?: number;
  distance?: number;
  baseItemSize?: number;
  panelHeight?: number;
  dockHeight?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  icon,
  label,
  href,
  mouseX,
  spring,
  distance,
  baseItemSize,
  magnification,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={() => (window.location.href = href)}
      className="relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md cursor-pointer"
    >
      <div className="flex items-center justify-center text-white w-6 h-6">
        {icon}
      </div>
      <DockLabel label={label} isHovered={isHovered} />
    </motion.div>
  );
}

function DockLabel({
  label,
  isHovered,
}: {
  label: string;
  isHovered: MotionValue<number>;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white"
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NavDock({
  routes,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: NavDockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} flex items-end gap-4 rounded-2xl border-2 border-neutral-700 bg-[#0a0017]/90 px-4 pb-2 backdrop-blur-md`}
        style={{ height: panelHeight }}
        role="navigation"
      >
        {routes.map((route, idx) => (
          <DockItem
            key={idx}
            icon={route.icon}
            label={route.label}
            href={route.href}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            baseItemSize={baseItemSize}
            magnification={magnification}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
