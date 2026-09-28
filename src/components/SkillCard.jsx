"use client";

import { motion } from "framer-motion";

export default function SkillCard({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-colors hover:border-zinc-700"
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

        <h3 className="ml-2 text-sm font-medium text-zinc-300">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 p-5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-zinc-800 px-3 py-1.5 text-sm text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
