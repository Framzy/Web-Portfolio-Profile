import { FaArrowRight } from "react-icons/fa";
type Props = {
  onToProject: () => void;
};

export default function SeeProjectButton({ onToProject }: Props) {
  return (
    <button
      type="button"
      className="bg-[#0A090F] text-white flex flex-row items-center gap-1 h-fit border border-white py-2 px-2 lg:px-4
                focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 
                rounded box-border cursor-pointer 
                transition-all duration-300 ease-in-out hover:transform hover:-skew-x-8"
      onClick={onToProject}
    >
      <p className="font-manrope font-bold w-full">See projects</p>
      <FaArrowRight size={16} />
    </button>
  );
}
