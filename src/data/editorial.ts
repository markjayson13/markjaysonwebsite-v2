import { homeDiscoveryItems, socialLinks } from "./site";
import { withBase } from "../utils/paths";

export type HomeLink = {
  label: string;
  href: string;
  description: string;
};

export type HomeField = {
  label: string;
  name: string;
  full?: boolean;
};

export type HomeHero = {
  headlineTop: string;
  headlineFrame: string[];
  roles: string[];
  ctaLabel: string;
  videoSrc: string;
};

export type HomeDiscovery = {
  title: string;
  defaultLabel: string;
};

export type HomeContact = {
  label: string;
  title: string;
  copy: string;
  note: string;
  portraitSrc: string;
  videoSrc: string;
  submitLabel: string;
};

export type BioPage = {
  title: string;
  portraitSrc: string;
  visiblePortraitSrc: string;
  paragraphs: string[];
  links: BioLink[];
};

export type BioLink = {
  label: string;
  href: string;
};

export type ResumeJumpLink = {
  label: string;
  href: string;
};

export type ResumeCredential = {
  title: string;
  subtitle: string;
  summary: string;
};

export type ResumeRole = {
  organization: string;
  role: string;
  summary: string;
};

export type ResumeProjectCard = {
  title: string;
  description: string;
  href?: string;
  cta: string;
  disabled?: boolean;
};

export type CertificationEntry = {
  title: string;
  provider: string;
  summary: string;
  track: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type PortfolioTile = {
  title: string;
  description: string;
  href?: string;
  cta: string;
  tone: "light" | "blue" | "green" | "mustard";
};

export type RailItem = {
  id: string;
  label: string;
};

export type ResearchEntry = {
  year: string;
  id: string;
  title: string;
  summary: string;
  status: "Working Paper" | "Published" | "Research Paper" | "Master's Capstone";
  href?: string;
  ctaLabel?: string;
};

export type ProjectEntry = {
  title: string;
  summary: string;
  href?: string;
  ctaLabel?: string;
};

export type ProjectSection = {
  id: string;
  label: string;
  intro: string;
  entries: ProjectEntry[];
};

export type ArticleSection = {
  id: string;
  title: string;
  description: string;
};

export type LatestResearchPanel = {
  id: string;
  label: string;
  intro: string;
  entries: ResearchEntry[];
};

export type LatestProjectPanel = {
  id: string;
  label: string;
  intro: string;
  entries: ProjectEntry[];
};

export type LatestArticlePanel = {
  id: string;
  label: string;
  intro: string;
  sections: ArticleSection[];
};

export type CreativeClusterNavItem = {
  label: string;
  href: string;
  shortLabel?: string;
};

export type CreativeFeatureCard = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  note?: string;
};

export type CreativeMeasure = {
  label: string;
  value: string;
};

export type CreativeVideoAsset = {
  src: string;
  posterSrc?: string;
  alt: string;
};

export type CreativeResumeEntry = {
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
};

export type CreativeResumeSection = {
  id: string;
  label: string;
  intro: string;
  entries: CreativeResumeEntry[];
};

export type CreativeGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
  aspect?: "portrait" | "landscape";
  detailsLabel?: string;
  detailsText?: string;
  instagramHref?: string;
};

export type CreativeGalleryGroup = {
  id: string;
  label: string;
  intro: string;
  items: CreativeGalleryItem[];
};

export type CreativePageTheme = {
  page: "creative-landing" | "creative-artistic-resume" | "creative-headshots" | "creative-photoshoots";
  accent: string;
  mode: "light" | "dark";
};

export type ProfileButton = {
  label: string;
  symbol: string;
  href?: string;
  disabled?: boolean;
};

export type ProfileSecondaryLink = {
  label: string;
  href: string;
  note: string;
};

const socialLookup = new Map(socialLinks.map((link) => [link.label, link.href]));
const githubProfile = "https://github.com/markjayson13";
const backstageHref = socialLookup.get("Backstage");
export const replicaFooterCredit = "© Mark Jayson Martinez Farol";

export const homePage = {
  hero: {
    headlineTop: "Mark Jayson",
    headlineFrame: ["Martinez", "Farol"],
    roles: ["Economist", "Artist", "Scientist", "Musician", "Statistician", "Data Scientist", "Data Engineer", "Actor", "Singer"],
    ctaLabel: "Contact",
    videoSrc: withBase("/media/canva-home-hero.mp4"),
  } satisfies HomeHero,
  discovery: {
    title: "What do you want to find Out?",
    defaultLabel: "About",
  } satisfies HomeDiscovery,
  crawlLinks: [
    {
      label: "About Mark Jayson Farol",
      href: withBase("/bio"),
      description: "Biography, background, and the interdisciplinary story behind the work.",
    },
    {
      label: "Research papers and academic work",
      href: withBase("/research"),
      description: "Published research, working papers, methods, and higher-education analysis.",
    },
    {
      label: "Publications and writing",
      href: withBase("/articles"),
      description: "Articles, commentaries, essays, and public-facing scholarship.",
    },
    {
      label: "CV and resume",
      href: withBase("/resume"),
      description: "Education, experience, technical skills, and current certifications.",
    },
    {
      label: "Media and official profiles",
      href: withBase("/profiles"),
      description: "Professional, academic, and creative profile links collected in one place.",
    },
    {
      label: "Contact Mark Jayson",
      href: "#contact",
      description: "Jump directly to the homepage contact form and send a message.",
    },
  ] satisfies HomeLink[],
  discoveryItems: homeDiscoveryItems,
  contact: {
    label: "Get in Touch",
    title: "Get in Touch",
    copy: "Reach out for research, data work, performance, speaking, or interdisciplinary collaboration.",
    note: "Use the form below to send a direct message.",
    portraitSrc: withBase("/images/home-contact-portrait.png"),
    videoSrc: withBase("/media/canva-home-contact.mp4"),
    submitLabel: "Submit",
  } satisfies HomeContact,
  contactFields: [
    { label: "Last Name*", name: "last-name" },
    { label: "First Name*", name: "first-name" },
    { label: "EMAIL*", name: "email" },
    { label: "Subject", name: "subject" },
    { label: "Message", name: "message", full: true },
  ] satisfies HomeField[],
} as const;

