import type { CvFile } from "../../data/CV.data";

type Props = {
  cvFile: CvFile;
};

export default function DownloadCvButton({ cvFile }: Props) {
  return (
    <>
      <div
        aria-label="Download CV"
        className="bg-white text-black text-xs md:text-sm font-bold font-manrope 
          h-10 md:h-12 w-40 md:w-50 lg:w-57 mr-2 rounded hover:bg-[#39EEFA] cursor-pointer 
          transition-all duration-300 delay-75 ease-in-out
        "
      >
        <a
          href={cvFile.href}
          download={cvFile.fileName}
          className="flex items-center justify-center h-full w-full"
        >
          DOWNLOAD CV
        </a>
      </div>
    </>
  );
}
