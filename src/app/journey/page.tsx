"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

const journeyPages = [
  {
    id: 0,
    type: "cover",
    title: "Journey of Ashutosh Pandey",
    subtitle: "A Developer's Tale",
  },
  {
    id: 1,
    type: "content",
    title: "My Journey",
    chapter: "Chapter 1: The Beginning",
    subtitle: "10th Class (2022–2023)",
    content: "I was highly involved in sports and simultaneously started exploring coding. I learned basic Python and developed my first small game project. Balancing athletics and academics, I scored 86.20% in my 10th boards, marking a curiosity about how software works and laying the groundwork for my future coding path.",
    date: "2022 - 2023"
  },
  {
    id: 2,
    type: "content",
    title: "My Journey",
    chapter: "Chapter 2: Prep & Computer Science",
    subtitle: "11th & 12th Grade (2023–2025)",
    content: "Focused intensely on JEE preparation, scoring 98 percentile in JEE Mains, 99 percentile in MHT CET, a 5K Rank in VITEEE, and securing the 1st Rank in my college with 86.83% in 12th Boards. CS classes build a strong base in DSA, Operating Systems, C++, Microprocessors, and Microcomputers, securing my merit CSE (Data Science) seat at VIT Vellore.",
    date: "2023 - 2025"
  },
  {
    id: 3,
    type: "content",
    title: "My Journey",
    chapter: "Chapter 3: Exploration",
    subtitle: "VIT Vellore Journey - Part 1",
    content: "Since coding fundamentals were clear, I explored technical domains and found my passion in AI/ML. I completed a Machine Learning course, built multiple projects, and got selected into the campus AI/ML Club. Participating in 4 intra-college hackathons honed my teamwork, coordination, and practical exposure to real-world engineering.",
    date: "2025 - Present"
  },
  {
    id: 4,
    type: "content",
    title: "My Journey",
    chapter: "Chapter 4: Advanced Milestones",
    subtitle: "VIT Vellore Journey - Part 2",
    content: "Balanced academics and tech, securing a stellar 9.5 CGPA (Branch Topper - 5th Rank). Pushed technical boundaries by attending the IIT Delhi National Space Hackathon, Samsung Ennovate Hackathon, and the intensive offline Data Science workshop at IIT Bombay, establishing deep expertise in intelligent AI engineering.",
    date: "Ongoing"
  }
];

export default function JourneyPage() {
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
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 90 : -90,
      scale: 0.9,
    })
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 relative overflow-hidden">
      <Link 
        href="/"
        className="absolute top-8 left-8 p-3 rounded-full bg-surface-container-high border border-outline/20 hover:bg-primary hover:text-surface transition-all z-50 flex items-center gap-2"
      >
        <X size={20} />
        <span className="hidden md:block font-jetbrains text-sm font-bold">Close Book</span>
      </Link>

      <div className="w-full max-w-3xl aspect-[3/4] md:aspect-[4/3] perspective-1000 relative">
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
              opacity: { duration: 0.3 },
              rotateY: { duration: 0.6, ease: "easeInOut" }
            }}
            className="absolute inset-0 shadow-2xl rounded-r-3xl rounded-l-md md:rounded-3xl border border-yellow-900/20 overflow-hidden bg-[#fdf6e3] dark:bg-[#2c241b] text-yellow-900 dark:text-yellow-100 flex flex-col justify-center"
            style={{ 
              transformOrigin: direction > 0 ? "left center" : "right center",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`
            }}
          >
            {/* Book Spine binding effect (Left edge) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
            
            <div className="p-8 md:p-16 h-full flex flex-col justify-center relative">
              {/* Page Number */}
              <div className="absolute bottom-6 right-8 font-serif italic text-sm opacity-50">
                {currentPage > 0 ? `- ${currentPage} -` : ''}
              </div>

              {journeyPages[currentPage].type === "cover" ? (
                <div className="text-center space-y-8">
                  <div className="w-16 h-1 bg-yellow-900/30 dark:bg-yellow-100/30 mx-auto rounded-full" />
                  <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-widest leading-tight">
                    {journeyPages[currentPage].title}
                  </h1>
                  <p className="text-xl md:text-2xl font-serif italic opacity-80">
                    {journeyPages[currentPage].subtitle}
                  </p>
                  <div className="w-16 h-1 bg-yellow-900/30 dark:bg-yellow-100/30 mx-auto rounded-full" />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center mb-6 border-b border-yellow-900/20 dark:border-yellow-100/20 pb-4">
                    <h2 className="text-lg md:text-xl font-serif tracking-widest uppercase opacity-70">
                      {journeyPages[currentPage].title}
                    </h2>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-jetbrains uppercase tracking-widest text-primary mix-blend-difference">
                      {journeyPages[currentPage].chapter} • {journeyPages[currentPage].date}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-serif font-bold">
                      {journeyPages[currentPage].subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-sm md:text-base font-serif leading-relaxed opacity-90 mt-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:font-serif">
                    {journeyPages[currentPage].content}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute -bottom-20 left-0 right-0 flex justify-center items-center gap-8">
          <button
            className="p-4 rounded-full bg-surface-container-highest border border-outline/20 text-on-surface hover:bg-primary hover:text-surface transition-all disabled:opacity-30 disabled:hover:bg-surface-container-highest disabled:hover:text-on-surface"
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <span className="font-jetbrains text-sm font-bold tracking-widest text-on-surface-variant">
            {currentPage === 0 ? "COVER" : `PAGE ${currentPage} OF ${journeyPages.length - 1}`}
          </span>
          <button
            className="p-4 rounded-full bg-surface-container-highest border border-outline/20 text-on-surface hover:bg-primary hover:text-surface transition-all disabled:opacity-30 disabled:hover:bg-surface-container-highest disabled:hover:text-on-surface"
            onClick={() => paginate(1)}
            disabled={currentPage === journeyPages.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
