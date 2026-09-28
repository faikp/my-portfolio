import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Product Admin Dashboard",
    description:
      "A responsive product management dashboard built with Next.js and React. It includes product listing, search, category filtering, sorting and pagination, with API-based data fetching and authentication handling.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "REST API",
    ],
    githubUrl: "YOUR_GITHUB_URL",
    liveUrl: "https://product-admin-dashboard-two-tau.vercel.app/login",
    previewUrl: "https://product-admin-dashboard-two-tau.vercel.app/login",
  },

  {
    title: "AK Interior Studio",
    description:
      "A modern responsive interior design website built for a real-world client project, focused on clean UI, responsive layouts and a premium visual experience.",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "Framer Motion",
    ],
    githubUrl: "YOUR_GITHUB_URL",
    liveUrl: "YOUR_LIVE_URL",
    previewUrl: "YOUR_PREVIEW_URL",
  },

  {
    title: "Contact App",
    description:
      "A responsive contact management application built with HTML, CSS and JavaScript. It allows users to add, search and manage contacts with data stored using browser localStorage.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "LocalStorage",
      "Responsive UI",
    ],
    githubUrl: "YOUR_GITHUB_URL",
    liveUrl: "https://faikp-contact-app.vercel.app/index.html",
    previewUrl: "https://faikp-contact-app.vercel.app/index.html",
  },

  {
    title: "Personal Portfolio",
    description:
      "A responsive personal developer portfolio built to showcase my projects, skills and frontend development experience with a clean and minimal user interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    githubUrl: "YOUR_GITHUB_URL",
    liveUrl: "https://faikp.github.io/11-responsive-portfolio/",
    previewUrl: "https://faikp.github.io/11-responsive-portfolio/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        Projects
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
        A selection of projects I've built while learning, experimenting and
        solving real-world problems.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}
