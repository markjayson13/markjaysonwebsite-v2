import { homeDiscoveryItems, socialLinks, withCreativeSite } from "./site";
import { withBase } from "../utils/paths";

export type HomeLink = {
  label: string;
  href: string;
  description: string;
};

export type HomeTopLink = {
  label: string;
  href?: string;
  menuTrigger?: boolean;
};

export type HomeField = {
  label: string;
  name: string;
  full?: boolean;
};

export type HomeHero = {
  headlineTop: string;
  headlineFrame: string[];
  roleLabels: string[];
  topLinks: HomeTopLink[];
  videoSrc: string;
};

export type HomeDiscovery = {
  title: string;
  defaultLabel: string;
};

export type HomeLatestItem = {
  label: string;
  title: string;
  summary: string;
  href: string;
  cta: string;
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
  sections: BioSection[];
};

export type BioSection = {
  title: string;
  paragraphs: string[];
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

export type PortfolioHubSection = {
  id: string;
  label: string;
  intro: string;
  summaryLabel?: string;
};

export type PortfolioHubTag = {
  id: string;
  label: string;
};

export type PortfolioHubMenuItem = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type PortfolioHubEntry = {
  id: string;
  sectionId: string;
  year: string;
  eyebrow: string;
  title: string;
  abstract: string;
  problem: string;
  action: string;
  result: string;
  tags: string[];
  href?: string;
  ctaLabel?: string;
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
    roleLabels: ["Economist", "Data Scientist", "Creative"],
    topLinks: [
      { label: "Home", href: withBase("/") },
      { label: "About", href: withBase("/bio") },
      { label: "Resume/CV", href: withBase("/resume") },
      { label: "Portfolio", href: withBase("/portfolio") },
      { label: "Creative", href: withCreativeSite("/") },
      { label: "Artistic Resume", href: withCreativeSite("/artistic-resume") },
      { label: "Headshots", href: withCreativeSite("/headshots") },
      { label: "Photoshoots", href: withCreativeSite("/photoshoots") },
      { label: "Profiles", href: withBase("/profiles") },
      { label: "Menu Bar", menuTrigger: true },
    ],
    videoSrc: withBase("/media/canva-home-hero.mp4"),
  } satisfies HomeHero,
  discovery: {
    title: "What do you want to find Out?",
    defaultLabel: "About",
  } satisfies HomeDiscovery,
  latestItems: [
    {
      label: "Latest Work",
      title: "Packaging Hierarchies in U.S. Higher Education",
      summary:
        "Current working-paper progress on how colleges structure grant, Pell, and institutional aid packages across institution-year panels.",
      href: withBase("/portfolio#research"),
      cta: "View research",
    },
    {
      label: "Current Submission",
      title: "Building a Quality-Assured IPEDS Institution-Year Panel",
      summary:
        "Ongoing workflow and paper packaging around a reproducible IPEDS panel build for faster, auditable higher-education analysis.",
      href: withBase("/portfolio#projects"),
      cta: "View project",
    },
    {
      label: "Latest Publication",
      title: "Revisiting Bennett’s Hypothesis",
      summary:
        "Published work on student aid, cost of attendance, and institutional pricing behavior across public and private nonprofit colleges.",
      href: "https://doi.org/10.9741/2766-7227.1033",
      cta: "Read publication",
    },
  ] satisfies HomeLatestItem[],
  crawlLinks: [
    {
      label: "About",
      href: withBase("/bio"),
      description: "Professional background, current focus, and the analytical perspective behind the work.",
    },
    {
      label: "Resume/CV",
      href: withBase("/resume"),
      description: "Education, experience, credentials, and tools in a cleaner professional summary.",
    },
    {
      label: "Portfolio",
      href: withBase("/portfolio"),
      description: "Research, projects, and publications organized into one evidence-driven hub.",
    },
    {
      label: "Profiles",
      href: withBase("/profiles"),
      description: "Academic, professional, technical, and archive profile surfaces in one place.",
    },
  ] satisfies HomeLink[],
  discoveryItems: homeDiscoveryItems,
  contact: {
    label: "Get in Touch",
    title: "Get in Touch",
    copy: "Reach out for econometrics, data engineering, policy analysis, pricing work, or research collaboration.",
    note: "Use the form below for professional inquiries and academic collaborations.",
    portraitSrc: withBase("/images/home-contact-portrait.png"),
    videoSrc: withBase("/media/canva-home-contact.mp4"),
    submitLabel: "Submit",
  } satisfies HomeContact,
  contactFields: [
    { label: "First Name*", name: "first-name" },
    { label: "Last Name*", name: "last-name" },
    { label: "EMAIL*", name: "email" },
    { label: "Subject", name: "subject" },
    { label: "Message", name: "message", full: true },
  ] satisfies HomeField[],
} as const;

