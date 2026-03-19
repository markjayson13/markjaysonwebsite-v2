import { socialLinks } from "./site";
import { withBase } from "../utils/paths";

export type CanvaPageKey =
  | "home"
  | "bio"
  | "resume"
  | "portfolio"
  | "research"
  | "projects"
  | "articles"
  | "creative"
  | "profiles";

export type CanvaHotspot = {
  label: string;
  href: string;
  left: number;
  top: number;
  width: number;
  height: number;
  external?: boolean;
};

export type CanvaAnchor = {
  id: string;
  top: number;
};

export type CanvaPageConfig = {
  pageKey: CanvaPageKey;
  slide: number;
  title: string;
  description: string;
  accent: string;
  ratio: number;
  maskColor: string;
  maskHeight?: number;
  hotspots?: CanvaHotspot[];
  anchors?: CanvaAnchor[];
};

const socialLookup = new Map(socialLinks.map((link) => [link.label, link.href]));

export const canvaDesignEmbedBase =
  "https://www.canva.com/design/DAHEQQz9uNc/MFku8ZZ07-Kx5DzZ_LTHvg/view?embed";

export const canvaPublicSiteBase = "https://495markjayson.my.canva.site/markjaysonmartinezfarol";

export const canvaEmbedUrl = (slide: number) => `${canvaDesignEmbedBase}#${slide}`;

const githubProfile = "https://github.com/markjayson13";

