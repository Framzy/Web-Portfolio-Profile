import type { ProjectItem } from "../types";
import thumbnail01 from "../../../assets/projects/images/thumbnails/thumbnail_project_portfolio_profile.webp";
import thumbnail02 from "../../../assets/projects/images/thumbnails/thumbnail_project_contact_management.webp";
import thumbnail03 from "../../../assets/projects/images/thumbnails/thumbnail_project_kedai_takjil.webp";
import thumbnail04 from "../../../assets/projects/images/thumbnails/thumbnail_project_valorant_comp_analyzer.webp";
import thumbnail05 from "../../../assets/projects/images/thumbnails/thumbnail_project_tic_tac_toe.webp";
import thumbnail06 from "../../../assets/projects/images/thumbnails/thumbnail_project_posyandu_app.webp";
import thumbnail07 from "../../../assets/projects/images/thumbnails/thumbnail_project_school_library_app.webp";

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: "project_01",
    thumbnail: thumbnail01,
    title: "Portfolio Profile",
    isFeatured: true,

    techBadges: ["React", "TypeScript", "Vite", "Tailwind CSS"],

    description:
      "A portfolio profile website built to showcase my profile, technical skills, and development projects. It provides an overview of my background, technical expertise, and projects through a responsive and interactive interface.",

    features: [
      "Personal introduction and profile overview.",
      "Technical skills showcase covering programming languages, databases, operating systems, and cloud computing.",
      "Project gallery with grid and swiper views.",
      "Project detail modal with descriptions, technologies, and key features.",
      "Responsive layout for desktop and mobile devices.",
      "Navigation between portfolio sections.",
      "Social and professional profile links.",
    ],

    repositoryUrl: "https://github.com/Framzy/Web-Portfolio-Profile",
  },
  {
    id: "project_02",
    thumbnail: thumbnail02,
    title: "Contact Management",
    isFeatured: true,

    techBadges: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "Prisma",
    ],

    description:
      "A full-stack contact management web application featuring user authentication, contact and address management, and REST API integration. Users can manage their profiles, organize contact records, and maintain associated addresses through a responsive interface.",

    features: [
      "User registration, login, profile management, and logout.",
      "Create, view, update, delete, search, and paginate contact records.",
      "Manage addresses associated with individual contacts.",
      "Protected dashboard pages with authentication checks.",
      "API request validation using Joi.",
      "Loading indicators, SweetAlert2 notifications, and Lottie error animations.",
    ],

    repositoryUrl: "https://github.com/Framzy/Website-Contact-Management",
    liveDemoUrl: "https://framzy-contact-management.vercel.app/",
  },
  {
    id: "project_03",
    thumbnail: thumbnail03,
    title: "Kedai Takjil",
    isFeatured: true,

    techBadges: [
      "React",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "TiDB Cloud",
      "MongoDB Atlas",
      "Microsoft SQL Server",
    ],

    description:
      "A responsive full-stack mini e-commerce application for browsing takjil products and placing orders. Built with React and a Laravel REST API backend, the project supports multiple database configurations, including TiDB Cloud and MongoDB Atlas for online environments, as well as Microsoft SQL Server for local development.",

    features: [
      "Browse available takjil products and view product details.",
      "Add products to the shopping cart.",
      "Update product quantities and remove cart items.",
      "Calculate the total order amount.",
      "Submit orders through the checkout flow.",
      "Persist shopping cart contents using localStorage.",
      "Support multiple database configurations for different environments.",
      "Handle loading states and API errors with retry functionality.",
    ],

    repositoryUrl: "https://github.com/Framzy/Website-Kedai-Takjil",
    liveDemoUrl: "https://framzy-kedai-takjil.vercel.app/",
  },
  {
    id: "project_04",
    thumbnail: thumbnail04,
    title: "Valorant Comp Analyzer",
    isFeatured: true,

    techBadges: [
      "JavaScript",
      "Python",
      "Flask",
      "pandas",
      "NumPy",
      "XGBoost",
      "scikit-learn",
    ],

    description:
      "A web application for analyzing historical Valorant agent compositions and estimating team composition performance. It provides historical composition analysis through rule-based classification and team win-rate estimation using an XGBoost regression model.",

    features: [
      "Analyze agent compositions based on map and year.",
      "View historical win rates and pick rates.",
      "Identify composition role patterns and playstyles.",
      "Explore recommendations based on historical composition data.",
      "Select a team, map, year, and five agents for team prediction.",
      "Estimate team composition win rates using an XGBoost Regressor.",
      "Process prediction inputs through a dedicated feature engineering and inference pipeline.",
    ],

    repositoryUrl: "https://github.com/Framzy/Website-Valorant-Comp-Analysis",
    liveDemoUrl: "https://framzy-valorant-comp-analyzer.vercel.app/",
  },
  {
    id: "project_05",
    thumbnail: thumbnail05,
    title: "Tic Tac Toe",
    isFeatured: false,

    techBadges: ["React", "JavaScript", "Tailwind CSS"],

    description:
      "A simple two-player Tic Tac Toe game built with React as a hands-on project for practicing fundamental React concepts, including components, state management, props, and event handling.",

    features: [
      "Local two-player gameplay.",
      "Display an indicator for the active player.",
      "Detect and display the winner at the end of a game.",
      "Responsive game interface.",
    ],

    repositoryUrl: "https://github.com/Framzy/Tic-Tac-Toe",
    liveDemoUrl: "https://framzy-react-tic-tac-toe.vercel.app/",
  },
  {
    id: "project_06",
    thumbnail: thumbnail06,
    title: "Posyandu APP - Thesis",
    isFeatured: false,
    techBadges: [],
    description: "",
    features: [],
    repositoryUrl: "https://github.com/Framzy/PosyanduApp-Thesis-Application",
  },
  {
    id: "project_07",
    thumbnail: thumbnail07,
    title: "School Library App - Scholarship",
    isFeatured: false,
    techBadges: [],
    description: "",
    features: [],
  },
];
