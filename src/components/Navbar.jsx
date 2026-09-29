"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Active section while scrolling
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth navigation
  const handleNavClick = (e, id) => {
    e.preventDefault();

    setActive(id);
    setIsOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (!section) return;

      const navbar = document.querySelector("nav");
      const navbarHeight = navbar?.offsetHeight || 0;

      const position =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 px-6 py-5 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Faik Patel</h1>

          {/* Desktop */}
          <div className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm transition-colors duration-200 ${
                  active === link.id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 flex flex-col gap-5 border-t border-zinc-800 pt-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    handleNavClick(e, link.id);
                    setIsOpen(false);
                  }}
                  className={`py-1 text-sm transition-colors duration-200 ${
                    active === link.id
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
