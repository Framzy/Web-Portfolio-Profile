import { FaArrowUp } from "react-icons/fa";
import type { ProjectItem } from "../../types";

type Props = {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
};

export function ViewProjectButton({ project, onSelectProject }: Props) {
  return (
    <button
      type="button"
      aria-label={`View details for ${project.title}`}
      aria-haspopup="dialog"
      onClick={() => onSelectProject(project)}
      className="absolute bottom-2 right-2 px-4 py-2 rounded-sm border border-white bg-black/75 text-white 
                hover:bg-white/60 hover:text-black 
                  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400
                  transition-all duration-150 cursor-pointer inline-flex items-center"
    >
      <span className="font-manrope text-sm">View Project</span>
      <FaArrowUp className="rotate-45 ml-1" size={15} />
    </button>
  );
}
