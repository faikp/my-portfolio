"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
    id="home"
    className="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-start px-6 pt-20 md:justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-medium text-zinc-400"
      >
        Hi, I'm Faik Patel
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl"
      >
        Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 text-lg text-zinc-400"
      >
        React • Next.js • JavaScript
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg"
      >
        I build clean, responsive and modern web experiences.
      </motion.p>

      <div className="mt-8 flex items-center justify-center gap-8">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#projects"
          className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
        >
          View Projects
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => setIsOpen(true)}
          className="w-fit rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
        >
          Contact Me
        </motion.a>
      </div>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
