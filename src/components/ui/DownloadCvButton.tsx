import type { CvFile } from "../../data/CV.data";

type Props = {
  cvFile: CvFile;
};

export default function DownloadCvButton({ cvFile }: Props) {
  return (
    <>
      <div
        aria-label="Download CV"
        className="bg-[#39EEFA] text-black text-xs md:text-sm font-bold font-manrope 
          h-10 md:h-12 w-40 md:w-50 lg:w-57 mr-2 rounded hover:bg-[#ffffff] cursor-pointer 
          transition-all duration-300 delay-75 ease-in-out
        "
      >
        <a
          href={cvFile.href}
          download={cvFile.fileName}
          className="flex items-center justify-center h-full w-full
          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          DOWNLOAD CV
        </a>
      </div>
    </>
  );
}
