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
    isFeatured: true,

    techBadges: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
    ],

    description:
      "[DUMMY DATA] This project is a contact management application designed to help users organize and manage their contact information. It provides a centralized interface for managing contact records, viewing relevant information, and performing common contact management operations. This description is intentionally extended to test the modal's responsive layout and internal scrolling behavior.",

    features: [
      "[DUMMY] Create and manage contact records.",
      "[DUMMY] View detailed information for each contact.",
      "[DUMMY] Update existing contact information.",
      "[DUMMY] Delete contact records.",
      "[DUMMY] Search and filter contacts.",
      "[DUMMY] Responsive interface for desktop and mobile devices.",
      "[DUMMY] Form validation and user feedback.",
    ],

    repositoryUrl: "https://github.com/Framzy/Website-Contact-Management",
    liveDemoUrl: "https://framzy-contact-management.vercel.app/",
  },
  {
    id: "project_02",
    thumbnail: thumbnail02,
    title: "Kedai Takjil",
    isFeatured: true,
    techBadges: [],
    description: "",
    features: [],
    liveDemoUrl: "https://framzy-kedai-takjil.vercel.app/",
  },
  {
    id: "project_03",
    thumbnail: thumbnail03,
    title: "Tic Tac Toe",
    isFeatured: true,
    techBadges: [],
    description: "",
    features: [],
    liveDemoUrl: "https://framzy-react-tic-tac-toe.vercel.app/",
  },
  {
    id: "project_04",
    thumbnail: thumbnail04,
    title: "Posyandu APP - Thesis",
    isFeatured: false,
    techBadges: [],
    description: "",
    features: [],
    repositoryUrl: "https://github.com/Framzy/PosyanduApp-Thesis-Application",
  },
  {
    id: "project_05",
    thumbnail: thumbnail05,
    title: "School Library App - Scholarship",
    isFeatured: false,
    techBadges: [],
    description: "",
    features: [],
  },
  {
    id: "project_06",
    thumbnail: thumbnail06,
    title: "Valorant Comp Analyzer",
    isFeatured: true,
    techBadges: [],
    description: "",
    features: [],
    liveDemoUrl: "https://framzy-valorant-comp-analyzer.vercel.app/",
  },
];
