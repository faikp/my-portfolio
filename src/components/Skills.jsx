"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";

const skillCards = [
    {
        title: "Frontend",
        skills: [
            "React.js",
            "Next.js",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "React Hooks",
            "Custom Hooks",
            "React Router",
            "Responsive Web Design",
        ],
    },

    {
        title: "UI & Design",
        skills: [
            "Tailwind CSS",
            "Bootstrap",
            "Responsive UI",
            "Flexbox",
            "CSS Grid",
            "Framer Motion",
        ],
    },

    {
        title: "APIs & Data",
        skills: [
            "REST APIs",
            "Axios",
            "Fetch API",
            "Redux Toolkit",
            "Context API",
            "LocalStorage",
        ],
    },

    {
        title: "Tools",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "npm",
            "Vercel",
            "Postman",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-4xl px-6 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
            >
                Skills
            </motion.h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {skillCards.map((card) => (
                    <SkillCard
                        key={card.title}
                        title={card.title}
                        skills={card.skills}
                    />
                ))}
            </div>
        </section>
    );
}