export const bioPage = {
  title: "Mark Jayson Martinez Farol",
  portraitSrc: withBase("/images/bio/mark-jayson-bio-portrait.jpeg"),
  visiblePortraitSrc: withBase("/images/bio-portrait-cutout.png"),
  paragraphs: [
    "I’m Mark Jayson Farol, an economist, artist, scientist, musician, and statistician working at the intersection of data, policy, and creative expression.",
    "My work lives at the intersection of economics, data, and human expression. I study higher education, finance, and access through quantitative research, while also maintaining an active creative practice in music, performance, and storytelling.",
    "I grew up in a rural community in the Philippines and now live in Las Vegas, a journey that shaped how I see ambition, adaptation, and opportunity. I earned my master’s degree in Quantitative Business Economics from the University of Nevada, Las Vegas, where I worked as a graduate assistant, research collaborator, and mentor to students developing empirical research projects.",
    "Across research, teaching, and the arts, I care about turning complexity into meaning and building work that is rigorous, expressive, and useful. Whether I’m building evidence, mentoring students, or creating art, I’m driven by the same goal: to connect logic with humanity.",
  ],
  links: [
    { label: "Education", href: withBase("/resume#education") },
    { label: "Experience", href: withBase("/resume#experience") },
    { label: "Skills", href: withBase("/resume#skills") },
    { label: "Profiles", href: withBase("/profiles") },
    { label: "Portfolio", href: withBase("/portfolio") },
    { label: "Certifications", href: withBase("/resume#certifications") },
    { label: "Artistic", href: withBase("/creative/artistic-resume") },
    { label: "Photos", href: withBase("/creative/photoshoots") },
    { label: "Media", href: withBase("/creative/headshots") },
  ],
} satisfies BioPage;

