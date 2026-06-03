"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SpaceOdyssey",
    description: "SpaceOdyssey is a space-tech based project where I developed an intelligent satellite navigation system that helps satellites avoid space debris while consuming minimum fuel. The system uses DSA-based path optimization techniques along with API-integrated real-time data to calculate safe and fuel-efficient satellite movement paths.",
    tech: ["FastAPI", "Uvicorn", "NumPy", "SciPy", "Pydantic", "Python-Dateutil", "Aiofiles", "HTTPX", "Pytest"],
    github: "https://github.com/Ashutosh-2109/SpaceOdyssey",
    demo: ""
  },
  {
    title: "Clean VIT (Android App/Web)",
    description: "A platform/application focused on maintaining cleanliness and issue reporting within VIT.",
    tech: ["Android", "Kotlin", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Ashutosh-2109/clean_vitt",
    demo: "https://cleanvitt.vercel.app/"
  },
  {
    title: "Silent Voice",
    description: "An AI/ML-based project focused on accessibility and communication.",
    tech: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
    github: "https://github.com/Ashutosh-2109/Silent_Voice",
    demo: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-surface-container-low/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-on-surface mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A selection of my recent work in web development, machine learning, and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-surface-container-high/50 backdrop-blur-sm border border-outline/10 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <FolderGit2 size={32} />
                </div>
                <div className="flex gap-4 items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                    title="View GitHub Repository"
                  >
                    <FaGithub size={22} />
                  </a>
                  {project.demo ? (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  ) : (
                    <span 
                      className="text-on-surface-variant/30 cursor-not-allowed flex items-center gap-1"
                      title="Demo Coming Soon"
                    >
                      <ExternalLink size={22} />
                      <span className="text-[9px] font-jetbrains uppercase tracking-wider opacity-60">Soon</span>
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-on-surface mb-3 font-geist group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-on-surface-variant/80 mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full bg-surface-container-highest border border-outline/10 text-xs font-jetbrains font-semibold text-primary/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <motion.a
            href="https://github.com/Ashutosh-2109"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-surface-container-high border border-outline/25 font-bold font-geist text-on-surface hover:border-primary/50 hover:text-primary shadow-lg shadow-black/10 transition-all duration-300 group"
          >
            <FaGithub size={22} className="group-hover:rotate-[360deg] transition-transform duration-500" />
            <span>View More Projects</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
