"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const journeyPages = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "10th Class",
    content: "My fascination with technology started early. During my 10th class, I was introduced to the world of computers beyond just using them, sparking a curiosity about how software is built.",
    date: "2018 - 2019"
  },
  {
    id: 2,
    title: "First Lines of Code",
    subtitle: "Started Coding & Learning Python",
    content: "I wrote my first lines of code and quickly fell in love with Python. The simplicity and power of the language allowed me to build small scripts and understand fundamental programming concepts.",
    date: "2020 - 2021"
  },
  {
    id: 3,
    title: "Diving into Data",
    subtitle: "ML/AI Projects",
    content: "As my coding skills grew, I ventured into Machine Learning and Artificial Intelligence. I started working on predictive models, data analysis, and small-scale AI projects, realizing the immense potential of data.",
    date: "2021 - 2022"
  },
  {
    id: 4,
    title: "Higher Education",
    subtitle: "College Journey @ VIT Vellore",
    content: "I joined VIT Vellore to pursue my B.Tech in Computer Science with a specialization in Data Science. Here, I gained formal education in algorithms, data structures, and advanced computing.",
    date: "2022 - Present"
  },
  {
    id: 5,
    title: "Building the Future",
    subtitle: "Current Projects & Future Goals",
    content: "Today, I am actively building full-stack web applications and integrating AI solutions. My goal is to become a leading Software Engineer/Data Scientist, contributing to impactful technological advancements.",
    date: "Present & Beyond"
  }
];

export default function Journey() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentPage((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = 0;
      if (next >= journeyPages.length) next = journeyPages.length - 1;
      return next;
    });
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction > 0 ? 45 : -45,
        scale: 0.9,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction < 0 ? 45 : -45,
        scale: 0.9,
      };
    }
  };

  return (
    <section id="journey" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-on-surface mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A story of continuous learning, from writing my first script to building AI-driven web applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[350px] perspective-1000">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 }
              }}
              className="absolute inset-0 w-full h-full p-8 md:p-12 rounded-3xl bg-surface-container-high/60 backdrop-blur-xl border border-outline/20 shadow-2xl flex flex-col justify-center"
              style={{ transformOrigin: direction > 0 ? "left center" : "right center" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="text-sm font-jetbrains text-primary tracking-widest uppercase">
                    Chapter {journeyPages[currentPage].id} • {journeyPages[currentPage].date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-on-surface font-geist">
                    {journeyPages[currentPage].title}
                  </h3>
                </div>
              </div>
              
              <h4 className="text-lg md:text-xl font-medium text-secondary mb-4">
                {journeyPages[currentPage].subtitle}
              </h4>
              <p className="text-on-surface-variant/90 leading-relaxed text-base md:text-lg">
                {journeyPages[currentPage].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-6">
            <button
              className="p-3 rounded-full bg-surface-container-highest border border-outline/20 text-on-surface hover:text-primary hover:border-primary/50 transition-all disabled:opacity-30 disabled:hover:border-outline/20 disabled:hover:text-on-surface"
              onClick={() => paginate(-1)}
              disabled={currentPage === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {journeyPages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentPage ? 1 : -1);
                    setCurrentPage(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentPage ? "bg-primary scale-125" : "bg-outline/30 hover:bg-outline/50"
                  }`}
                />
              ))}
            </div>
            <button
              className="p-3 rounded-full bg-surface-container-highest border border-outline/20 text-on-surface hover:text-primary hover:border-primary/50 transition-all disabled:opacity-30 disabled:hover:border-outline/20 disabled:hover:text-on-surface"
              onClick={() => paginate(1)}
              disabled={currentPage === journeyPages.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