export const canvaPages: Record<CanvaPageKey, CanvaPageConfig> = {
  home: {
    pageKey: "home",
    slide: 1,
    title: "Homepage",
    description: "Homepage for Mark Jayson Martinez Farol.",
    accent: "#020202",
    ratio: 1.67,
    maskColor: "#040404",
    maskHeight: 58,
    hotspots: [
      { label: "About", href: withBase("/bio"), left: 7.8, top: 38.8, width: 19.2, height: 4.5 },
      { label: "Resume/CV", href: withBase("/resume"), left: 7.8, top: 42.0, width: 19.2, height: 4.5 },
      { label: "Portfolio", href: withBase("/portfolio"), left: 7.8, top: 45.1, width: 19.2, height: 4.5 },
      { label: "Profiles", href: withBase("/profiles"), left: 7.8, top: 48.2, width: 19.2, height: 4.5 },
    ],
  },
  bio: {
    pageKey: "bio",
    slide: 2,
    title: "About",
    description: "Biographical overview for Mark Jayson Martinez Farol.",
    accent: "#edf0f2",
    ratio: 0.74,
    maskColor: "#edf0f2",
    maskHeight: 54,
    hotspots: [
      { label: "Education", href: withBase("/resume#education"), left: 4.8, top: 58.8, width: 16.5, height: 8.2 },
      { label: "Experience", href: withBase("/resume#experience"), left: 21.9, top: 58.8, width: 16.5, height: 8.2 },
      { label: "Profiles", href: withBase("/profiles"), left: 39.1, top: 58.8, width: 16.5, height: 8.2 },
      { label: "Skills", href: withBase("/resume#skills"), left: 4.8, top: 68.1, width: 16.5, height: 8.2 },
      { label: "Portfolio", href: withBase("/portfolio"), left: 21.9, top: 68.1, width: 16.5, height: 8.2 },
      { label: "Certifications", href: withBase("/resume#certifications"), left: 39.1, top: 68.1, width: 16.5, height: 8.2 },
    ],
  },
  resume: {
    pageKey: "resume",
    slide: 3,
    title: "Resume/CV",
    description: "Resume and curriculum vitae for Mark Jayson Martinez Farol.",
    accent: "#edf0f2",
    ratio: 4.74,
    maskColor: "#edf0f2",
    maskHeight: 54,
    anchors: [
      { id: "summary", top: 0.058 },
      { id: "education", top: 0.123 },
      { id: "experience", top: 0.287 },
      { id: "projects", top: 0.543 },
      { id: "certifications", top: 0.663 },
      { id: "skills", top: 0.883 },
    ],
    hotspots: [
      { label: "Research Papers", href: withBase("/research"), left: 34.5, top: 57.7, width: 27.6, height: 5.8 },
      { label: "Economic Tools", href: withBase("/projects#economic-tools"), left: 65.8, top: 57.7, width: 27.6, height: 5.8 },
      { label: "Data Engineering", href: withBase("/projects#data-engineering"), left: 3.2, top: 57.7, width: 27.6, height: 5.8 },
      { label: "Creative Roles", href: withBase("/creative"), left: 3.2, top: 60.9, width: 27.6, height: 5.8 },
      { label: "Film Reels", href: withBase("/creative"), left: 34.5, top: 60.9, width: 27.6, height: 5.8 },
      { label: "Other Publications", href: withBase("/articles"), left: 65.8, top: 60.9, width: 27.6, height: 5.8 },
    ],
  },
  portfolio: {
    pageKey: "portfolio",
    slide: 4,
    title: "Portfolio",
    description: "Portfolio hub for Mark Jayson Martinez Farol.",
    accent: "#040404",
    ratio: 0.74,
    maskColor: "#040404",
    maskHeight: 54,
    hotspots: [
      { label: "Research", href: withBase("/research"), left: 2.8, top: 35.6, width: 22.7, height: 27.2 },
      { label: "Projects", href: withBase("/projects"), left: 25.7, top: 35.6, width: 22.7, height: 27.2 },
      { label: "Articles", href: withBase("/articles"), left: 48.6, top: 35.6, width: 22.7, height: 27.2 },
      { label: "Creative", href: withBase("/creative"), left: 71.5, top: 35.6, width: 22.7, height: 27.2 },
    ],
  },
  research: {
    pageKey: "research",
    slide: 5,
    title: "Research",
    description: "Research page for Mark Jayson Martinez Farol.",
    accent: "#edf0f2",
    ratio: 3.84,
    maskColor: "#edf0f2",
    maskHeight: 54,
  },
  projects: {
    pageKey: "projects",
    slide: 6,
    title: "Projects",
    description: "Projects page for Mark Jayson Martinez Farol.",
    accent: "#1c2f45",
    ratio: 1.09,
    maskColor: "#1c2f45",
    maskHeight: 54,
  },
  articles: {
    pageKey: "articles",
    slide: 7,
    title: "Articles",
    description: "Articles page for Mark Jayson Martinez Farol.",
    accent: "#2f473e",
    ratio: 0.92,
    maskColor: "#2f473e",
    maskHeight: 54,
  },
  creative: {
    pageKey: "creative",
    slide: 8,
    title: "Creative",
    description: "Creative page for Mark Jayson Martinez Farol.",
    accent: "#a38734",
    ratio: 0.74,
    maskColor: "#a38734",
    maskHeight: 54,
  },
  profiles: {
    pageKey: "profiles",
    slide: 9,
    title: "Profiles",
    description: "Profile links for Mark Jayson Martinez Farol.",
    accent: "#040404",
    ratio: 0.78,
    maskColor: "#040404",
    maskHeight: 58,
    hotspots: [
      { label: "LinkedIn", href: socialLookup.get("LinkedIn") ?? withBase("/profiles"), left: 21.5, top: 40.7, width: 17.5, height: 9.5, external: true },
      { label: "GitHub", href: githubProfile, left: 40.5, top: 40.7, width: 17.5, height: 9.5, external: true },
      { label: "Backstage", href: socialLookup.get("Backstage") ?? withBase("/profiles"), left: 59.7, top: 40.7, width: 17.5, height: 9.5, external: true },
      { label: "ORCID", href: socialLookup.get("ORCID") ?? withBase("/profiles"), left: 21.5, top: 55.8, width: 17.5, height: 9.5, external: true },
      { label: "ResearchGate", href: socialLookup.get("ResearchGate") ?? withBase("/profiles"), left: 40.5, top: 55.8, width: 17.5, height: 9.5, external: true },
      { label: "Google Scholar", href: socialLookup.get("Google Scholar") ?? withBase("/profiles"), left: 59.7, top: 55.8, width: 17.5, height: 9.5, external: true },
      { label: "Facebook", href: socialLookup.get("Facebook") ?? withBase("/profiles"), left: 21.5, top: 72.2, width: 17.5, height: 9.5, external: true },
      { label: "Instagram", href: socialLookup.get("Instagram") ?? withBase("/profiles"), left: 40.5, top: 72.2, width: 17.5, height: 9.5, external: true },
    ],
  },
};
