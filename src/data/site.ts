import { withBase } from "../utils/paths";

export const canonicalSiteUrl = "https://markjayson.com";
export const creativeSiteUrl = "https://creative.markjayson.com";

export const externalLinks = {
  github: "https://github.com/markjayson13",
  linkedIn: "https://www.linkedin.com/in/markjaysonfarol/",
  googleScholar: "https://scholar.google.com/citations?user=vdr24hsAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0004-1245-9959",
  researchGate: "https://www.researchgate.net/profile/Mark-Jayson-Farol?ev=hdr_xprf",
  backstage: "https://www.backstage.com/tal/mark-jayson-farol/",
  instagram: "https://www.instagram.com/markjayson13/",
  facebook: "https://www.facebook.com/markjaysonfarol13",
  x: "https://twitter.com/mark_jayson13",
  macroByMark: "https://macrobymark.com",
  bennettDoi: "https://doi.org/10.9741/2766-7227.1033",
  ipedsPanelRepo: "https://github.com/markjayson13/IPEDSDB_Panel",
  fsaPanelRepo: "https://github.com/markjayson13/FSAVolumeReports_Panel",
} as const;

export type StructuredDataValue =
  | string
  | number
  | boolean
  | null
  | StructuredDataNode
  | StructuredDataValue[];

export type StructuredDataNode = {
  [key: string]: StructuredDataValue;
};

export type StructuredData = StructuredDataNode | StructuredDataNode[];

export type IndexableImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type SocialPreviewImage = IndexableImage & {
  width?: number;
  height?: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialIconName = "linkedin" | "github" | "scholar" | "orcid" | "researchgate";

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export type CornerMenuItem = {
  label: string;
  href: string;
  title: string;
  description: string;
};

export type PageTheme = {
  titleMeasure: string;
  leadMeasure: string;
  copyMeasure?: string;
};

export const withCreativeSite = (path = "/") => new URL(path, creativeSiteUrl).toString();

export const mainSiteTopLinks: NavLink[] = [
  { label: "Home", href: withBase("/") },
  { label: "About", href: withBase("/bio") },
  { label: "Resume/CV", href: withBase("/resume") },
  { label: "Portfolio", href: withBase("/portfolio") },
  { label: "Profiles", href: withBase("/profiles") },
  { label: "Contact", href: withBase("/#contact") },
];

export const footerSecondaryLinks: NavLink[] = [
  { label: "About", href: withBase("/bio") },
  { label: "Portfolio", href: withBase("/portfolio") },
  { label: "Resume", href: withBase("/resume") },
  { label: "Contact", href: withBase("/#contact") },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: withBase("/privacy-policy") },
  { label: "Terms of Use", href: withBase("/terms-of-use") },
];

export const footerContact = {
  email: "markjayson@markjayson.com",
  location: "Las Vegas, Nevada, United States",
  buttonLabel: "Get in Touch",
  buttonHref: withBase("/#contact"),
};

export const footerSocialLinks: FooterSocialLink[] = [
  { label: "LinkedIn", href: externalLinks.linkedIn, icon: "linkedin" },
  { label: "GitHub", href: externalLinks.github, icon: "github" },
  { label: "Google Scholar", href: externalLinks.googleScholar, icon: "scholar" },
  { label: "ORCID", href: externalLinks.orcid, icon: "orcid" },
  { label: "ResearchGate", href: externalLinks.researchGate, icon: "researchgate" },
];

export const cornerMenuItems: CornerMenuItem[] = [
  {
    label: "Home",
    href: withBase("/"),
    title: "Home",
    description: "Latest news, quick links, and the contact form.",
  },
  {
    label: "About",
    href: withBase("/bio"),
    title: "About",
    description: "Who I am, how I work, and what I'm aiming for next.",
  },
  {
    label: "Resume/CV",
    href: withBase("/resume"),
    title: "Resume/CV",
    description: "Education, experience, certifications, projects, and skills.",
  },
  {
    label: "Portfolio",
    href: withBase("/portfolio"),
    title: "Portfolio",
    description: "Research papers, data projects, and publications.",
  },
  {
    label: "Profiles",
    href: withBase("/profiles"),
    title: "Profiles",
    description: "LinkedIn, GitHub, Google Scholar, ORCID, and ResearchGate.",
  },
  {
    label: "Contact",
    href: withBase("/#contact"),
    title: "Contact",
    description: "Send a message about research, data work, or job opportunities.",
  },
];

