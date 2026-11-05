import { externalLinks, mainSiteTopLinks, withCreativeSite } from "./site";
import type { NavLink, SocialIconName } from "./site";
import { withBase } from "../utils/paths";

export type HomeLink = {
  label: string;
  href: string;
  description: string;
};

export type HomeField = {
  label: string;
  name: string;
  slot: string;
  type?: "text" | "email";
  required?: boolean;
  autocomplete?: string;
  full?: boolean;
};

export type HomeHeroRole = {
  label: string;
  href: string;
};

export type HomeHero = {
  headlineTop: string;
  headlineFrame: string[];
  roles: HomeHeroRole[];
  topLinks: NavLink[];
  videoSrc: string;
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
  exploreLinks: BioExploreLink[];
};

export type BioSection = {
  title: string;
  paragraphs: string[];
};

export type BioExploreLink = {
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

export type ProfileButton = {
  label: string;
  icon: SocialIconName;
  href: string;
};

export type ProfilesPage = {
  title: string;
  lead: string;
  videoSrc: string;
  buttons: ProfileButton[];
};

export const homePage = {
  hero: {
    headlineTop: "Mark Jayson",
    headlineFrame: ["Martinez", "Farol"],
    roles: [
      { label: "Economist", href: withBase("/portfolio#research") },
      { label: "Data Scientist", href: withBase("/portfolio#projects") },
      { label: "Creative", href: withCreativeSite("/") },
    ],
    topLinks: mainSiteTopLinks,
    videoSrc: withBase("/media/canva-home-hero.mp4"),
  } satisfies HomeHero,
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
      description: "Academic, professional, and technical profile surfaces in one place.",
    },
  ] satisfies HomeLink[],
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
    { label: "First Name*", name: "first_name", slot: "first-name", required: true, autocomplete: "given-name" },
    { label: "Last Name*", name: "last_name", slot: "last-name", required: true, autocomplete: "family-name" },
    { label: "Email*", name: "email", slot: "email", type: "email", required: true, autocomplete: "email" },
    { label: "Subject", name: "subject", slot: "subject", autocomplete: "off" },
    { label: "Message*", name: "message", slot: "message", required: true, full: true },
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
        "My name is Mark Jayson Farol. I am a quantitative economist with a Master of Arts in Quantitative Business Economics. My training covers economic analysis, causal inference, and the tools to understand not just what the data shows, but why.",
        "I think in structural models. I test my own intuition against evidence and try to make sure any pattern I identify is real and worth acting on, not just statistical noise.",
      ],
    },
    {
      title: "The Engine: Data Engineering & Statistical Programming",
      paragraphs: [
        "Complex economic questions rarely come with clean data. I have spent a lot of time working with large, disorganized administrative datasets and building the infrastructure needed to make causal analysis possible.",
        "Getting the data ready requires both statistical programming and data architecture skills. I build ETL pipelines in Python, SQL, and related tools that are provenance-safe and reproducible before a single econometric model runs. I build the pipeline that makes the analysis possible, not just the analysis itself.",
      ],
    },
    {
      title: "The Interdisciplinary Mindset",
      paragraphs: [
        "I have always been drawn to the places where human behavior, incentive structures, and measurable data intersect. That curiosity pushed me toward economics before I had the language to explain why.",
        "I chose economics because it gave me a rigorous framework for studying decisions, not just describing them. My background in mathematics and programming sharpened that further.",
      ],
    },
    {
      title: "Leadership and Translation",
      paragraphs: [
        "Technical sophistication matters less if the results cannot be explained to the people who need to act on them. I have spent years in front of students, faculty, and non-specialist audiences translating economic findings into something usable — whether that meant simplifying a regression result or rewriting a methods section for a policy audience.",
        "Teaching reinforces that. I work with students on drawing valid economic inferences, evaluating their findings critically, and knowing when a result is worth building on.",
      ],
    },
    {
      title: "What Lies Ahead",
      paragraphs: [
        "Right now I am focused on applying these tools in business contexts, especially in analytics, financial economics, and strategy. I want roles where the quantitative work is rigorous and the results actually shape decisions.",
      ],
    },
  ],
  exploreLinks: [
    { label: "Resume/CV", href: withBase("/resume") },
    { label: "Portfolio", href: withBase("/portfolio") },
    { label: "Profiles", href: withBase("/profiles") },
    { label: "Contact", href: withBase("/#contact") },
  ],
} satisfies BioPage;

