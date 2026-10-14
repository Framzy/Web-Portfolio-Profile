import type { ProjectItem } from "../types";
import thumbnail01 from "../../../assets/projects/images/thumbnails/thumbnail_project01.webp";
import thumbnail02 from "../../../assets/projects/images/thumbnails/thumbnail_project02.webp";
import thumbnail03 from "../../../assets/projects/images/thumbnails/thumbnail_project03.webp";
import thumbnail04 from "../../../assets/projects/images/thumbnails/thumbnail_project04.webp";
import thumbnail05 from "../../../assets/projects/images/thumbnails/thumbnail_project05.webp";
import thumbnail06 from "../../../assets/projects/images/thumbnails/thumbnail_project06.webp";

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: "project_01",
    thumbnail: thumbnail01,
    title: "Contact Management",
    link: "https://contact-management-khaki.vercel.app/",
    techBadges: [],
    isFeatured: true,
  },
  {
    id: "project_02",
    thumbnail: thumbnail02,
    title: "Kedai Takjil",
    link: "https://framzy-kedai-takjil.vercel.app/",
    techBadges: [],
    isFeatured: true,
  },
  {
    id: "project_03",
    thumbnail: thumbnail03,
    title: "Tic Tac Toe",
    link: "https://framzy-react-tic-tac-toe.vercel.app/",
    techBadges: [],
    isFeatured: true,
  },
  {
    id: "project_04",
    thumbnail: thumbnail04,
    title: "Posyandu APP - Thesis",
    link: "https://github.com/Framzy/PosyanduApp-Thesis-Application",
    techBadges: [],
    isFeatured: false,
  },
  {
    id: "project_05",
    thumbnail: thumbnail05,
    title: "School Library App - Scholarship",
    link: undefined,
    techBadges: [],
    isFeatured: false,
  },
  {
    id: "project_06",
    thumbnail: thumbnail06,
    title: "Valorant Comp Analyzer",
    link: "https://framzy-valorant-comp-analyzer.vercel.app/",
    techBadges: [],
    isFeatured: true,
  },
];
