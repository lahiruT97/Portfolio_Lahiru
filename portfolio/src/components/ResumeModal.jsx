import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { personalInfo, experiences, projects, education } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const printRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personalInfo.name} - Resume</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @page {
              size: A4 portrait;
              margin: 12mm 14mm;
            }
            body {
              background: #ffffff !important;
              color: #000000 !important;
              font-family: ui-sans-serif, system-ui, sans-serif;
              padding: 0;
              margin: 0;
            }
            .avoid-break {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
          </style>
        </head>
        <body>
          <div>${printContent.innerHTML}</div>
          <script>
            window.onload = function() {
              window.focus();
              window.print();
              setTimeout(function() {
                window.frameElement.remove();
              }, 1000);
            };
          </script>
        </body>
      </html>
    `);
    doc.close();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full my-8 max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Action Header */}
          <div className="p-4 sm:px-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {personalInfo.name} — Curriculum Vitae
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-slate-900">
            <div ref={printRef} className="space-y-6 text-slate-900 dark:text-slate-100">
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                  {personalInfo.title} | Backend, Cloud &amp; Microsoft Power Platform Specialist
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-cyan-500" /> {personalInfo.phone}</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-cyan-500" /> {personalInfo.email}</span>
                  <span className="flex items-center gap-1"><LinkedinIcon className="w-3 h-3 text-blue-500" /> {personalInfo.linkedin}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-purple-500" /> {personalInfo.location}</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40">
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40">
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2.5">
                  Technical Skills
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <p><strong>Languages &amp; Frameworks:</strong> C#, .NET 9 / ASP.NET Core, ASP.NET MVC, JavaScript (ES6+), React, jQuery, AJAX, SQL</p>
                  <p><strong>Cloud &amp; AI:</strong> Azure Functions (Isolated Worker), Azure OpenAI, Azure Search Index, Cosmos DB, REST APIs</p>
                  <p><strong>Microsoft Power Platform:</strong> Dataverse, Model-Driven Apps, Canvas Apps, Power Automate, Dynamics 365</p>
                  <p><strong>Databases &amp; ORM:</strong> MS SQL Server, PostgreSQL, PL/SQL, NoSQL, Entity Framework Core (EF Core)</p>
                  <p><strong>Tools:</strong> XRM Toolbox, FetchXML, Azure DevOps, Git, Postman, Visual Studio, VS Code</p>
                </div>
              </div>

              {/* Experience */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40">
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3.5">
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={exp.id || exp.role || index} className="space-y-1.5 avoid-break">
                      <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
                        <div>
                          <strong className="text-slate-900 dark:text-white font-bold">{exp.role}</strong>
                          <span className="text-cyan-600 dark:text-cyan-400 font-semibold ml-2">| {exp.company}</span>
                        </div>
                        <span className="font-mono text-slate-500 dark:text-slate-400 text-xs">{exp.period} | {exp.location}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Engineering Projects */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40">
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3.5">
                  Key Engineering Projects
                </h2>
                <div className="space-y-3.5">
                  {projects.map((proj, index) => (
                    <div key={proj.id || proj.title || index} className="text-xs sm:text-sm avoid-break">
                      <div className="font-bold text-slate-900 dark:text-white">
                        {proj.title} — <span className="font-medium text-slate-500 dark:text-slate-400">{proj.subtitle}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mt-0.5">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 avoid-break">
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                  Education
                </h2>
                <div className="text-xs sm:text-sm">
                  <strong className="text-slate-900 dark:text-white">{education.degree}</strong>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium"> | {education.institution}</span>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                    Graduated: {education.graduationYear} | {education.honors} (GPA: {education.gpa})
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}