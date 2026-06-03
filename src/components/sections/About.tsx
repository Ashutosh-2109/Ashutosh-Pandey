"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, GraduationCap, Cpu } from "lucide-react";

const stats = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    title: "Passion for Coding",
    description: "Building scalable and elegant software solutions with modern web technologies.",
  },
  {
    icon: <BrainCircuit size={24} className="text-secondary" />,
    title: "AI/ML Explorer",
    description: "Deep dive into artificial intelligence, machine learning models, and data analytics.",
  },
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    title: "Data Science @ VIT",
    description: "Currently pursuing B.Tech in CSE with a specialization in Data Science at VIT Vellore.",
  },
  {
    icon: <Cpu size={24} className="text-secondary" />,
    title: "Tech Enthusiast",
    description: "Constantly learning new frameworks, architectures, and the latest in the tech landscape.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-on-surface mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6 text-on-surface-variant text-lg leading-relaxed"
          >
            <p>
              Hello! I'm Ashutosh Pandey, a dedicated developer and technology enthusiast. My journey in the world of computer science is driven by a profound <strong>passion for coding</strong> and a relentless curiosity to understand how things work under the hood.
            </p>
            <p>
              Currently, I am a student at <strong>VIT Vellore</strong>, specializing in <strong>Computer Science and Data Science</strong>. My academic rigor is complemented by my hands-on experience in building modern web applications and exploring the fascinating realm of <strong>AI and Machine Learning</strong>.
            </p>
            <p>
              I have a deep-seated <strong>love for learning technologies</strong>. Whether it's mastering a new frontend framework like Next.js, or training predictive models, I am always eager to expand my skill set and tackle complex problems with innovative solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-surface-container-high/50 backdrop-blur-md border border-outline/10 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold font-geist text-on-surface mb-2">{stat.title}</h3>
                <p className="text-on-surface-variant/80 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
