import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy,
  Layers,
  Cloud,
  BrainCircuit,
  Database
} from "lucide-react";

const Linkedin = ({ className = "w-4 h-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState("azure-func");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    ".NET 9 Backend Architect",
    "Azure Cloud & AI Specialist",
    "Microsoft Power Platform Pro",
    "Dataverse & Clean Architecture Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const codeSnippets = {
    "azure-func": `// Seer 365 AI RFP Pipeline (.NET 9 Isolated Worker)
[Function("ProcessEnterpriseRFP")]
public async Task<RFPResponse> Run(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequestData req)
{
    var context = await req.ReadFromJsonAsync<RFPContext>();
    
    // Semantic Vector Query via Azure Cognitive Search
    var vectors = await _searchIndex.QueryVectorsAsync(context.DocumentId);
    
    // Azure OpenAI Semantic Reasoning
    var response = await _openAiClient.GenerateCompletionAsync(vectors);
    
    // Sync Enterprise CRM Dataverse Entity
    await _dataverseService.UpsertRecordAsync("seer_rfp_result", response);
    return new RFPResponse { Status = "Indexed & Synced", LatencyMs = 42 };
}`,
    "clean-arch": `// Topological Dependency Engine
public class ProjectWorkbookEngine : IEstimationEngine
{
    private readonly IDataverseRepository _repository;
    
    public async Task<ROMCostPlan> CalculateHierarchyAsync(Guid projectId)
    {
        var graph = await _repository.BuildTopologicalGraphAsync(projectId);
        var calculatedNodes = graph.EvaluateStrategyPatterns();
        
        return new ROMCostPlan
        {
            TotalEffortHours = calculatedNodes.Sum(n => n.Effort),
            ConfidenceScore = 0.98,
            ExecutionModel = "IsolatedWorker.NET9"
        };
    }
}`
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-700/60 dark:border-cyan-500/30 text-xs font-semibold shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 dark:text-slate-200 light:text-slate-800">
                {personalInfo.status}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 dark:text-cyan-300 text-[10px] font-mono font-bold tracking-wider uppercase">
                First-Class (GPA 3.75)
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Hi, I'm <br />
              <span className="gradient-text font-black">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Dynamic Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-9 my-3 flex items-center"
            >
              <span className="text-lg sm:text-xl font-mono font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="text-cyan-500 font-bold">&gt;</span>
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyan-600 dark:text-cyan-400 font-semibold"
                >
                  {roles[roleIndex]}
                </motion.span>
                <span className="w-2 h-5 bg-cyan-500 animate-pulse inline-block"></span>
              </span>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-600 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            >
              Software Engineer with <strong>3+ years of enterprise experience</strong> architecting scalable 
              cloud microservices on <strong>.NET 9 & Azure</strong>, orchestrating 
              <strong> Azure OpenAI</strong> workflows, and engineering custom 
              <strong> Microsoft Dataverse & Power Platform</strong> solutions.
            </motion.p>

            {/* Quick Contact & Info Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>{personalInfo.location}</span>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-50" />
                )}
              </button>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/60 hover:bg-slate-50 dark:hover:bg-slate-850 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>View / Download CV</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture Showcase + Floating Tech Icons */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Decorative Tech Rings */}
              <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] rounded-full border border-dashed border-indigo-500/30 animate-reverse-spin pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-purple-600/25 rounded-3xl blur-3xl -z-10" />

              {/* Main Cutout Display Card */}
              <div className="relative w-64 h-84 sm:w-80 sm:h-[430px] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-slate-900/80 shadow-2xl shadow-cyan-500/25 group flex items-end justify-center">
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-slate-950 relative flex items-end justify-center">
                  
                  {/* Subtle Tech Grid Pattern behind cutout */}
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  
                  <img
                    src="lahiru2_cutout.png"
                    alt="Lahiru Pathiranage"
                    className="w-auto h-[96%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700 relative z-10"
                  />
                  
                  {/* Overlay Name & Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between z-20 shadow-lg">
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Lahiru Pathiranage</div>
                      <div className="text-[10px] font-mono text-cyan-400">Software Engineer</div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge 1: .NET 9 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-8 px-3.5 py-2 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-cyan-500/10 flex items-center gap-2 z-30"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-600/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-none">.NET 9</div>
                  <div className="text-[9px] text-cyan-400 font-mono">Isolated Worker</div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 2: Azure & AI */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-indigo-500/40 shadow-xl shadow-indigo-500/10 flex items-center gap-2 z-30"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-none">Azure OpenAI</div>
                  <div className="text-[9px] text-purple-300 font-mono">Cognitive Search</div>
                </div>
              </motion.div>

              {/* Floating Tech Badge 3: Power Platform / Dataverse */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-8 sm:-right-10 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 shadow-lg flex items-center gap-1.5 z-30"
              >
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-bold text-slate-200">Dataverse SDK</span>
              </motion.div>
            </motion.div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-10">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400">3+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Years Exp.</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">3.75</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Honors GPA</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">On-Time</div>
              </div>
            </div>

          </div>

        </div>

        {/* Code Snippet Interactive Terminal Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24 max-w-4xl mx-auto code-window overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                LahiruPathiranage.Architecture.cs
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveCodeTab("azure-func")}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                  activeCodeTab === "azure-func"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                AzureFunction.cs
              </button>
              <button
                onClick={() => setActiveCodeTab("clean-arch")}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                  activeCodeTab === "clean-arch"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                WorkbookEngine.cs
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-slate-950/95 text-slate-200">
            <pre className="text-slate-300">
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}