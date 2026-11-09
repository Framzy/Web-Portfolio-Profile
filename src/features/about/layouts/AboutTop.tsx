import { motion } from "framer-motion";
import type { Props } from "../../../types/propsNavigate";
import {
  fadeIn,
  fadeInRight,
  fadeInLeft,
} from "../../../utils/motionVariants.ts";
import ContactMeButton from "../components/ui/ContactMeButton";
import PersonalDescription from "../components/ui/PersonalDescription";
import ProfileImage from "../components/ui/ProfileImage";
import SeeProjectButton from "../components/ui/SeeProjectButton";

export default function AboutTop({ onNavigate }: Props) {
  const onToProject = () => {
    onNavigate("project");
  };

  return (
    <>
      <motion.div
        {...fadeIn}
        className="flex w-4/5 md:w-fit mx-auto box-border pt-4 md:pt-10"
      >
        <div className="w-full flex flex-col items-center justify-center box-border gap-2">
          <div className="w-full flex items-center justify-center md:justify-center box-border">
            <p className="text-[#39EEFA] font-manrope font-bold text-4xl md:text-5xl lg:text-6xl tracking-wide text-center">
              SOFTWARE <span className="text-white">DEVELOPER</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-center md:justify-start box-border">
            <p className="text-white font-manrope text-xs md:text-sm">
              BASED IN JAKARTA
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col w-5/6 md:w-4/5 mx-auto box-border py-10">
        <div className="flex flex-col md:flex-row justify-center box-border gap-6 md:gap-0">
          <motion.div
            {...fadeInRight}
            className="w-full md:w-1/2 flex items-start justify-center px-10 md:px-4 xl:px-16 "
          >
            <div className="w-4/5 md:w-full max-w-100">
              <ProfileImage />
            </div>
          </motion.div>

          <motion.div
            {...fadeInLeft}
            className=" w-full md:w-1/2 flex flex-col px-10 md:px-4 xl:px-16"
          >
            <p className="aboutMe-line text-neutral-300 font-thin font-poppins text-end text-[10px]">
              ///////////////// About_Me
            </p>
            <p className="aboutMe-name-line text-neutral-400 flex flex-col font-manrope text-2xl md:text-3xl">
              HELLO
              <span className="text-white">I’M FARDEN RAMZY MUHARRAM</span>
            </p>
            <PersonalDescription />
            <div className="box-border flex flex-row justify-start gap-5 mt-5 text-xs lg:text-sm">
              <ContactMeButton />
              <SeeProjectButton onToProject={onToProject} />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
