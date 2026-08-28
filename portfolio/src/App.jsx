import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import ParticleBackground from "./components/ParticleBackground";

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

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
