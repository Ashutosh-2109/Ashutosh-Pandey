"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import EducationAchievements from "./EducationAchievements";

const skills = [
  "Python",
  "C & C++",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "AI Tools",
  "Git/GitHub",
  "Web Development",
  "App Development"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-on-surface mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-surface-container-high/40 backdrop-blur-sm border border-outline/10 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.08)] transition-all duration-300 group"
            >
              <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="text-on-surface font-bold font-geist text-lg md:text-xl tracking-tight">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        <EducationAchievements />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <a 
            href="/contact"
            className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary text-surface font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 group"
          >
            <span className="z-10 group-hover:-translate-y-1 transition-transform">Hire Me</span>
            <div className="absolute inset-[-10px] animate-[spin_10s_linear_infinite] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                <path
                  id="textPath"
                  d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                  fill="none"
                />
                <text className="text-[14px] font-jetbrains font-bold uppercase tracking-widest" fill="currentColor">
                  <textPath href="#textPath" startOffset="0%">
                    • CLICK ME • HIRE ME • CLICK ME • HIRE ME
                  </textPath>
                </text>
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
