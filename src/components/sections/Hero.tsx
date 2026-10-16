"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div 
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <h2 className="text-primary font-jetbrains font-medium tracking-wider uppercase text-sm">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-geist tracking-tighter text-on-surface">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Ashutosh Pandey
              </span>
            </h1>
          </div>
          
          <div className="h-[40px] text-xl md:text-2xl font-medium text-on-surface-variant font-jetbrains">
            <TypeAnimation
              sequence={[
                "VIT Vellore Student",
                2000,
                "Tech Enthusiast",
                2000,
                "Computer Science Student",
                2000,
                "AI/ML Explorer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-on-surface-variant/80 max-w-lg leading-relaxed text-lg">
            I craft visually stunning, interactive, and high-performance applications. 
            Passionate about merging artificial intelligence with modern web development.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/#projects" 
              className="px-6 py-3 bg-primary text-surface font-semibold rounded-lg flex items-center gap-2 hover:bg-primary-container hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-surface-container-high border border-outline/20 text-on-surface font-semibold rounded-lg flex items-center gap-2 hover:border-primary/50 hover:bg-surface-container-highest transition-all"
            >
              Contact Me <Mail size={18} />
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Ashutosh_Pandey_Resume.pdf"
              className="px-6 py-3 bg-transparent border border-primary text-primary font-semibold rounded-lg flex items-center gap-2 hover:bg-primary/10 transition-all"
            >
              Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Photo Placeholder */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute inset-2 bg-surface-container-lowest border border-outline/20 rounded-full flex items-center justify-center overflow-hidden z-10 shadow-2xl backdrop-blur-sm">
              <img 
                src="/profile.jpg" 
                alt="Ashutosh Pandey" 
                className="w-full h-full object-cover scale-x-[-1]" 
              />
            </div>
            {/* Decorative Orbit Rings */}
            <div className="absolute inset-[-20px] rounded-full border border-primary/20 border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border border-secondary/20 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
