"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Clock tick logic
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const formattedDate = time 
    ? time.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase() 
    : "";
  const formattedTime = time 
    ? time.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' }) 
    : "";

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-surface/80 backdrop-blur-md border-b border-outline/10 py-4 shadow-lg shadow-black/5" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        <Link 
          href="/" 
          onClick={(e) => handleScrollTo(e, "/#home")}
          className="text-2xl font-bold font-geist tracking-tighter text-on-surface flex items-center gap-2"
        >
          <span className="text-primary">&lt;</span>
          Ashutosh
          <span className="text-primary">/&gt;</span>
        </Link>

        {time && (
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline/15 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00f0ff]" />
            <span className="text-[11px] font-jetbrains text-on-surface-variant tracking-wider">{formattedDate}</span>
            <span className="text-xs text-outline/30">|</span>
            <span className="text-xs font-geist font-bold text-primary tracking-widest tabular-nums">{formattedTime}</span>
          </div>
        )}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-jetbrains text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