export const resumePage = {
  title: "Mark Jayson M. Farol",
  jumpLinks: [
    { label: "Summary", href: "#summary" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ] satisfies ResumeJumpLink[],
  summary: [
    "I was born in a rural area in the Philippines, where ambition often grows alongside uncertainty and where education can feel deeply personal because of what it makes possible. Moving to the United States and continuing my education here reshaped my world. It demanded adaptation, resilience, and the ability to keep building even while learning a new environment, a new academic culture, and a new sense of what my future could become.",
    "Over time, that journey became the foundation of who I am today. I grew into someone who moves across disciplines with purpose: economics, statistics, research, teaching, music, performance, and creative expression. My path through high school in the United States, undergraduate study at UNLV, and graduate training in quantitative economics gave me more than credentials. It gave me a way of thinking grounded in rigor, curiosity, communication, and a strong belief that analytical work should stay connected to human lives. This page tells that story through the experiences, education, and roles that shaped me.",
  ],
  educationNarrative: [
    "My educational journey began in the Philippines and continued in the United States, where attending high school marked a major turning point in my life. That transition carried more than a change in geography. It meant adjusting to a different culture, a different school system, and a different set of expectations while learning how to carry my own story with confidence.",
    "At the University of Nevada, Las Vegas, I pursued my Bachelor of Science in Business Administration while also completing a minor in Theatre. My undergraduate years allowed both sides of me to grow at the same time: the analytical side drawn to economics, data, and systems, and the creative side that found meaning in performance, storytelling, and expression.",
    "I was later admitted to UNLV’s Master of Arts in Quantitative Business Economics, a program that sharpened my abilities across economic theory, statistics, applied quantitative analysis, and econometric methods. Graduate study strengthened both my technical foundation and my professional maturity.",
  ],
  credentials: [
    {
      title: "Master of Arts",
      subtitle: "Quantitative Business Economics, University of Nevada, Las Vegas",
      summary:
        "Advanced graduate training in economic theory, applied statistics, quantitative research, and econometric methods. Recognized as Commencement Speaker for leadership, academic dedication, and contribution to the program.",
    },
    {
      title: "Bachelor of Science in Business Administration",
      subtitle: "Economics, University of Nevada, Las Vegas",
      summary:
        "Built a multidisciplinary foundation across business, economics, communication, and performance, including early research development, scholarly writing, and publication.",
    },
    {
      title: "Minor in Theatre",
      subtitle: "University of Nevada, Las Vegas",
      summary:
        "Strengthened storytelling, public-facing confidence, collaboration, and performance discipline alongside analytical training in economics and research.",
    },
    {
      title: "Advanced Diploma",
      subtitle: "Liberty High School",
      summary:
        "The transition into U.S. schooling built the adaptability, confidence, and persistence that later shaped my academic and professional trajectory.",
    },
  ] satisfies ResumeCredential[],
  experienceNarrative: [
    "My labor force experience began while I was a full-time undergraduate student working part-time at kate spade new york. That role taught me accountability, consistency, and what it meant to perform inside a fast-moving environment where expectations were measurable and where your contribution affected the team immediately.",
    "As I grew into the role and was promoted to Lead Sales Associate, my responsibilities expanded significantly. I continued handling client-facing work while also taking on greater responsibility in training, coaching, team support, and operational execution.",
    "As my academic work became more rigorous and demanding, I made the decision to step away from retail and devote myself fully to being a student and developing as a scholar. That decision opened doors that later shaped my work through research presentations, publication, and graduate study.",
  ],
  roles: [
    {
      organization: "UNLV Department of Economics",
      role: "Graduate Researcher",
      summary:
        "Faculty-supervised research collaboration focused on higher-education finance, tuition-setting, and college pricing. Built institution-year data infrastructure using Python, SQL, panel econometrics, and validation workflows.",
    },
    {
      organization: "University of Nevada, Las Vegas",
      role: "Graduate Teaching Assistant",
      summary:
        "Supported instruction across five economics courses, built lecture materials, led review sessions, and mentored students through quantitative concepts, empirical projects, and final presentations.",
    },
    {
      organization: "Kate Spade New York",
      role: "Lead Sales Associate",
      summary:
        "Promoted into a leadership role driving strong revenue performance, customer experience, and day-to-day floor execution while overseeing opening and closing operations.",
    },
    {
      organization: "Kate Spade New York",
      role: "Sales Associate",
      summary:
        "Drove revenue through high-touch customer experience, clienteling, strong product storytelling, and a consistent record of service and sales performance.",
    },
  ] satisfies ResumeRole[],
  certificationsIntro:
    "My certifications reflect a broader habit of mine: I treat learning as something continuous, applied, and alive beyond the classroom. After building a strong academic foundation through economics, statistics, and quantitative research, I continued developing my technical skills through structured training in data science, analytics, finance, and evidence-based problem solving.",
  certifications: [
    {
      title: "The Securities Industry Essentials (SIE)",
      provider: "FINRA",
      track: "Finance",
      summary:
        "A foundational securities-industry exam covering core products and their risks, market structure, regulatory agencies, and prohibited practices.",
    },
    {
      title: "Environmental, Social, & Governance Specialization",
      provider: "Corporate Finance Institute",
      track: "Finance",
      summary:
        "Focused on sustainable finance, stakeholder expectations, and the risks and opportunities shaping investment and strategy decisions.",
    },
    {
      title: "Capital Markets & Securities Analyst (CMSA)",
      provider: "Corporate Finance Institute",
      track: "Finance",
      summary:
        "Focused on how global markets operate and how securities are traded, valued, and analyzed across major asset classes.",
    },
    {
      title: "Financial Modeling & Valuation Analyst (FMVA)",
      provider: "Corporate Finance Institute",
      track: "Finance",
      summary:
        "Built practical financial modeling, forecasting, valuation, dashboarding, and analytical presentation skills.",
    },
    {
      title: "Data Scientist Associate",
      provider: "DataCamp",
      track: "Data Science",
      summary:
        "Structured training in Python, data analysis, visualization, statistical reasoning, and applied analytical workflows.",
    },
  ] satisfies CertificationEntry[],
  projectsIntro:
    "My projects bring together the different ways I build. Some projects begin with a technical problem: messy data, disconnected sources, weak infrastructure, or a missing tool that slows serious research down. Others begin with a question about education, behavior, opportunity, or communication.",
  projectCards: [
    {
      title: "Data Engineering",
      description:
        "Longitudinal data pipelines, panel construction, variable harmonization, and reproducible workflows built to turn complex raw datasets into research-ready systems.",
      href: withBase("/projects#data-engineering"),
      cta: "Read more",
    },
    {
      title: "Research Papers",
      description:
        "Empirical and policy-driven writing on higher education, financial aid, affordability, and institutional behavior grounded in quantitative methods and econometric analysis.",
      href: withBase("/research"),
      cta: "Read more",
    },
    {
      title: "Economic Tools",
      description:
        "Applied tools, interfaces, and research utilities designed to make economic data, variable selection, and analytical workflows more usable, transparent, and efficient.",
      href: withBase("/projects#economic-tools"),
      cta: "Read more",
    },
    {
      title: "Other Publications",
      description:
        "Additional written work including essays, working papers, commentary, and public-facing scholarship beyond formal research manuscripts.",
      href: withBase("/articles"),
      cta: "Read more",
    },
    {
      title: "Creative Roles",
      description:
        "Performance, music, theatre, and interdisciplinary creative work that strengthens storytelling, communication, presence, and the human side of analytical practice.",
      href: withBase("/creative/artistic-resume"),
      cta: "View resume",
    },
    {
      title: "Profiles",
      description:
        "A curated hub of academic, professional, technical, and creative presence across the web.",
      href: withBase("/profiles"),
      cta: "Read more",
    },
  ] satisfies ResumeProjectCard[],
  skillsIntro:
    "My skills were built across research, education, professional work, and the arts, which is why they function less like separate categories and more like connected branches of the same system.",
  skillGroups: [
    {
      title: "Economics, Finance & Policy",
      items: ["Higher-education finance", "Pricing and aid systems", "Market analysis", "Policy interpretation"],
    },
    {
      title: "Statistics, Econometrics & Research",
      items: ["Panel econometrics", "Fixed effects", "Instrumental variables", "Causal inference"],
    },
    {
      title: "Data Science, Programming & Engineering",
      items: ["Python", "DuckDB", "PyArrow", "Reproducible ETL", "Data validation"],
    },
    {
      title: "Communication, Teaching & Leadership",
      items: ["Lecture design", "Student mentoring", "Public speaking", "Stakeholder translation"],
    },
    {
      title: "Creative & Performance Practice",
      items: ["Music", "Acting", "Storytelling", "Stage presence", "Interdisciplinary collaboration"],
    },
  ] satisfies SkillGroup[],
};

export const portfolioPage = {
  title: "Portfolio",
  lead: "Research, projects, public writing, and creative work.",
  tiles: [
    {
      title: "Research",
      description: "Empirical and policy-driven research on higher education, pricing, and financial aid.",
      href: withBase("/research"),
      cta: "Read more",
      tone: "light",
    },
    {
      title: "Projects",
      description: "Data engineering, economic tools, and infrastructure built for durable analytical work.",
      href: withBase("/projects"),
      cta: "Read more",
      tone: "blue",
    },
    {
      title: "Articles",
      description: "Public-facing writing that translates research and systems thinking for wider audiences.",
      href: withBase("/articles"),
      cta: "Read more",
      tone: "green",
    },
    {
      title: "Creative",
      description: "Music, performance, film, and storytelling across my artistic practice.",
      href: withBase("/creative"),
      cta: "Explore cluster",
      tone: "mustard",
    },
  ] satisfies PortfolioTile[],
};

const researchEntries = [
  {
    year: "2026",
    id: "packaging-hierarchies",
    title: "Packaging Hierarchies in U.S. Higher Education: Pell Exposure and the Composition of Aid (Working Paper)\u2020",
    status: "Working Paper",
    summary:
      "Working paper mapping how U.S. colleges structure financial-aid packages for full-time, first-time undergraduates and how these hierarchies vary with Pell exposure. Built institution-year, per-FTFT measures from 2009\u20132023 IPEDS by linking Student Financial Aid aggregates to residency-weighted COA, expressed as shares of cost of attendance with indices for Grant-First, Pell-Anchor, and Institutional Top-off.",
  },
  {
    year: "2026",
    id: "when-costs-define-aid",
    title: "When Costs Define Aid: Responses to Federal Cost-of-Attendance Caps\u2020",
    status: "Working Paper",
    summary:
      "Institutions adjust the Cost of Attendance differently across sectors, with private nonprofits exhibiting strategic price-aid bundling and publics showing adjustment through non-tuition borrowing margins. Uses institution fixed effects, dynamic fixed effects, and system-GMM models of cost of attendance, tuition, and non-tuition components.",
  },
  {
    year: "2026",
    id: "ipeds-panel-letter",
    title: "Building a Quality-Assured IPEDS Institution-Year Panel from Annual Access Databases, 2004\u20132023\u2020",
    status: "Working Paper",
    summary:
      "Introduces IPEDSDB_Panel, an open-source workflow that converts annual NCES IPEDS Access databases into a reproducible, integrity-checked unbalanced panel keyed by institution and year for 2004\u20132023. The workflow automates acquisition, extraction, metadata harmonization, panel construction, parent-child cleaning, and layered validation.",
  },
  {
    year: "2025",
    id: "financial-literacy-food-insecurity",
    title: "Financial Literacy & Food Insecurity in Seniors (Master\u2019s Capstone)",
    status: "Master's Capstone",
    summary:
      "Examines the link between financial literacy and food insecurity among older adults in Clark County, Nevada using local survey data and multiple probability-based models to measure the relationship and test robustness.",
  },
  {
    year: "2025",
    id: "dynamic-structure-federal-aid",
    title: "A Dynamic Structure of the Causal Link Between Increases in Federal Student Aid and Increases in College Prices",
    status: "Working Paper",
    summary:
      "Extends the Bennett's Hypothesis literature through dynamic panel specifications and pricing-aid structure analysis, focusing on how federal student aid and institutional responses interact over time across higher-education sectors.",
  },
  {
    year: "2025",
    id: "ai-diffusion-gender-wage",
    title: "AI Diffusion and Gender Wage Inequality: A Quasi-Experimental Approach\u2020",
    status: "Working Paper",
    summary:
      "Studies whether the diffusion of generative AI shifted gender wage inequality across tech versus non-tech roles using CPS-MORG via IPUMS. Uses pooled OLS with a triple-interaction quasi-experimental design and Blinder-Oaxaca decompositions.",
  },
  {
    year: "2025",
    id: "revisiting-bennetts-hypothesis",
    title: "Revisiting Bennett\u2019s Hypothesis: The Unintended Effects of Student Financial Aid on the Cost of College\u2021",
    status: "Published",
    summary:
      "Investigates Bennett\u2019s Hypothesis with National Center for Education Statistics data, focusing on public and private nonprofit colleges and the effects of government and institutional financial aid on the cost of attendance.",
    href: "https://doi.org/10.9741/2766-7227.1033",
    ctaLabel: "View PDF",
  },
  {
    year: "2024",
    id: "race-for-increasing-college-costs",
    title: "The Race for Increasing College Costs",
    status: "Research Paper",
    summary:
      "A cross-sectional study of tuition growth, aid, and institutional behavior using National Center for Education Statistics data and Bennett\u2019s Hypothesis as a guiding framework.",
  },
  {
    year: "2024",
    id: "caesars-philippines",
    title: "Potential Expansion for Caesars Entertainment to the Philippines",
    status: "Research Paper",
    summary:
      "Explores whether the Philippines offers a viable expansion opportunity by combining macro indicators, tourism and spending trends, regulatory analysis, and competitor benchmarking.",
  },
  {
    year: "2023",
    id: "retirement-age",
    title: "Economic Effects of Raising Retirement Age",
    status: "Research Paper",
    summary:
      "Analyzes the economic effects of France\u2019s policy shift to raise the retirement age from 62 to 64 using the Solow Model, IS/MP-PC, and labor-market frameworks.",
  },
] satisfies ResearchEntry[];

export const researchPage = {
  title: "Research",
  lead:
    "My research investigates the systems, incentives, and institutions that influence economic and social life, using quantitative analysis and large-scale data to uncover meaningful patterns.",
  legend: "\u2020 Working Paper \u2021 Published",
  rail: [
    { id: "latest", label: "Latest" },
    { id: "2026", label: "2026" },
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
  ] satisfies RailItem[],
  latest: {
    id: "latest",
    label: "Latest",
    intro: "Current research directions and the most recent working papers driving the portfolio right now.",
    entries: researchEntries.slice(0, 3),
  } satisfies LatestResearchPanel,
  entries: researchEntries,
};

const projectDataEngineeringEntries = [
  {
    title: "IPEDS Harmonized Panel Builder (2004\u20132024)",
    summary:
      "A reproducible Python and SQL data-engineering pipeline that converts NCES IPEDS cross-sections into institution-year panels with strict release checks, provenance-preserving harmonization, parent-child cleaning, and auditable QC artifacts.",
    href: githubProfile,
    ctaLabel: "GitHub Repo",
  },
  {
    title: "Federal Student Aid Volume Reports Panel Pipeline (1999\u20132025)",
    summary:
      "A reproducible workflow that transforms Federal Student Aid Title IV volume reports into institution-year panel datasets using exact OPEID8 and award-year keys, with QA/QC checks for coverage, duplicate keys, year gaps, and descriptor conflicts.",
    href: githubProfile,
    ctaLabel: "GitHub Repo",
  },
] satisfies ProjectEntry[];

const projectEconomicToolsEntries = [
  {
    title: "IPEDS Variable Browser",
    summary:
      "A browser-style utility for exploring IPEDS variables, metadata, and release differences without manually stepping through annual dictionaries.",
  },
  {
    title: "Econometric Workflow Utilities",
    summary:
      "Small tools that standardize filtering, variable selection, data checks, and model-ready outputs for repeated analytical tasks.",
  },
] satisfies ProjectEntry[];

const projectMiscEntries = [
  {
    title: "Public Portfolio Site",
    summary:
      "A routed Astro site that packages academic, analytical, and creative work into a clearer public-facing system.",
  },
  {
    title: "Presentation and Writing Systems",
    summary:
      "Reusable templates and structured workflows used to prepare talks, public writing, and research communication materials.",
  },
] satisfies ProjectEntry[];

export const projectsPage = {
  title: "Projects",
  lead: "Built systems, tools, and infrastructure that support research and analysis.",
  rail: [
    { id: "latest", label: "Latest" },
    { id: "data-engineering", label: "Data Engineering" },
    { id: "economic-tools", label: "Economic Tools" },
    { id: "misc", label: "Misc" },
  ] satisfies RailItem[],
  latest: {
    id: "latest",
    label: "Latest",
    intro: "Recent systems, data pipelines, and workflow tools that currently define the project portfolio.",
    entries: [
      projectDataEngineeringEntries[0],
      projectDataEngineeringEntries[1],
      projectEconomicToolsEntries[0],
    ],
  } satisfies LatestProjectPanel,
  sections: [
    {
      id: "data-engineering",
      label: "Data Engineering",
      intro:
        "I build data systems that transform fragmented, messy, or multi-source information into structured, usable, and research-ready datasets. This work includes panel construction, data harmonization, variable engineering, validation, and reproducible workflows designed to support serious empirical analysis.",
      entries: projectDataEngineeringEntries,
    },
    {
      id: "economic-tools",
      label: "Economic Tools",
      intro:
        "These projects focus on usability at the level of the researcher, analyst, or decision-maker. They include interfaces, browsers, utilities, and workflow tools that make data easier to navigate, select, interpret, and use in practice.",
      entries: projectEconomicToolsEntries,
    },
    {
      id: "misc",
      label: "Misc",
      intro:
        "Smaller supporting builds, exploratory systems, and public-facing packaging work that stay useful even when they sit outside the main research pipeline.",
      entries: projectMiscEntries,
    },
  ] satisfies ProjectSection[],
};

const articleSections = [
  {
    id: "op-ed",
    title: "OP-Ed",
    description:
      "These are argument-driven pieces written for broader public audiences. They focus on issues that deserve clarity, urgency, and perspective, often connecting economic reasoning and systems thinking to questions of policy, opportunity, and everyday life.",
  },
  {
    id: "commentaries",
    title: "Commentaries",
    description:
      "These writings are shorter reflections on institutions, incentives, culture, and social behavior. They often begin with an observation or tension and expand into a broader interpretation of how systems function and why that matters.",
  },
  {
    id: "essays-notes",
    title: "Essays & Notes",
    description:
      "This section holds writing that moves more freely across forms: reflective essays, interdisciplinary observations, public scholarship, and exploratory pieces that sit between analysis, narrative, and critique.",
  },
] satisfies ArticleSection[];

export const articlesPage = {
  title: "Articles",
  lead: "Public-facing writing that translates research and systems thinking for wider audiences.",
  rail: [
    { id: "latest", label: "Latest" },
    { id: "op-ed", label: "OP-Ed" },
    { id: "commentaries", label: "Commentaries" },
    { id: "essays-notes", label: "Essays & Notes" },
  ] satisfies RailItem[],
  latest: {
    id: "latest",
    label: "Latest",
    intro: "Current writing directions across public scholarship, commentary, and essays while the archive continues to expand.",
    sections: articleSections,
  } satisfies LatestArticlePanel,
  sections: articleSections,
};

const creativeHeadshotSelections = [
  {
    src: withBase("/images/creative/headshots/headshot-01.jpeg"),
    alt: "Cinematic seated portrait of Mark Jayson Farol in officewear.",
    caption: "Cinematic portrait",
    detailsText: "Officewear portrait study with a cinematic seated composition.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/headshots/headshot-02.png"),
    alt: "Studio headshot of Mark Jayson Farol against a light background.",
    caption: "Studio headshot",
    detailsText: "Clean studio headshot with a neutral background and direct gaze.",
    featured: true,
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/headshots/headshot-03.jpeg"),
    alt: "Angled portrait study of Mark Jayson Farol in a dark jacket.",
    caption: "Angled portrait study",
    detailsText: "Three-quarter portrait with a darker jacket and softer side angle.",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeEditorialSelections = [
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-02.jpg"),
    alt: "Black-and-white editorial portrait of Mark Jayson Farol in sunglasses and a leather jacket.",
    caption: "Black-and-white editorial portrait",
    detailsText: "Monochrome editorial image with leather outerwear and a stronger fashion-forward silhouette.",
    featured: true,
    aspect: "landscape",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-01.jpeg"),
    alt: "Editorial portrait of Mark Jayson Farol from the creative archive.",
    caption: "Editorial portrait I",
    detailsText: "Black-and-white editorial frame with a looser gesture and softer movement.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-03.jpg"),
    alt: "Styled editorial portrait of Mark Jayson Farol.",
    caption: "Editorial portrait II",
    detailsText: "Low-key editorial portrait built around contrast, posture, and mood.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-04.jpeg"),
    alt: "Editorial study of Mark Jayson Farol with fashion-forward styling.",
    caption: "Editorial portrait III",
    detailsText: "Color editorial portrait with floral styling and a cleaner front-facing composition.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-05.jpeg"),
    alt: "Creative editorial image of Mark Jayson Farol.",
    caption: "Editorial portrait IV",
    detailsText: "Softly lit portrait with floral styling and a lighter tonal treatment.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/editorials/editorial-06.jpeg"),
    alt: "Editorial close portrait of Mark Jayson Farol.",
    caption: "Editorial portrait V",
    detailsText: "Tighter editorial frame focused on pose, facial expression, and tonal contrast.",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeCommencementSelections = [
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-08.jpg"),
    alt: "Commencement portrait of Mark Jayson Farol in graduation regalia against the Las Vegas skyline.",
    caption: "Commencement portrait I",
    detailsText: "Graduation portrait with skyline framing and a wider commemorative composition.",
    featured: true,
    aspect: "landscape",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-01.jpeg"),
    alt: "Graduation portrait of Mark Jayson Farol.",
    caption: "Commencement portrait II",
    detailsText: "Formal graduation portrait from the commencement portrait set.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-02.jpeg"),
    alt: "Formal graduation image of Mark Jayson Farol.",
    caption: "Commencement portrait III",
    detailsText: "Studio-style commencement image with cap-and-gown focus.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-03.jpeg"),
    alt: "Graduation photo study of Mark Jayson Farol.",
    caption: "Commencement portrait IV",
    detailsText: "Commencement portrait built around posture and celebratory detail.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-04.jpeg"),
    alt: "Commencement image of Mark Jayson Farol with a cap and gown.",
    caption: "Commencement portrait V",
    detailsText: "Cap-and-gown portrait from the main graduation image sequence.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-05.jpeg"),
    alt: "Graduation portrait of Mark Jayson Farol from the local creative archive.",
    caption: "Commencement portrait VI",
    detailsText: "Graduation image with a quieter portrait framing and softer expression.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-06.jpeg"),
    alt: "Commencement portrait of Mark Jayson Farol in evening light.",
    caption: "Commencement portrait VII",
    detailsText: "Evening-light commencement image with a warmer outdoor atmosphere.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/commencement/commencement-07.jpeg"),
    alt: "Graduation portrait of Mark Jayson Farol in a formal pose.",
    caption: "Commencement portrait VIII",
    detailsText: "Formal graduation pose from the commencement archive.",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

