export type ProjectItem = {
  id: string;
  thumbnail: string;
  title: string;
  isFeatured: boolean;

  techBadges: string[];
  description: string;
  features: string[];

  repositoryUrl?: string;
  liveDemoUrl?: string;
};

export type ProjectsView = "grid" | "swiper";
