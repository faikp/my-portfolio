"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg"
      >
        I'm a frontend developer focused on building clean, responsive and
        user-friendly web experiences. I work with React, Next.js, JavaScript
        and modern CSS frameworks to turn ideas into functional and polished
        interfaces.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg"
      >
        I enjoy turning ideas into real-world projects and continuously
        improving my skills by building, experimenting and solving practical
        problems.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500"
      >
        <span>Frontend Development</span>
        <span>React & Next.js</span>
        <span>Responsive UI</span>
      </motion.div>
    </section>
  );
}