const creativeHalloweenSelections = [
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-03.jpeg"),
    alt: "Halloween character portrait of Mark Jayson Farol inside a library aisle.",
    caption: "Character portrait I",
    detailsText: "Clark Kent and Superman-inspired character portrait set in a library aisle.",
    featured: true,
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-01.jpeg"),
    alt: "Halloween portrait of Mark Jayson Farol from the costume archive.",
    caption: "Character portrait II",
    detailsText: "Costume portrait with a stronger theatrical makeup and character styling treatment.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-02.jpeg"),
    alt: "Costumed Halloween study of Mark Jayson Farol.",
    caption: "Character portrait III",
    detailsText: "Superman-inspired image study with a cinematic fantasy-composite treatment.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-04.jpeg"),
    alt: "Halloween portrait of Mark Jayson Farol in a staged scene.",
    caption: "Character portrait IV",
    detailsText: "Villain-inspired costume portrait with a darker forest-set composition.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-05.jpeg"),
    alt: "Costume-based portrait of Mark Jayson Farol.",
    caption: "Character portrait V",
    detailsText: "Character image built around costume, pose, and a more dramatic stylized mood.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-06.jpeg"),
    alt: "Halloween portrait from the current creative archive.",
    caption: "Character portrait VI",
    detailsText: "Costume portrait from the broader Halloween archive.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-07.jpeg"),
    alt: "Dramatic Halloween image of Mark Jayson Farol.",
    caption: "Character portrait VII",
    detailsText: "Dramatic costume image with a darker tonal palette and character emphasis.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-08.jpeg"),
    alt: "Halloween portrait of Mark Jayson Farol in costume.",
    caption: "Character portrait VIII",
    detailsText: "Costume portrait with a stylized performance-oriented frame.",
    aspect: "portrait",
  },
  {
    src: withBase("/images/creative/photoshoots/halloween/halloween-09.jpeg"),
    alt: "Styled Halloween portrait of Mark Jayson Farol.",
    caption: "Character portrait IX",
    detailsText: "Styled Halloween portrait from the extended character archive.",
    aspect: "portrait",
  },
] satisfies CreativeGalleryItem[];

