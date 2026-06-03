"use client";

import { motion } from "framer-motion";
import { GraduationCap, Medal, Code2, Award } from "lucide-react";

export default function EducationAchievements() {
  return (
    <div className="py-20 mt-10 border-t border-outline/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-primary" size={40} />
              <h3 className="text-4xl font-bold font-geist text-on-surface drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Education</h3>
            </div>

            <div className="relative p-8 rounded-3xl bg-surface-container-high/40 border border-outline/10 hover:border-primary/30 transition-all">
              <h4 className="text-3xl font-bold text-on-surface mb-2">VIT Vellore</h4>
              <p className="text-primary font-semibold text-lg mb-8 drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]">
                B.Tech in Computer Science Engineering (Data Science)
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-outline/10 pb-4">
                  <span className="text-on-surface-variant font-jetbrains">Duration</span>
                  <span className="text-on-surface font-semibold font-jetbrains">2025 - 2029</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-on-surface-variant font-jetbrains">CGPA</span>
                  <span className="px-4 py-1 rounded-full bg-surface-container-highest text-on-surface font-bold font-jetbrains">9.5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Award className="text-primary" size={40} />
              <h3 className="text-4xl font-bold font-geist text-on-surface drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Achievements</h3>
            </div>

            <div className="space-y-6">
              {/* Achievement 1 */}
              <div className="flex gap-6 p-6 rounded-3xl bg-surface-container-high/40 border border-outline/10 hover:border-primary/30 transition-all items-start">
                <div className="p-4 rounded-full bg-surface-container-highest text-primary shrink-0">
                  <Medal size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-surface mb-2">Branch Topper</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Branch Topper of CSE-Data Science
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="flex gap-6 p-6 rounded-3xl bg-surface-container-high/40 border border-outline/10 hover:border-primary/30 transition-all items-start">
                <div className="p-4 rounded-full bg-surface-container-highest text-primary shrink-0">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-surface mb-2">IIT Bombay Data Science Workshop</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Participated in an intensive offline Data Science workshop at IIT Bombay.
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="flex gap-6 p-6 rounded-3xl bg-surface-container-high/40 border border-outline/10 hover:border-primary/30 transition-all items-start">
                <div className="p-4 rounded-full bg-surface-container-highest text-primary shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-surface mb-2">Machine Learning Certification</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Successfully completed a comprehensive professional certification in Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  );
}
