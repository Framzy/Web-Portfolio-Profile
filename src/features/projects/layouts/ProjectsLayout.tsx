import type { ProjectItem, ProjectsView } from "../types";
import ProjectGrid from "./ProjectGrid";
import ProjectsSwiper from "./ProjectSwiper";

type ProjectsLayoutProps = {
  view: ProjectsView;
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
};

export default function ProjectsLayoyut({
  view,
  projects,
  onSelectProject,
}: ProjectsLayoutProps) {
  if (view === "grid") {
    return (
      <ProjectGrid projects={projects} onSelectProject={onSelectProject} />
    );
  }

  return (
    <ProjectsSwiper projects={projects} onSelectProject={onSelectProject} />
  );
}
