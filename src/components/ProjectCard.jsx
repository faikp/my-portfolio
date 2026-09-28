export default function ProjectCard({
  title,
  description,
  tech = [],
  githubUrl,
  liveUrl,
  previewUrl,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl mb-8">
      
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

        <span className="ml-2 text-xs text-zinc-500">
          {title}
        </span>
      </div>

      <div className="aspect-video w-full overflow-hidden bg-zinc-950">
        <iframe
          src={previewUrl}
          title={title}
          className="h-full w-full border-0"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            GitHub
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}