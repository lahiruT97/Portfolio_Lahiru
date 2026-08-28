import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  CloudLightning, 
  Layers, 
  Database, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Cpu
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const iconMap = {
    Code2: Code2,
    CloudLightning: CloudLightning,
    Layers: Layers,
    Database: Database,
    Terminal: Terminal
  };

  const filteredCategories = skillCategories.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => {
    if (activeCategory !== "all" && cat.id !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-slate-100/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Technical <span className="gradient-text">Skills &amp; Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg"
          >
            A high-performance technical stack built around .NET 9, Azure Cloud microservices, AI pipelines, and Microsoft Dataverse.
          </motion.p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm w-full md:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Stacks
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. C#, Azure, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Cpu;
              return (
                <motion.div
                  layout
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-3xl glass-card flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                          {cat.name}
                        </h3>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          {cat.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Skill List */}
                    <div className="space-y-3.5">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                              {skill.tag}
                            </span>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
