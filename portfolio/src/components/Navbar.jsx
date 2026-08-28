import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, FileText, Code, Sparkles, Send } from "lucide-react";

export default function Navbar({ isDark, setIsDark, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
          return;
        }
      }
      if (window.scrollY < 250) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-200/40 dark:shadow-cyan-500/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
            <span className="font-mono">LP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              Lahiru Pathiranage
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </span>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-cyan-500/15 dark:bg-cyan-400/10 border border-cyan-500/40 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme Toggle + Resume Button + Contact CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="relative p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-indigo-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Quick Resume View */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 hover:scale-102 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-500" />
            <span>Resume</span>
          </button>

          {/* Contact Me CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border-l-4 border-cyan-500"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-cyan-500" />
                  <span>Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}