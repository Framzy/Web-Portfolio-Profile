import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import type { ProjectItem } from "../types";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { ProjectCard } from "../components/layout/ProjectCard";
import "swiper/css";
import "swiper/css/pagination";

type ProjectsSwiperProps = {
  projects: ProjectItem[];
};

function chunk<T>(arr: T[], size = 2): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function ProjectsSwiper({ projects }: ProjectsSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const projectsToShow = projects.filter((project) => project.isFeatured);

  if (!projectsToShow.length) return null;

  const numberedProjects = projectsToShow.map((project, index) => ({
    project,
    number: index + 1,
  }));

  const slides = chunk(numberedProjects, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`w-full h-fit flex flex-row items-center justify-center gap-2 md:gap-5`}
    >
      <div className="left-slide-content">
        <button
          title="prevButton"
          className="cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeftLong size={20} className="text-white" />
        </button>
      </div>

      <div className="slide-content w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {slides.map((pair) => (
            <SwiperSlide key={pair[0].project.id}>
              <div
                className=" border-2 border-[#898989] grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none 
                  items-center justify-center px-8 py-3 gap-5 text-white"
              >
                {pair.map(({ project, number }) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    number={number}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="right-slide-content">
        <button
          title="nextButton"
          className="cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRightLong size={20} className="text-white" />
        </button>
      </div>
    </motion.div>
  );
}