export const pageThemes: Record<string, PageTheme> = {
  home: {
    titleMeasure: "54rem",
    leadMeasure: "36rem",
    copyMeasure: "70rem",
  },
  bio: {
    titleMeasure: "45rem",
    leadMeasure: "32rem",
    copyMeasure: "49rem",
  },
  resume: {
    titleMeasure: "52rem",
    leadMeasure: "56rem",
    copyMeasure: "70rem",
  },
  portfolio: {
    titleMeasure: "31rem",
    leadMeasure: "32rem",
    copyMeasure: "36rem",
  },
  profiles: {
    titleMeasure: "34rem",
    leadMeasure: "44rem",
    copyMeasure: "48rem",
  },
  privacy: {
    titleMeasure: "34rem",
    leadMeasure: "48rem",
    copyMeasure: "56rem",
  },
  terms: {
    titleMeasure: "34rem",
    leadMeasure: "48rem",
    copyMeasure: "56rem",
  },
};

export const profile = {
  name: "Mark Jayson Farol",
  fullName: "Mark Jayson Martinez Farol",
  title: "Economist & Data Scientist",
  location: "Las Vegas, Nevada, United States",
  summary:
    "Economist and data scientist who builds research data pipelines and uses econometrics to study higher-education finance, pricing, and policy.",
};

export const identityPersonStructuredData: StructuredDataNode = {
  "@type": "Person",
  "@id": `${canonicalSiteUrl}/#person`,
  name: profile.fullName,
  alternateName: [profile.name, "Mark Jayson M. Farol"],
  identifier: "mark-jayson-martinez-farol",
  url: `${canonicalSiteUrl}/`,
  description: profile.summary,
  jobTitle: profile.title,
  image: new URL(withBase("/images/bio/mark-jayson-bio-portrait.jpeg"), canonicalSiteUrl).toString(),
  homeLocation: {
    "@type": "Place",
    name: profile.location,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Nevada, Las Vegas",
  },
  sameAs: [
    externalLinks.linkedIn,
    externalLinks.github,
    externalLinks.googleScholar,
    externalLinks.orcid,
    externalLinks.researchGate,
    externalLinks.backstage,
    externalLinks.instagram,
    externalLinks.facebook,
    externalLinks.x,
    creativeSiteUrl,
  ],
};

export const buildProfilePageStructuredData = (
  pageUrl: string,
  pageName: string,
  pageDescription: string,
): StructuredDataNode[] => {
  const mainEntity: StructuredDataNode = {
    ...identityPersonStructuredData,
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
  };

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageName,
      description: pageDescription,
      mainEntity,
    },
    {
      "@context": "https://schema.org",
      ...mainEntity,
    },
  ];
};

export const buildPrimaryImageStructuredData = (pageUrl: string, image: IndexableImage): StructuredDataNode[] => {
  const imageUrl = new URL(image.src, canonicalSiteUrl).toString();

  return [
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${pageUrl}#image-1`,
      contentUrl: imageUrl,
      url: imageUrl,
      caption: image.caption ?? image.alt,
      description: image.alt,
      creator: {
        "@id": String(identityPersonStructuredData["@id"]),
      },
      creditText: profile.name,
      copyrightNotice: profile.name,
    },
  ];
};

export const socialPreviewImages = {
  home: {
    src: withBase("/images/home-contact-portrait.png"),
    alt: "Portrait of Mark Jayson Farol holding a glowing globe.",
    width: 1024,
    height: 1536,
  },
  bio: {
    src: withBase("/images/bio/mark-jayson-bio-portrait.jpeg"),
    alt: "Portrait of Mark Jayson Farol.",
    width: 1856,
    height: 2046,
  },
  profiles: {
    src: withBase("/images/headshot.jpeg"),
    alt: "Studio headshot of Mark Jayson Farol.",
    width: 1024,
    height: 1536,
  },
} satisfies Record<string, SocialPreviewImage>;