export const creativeCluster = {
  nav: [
    { label: "Creative", href: withBase("/creative") },
    { label: "Artistic Resume", href: withBase("/creative/artistic-resume") },
    { label: "Headshots", href: withBase("/creative/headshots") },
    { label: "Photoshoots", href: withBase("/creative/photoshoots") },
  ] satisfies CreativeClusterNavItem[],
  landing: {
    theme: {
      page: "creative-landing",
      accent: "#b69030",
      mode: "dark",
    } satisfies CreativePageTheme,
    title: "Creative",
    lead: "Music, performance, film, and storytelling across my artistic practice.",
    statement:
      "Arts has been one of my earliest ways of understanding myself and the world around me. I exhibit different forms of arts through music, theatre, film, performance, and visual storytelling, each one shaping how I communicate, create, and connect with people. My artistic practice has strengthened my discipline, emotional range, confidence, and presence, while deepening the human side of how I think and work. Across stage, screen, and sound, I continue to treat art as both expression and exploration. Find out my artistic journey through my performances, music, film, and creative work.",
    spotlightVideo: {
      src: withBase("/media/creative/firebook.mov"),
      posterSrc: creativeEditorialSelections[0].src,
      alt: "Landscape creative spotlight reel featuring Mark Jayson Farol.",
    } satisfies CreativeVideoAsset,
    measurements: [
      { label: "Height", value: "5'7\"" },
      { label: "Bust", value: "36\"" },
      { label: "Waist", value: "28\"" },
      { label: "Hips", value: "30\"" },
      { label: "Shoes", value: "US 8.5" },
      { label: "Shirt", value: "US S/M" },
      { label: "Hair", value: "Dark Brown" },
      { label: "Eyes", value: "Dark Brown" },
    ] satisfies CreativeMeasure[],
    headshotPreviews: creativeHeadshotSelections.slice(0, 3),
    headshotsCta: {
      label: "View Headshots",
      href: withBase("/creative/headshots"),
    },
    featureCards: [
      {
        title: "Performing Arts",
        description:
          "Stage work across musical theatre, plays, and live showcase performances, with strengths in character work, vocals, movement, and stage presence.",
        href: withBase("/creative/artistic-resume"),
        cta: "Artistic Resume",
      },
      {
        title: "Music",
        description:
          "Music practice spanning vocals, songwriting, and performance across pop, musical theatre, and contemporary styles.",
      },
      {
        title: "Film",
        description:
          "On-camera performance and screen-based storytelling centered on character, presence, and emotional clarity.",
      },
      {
        title: "Modeling and Photography",
        description:
          "Editorial, portrait, and character-based visual work focused on camera presence, range, styling, and expressive storytelling.",
        href: withBase("/creative/photoshoots"),
        cta: "Photoshoots",
      },
    ] satisfies CreativeFeatureCard[],
  },
  artisticResume: {
    theme: {
      page: "creative-artistic-resume",
      accent: "#570100",
      mode: "dark",
    } satisfies CreativePageTheme,
    title: "Mark Jayson M. Farol",
    lead:
      "Artist, performer, musician, and storyteller with experience across musical theatre, plays, live performance, and on-camera work. Trained through theatre and performance-based roles that strengthened stage presence, vocal expression, movement, and character work. Brings discipline, emotional range, and strong audience connection across stage and screen.",
    sections: [
      {
        id: "summary",
        label: "Summary",
        intro: "Overview",
        entries: [
          {
            title: "Artist statement",
            description:
              "Artist, performer, musician, and storyteller with experience across musical theatre, plays, live performance, and on-camera work. Trained through theatre and performance-based roles that strengthened stage presence, vocal expression, movement, and character work. Brings discipline, emotional range, and strong audience connection across stage and screen.",
          },
        ],
      },
      {
        id: "education",
        label: "Education",
        intro: "Training in performance, stagecraft, and theatre-based communication.",
        entries: [
          {
            title: "University of Nevada, Las Vegas",
            subtitle: "Minor in Theatre",
            description:
              "The Department of Theatre in the College of Fine Arts offers programs in performance, production and technology taught by experienced faculty while taking advantage of the entertainment richness of Las Vegas.",
          },
          {
            title: "Courses",
            subtitle:
              "Acting: Camera · Voice and Movement for Actors I · Voice and Movement for Actors II · Acting I: Techniques · Act Studio II: Technique · Play Structure & Analysis · Acting III: Scene Study · Speech for the Actor · Acting as a Profession",
            description:
              "Coursework across camera acting, movement, text analysis, voice, rehearsal process, and professional preparation.",
          },
        ],
      },
      {
        id: "musical-theatre",
        label: "Musical Theatre",
        intro: "Selected musical theatre roles and training work.",
        entries: [
          {
            title: "Willy Wonka",
            subtitle: "Augustus Gloop",
            meta: "LHS Patriot Theatre · Apr 2019",
            description:
              "A whimsical stage musical following the mysterious Willy Wonka and the children invited into his fantastical chocolate factory. Augustus Gloop is bold, indulgent, and larger than life, bringing humor, strong physicality, and exaggerated stage presence to the production.",
          },
          {
            title: "Rock of Ages",
            subtitle: "Ensemble",
            meta: "LHS Patriot Theatre · Apr 2018",
            description:
              "A high-energy jukebox musical set on the 1980s Sunset Strip, filled with rock anthems, comedy, and larger-than-life characters chasing fame and connection. Ensemble work helped create the vibrant world of the show through dynamic movement, vocal energy, character versatility, and collaborative stage presence.",
          },
          {
            title: "The Phantom of the Opera",
            subtitle: "Erik, The Phantom | Viscount Raoul de Chagny",
            meta: "Training and scene work",
            description:
              "A gothic musical set in the Paris Opera House, centered on obsession, genius, longing, and the haunting relationship between Christine Daae and the Phantom. Erik demands dramatic depth and emotional complexity, while Raoul brings steadiness, loyalty, and romantic devotion to the story.",
          },
          {
            title: "Les Miserables",
            subtitle: "Jean Valjean | Marius Pontmercy",
            meta: "Training and scene work",
            description:
              "An epic musical set in 19th-century France, exploring justice, mercy, sacrifice, and redemption amid social unrest and revolution. Jean Valjean requires immense emotional range and spiritual weight, while Marius carries youthful passion, sincerity, and emotional growth.",
          },
        ],
      },
      {
        id: "plays",
        label: "Plays",
        intro: "Straight plays and directed work focused on dramatic range and storytelling precision.",
        entries: [
          {
            title: "The Curious Incident of the Dog in the Night-time",
            subtitle: "Christopher (Understudy) | Ensemble",
            meta: "LHS Patriot Theatre · Feb 2019",
            description:
              "A stage adaptation of Mark Haddon's novel, following a mathematically gifted teenager as he investigates the death of a neighbor's dog and navigates a world that often feels overwhelming and unpredictable. Christopher requires precision, vulnerability, focus, and a deeply physical performance style.",
          },
          {
            title: "Radium Girls",
            subtitle: "Dr. Flinn / C.B. Charlie Lee",
            meta: "LHS Patriot Theatre · Feb 2018",
            description:
              "A historical drama based on the true story of young women poisoned by radium while working in factories, and their fight for justice against powerful institutions. The supporting roles helped shape the tension, authority, and ethical conflict surrounding the workers' struggle.",
          },
          {
            title: "Check Please: Take Two",
            subtitle: "Director",
            meta: "LHS Patriot Theatre · Dec 2018",
            description:
              "A fast-paced comedy built around a series of disastrous blind dates, quick transitions, and sharply contrasted characters. The production was directed with attention to pacing, scene flow, comedic timing, and performance clarity.",
          },
        ],
      },
      {
        id: "performances",
        label: "Performances",
        intro: "Live showcases and public-facing performance work.",
        entries: [
          {
            title: "Nevada Thespian State Conference Opening Number",
            subtitle: "Performer",
            meta: "State conference appearance",
            description:
              "Featured performer in the opening number for the Nevada Thespian State Conference, delivering a dynamic combination of vocals, choreography, and character performance in a high-visibility theatrical showcase.",
          },
          {
            title: "Public Education Foundation Ed Hero Award Gala",
            subtitle: "Performing artist",
            meta: "Las Vegas, Nevada · Sep 2018",
            description:
              "Featured performer at the Public Education Foundation Ed Hero Award Gala, presenting a polished live performance through singing, dancing, and acting for a public-facing celebratory event.",
          },
        ],
      },
      {
        id: "awards",
        label: "Awards",
        intro: "Recognition earned through adjudicated theatre events and performance presentation.",
        entries: [
          {
            title: "International Thespian Festival",
            subtitle: "Superior in Individual Events",
            description:
              "Received a Superior rating in Individual Events at the International Thespian Festival, recognizing excellence in performance, preparation, and theatrical presentation in a competitive setting.",
          },
          {
            title: "State Thespian Festival",
            subtitle: "Superior in Individual Events",
            description:
              "Earned a Superior rating in Individual Events at the State Thespian Conference, reflecting strong performance quality, stage presence, and execution in a judged theatre event.",
          },
        ],
      },
      {
        id: "skills",
        label: "Skills",
        intro: "Performance tools spanning voice, movement, instruments, and accents.",
        entries: [
          {
            title: "Vocal",
            description: "Classical, Pop, Rap, Opera",
          },
          {
            title: "Musical Instruments",
            description: "Guitar, Piano, Violin",
          },
          {
            title: "Dance",
            description: "K-Pop, Hip-Hop",
          },
          {
            title: "Accents",
            description: "British RP, Australian, Russian, American",
          },
        ],
      },
    ] satisfies CreativeResumeSection[],
  },
  headshots: {
    theme: {
      page: "creative-headshots",
      accent: "#f6f6fa",
      mode: "light",
    } satisfies CreativePageTheme,
    title: "Headshots",
    lead: "A selection of still-image headshots from the creative archive.",
    backstageHref,
    items: creativeHeadshotSelections,
  },
  photoshoots: {
    theme: {
      page: "creative-photoshoots",
      accent: "#000000",
      mode: "dark",
    } satisfies CreativePageTheme,
    title: "Photoshoots",
    lead:
      "Editorial, commencement, and Halloween image studies from the creative archive.",
    defaultId: "editorials",
    rail: [
      { id: "editorials", label: "Editorials" },
      { id: "commencement", label: "Commencement" },
      { id: "halloween", label: "Halloween" },
    ] satisfies RailItem[],
    groups: [
      {
        id: "editorials",
        label: "Editorials",
        intro:
          "Styled portraits, monochrome fashion studies, and portfolio-ready frames that carry the strongest editorial energy in the current archive.",
        items: creativeEditorialSelections,
      },
      {
        id: "commencement",
        label: "Commencement",
        intro:
          "Formal graduation portraiture and milestone imagery from the current commencement gallery.",
        items: creativeCommencementSelections,
      },
      {
        id: "halloween",
        label: "Halloween",
        intro:
          "Character-forward styling, costume work, and moodier image studies from the Halloween archive.",
        items: creativeHalloweenSelections,
      },
    ] satisfies CreativeGalleryGroup[],
  },
} as const;

export const profilesPage = {
  title: "Profiles",
  lead: "A curated hub of my academic, professional, technical, and creative presence across the web.",
  buttons: [
    { label: "LinkedIn", symbol: "in", href: socialLookup.get("LinkedIn") },
    { label: "GitHub", symbol: "{ }", href: githubProfile },
    { label: "Backstage", symbol: "B", href: socialLookup.get("Backstage") },
    { label: "ORCID", symbol: "iD", href: socialLookup.get("ORCID") },
    { label: "ResearchGate", symbol: "RG", href: socialLookup.get("ResearchGate") },
    { label: "Google Scholar", symbol: "GS", href: socialLookup.get("Google Scholar") },
    { label: "Facebook", symbol: "f", href: socialLookup.get("Facebook") },
    { label: "Instagram", symbol: "IG", href: socialLookup.get("Instagram") },
    { label: "TikTok", symbol: "TT", disabled: true },
  ] satisfies ProfileButton[],
  secondaryLinks: [
    {
      label: "Legacy creative portfolio",
      href: socialLookup.get("Legacy creative portfolio") ?? "#",
      note: "Earlier creative portfolio and archived material.",
    },
  ] satisfies ProfileSecondaryLink[],
};
