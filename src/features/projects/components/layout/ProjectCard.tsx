import type { ProjectItem } from "../../types";

type Props = {
  project: ProjectItem;
  number: number;
  onSelectProject: (project: ProjectItem) => void;
};

export function ProjectCard({ project, number, onSelectProject }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <p className="text-xs text-neutral-400">
        Project_{String(number).padStart(2, "0")}
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-white w-full aspect-video">
        {project.thumbnail ? (
          <div className="relative w-full h-full">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="absolute bottom-2 right-2 px-4 py-2 rounded-sm border border-white bg-black/75 text-white 
                     hover:bg-white/60 hover:text-black 
                     transition-all duration-150 cursor-pointer inline-flex items-center gap-1 font-manrope text-sm"
            >
              <span>View Details</span>
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1b546f]">
            <h3 className="text-white text-center font-manrope text-sm px-4">
              {project.title}
            </h3>
          </div>
        )}
      </div>

      <h2 className="text-sm font-semibold">{project.title}</h2>

      <div className="min-h-5">
        {project.techBadges && project.techBadges.length > 0 ? (
          <div
            className="flex flex-wrap gap-1.5"
            aria-label="Technologies used"
          >
            {project.techBadges.map((badge) => (
              <span
                key={badge}
                className="text-[11px] px-2 py-0.5 rounded bg-[#353438] text-neutral-300 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-[11px] px-2 py-0.5 w-fit rounded bg-[#353438] text-neutral-300 font-mono">
            No technologies listed yet.
          </p>
        )}
      </div>
    </div>
  );
}
