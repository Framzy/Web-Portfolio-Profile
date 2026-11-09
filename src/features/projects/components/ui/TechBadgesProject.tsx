import type { ProjectItem } from "../../types";

type Props = {
  project: ProjectItem;
};

export function TechBadgesProject({ project }: Props) {
  return (
    <div
      role="group"
      aria-label="Technologies used"
      className="flex flex-wrap gap-1.5"
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
  );
}
