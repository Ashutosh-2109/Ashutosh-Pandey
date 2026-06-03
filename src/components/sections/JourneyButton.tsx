"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function JourneyButton() {
  return (
    <section id="journey" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-on-surface mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A story of continuous learning, bound in a vintage book.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link 
            href="/journey"
            className="group relative flex items-center gap-4 px-10 py-6 rounded-3xl bg-surface-container-high/60 backdrop-blur-xl border border-outline/20 shadow-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none" />
            
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <BookOpen size={32} />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-on-surface font-geist group-hover:text-primary transition-colors">
                Read My Journey
              </h3>
              <p className="text-sm text-on-surface-variant/80 font-jetbrains tracking-widest uppercase mt-1">
                Open The Book
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