export const bioPage = {
  title: "Mark Jayson Martinez Farol",
  portraitSrc: withBase("/images/bio/mark-jayson-bio-portrait.jpeg"),
  visiblePortraitSrc: withBase("/images/bio-portrait-cutout.png"),
  sections: [
    {
      title: "My Foundation: The Quantitative Economist",
      paragraphs: [
        "My name is Mark Jayson Farol. I am a quantitative economist who has earned a Master of Arts in Quantitative Business Economics. My training includes economic analysis, causal inference, and decision-based problem solving. While many data scientists focus on simply predicting the future accurately, my training teaches me to understand why I get the results I do.",
        "I am a structural model thinker. In other words, I discipline my own intuition and judgment based upon evidence. I want to be sure that any pattern I identify is real and provides some form of actionability rather than mere noise.",
      ],
    },
    {
      title: "The Engine: Data Engineering & Statistical Programming",
      paragraphs: [
        "When working with complex economic issues in practice, I find myself grappling with reality. With that said, I have extensive experience transforming large, highly dimensional, and generally disorganized administrative datasets into usable resources for causal analysis.",
        "That process of getting the data ready has required me to develop strong skills in both statistical programming and data architecture. Through my experience in creating robust ETL pipelines using a variety of tools, I am able to construct the data pipeline safely from a provenance standpoint before running a single econometric model. I do not just analyze data. I create the pipeline that enables the analysis.",
      ],
    },
    {
      title: "The Interdisciplinary Mindset",
      paragraphs: [
        "From day one I was driven by a multipassionate curiosity to understand what happens in reality and to verify actual world patterns. From a natural point of view, I have long been interested in the complex places where human behavior, systemic incentive structures, and data converge.",
        "I chose economics because it provided a rigorous mathematical framework through which I could evaluate human decision making. This perspective has also been heavily influenced by my formal scientific background, including pure mathematics, advanced programming, and modern data science.",
      ],
    },
    {
      title: "Leadership and Translation",
      paragraphs: [
        "While there are many people who can execute technically complex tasks well, my overall goal has always been to translate complex theories into practical application. Whether I am using advanced techniques like Difference GMM to study higher education finance or modeling dynamic panels, I believe strongly in translating technical ideas into practical applications for non-technical stakeholders.",
        "That same desire to translate complex ideas into tangible value carries over to my role as an educator. I regularly teach and mentor students in drawing valid economic inferences, evaluating their own findings, and seeing the best path forward.",
      ],
    },
    {
      title: "What Lies Ahead",
      paragraphs: [
        "Currently, I am focusing on utilizing these quantitative frameworks in real-world business contexts, particularly in areas such as analytics, financial economics, and strategic operations. I am seeking opportunities that require both a high level of analytical rigor and the ability to transform ambiguous, noisy data into a structured narrative that ultimately drives profitability.",
      ],
    },
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
    "Economist and data scientist with graduate training in quantitative business economics, applied econometrics, and large-scale administrative data analysis.",
    "Experienced in research design, panel-data workflows, data engineering, and stakeholder-facing communication across higher-education finance, policy analysis, and analytical decision support.",
  ],
  educationNarrative: [
    "My academic training centered on economics, quantitative analysis, and empirical research, with coursework and applied work that strengthened my ability to move from theory to operational data systems.",
    "At UNLV, I developed depth in econometrics, statistics, higher-education finance, and research communication while working on projects that required both technical rigor and practical interpretation.",
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
        "Supplementary training that strengthened presentation skills, public-facing confidence, and communication discipline alongside economics coursework.",
    },
    {
      title: "Advanced Diploma",
      subtitle: "Liberty High School",
      summary:
        "The transition into U.S. schooling built the adaptability, confidence, and persistence that later shaped my academic and professional trajectory.",
    },
  ] satisfies ResumeCredential[],
  experienceNarrative: [
    "My experience combines academic research, teaching support, and customer-facing leadership. Across those roles, the common thread has been translating complexity into clear action, whether that meant mentoring students, structuring data workflows, or supporting operational performance.",
    "The strongest through-line in my work is analytical communication: building evidence carefully, organizing it responsibly, and presenting it in ways that people can understand and use.",
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
    "My project work centers on research infrastructure, data engineering, and practical analytical tools. Each build is designed to reduce friction, improve data quality, or make economic evidence easier to produce and use.",
  projectCards: [
    {
      title: "Research",
      description:
        "Working papers and empirical studies on higher-education finance, pricing, aid, and policy analysis.",
      href: withBase("/portfolio#research"),
      cta: "Open portfolio",
    },
    {
      title: "Projects",
      description:
        "Data pipelines, utilities, and tooling built to support reproducible econometric and institutional analysis.",
      href: withBase("/portfolio#projects"),
      cta: "Open portfolio",
    },
    {
      title: "Publications",
      description:
        "Published work and public-facing writing that translate technical analysis into accessible takeaways.",
      href: withBase("/portfolio#publications"),
      cta: "Open portfolio",
    },
    {
      title: "Profiles",
      description:
        "Professional and academic profiles collected in a secondary archive.",
      href: withBase("/profiles"),
      cta: "View profiles",
    },
  ] satisfies ResumeProjectCard[],
  skillsIntro:
    "My skill set combines econometric research, analytical communication, and data engineering. The strongest overlap is where technical depth meets usable decision support.",
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
  ] satisfies SkillGroup[],
};

