import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Star
} from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Higher <span className="gradient-text">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg"
          >
            Rigorous foundations in computer science theory, algorithms, and enterprise software engineering.
          </motion.p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-xl shadow-cyan-500/20 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-500 dark:text-amber-400 font-mono text-xs font-bold uppercase mb-1">
                    First-Class Honors
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                    {education.institution}
                  </div>
                </div>
              </div>

              {/* GPA Badge */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shrink-0 w-full md:w-auto">
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                  Honors GPA
                </div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-400">
                  {education.gpa}
                </div>
                <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-8">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 mb-4">
                Key Academic Specializations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    Distributed Systems &amp; Cloud
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Microservices, concurrency, RESTful architectures, and data partitioning.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    Data Structures &amp; Algorithms
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Topological sorting, dependency graphs, graph traversal, and time complexity.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    Enterprise Database Engineering
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Relational schema design, SQL query indexing, transactions, and NoSQL storage.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
