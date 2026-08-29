import React, { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";

// Lazy-load below-the-fold sections — reduces initial JS parse time
const About        = lazy(() => import("./components/About"));
const Skills       = lazy(() => import("./components/Skills"));
const Experience   = lazy(() => import("./components/Experience"));
const Projects     = lazy(() => import("./components/Projects"));
const Education    = lazy(() => import("./components/Education"));
const Contact      = lazy(() => import("./components/Contact"));
const Footer       = lazy(() => import("./components/Footer"));
const ResumeModal  = lazy(() => import("./components/ResumeModal"));

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("lahiru_portfolio_theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return true; // Default to sleek dark mode
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("lahiru_portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("lahiru_portfolio_theme", "light");
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${
      isDark 
        ? "bg-slate-950 text-slate-100 bg-tech-grid-dark" 
        : "bg-slate-50 text-slate-900 bg-tech-grid-light"
    }`}>
      {/* Interactive Particle Network */}
      <ParticleBackground isDark={isDark} />

      {/* Navigation Bar */}
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Hero loads eagerly (above the fold) */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Below-fold sections stream in as user scrolls */}
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Resume modal — only loaded when opened */}
      <Suspense fallback={null}>
        {isResumeOpen && (
          <ResumeModal 
            isOpen={isResumeOpen} 
            onClose={() => setIsResumeOpen(false)} 
          />
        )}
      </Suspense>
    </div>
  );
}