export const resumePage = {
  title: "Mark Jayson M. Farol",
  jumpLinks: [
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Summary", href: "#summary" },
  ] satisfies ResumeJumpLink[],
  summary: [
    "I was born in a rural area in the Philippines, where ambition often grows alongside uncertainty and where education can feel deeply personal because of what it makes possible. Moving to the United States and continuing my education here reshaped my world. It demanded adaptation, resilience, and the ability to keep building while learning a new environment, a new academic culture, and a new sense of what my future could become.",
    "Over time, that journey became the foundation of who I am today. I grew into someone who moves across disciplines with purpose: economics, statistics, research, teaching, and communication. My path through high school in the United States, undergraduate study at UNLV, and graduate training in quantitative economics gave me more than credentials. It gave me a way of thinking grounded in rigor, curiosity, communication, and a strong belief that analytical work should stay connected to human lives.",
    "This page tells that story through the experiences, education, and roles that shaped me.",
  ],
  educationNarrative: [
    "My educational journey began in the Philippines and continued in the United States, where attending high school marked a major turning point in my life. That transition meant adjusting to a different culture, a different school system, and a different set of expectations while learning how to carry my own story with confidence. Those early experiences built the resilience, adaptability, and drive that would later define how I approached college, research, and professional life.",
    "At the University of Nevada, Las Vegas, I pursued my Bachelor of Science in Business Administration while also completing a minor in Theatre. My undergraduate years were formative because they allowed both sides of me to grow at the same time: the analytical side drawn to economics, data, and systems, and the public-facing side that found meaning in communication, performance, and expression.",
    "Graduate study in Quantitative Business Economics deepened that foundation through economic theory, statistics, applied quantitative analysis, and econometric methods. It also gave me more experience lecturing, supporting students one-on-one, collaborating with faculty, participating in conferences, and carrying research into broader academic and professional settings.",
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
        "Built a foundation across business, economics, and communication, with early research development and a first undergraduate publication.",
    },
    {
      title: "Minor in Theatre",
      subtitle: "University of Nevada, Las Vegas",
      summary:
        "Training that strengthened presentation skills and public-speaking confidence alongside the economics coursework.",
    },
    {
      title: "Advanced Diploma",
      subtitle: "Liberty High School",
      summary:
        "The transition into U.S. schooling built the adaptability and persistence that later shaped how I approached college and professional life.",
    },
  ] satisfies ResumeCredential[],
  experienceNarrative: [
    "My experience spans academic research, teaching support, and customer-facing leadership. Across those roles, the common thread has been taking something complex and making it usable — whether that meant helping students understand regression output, structuring a dataset for reproducible analysis, or communicating results to people who needed to act on them.",
    "That focus sharpened further as my faculty began to recognize my research output. I presented work at symposiums, published my first article, expanded smaller analyses into larger empirical projects, and built the habits that carried me into graduate study and longer-form infrastructure work.",
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
        "Built a strong sales record through deep product knowledge, repeat client outreach, and consistent service across a high-traffic floor.",
    },
  ] satisfies ResumeRole[],
  certificationsIntro:
    "My certifications reflect a broader pattern: I treat learning as something that continues past the classroom. After the econometrics and research training, I kept going with structured programs in data science, analytics, and finance — tools that build directly on the quantitative foundation and stay usable in practice.",
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
        "Published work and public-facing writing that translate technical analysis into readable argument.",
      href: withBase("/portfolio#publications"),
      cta: "Open portfolio",
    },
    {
      title: "Public Writing",
      description:
        "Public-facing essays and analysis that translate technical work into readable argument.",
      href: withBase("/portfolio#public-writing"),
      cta: "Open portfolio",
    },
  ] satisfies ResumeProjectCard[],
  skillsIntro:
    "My skills came from different directions — research, teaching, and professional work — but they reinforce each other. The economics gives me the right questions, the data engineering gives me the means to answer them, and the communication side means the results can actually be used.",
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
        "My research uses quantitative analysis and large-scale administrative data to examine how financial aid, institutional behavior, and pricing systems work in U.S. higher education.",
      summaryLabel: "Abstract",
    },
    {
      id: "projects",
      label: "Projects",
      intro: "Data engineering systems and analytical tools built to reduce preparation time, improve data quality, and support reproducible research.",
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
        "Built an empirical framework that isolates how AI exposure may shift wage inequality without relying on broad assumptions.",
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
        "Produced local evidence showing that stronger financial literacy is associated with lower food-insecurity risk, with implications for program design.",
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
      href: externalLinks.github,
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
      href: externalLinks.github,
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
        "Made the research implications available to readers outside academic settings.",
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

export const profilesPage = {
  title: "Profiles",
  lead: "A curated hub of my academic, professional, and technical presence across the web.",
  videoSrc: withBase("/media/canva-profiles.mp4"),
  buttons: [
    { label: "LinkedIn", icon: "linkedin", href: externalLinks.linkedIn },
    { label: "GitHub", icon: "github", href: externalLinks.github },
    { label: "ORCID", icon: "orcid", href: externalLinks.orcid },
    { label: "ResearchGate", icon: "researchgate", href: externalLinks.researchGate },
    { label: "Google Scholar", icon: "scholar", href: externalLinks.googleScholar },
  ] satisfies ProfileButton[],
} satisfies ProfilesPage;
