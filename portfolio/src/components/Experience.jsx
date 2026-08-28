import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle, 
  Sparkles,
  TrendingUp
} from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Career Trajectory</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg"
          >
            Proven track record of engineering scalable enterprise systems, advancing from Intern to Software Engineer at One Billion Technology.
          </motion.p>
        </div>

        {/* Timeline Layout: Tabs on Left / Desktop vs Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Selection Cards */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {experiences.map((exp, idx) => {
              const isSelected = activeTab === idx;
              return (
                <motion.button
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 relative border ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10"
                      : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      idx === 0 
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}>
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{exp.company}</span>
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="activeExperienceIndicator"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-8 bg-cyan-500 rounded-full hidden lg:block"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detailed Experience Breakdown */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {experiences[activeTab].role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {experiences[activeTab].company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experiences[activeTab].location}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-4 h-4" />
                      {experiences[activeTab].period}
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-mono">
                  {experiences[activeTab].type}
                </span>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">
                  Key Responsibilities &amp; Impact
                </h4>
                {experiences[activeTab].highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      {highlight.includes(":") ? (
                        <>
                          <strong className="text-slate-900 dark:text-white font-semibold">
                            {highlight.split(":")[0]}:
                          </strong>
                          {highlight.substring(highlight.indexOf(":") + 1)}
                        </>
                      ) : (
                        highlight
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
