import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Cpu, 
  Server, 
  Sparkles, 
  GitBranch, 
  ShieldCheck, 
  Boxes, 
  Zap,
  GraduationCap
} from "lucide-react";
import { personalInfo, education } from "../data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: "Cloud & Microservices",
      desc: "Architecting resilient serverless APIs with Azure Functions (Isolated Worker Model), C#, and asynchronous event-driven flows.",
      color: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      text: "text-cyan-400"
    },
    {
      icon: Sparkles,
      title: "Enterprise AI & Search",
      desc: "Integrating Azure OpenAI and Azure Cognitive Search Index for real-time document indexing, vector retrieval, and intelligent automation.",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      text: "text-purple-400"
    },
    {
      icon: Boxes,
      title: "Power Platform & CRM",
      desc: "Developing custom Dataverse C# plugins, FetchXML optimizations, Canvas Apps, and enterprise Dynamics 365 workflow automations.",
      color: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-500/30",
      text: "text-blue-400"
    },
    {
      icon: ShieldCheck,
      title: "Clean Layered Architecture",
      desc: "Enforcing repository patterns, topological dependency graph evaluation, EF Core ORM optimization, and automated maintenance jobs.",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      text: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About <span className="gradient-text">Lahiru Pathiranage</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg"
          >
            Combining rigorous computer science foundations with high-throughput cloud & AI engineering.
          </motion.p>
        </div>

        {/* Top Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Architecting Enterprise-Grade Cloud & AI Systems
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
                    3+ Years Hands-on Production Engineering
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As a Software Engineer at <strong>One Billion Technology</strong>, I specialize in building 
                  mission-critical cloud backends using <strong>.NET 9 (Azure Functions Isolated Worker Model)</strong>, 
                  <strong> Azure OpenAI</strong>, and <strong>Microsoft Dataverse</strong>.
                </p>
                <p>
                  My engineering focus revolves around high performance, modular architecture, and sub-second 
                  computation engines. I've designed automated estimation frameworks utilizing 
                  <em> dynamic topological dependency graphs</em>, authored real-time RFP semantic search suites, 
                  and developed custom C# Dataverse plugins for enterprise Dynamics 365 ecosystems.
                </p>
                <p>
                  With a First-Class Honors Degree in Computer Science from the University of Kelaniya (GPA 3.75/4.00), 
                  I bridge mathematical precision with scalable software delivery.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="text-center sm:text-left">
                <span className="block text-xl font-black text-cyan-500">.NET 9</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Isolated Worker</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xl font-black text-indigo-500">Azure OpenAI</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Cognitive Search</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xl font-black text-purple-500">Dataverse</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">C# SDK Plugins</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xl font-black text-emerald-500">First-Class</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Honors Graduate</span>
              </div>
            </div>
          </motion.div>

          {/* Academic & Honors side-card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900/30 via-slate-900/60 to-cyan-900/30 dark:bg-slate-900/80 border border-indigo-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="inline-block px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 font-mono text-xs font-bold uppercase mb-2">
                Academic Distinction
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Bachelor of Computer Science (Hons)
              </h4>

              <p className="text-indigo-200/90 text-sm font-medium mb-4">
                University of Kelaniya, Sri Lanka (2023)
              </p>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-500/20 mb-4">
                <div className="text-xs text-slate-400 mb-1">Cumulative GPA</div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-white">
                  3.75 / 4.00
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> First-Class Honors Awarded
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              // Focus: Distributed Systems, Scalable Cloud, Algorithms
            </div>
          </motion.div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center ${pillar.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
