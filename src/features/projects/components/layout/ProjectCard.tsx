import type { ProjectItem } from "../../types";
import { ViewProjectButton } from "../ui/ViewProjectButton";
import { TechBadgesProject } from "../ui/TechBadgesProject";

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
              className="w-full h-full object-cover hover:scale-105 hover:brightness-80 transition-all duration-300 ease-in-out"
            />
            <ViewProjectButton
              project={project}
              onSelectProject={onSelectProject}
            />
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
          <TechBadgesProject project={project} />
        ) : (
          <p className="text-[11px] px-2 py-0.5 w-fit rounded bg-[#353438] text-neutral-300 font-mono">
            No technologies listed yet.
          </p>
        )}
      </div>
    </div>
  );
}