export const portfolioPage = {
  title: "Portfolio",
  lead:
    "Selected research, data systems, and public-facing writing focused on econometrics, causal inference, higher-education finance, and analytical decision support.",
  menu: [
    { id: "research", label: "Research" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "public-writing", label: "Public Writing" },
    { id: "creative", label: "Creative", href: withCreativeSite("/"), external: true },
  ] satisfies PortfolioHubMenuItem[],
  sections: [
    {
      id: "research",
      label: "Research",
      intro:
        "My research investigates the systems, incentives, and institutions that influence economic and social life, using quantitative analysis and large-scale data to uncover meaningful patterns.",
      summaryLabel: "Abstract",
    },
    {
      id: "projects",
      label: "Projects",
      intro: "Data engineering systems and analytical tools built to reduce friction, improve quality, and support decision-ready research.",
      summaryLabel: "Overview",
    },
    {
      id: "publications",
      label: "Publications",
      intro: "Published and formal outputs that translate technical analysis into readable evidence and argument.",
      summaryLabel: "Abstract",
    },
    {
      id: "public-writing",
      label: "Public Writing",
      intro: "Shorter commentary, essays, and public scholarship that make technical ideas easier to read and use.",
      summaryLabel: "Overview",
    },
  ] satisfies PortfolioHubSection[],
  tags: [
    { id: "all", label: "All" },
    { id: "econometrics-causal", label: "Econometrics & Causal Inference" },
    { id: "data-engineering", label: "Data Engineering" },
    { id: "higher-ed-policy", label: "Higher Education & Policy" },
    { id: "finance-pricing", label: "Finance & Pricing" },
    { id: "public-writing", label: "Public Writing" },
  ] satisfies PortfolioHubTag[],
  entries: [
    {
      id: "portfolio-packaging-hierarchies",
      sectionId: "research",
      year: "2026",
      eyebrow: "Working paper",
      title: "Packaging Hierarchies in U.S. Higher Education",
      abstract:
        "Maps how U.S. colleges structure financial-aid packages for full-time, first-time undergraduates and how those hierarchies vary with Pell exposure using institution-year IPEDS measures built from 2009 through 2023.",
      problem:
        "Colleges package grants, loans, and aid components differently, but those structures are hard to compare consistently across institutions and years.",
      action:
        "Built institution-year measures from IPEDS student-aid and cost data to compare how packaging changes with Pell exposure and sector differences.",
      result:
        "Created a cleaner way to evaluate grant-first, Pell-anchor, and institutional top-off strategies across the higher-education landscape.",
      tags: ["econometrics-causal", "higher-ed-policy", "finance-pricing"],
    },
    {
      id: "portfolio-costs-define-aid",
      sectionId: "research",
      year: "2026",
      eyebrow: "Working paper",
      title: "When Costs Define Aid",
      abstract:
        "Studies how institutions adjust cost-of-attendance components when federal rules bind, showing that publics and private nonprofits respond through different pricing and non-tuition channels.",
      problem:
        "Cost-of-attendance caps shape how institutions price attendance, but the response differs by sector and is often discussed without strong institution-level evidence.",
      action:
        "Estimated panel models of tuition, cost-of-attendance components, and borrowing margins to study how institutions adjust when federal rules bind.",
      result:
        "Showed that publics and private nonprofits respond through different pricing and non-tuition channels, making policy effects more interpretable.",
      tags: ["econometrics-causal", "finance-pricing", "higher-ed-policy"],
    },
    {
      id: "portfolio-ai-gender-wage",
      sectionId: "research",
      year: "2025",
      eyebrow: "Working paper",
      title: "AI Diffusion and Gender Wage Inequality",
      abstract:
        "Builds a quasi-experimental framework using CPS-MORG data to test whether AI diffusion changed wage gaps across tech and non-tech labor-market outcomes instead of relying on broad speculation.",
      problem:
        "Public discussion about AI and labor markets often lacks causal evidence on whether diffusion changes wage gaps across different kinds of work.",
      action:
        "Used CPS-MORG data in a quasi-experimental design with interaction terms and decomposition methods to compare tech and non-tech labor-market outcomes.",
      result:
        "Built an empirical framework that isolates how AI exposure may shift wage inequality instead of relying on broad speculation.",
      tags: ["econometrics-causal", "finance-pricing"],
    },
    {
      id: "portfolio-financial-literacy-food",
      sectionId: "research",
      year: "2025",
      eyebrow: "Master's capstone",
      title: "Financial Literacy and Food Insecurity in Seniors",
      abstract:
        "Examines how financial literacy relates to food insecurity among older adults in Clark County using multiple probability-based models and locally collected survey data.",
      problem:
        "Food insecurity among older adults is often discussed without enough locally grounded evidence about how financial literacy changes risk.",
      action:
        "Built food-security and literacy indices from local survey responses and estimated the relationship across linear probability, probit, logit, and IV-style specifications.",
      result:
        "Produced a clearer local evidence base showing that stronger financial literacy aligns with lower food-insecurity risk and supports intervention design.",
      tags: ["econometrics-causal", "higher-ed-policy"],
    },
    {
      id: "portfolio-ipeds-panel-builder",
      sectionId: "projects",
      year: "2026",
      eyebrow: "Data engineering",
      title: "IPEDS Harmonized Panel Builder",
      abstract:
        "A reproducible Python and SQL pipeline that converts fragmented NCES IPEDS releases into auditable institution-year panels with provenance, harmonization, and release checks built in.",
      problem:
        "IPEDS releases are fragmented across yearly access databases, which makes longitudinal analysis slow, error-prone, and difficult to reproduce.",
      action:
        "Built a Python and SQL pipeline that harmonizes variables, preserves provenance, cleans parent-child relationships, and produces auditable institution-year panels.",
      result:
        "Reduced manual preparation overhead and made multi-year higher-education analysis faster to validate and reuse.",
      tags: ["data-engineering", "higher-ed-policy"],
      href: githubProfile,
      ctaLabel: "GitHub Repo",
    },
    {
      id: "portfolio-fsa-panel-pipeline",
      sectionId: "projects",
      year: "2026",
      eyebrow: "Data engineering",
      title: "Federal Student Aid Volume Reports Panel Pipeline",
      abstract:
        "Transforms Federal Student Aid volume reports into dependable institution-year panels keyed by OPEID8 and award year, with QA checks for coverage, duplicates, gaps, and descriptor conflicts.",
      problem:
        "Federal Student Aid volume reports are useful for analysis, but the raw files are not structured for fast, consistent institution-year comparisons.",
      action:
        "Built a reproducible panel workflow keyed by OPEID8 and award year, with QA checks for duplicates, coverage, year gaps, and descriptor conflicts.",
      result:
        "Turned an awkward reporting archive into a dependable analytical dataset for tracking aid trends over time.",
      tags: ["data-engineering", "higher-ed-policy", "finance-pricing"],
      href: githubProfile,
      ctaLabel: "GitHub Repo",
    },
    {
      id: "portfolio-variable-browser",
      sectionId: "projects",
      year: "2025",
      eyebrow: "Analytical tooling",
      title: "IPEDS Variable Browser",
      abstract:
        "A browser-style utility that organizes variables, definitions, and release differences so repeated institutional-data analysis starts faster and with less manual metadata hunting.",
      problem:
        "Researchers lose time digging through metadata and annual dictionaries just to identify the right variables for a project.",
      action:
        "Created a browsing utility that organizes variable names, definitions, and release differences into a faster lookup workflow.",
      result:
        "Made project scoping and variable selection easier for repeated institutional-data analysis.",
      tags: ["data-engineering", "higher-ed-policy"],
    },
    {
      id: "portfolio-econometric-workflows",
      sectionId: "projects",
      year: "2025",
      eyebrow: "Analytical tooling",
      title: "Econometric Workflow Utilities",
      abstract:
        "Reusable utilities for filtering, validation, and model-prep steps that make recurring econometric work easier to audit, standardize, and extend.",
      problem:
        "Repeated research tasks become inconsistent when filtering, validation, and model-prep steps are rebuilt from scratch across projects.",
      action:
        "Built reusable utilities for dataset checks, variable selection, and model-ready outputs across recurring econometric workflows.",
      result:
        "Improved consistency, reduced setup time, and made recurring analytical work easier to audit and extend.",
      tags: ["data-engineering", "econometrics-causal"],
    },
    {
      id: "portfolio-bennett-publication",
      sectionId: "publications",
      year: "2025",
      eyebrow: "Published research",
      title: "Revisiting Bennett’s Hypothesis",
      abstract:
        "A published paper using National Center for Education Statistics data to explain how student aid and cost-of-attendance dynamics interact across public and private nonprofit colleges.",
      problem:
        "Debates about whether student aid raises college costs often rely on broad claims without clearly communicating the institutional mechanisms involved.",
      action:
        "Studied public and private nonprofit colleges with National Center for Education Statistics data to evaluate how aid and cost of attendance move together.",
      result:
        "Produced a published paper that translates a contested policy debate into clearer empirical evidence.",
      tags: ["higher-ed-policy", "finance-pricing", "public-writing"],
      href: "https://doi.org/10.9741/2766-7227.1033",
      ctaLabel: "Read publication",
    },
    {
      id: "portfolio-race-college-costs",
      sectionId: "publications",
      year: "2024",
      eyebrow: "Research paper",
      title: "The Race for Increasing College Costs",
      abstract:
        "A cross-sectional paper on tuition growth, aid, and institutional behavior that revisits Bennett’s Hypothesis through accessible empirical framing.",
      problem:
        "Tuition growth debates often flatten institutional differences and fail to connect cost changes with the structure of aid and pricing decisions.",
      action:
        "Used National Center for Education Statistics data to study tuition, aid, and institutional charging behavior through a Bennett’s Hypothesis lens.",
      result:
        "Produced a readable empirical paper that grounds the cost-growth debate in institution-level evidence rather than broad assumption.",
      tags: ["higher-ed-policy", "finance-pricing"],
    },
    {
      id: "portfolio-public-commentary",
      sectionId: "public-writing",
      year: "2025",
      eyebrow: "Public writing",
      title: "Commentary and Public Scholarship",
      abstract:
        "Shorter public-facing commentary that translates institutional incentives, policy tradeoffs, and research findings into direct language for non-specialist readers.",
      problem:
        "Technical economic work often loses influence when it is not rewritten for readers outside academic or specialist settings.",
      action:
        "Developed public-facing commentary formats that translate institutional incentives, policy tradeoffs, and research findings into direct language.",
      result:
        "Created a clearer bridge between technical analysis and broader audiences who need the implications, not just the methods.",
      tags: ["public-writing", "higher-ed-policy"],
    },
    {
      id: "portfolio-essays-notes",
      sectionId: "public-writing",
      year: "2024",
      eyebrow: "Public writing",
      title: "Essays and Notes",
      abstract:
        "Analytical essays and notes that move between economic observation, institutional critique, and public-facing interpretation without the format constraints of a formal paper.",
      problem:
        "Not every useful analytical idea belongs in a formal paper; some insights are better published as shorter, more accessible pieces.",
      action:
        "Structured essays and notes around concrete observations, institutional behavior, and policy relevance instead of method-heavy framing.",
      result:
        "Made analytical thinking easier to share, reference, and build on outside formal publication channels.",
      tags: ["public-writing"],
    },
  ] satisfies PortfolioHubEntry[],
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
    { id: "2026", label: "2026" },
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
  ] satisfies RailItem[],
  latest: {
    id: "2026",
    label: "2026",
    intro: "Current research directions and the 2026 working papers driving the portfolio right now.",
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
    src: withBase("/images/creative/headshots/headshot-02.jpeg"),
    alt: "Studio headshot of Mark Jayson Farol in a dark blazer against a light background.",
    caption: "Studio headshot",
    detailsText: "Clean studio headshot with a neutral background, direct gaze, and formal blazer styling.",
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
    { label: "Creative", href: withCreativeSite("/") },
    { label: "Artistic Resume", href: withCreativeSite("/artistic-resume") },
    { label: "Headshots", href: withCreativeSite("/headshots") },
    { label: "Photoshoots", href: withCreativeSite("/photoshoots") },
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
      href: withCreativeSite("/headshots"),
    },
    featureCards: [
      {
        title: "Performing Arts",
        description:
          "Stage work across musical theatre, plays, and live showcase performances, with strengths in character work, vocals, movement, and stage presence.",
        href: withCreativeSite("/artistic-resume"),
        cta: "Artistic Resume",
      },
      {
        title: "Modeling and Photography",
        description:
          "Editorial, portrait, and character-based visual work focused on camera presence, range, styling, and expressive storytelling.",
        href: withCreativeSite("/photoshoots"),
        cta: "Photoshoots",
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
  lead: "A secondary archive of my academic and professional profiles across the web.",
  buttons: [
    { label: "LinkedIn", symbol: "in", href: socialLookup.get("LinkedIn") },
    { label: "GitHub", symbol: "{ }", href: githubProfile },
    { label: "ORCID", symbol: "iD", href: socialLookup.get("ORCID") },
    { label: "ResearchGate", symbol: "RG", href: socialLookup.get("ResearchGate") },
    { label: "Google Scholar", symbol: "GS", href: socialLookup.get("Google Scholar") },
  ] satisfies ProfileButton[],
  secondaryLinks: [
    {
      label: "Legacy creative portfolio",
      href: socialLookup.get("Legacy creative portfolio") ?? "#",
      note: "Earlier creative portfolio and archived material.",
    },
  ] satisfies ProfileSecondaryLink[],
};
