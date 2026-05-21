"use client";
import { useState, useEffect } from "react";
import { profile, navLinks } from "@/lib/data";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-base-200/70 backdrop-blur-xl border-b border-base-300/30 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3 max-w-container-max-width mx-auto">
        <a href="#home" className="flex items-center gap-4 text-primary">
          <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
            <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="bold" fontSize="40" fill="currentColor">BJE</text>
            <path d="M20 70 Q 50 85 80 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
          <span className="font-headline-md text-headline-md font-bold text-primary hidden sm:block">
            Barveily Joanabeth
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 font-nav-link text-nav-link">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base-content/70 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-lg">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
            title={theme === "celestial-terminal" ? "Light mode" : "Dark mode"}
          >
            <span className="material-symbols-outlined text-primary">
              {theme === "celestial-terminal" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          {isMobile && (
            <button
              className="material-symbols-outlined text-primary"
              onClick={() => setOpen(!open)}
            >
              {open ? "close" : "menu"}
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="bg-base-200/90 backdrop-blur-xl border-b border-base-300/30">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-gutter py-3 text-base-content/70 hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined text-lg">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
