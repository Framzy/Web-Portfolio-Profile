import type { ProjectsView } from "../../types";

type SeeAllProjectButtonProps = {
  view: ProjectsView;
  toggleView: () => void;
};

export default function SeeAllProjectButton({
  view,
  toggleView,
}: SeeAllProjectButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={view === "grid"}
      className="bg-transparent hover:bg-white/70 border border-white rounded cursor-pointer 
                text-xs md:text-sm text-white hover:text-black font-bold font-manrope 
                mt-5 mr-2 h-10 md:h-12 w-40 md:w-50 lg:w-57
                transition-all duration-200 ease-in-out"
      onClick={toggleView}
    >
      {view === "grid" ? "Show featured projects" : "Show all projects"}
    </button>
  );
}
