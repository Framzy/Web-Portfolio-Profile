import type { ProjectItem } from "../../types";
import { TECH_CONFIG } from "../../data/TechConfig.data";

type Props = {
  project: ProjectItem;
};

const DEFAULT_TECH_CONFIG = {
  backgroundColor: "#353438",
  textColor: "#D4D4D8",
};

export function TechBadgesProject({ project }: Props) {
  return (
    <div
      role="group"
      aria-label="Technologies used"
      className="flex flex-wrap gap-1.5"
    >
      {project.techBadges.map((badge) => {
        const config = TECH_CONFIG[badge] ?? DEFAULT_TECH_CONFIG;

        return (
          <span
            key={badge}
            style={{
              backgroundColor: config.backgroundColor,
              color: config.textColor,
            }}
            className="text-[11px] px-2 py-0.5 rounded font-mono"
          >
            {badge}
          </span>
        );
      })}
    </div>
  );
}
