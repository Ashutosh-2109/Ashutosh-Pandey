"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  delay: number;
  duration: number;
}

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate star coordinates on the client to avoid hydration mismatch
    const colors = ["#ffffff", "#00f0ff", "#bd00ff", "#ffe600"];
    const generatedStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8, // 0.8px to 2.8px
      opacity: Math.random() * 0.7 + 0.3,
      // Color variety: mostly white, with occasional neon accents
      color: colors[i % 12 === 0 ? 1 : i % 15 === 0 ? 2 : i % 20 === 0 ? 3 : 0],
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3, // 3s to 7s
    }));
    setStars(generatedStars);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-surface transition-colors duration-500">
      {/* Space Backdrop Radial Gradient in Dark Mode */}
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(12,6,35,0.45),rgba(5,5,5,1)_80%)]" />
      )}
      
      {/* CSS Keyframes for Shooting Stars */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep-1 {
          0% { transform: translate(100px, -100px) rotate(-40deg) scale(0); opacity: 0; }
          1% { opacity: 1; transform: translate(100px, -100px) rotate(-40deg) scale(1); }
          8% { opacity: 0; transform: translate(-600px, 500px) rotate(-40deg) scale(1); }
          100% { opacity: 0; transform: translate(-600px, 500px) rotate(-40deg) scale(0); }
        }
        @keyframes sweep-2 {
          0% { transform: translate(200px, -50px) rotate(-35deg) scale(0); opacity: 0; }
          1% { opacity: 1; transform: translate(200px, -50px) rotate(-35deg) scale(1); }
          9% { opacity: 0; transform: translate(-700px, 550px) rotate(-35deg) scale(1); }
          100% { opacity: 0; transform: translate(-700px, 550px) rotate(-35deg) scale(0); }
        }
        .animate-shooting-1 {
          animation: sweep-1 20s infinite ease-in-out;
          animation-delay: 2s;
        }
        .animate-shooting-2 {
          animation: sweep-2 26s infinite ease-in-out;
          animation-delay: 11s;
        }
      `}} />

      {/* Twinkling Starfield */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: star.size > 1.8 ? `0 0 6px ${star.color}` : 'none',
          }}
          animate={{
            opacity: [star.opacity * 0.2, star.opacity, star.opacity * 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars / Meteors */}
      <div 
        className="absolute top-[15vh] right-[10vw] w-[100px] h-[1.2px] bg-gradient-to-l from-white via-primary/50 to-transparent pointer-events-none origin-right animate-shooting-1"
        style={{ filter: "drop-shadow(0 0 4px rgba(0, 240, 255, 0.5))" }}
      />
      <div 
        className="absolute top-[35vh] right-[25vw] w-[120px] h-[1.2px] bg-gradient-to-l from-white via-secondary/50 to-transparent pointer-events-none origin-right animate-shooting-2"
        style={{ filter: "drop-shadow(0 0 4px rgba(189, 0, 255, 0.5))" }}
      />

      {/* Organic Space Nebula - Cloud 1 (Cyan) */}
      <motion.div
        className="absolute rounded-full blur-[130px] pointer-events-none"
        style={{
          width: "45vw",
          height: "45vw",
          background: isDark 
            ? "radial-gradient(circle, rgba(0,240,255,0.18) 0%, rgba(0,240,255,0.04) 50%, rgba(0,240,255,0) 100%)"
            : "radial-gradient(circle, rgba(0,102,255,0.1) 0%, rgba(0,102,255,0.02) 60%, rgba(0,102,255,0) 100%)",
          top: "-15%",
          left: "-15%",
        }}
        animate={{
          x: ["0%", "15%", "-8%", "0%"],
          y: ["0%", "10%", "15%", "0%"],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Organic Space Nebula - Cloud 2 (Purple) */}
      <motion.div
        className="absolute rounded-full blur-[130px] pointer-events-none"
        style={{
          width: "40vw",
          height: "40vw",
          background: isDark
            ? "radial-gradient(circle, rgba(189,0,255,0.15) 0%, rgba(189,0,255,0.03) 50%, rgba(189,0,255,0) 100%)"
            : "radial-gradient(circle, rgba(189,0,255,0.08) 0%, rgba(189,0,255,0.01) 60%, rgba(189,0,255,0) 100%)",
          bottom: "-15%",
          right: "-10%",
        }}
        animate={{
          x: ["0%", "-10%", "12%", "0%"],
          y: ["0%", "15%", "-8%", "0%"],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Organic Space Nebula - Cloud 3 (Indigo/Blue) */}
      <motion.div
        className="absolute rounded-full blur-[150px] pointer-events-none"
        style={{
          width: "35vw",
          height: "35vw",
          background: isDark
            ? "radial-gradient(circle, rgba(30,64,175,0.18) 0%, rgba(30,64,175,0.04) 50%, rgba(30,64,175,0) 100%)"
            : "radial-gradient(circle, rgba(99,102,241,0.05) 0%, rgba(99,102,241,0.005) 60%, rgba(99,102,241,0) 100%)",
          top: "30%",
          left: "20%",
        }}
        animate={{
          x: ["0%", "-12%", "15%", "0%"],
          y: ["0%", "20%", "-12%", "0%"],
          scale: [0.95, 1.12, 0.9, 0.95],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
