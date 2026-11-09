import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import type { ProjectItem } from "../../types";

type ProjectDetailModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const isBackdropClickRef = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
      }
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [project]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      const rect = dialogRef.current.getBoundingClientRect();
      const isOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      isBackdropClickRef.current = isOutside;
    } else {
      isBackdropClickRef.current = false;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current && isBackdropClickRef.current) {
      const rect = dialogRef.current.getBoundingClientRect();
      const isOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (isOutside) {
        onClose();
      }
    }
    isBackdropClickRef.current = false;
  };

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  const handleNativeClose = () => {
    if (project !== null) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onCancel={handleCancel}
      onClose={handleNativeClose}
      aria-labelledby={project ? "project-modal-title" : undefined}
      aria-describedby={project ? "project-modal-description" : undefined}
      aria-modal="true"
      className="fixed inset-0 m-auto w-11/12 max-w-4xl max-h-[80dvh] rounded-2xl bg-[#0a090f] text-white border border-[#353438] p-0 shadow-2xl overflow-hidden flex flex-col [&:not([open])]:hidden"
    >
      {project && (
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#353438] shrink-0">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <h2
                id="project-modal-title"
                className="text-lg md:text-xl font-bold text-white truncate font-manrope"
              >
                {project.title}
              </h2>
              {project.isFeatured && (
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border border-[#39EEFA]/50 bg-[#39EEFA]/10 text-[#39EEFA] font-mono">
                  Featured
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-neutral-800/60 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#39EEFA]"
            >
              <IoClose size={22} aria-hidden="true" />
            </button>
          </div>

          {/* Main Scrollable Content */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6 flex flex-col md:flex-row gap-6">
            {/* Desktop Left: Thumbnail */}
            <div className="w-full md:w-5/12 shrink-0">
              <div className="relative overflow-hidden rounded-xl border border-[#353438] w-full aspect-video bg-[#121118]">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1b546f]">
                    <span className="text-white text-center font-manrope text-sm px-4">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right: Project Information */}
            <div className="w-full md:w-7/12 flex flex-col gap-5 min-w-0">
              {/* Overview / Description */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[#39EEFA] font-semibold mb-2 font-mono">
                  Overview
                </h3>
                {project.description ? (
                  <p
                    id="project-modal-description"
                    className="text-sm text-neutral-300 leading-relaxed font-manrope"
                  >
                    {project.description}
                  </p>
                ) : (
                  <p className="text-sm text-neutral-500 italic font-manrope">
                    No description provided yet.
                  </p>
                )}
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[#39EEFA] font-semibold mb-2 font-mono">
                  Technology Stack
                </h3>
                {project.techBadges && project.techBadges.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs px-2.5 py-1 rounded bg-[#353438] text-neutral-200 font-mono"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-neutral-500 italic font-manrope">
                    No technology stack listed yet.
                  </p>
                )}
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[#39EEFA] font-semibold mb-2 font-mono">
                  Key Features
                </h3>
                {project.features && project.features.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300 font-manrope">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-neutral-500 italic font-manrope">
                    No key features listed yet.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-[#353438] bg-[#0a090f]/80 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-sm border border-neutral-600 bg-neutral-900 text-white hover:bg-neutral-800 hover:border-neutral-400 transition-colors inline-flex items-center gap-2 text-xs md:text-sm font-manrope cursor-pointer focus-visible:outline-2 focus-visible:outline-[#39EEFA]"
                >
                  <FaGithub size={16} aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-sm border border-[#39EEFA] bg-[#39EEFA] text-black font-semibold hover:bg-white hover:border-white transition-colors inline-flex items-center gap-2 text-xs md:text-sm font-manrope cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt size={12} aria-hidden="true" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-sm border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors text-xs md:text-sm font-manrope cursor-pointer focus-visible:outline-2 focus-visible:outline-[#39EEFA]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
