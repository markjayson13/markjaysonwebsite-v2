import { cornerMenuItems, socialLinks } from "./site";
import { withBase } from "../utils/paths";

export type HomeLink = {
  label: string;
  href: string;
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
  portraitSrc: string;
  videoSrc: string;
  submitLabel: string;
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

export type ProfileButton = {
  label: string;
  symbol: string;
  href?: string;
  disabled?: boolean;
};

const socialLookup = new Map(socialLinks.map((link) => [link.label, link.href]));
const githubProfile = "https://github.com/markjayson13";
export const replicaFooterCredit = "© Mark Jayson Martinez Farol";

export const homePage = {
  hero: {
    headlineTop: "Mark Jayson",
    headlineFrame: ["Martinez", "Farol"],
    roles: ["Artist", "Scientist", "Economist", "Data Scientist", "Data Engineer", "Statistician", "Musician", "Singer", "Actor"],
    ctaLabel: "Contact",
    videoSrc: withBase("/media/canva-home-hero.mp4"),
  } satisfies HomeHero,
  discovery: {
    title: "What do you want to find Out?",
    defaultLabel: "About",
  } satisfies HomeDiscovery,
  discoveryItems: cornerMenuItems,
  contact: {
    label: "Get in Touch",
    title: "Get in Touch",
    copy:
      "Use the form below to start a conversation about research, data work, policy analysis, creative collaborations, or speaking opportunities.",
    portraitSrc: withBase("/images/canva-home-portrait.png"),
    videoSrc: withBase("/media/canva-home-contact.mp4"),
    submitLabel: "Submit",
  } satisfies HomeContact,
  contactFields: [
    { label: "First Name*", name: "first-name" },
    { label: "EMAIL*", name: "email" },
    { label: "Last Name*", name: "last-name" },
    { label: "Subject", name: "subject" },
    { label: "Message", name: "message", full: true },
  ] satisfies HomeField[],
} as const;

export const bioPage = {
  title: "Mark Jayson Martinez Farol",
  paragraphs: [
    "I’m Mark Jayson Farol, an economist, artist, scientist, musician, and statistician working at the intersection of data, policy, and creative expression.",
    "I grew up in a rural community in the Philippines, close to both the sea and the jungle, and I now live in Las Vegas. I earned my master’s degree in Quantitative Business Economics from the University of Nevada, Las Vegas, where I served as a graduate assistant and research collaborator in the Department of Economics, mentored undergraduates on empirical research projects, and represented my class as a student speaker at commencement. My academic work centers on higher education, finance, and access, and my paper, Revisiting Bennett’s Hypothesis: The Unintended Effects of Student Financial Aid on the Cost of College, was published in Spectra Undergraduate Research Journal in 2025.",
    "My work moves across research, teaching, and the arts. Alongside economics and quantitative analysis, I maintain an active creative practice in music, film, and performance, with public work that includes acting, singing, and dancing.",
    "I care about understanding how systems shape human lives, then translating that understanding into work that is rigorous, expressive, and useful. Whether I’m building research, mentoring students, or creating art, I’m driven by the same goal: to connect logic with humanity and turn complexity into meaning.",
  ],
  links: [
    { label: "Education", href: withBase("/resume#education") },
    { label: "Experience", href: withBase("/resume#experience") },
    { label: "Profiles", href: withBase("/profiles") },
    { label: "Skills", href: withBase("/resume#skills") },
    { label: "Portfolio", href: withBase("/portfolio") },
    { label: "Certifications", href: withBase("/resume#certifications") },
  ],
};

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
    "Over time, that journey became the foundation of who I am today. I grew into someone who moves across disciplines with purpose: economics, statistics, research, teaching, music, performance, and creative expression. My path through high school in the United States, undergraduate study at UNLV, and graduate training in quantitative economics gave me more than credentials. It gave me a way of thinking grounded in rigor, curiosity, communication, and a strong belief that analytical work should stay connected to human lives.",
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
      href: withBase("/creative"),
      cta: "Read more",
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
      cta: "Read more",
      tone: "mustard",
    },
  ] satisfies PortfolioTile[],
};

export const researchPage = {
  title: "Research",
  lead:
    "My research investigates the systems, incentives, and institutions that influence economic and social life, using quantitative analysis and large-scale data to uncover meaningful patterns.",
  legend: "\u2020 Working Paper \u2021 Published",
  rail: [
    { id: "2026", label: "2026" },
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
  ] satisfies RailItem[],
  entries: [
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
  ] satisfies ResearchEntry[],
};

export const projectsPage = {
  title: "Projects",
  lead: "Built systems, tools, and infrastructure that support research and analysis.",
  rail: [
    { id: "data-engineering", label: "Data Engineering" },
    { id: "economic-tools", label: "Economic Tools" },
    { id: "misc", label: "Misc" },
  ] satisfies RailItem[],
  sections: [
    {
      id: "data-engineering",
      label: "Data Engineering",
      intro:
        "I build data systems that transform fragmented, messy, or multi-source information into structured, usable, and research-ready datasets. This work includes panel construction, data harmonization, variable engineering, validation, and reproducible workflows designed to support serious empirical analysis.",
      entries: [
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
      ],
    },
    {
      id: "economic-tools",
      label: "Economic Tools",
      intro:
        "These projects focus on usability at the level of the researcher, analyst, or decision-maker. They include interfaces, browsers, utilities, and workflow tools that make data easier to navigate, select, interpret, and use in practice.",
      entries: [
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
      ],
    },
    {
      id: "misc",
      label: "Misc",
      intro:
        "Smaller supporting builds, exploratory systems, and public-facing packaging work that stay useful even when they sit outside the main research pipeline.",
      entries: [
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
      ],
    },
  ] satisfies ProjectSection[],
};

export const articlesPage = {
  title: "Articles",
  lead: "Public-facing writing that translates research and systems thinking for wider audiences.",
  rail: [
    { id: "op-ed", label: "OP-Ed" },
    { id: "commentaries", label: "Commentaries" },
    { id: "essays-notes", label: "Essays & Notes" },
  ] satisfies RailItem[],
  sections: [
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
  ] satisfies ArticleSection[],
};

export const creativePage = {
  eyebrow: "Performance, Music & Film",
  title: "Creative",
  lead: "Music, performance, film, and storytelling across my artistic practice.",
};

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
};
