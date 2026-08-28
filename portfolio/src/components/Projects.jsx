import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, 
  Sparkles, 
  Cpu, 
  Bot, 
  MessageSquareCode, 
  Store, 
  ArrowUpRight, 
  Layers, 
  CheckCircle,
  ExternalLink,
  Code2
} from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const iconMap = {
    Cpu: Cpu,
    Bot: Bot,
    MessageSquareCode: MessageSquareCode,
    Store: Store
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative bg-slate-100/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Deliveries</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Key <span className="gradient-text">Projects &amp; Architecture</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg"
          >
            Production-grade systems delivering enterprise estimation engines, generative AI RFP workflows, and clean layered microservices.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.icon] || Cpu;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Accent top gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Impact Metric & Tech Tags */}
                <div>
                  {/* Impact Highlight */}
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium mb-4 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{project.impact}</span>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  ✕
                </button>

                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase mb-3">
                  {selectedProject.category}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-500 mb-4">
                  {selectedProject.subtitle}
                </p>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  <p>{selectedProject.description}</p>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 mb-6">
                  <h4 className="text-xs font-bold font-mono text-cyan-500 uppercase tracking-wider mb-1">
                    Key Architectural Value
                  </h4>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {selectedProject.impact}
                  </p>
                </div>

                <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Overview
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
