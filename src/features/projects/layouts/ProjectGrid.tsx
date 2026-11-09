import { motion } from "framer-motion";
import { ProjectCard } from "../components/layout/ProjectCard";
import type { ProjectItem } from "../types";

type ProjectsGridProps = {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
};

export default function ProjectsGrid({
  projects,
  onSelectProject,
}: ProjectsGridProps) {
  if (!projects.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="border border-white px-6 py-4 text-white"
        >
          <ProjectCard
            project={project}
            number={index + 1}
            onSelectProject={onSelectProject}
          />
        </div>
      ))}
    </motion.div>
  );
}
