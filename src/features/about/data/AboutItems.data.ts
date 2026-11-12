import type {
  AboutBottomIcon,
  HobbiesItem,
  LanguagesItem,
  PersonalDescription,
} from "../types";
import codingIcon from "../../../assets/about/images/icons/Coding.webp";
import GameIcon from "../../../assets/about/images/icons/Game.webp";
import MusicIcon from "../../../assets/about/images/icons/Music.webp";
import MovieIcon from "../../../assets/about/images/icons/Movie.webp";
import FootballIcon from "../../../assets/about/images/icons/Football.webp";
import TravelIcon from "../../../assets/about/images/icons/Travel.webp";
import EducationIcon from "../../../assets/about/images/icons/education_icon.webp";
import ExperienceIcon from "../../../assets/about/images/icons/experience_icon.webp";
import LanguagesIcon from "../../../assets/about/images/icons/languages_icon.webp";
import HobbiesIcon from "../../../assets/about/images/icons/hobbies_icon.webp";

export const HOBBIES_ITEMS: HobbiesItem[] = [
  { src: codingIcon, alt: "Programming icon", label: "Programming" },
  { src: GameIcon, alt: "Gaming icon", label: "Gaming" },
  { src: MusicIcon, alt: "Music icon", label: "Music" },
  { src: MovieIcon, alt: "Movie icon", label: "Movies" },
  { src: FootballIcon, alt: "Football icon", label: "Football" },
  { src: TravelIcon, alt: "Travel icon", label: "Traveling" },
];

export const LANGUAGES_ITEMS: LanguagesItem[] = [
  { label: "Indonesia", percentage: 90 },
  { label: "English", percentage: 70 },
];

export const ABOUT_BOTTOM_ICONS: AboutBottomIcon[] = [
  { id: "education", src: EducationIcon, alt: "education icon" },
  { id: "experience", src: ExperienceIcon, alt: "experience icon" },
  { id: "languages", src: LanguagesIcon, alt: "languages icon" },
  { id: "hobbies", src: HobbiesIcon, alt: "hobbies icon" },
];

export const Personal_Description: PersonalDescription =
  "A Computer Science graduate who is very enthusiastic about starting a career as a Software Developer.  " +
  "Currently, I am focused on designing functional web interfaces while continuing to expand my knowledge in backend architecture " +
  "and automated quality assurance (QA) testing to gain a comprehensive understanding of applications. I truly enjoy the learning process, " +
  "solving technical problems through logical reasoning, and turning lines of code into actual digital solutions.";
