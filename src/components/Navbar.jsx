"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 px-6 py-5"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Faik Patel</h1>

          <div className="hidden flex gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#skills"
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              Education
            </a>

            <a
              href="#projects"
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 flex flex-col gap-5 border-t border-zinc-800 pt-6 md:hidden"
            >
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Education
              </a>

              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
