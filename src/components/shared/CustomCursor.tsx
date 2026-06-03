"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailStar {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  createdAt: number;
}

export default function CustomCursor() {
  const [trail, setTrail] = useState<TrailStar[]>([]);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const lastPos = lastPositionRef.current;
      const dx = x - lastPos.x;
      const dy = y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Spawn a star after moving at least 15px to ensure a clean, elegant trail
      if (distance > 15) {
        // Soft cosmic yellow/gold & white palette matching the user visual guidelines
        const colors = ["#ffe600", "#fffae0", "#ffcc00", "#ffffff"];
        const newStar: TrailStar = {
          id: Math.random().toString(),
          x,
          y,
          size: Math.random() * 8 + 6, // 6px to 14px: subtle, normal size sparkles
          color: colors[Math.floor(Math.random() * colors.length)],
          createdAt: Date.now(),
        };

        const now = Date.now();
        setTrail((prev) => 
          prev
            .filter((s) => now - s.createdAt < 500)
            .concat(newStar)
        );
        lastPositionRef.current = { x, y };
      }
    };

    // Clean up expired stars (after 500ms) to ensure they disappear when mouse stops moving
    const cleanerInterval = setInterval(() => {
      const now = Date.now();
      setTrail((prev) => prev.filter((s) => now - s.createdAt < 500));
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanerInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      <AnimatePresence>
        {trail.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0.4, opacity: 0, rotate: 0 }}
            animate={{ scale: [0.4, 1.2, 0], opacity: [0, 0.9, 0], rotate: 45 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill={star.color}
              className="w-full h-full"
              style={{ filter: `drop-shadow(0 0 3px ${star.color})` }}
            >
              <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
