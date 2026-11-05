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
  title: string;
  portraitSrc: string;
  videoSrc: string;
  submitLabel: string;
};

export type BioPage = {
  title: string;
  portraitSrc: string;
  visiblePortraitSrc: string;
  sections: BioSection[];
  exploreLinks: NavLink[];
};

export type BioSection = {
  title: string;
  paragraphs: string[];
};

export type ResumeCredential = {
  title: string;
  subtitle: string;
  dates?: string;
  summary: string;
};

export type ResumeRole = {
  organization: string;
  role: string;
  dates: string;
  summary: string;
};

export type ResumeProjectCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
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
      label: "New",
      title: "Macro by Mark",
      summary:
        "My macroeconomics learning site, with concept guides, theoretical models with graded practice, and simulators that run in the browser.",
      href: externalLinks.macroByMark,
      cta: "Visit macrobymark.com",
    },
    {
      label: "Open Source",
      title: "IPEDS Institution-Year Panel",
      summary:
        "A Python and SQL pipeline that turns the annual NCES IPEDS Access databases into a checked institution-year panel for 2004–2023.",
      href: externalLinks.ipedsPanelRepo,
      cta: "View on GitHub",
    },
    {
      label: "Latest Publication",
      title: "Revisiting Bennett’s Hypothesis",
      summary:
        "Published in Spectra Undergraduate Research Journal. Tests whether student aid raises the cost of attendance at public and private nonprofit colleges.",
      href: externalLinks.bennettDoi,
      cta: "Read publication",
    },
  ] satisfies HomeLatestItem[],
  crawlLinks: [
    {
      label: "About",
      href: withBase("/bio"),
      description: "My background, how I work, and what I want to do next.",
    },
    {
      label: "Resume/CV",
      href: withBase("/resume"),
      description: "Education, experience, certifications, and skills.",
    },
    {
      label: "Portfolio",
      href: withBase("/portfolio"),
      description: "Research papers, data projects, and publications.",
    },
    {
      label: "Profiles",
      href: withBase("/profiles"),
      description: "LinkedIn, GitHub, Google Scholar, ORCID, and ResearchGate.",
    },
  ] satisfies HomeLink[],
  contact: {
    title: "Get in Touch",
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
      title: "Economist by training",
      paragraphs: [
        "My name is Mark Jayson Farol. I am a quantitative economist with a Master of Arts in Quantitative Business Economics from the University of Nevada, Las Vegas. My training is in economic analysis and causal inference: working out why the data looks the way it does, as well as what it shows.",
        "I think in structural models. I test my own intuition against the evidence and check that a pattern is real before anyone acts on it.",
      ],
    },
    {
      title: "Building the data",
      paragraphs: [
        "Complex economic questions rarely come with clean data. I have spent a lot of time working with large, disorganized administrative datasets and building the infrastructure needed to make causal analysis possible.",
        "I build those pipelines myself in Python and SQL, so each dataset is reproducible and traceable to its source before a single econometric model runs. My IPEDS and Federal Student Aid panel pipelines are public on GitHub.",
      ],
    },
    {
      title: "Why economics",
      paragraphs: [
        "I have always been drawn to the places where human behavior, incentive structures, and measurable data intersect. That curiosity pushed me toward economics before I had the language to explain why.",
        "I chose economics because it gave me a rigorous way to study decisions instead of only describing them. Math and programming sharpened that further.",
      ],
    },
    {
      title: "Teaching and explaining",
      paragraphs: [
        "Results only matter if the people who need them can understand them. I have spent years explaining economics to students, faculty, and non-specialists, whether that meant walking through a regression table or rewriting a methods section for a policy audience. UNLV selected me as an Outstanding Student Commencement Speaker.",
        "Teaching reinforced that. As a graduate teaching assistant, I worked with students on drawing valid economic inferences, judging their own findings critically, and knowing when a result is worth building on.",
      ],
    },
    {
      title: "What's next",
      paragraphs: [
        "I want to apply these tools in business, especially analytics, financial economics, and strategy, in roles where the quantitative work is rigorous and the results shape decisions.",
        "I also run Macro by Mark, a macroeconomics learning site built from the models and simulators I first made to teach myself.",
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
    { label: "Summary", href: "#summary" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Skills", href: "#skills" },
  ] satisfies NavLink[],
  summary: [
    "I was born in a rural area in the Philippines, where ambition often grows alongside uncertainty and where education can feel deeply personal because of what it makes possible. Moving to the United States and continuing my education here reshaped my world. It demanded adaptation, resilience, and the ability to keep building while learning a new environment, a new academic culture, and a new sense of what my future could become.",
    "Over time, that journey became the foundation of who I am today. I grew into someone who moves across disciplines with purpose: economics, statistics, research, teaching, and communication. My path through high school in the United States, undergraduate study at UNLV, and graduate training in quantitative economics gave me more than credentials. It gave me a way of thinking grounded in rigor, curiosity, communication, and a strong belief that analytical work should stay connected to human lives.",
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
      dates: "Aug 2024 – Dec 2025",
      summary:
        "Advanced graduate training in economic theory, applied statistics, quantitative research, and econometric methods. Selected as an Outstanding Student Commencement Speaker.",
    },
    {
      title: "Bachelor of Science in Business Administration",
      subtitle: "Economics, University of Nevada, Las Vegas",
      dates: "Aug 2019 – May 2024",
      summary:
        "Coursework across business, economics, and communication, plus my first research paper and first publication.",
    },
    {
      title: "Minor in Theatre",
      subtitle: "University of Nevada, Las Vegas",
      dates: "Aug 2019 – May 2024",
      summary:
        "Training that strengthened presentation skills and public-speaking confidence alongside the economics coursework.",
    },
    {
      title: "Advanced Diploma",
      subtitle: "Liberty High School",
      summary:
        "The move into U.S. schooling built the adaptability and persistence that later shaped how I approached college and work.",
    },
  ] satisfies ResumeCredential[],
  experienceNarrative: [
    "My experience spans academic research, teaching, and customer-facing leadership. In each role I took something complex and made it usable, whether that meant helping students read regression output, structuring a dataset for reproducible analysis, or explaining results to the people who had to act on them.",
    "As faculty began to recognize my research, I presented at symposiums, published my first article, and grew smaller analyses into larger empirical projects. Those habits carried me into graduate study and longer-term data infrastructure work. In 2026 I started Macro by Mark, a macroeconomics learning site that I build and run myself.",
  ],
  roles: [
    {
      organization: "Macro by Mark",
      role: "Founder",
      dates: "2026 – Present",
      summary:
        "Built and run macrobymark.com, a macroeconomics learning site with concept guides, theoretical models with graded practice, and browser simulators. Built end to end with Next.js, TypeScript, Supabase, and Stripe.",
    },
    {
      organization: "UNLV Department of Economics",
      role: "Graduate Researcher",
      dates: "Aug 2024 – Dec 2025",
      summary:
        "Faculty-supervised research on higher-education finance, tuition-setting, and college pricing. Built institution-year data infrastructure using Python, SQL, panel econometrics, and validation checks.",
    },
    {
      organization: "University of Nevada, Las Vegas",
      role: "Graduate Teaching Assistant",
      dates: "Aug 2024 – Dec 2025",
      summary:
        "Supported five economics courses (micro and macro principles, statistics, econometrics, and the research seminar), built lecture materials, led review sessions, and mentored students through empirical projects and final presentations.",
    },
    {
      organization: "Kate Spade New York",
      role: "Lead Sales Associate",
      dates: "Jul 2022 – Jul 2023",
      summary:
        "Promoted into a leadership role. Ran opening and closing operations, led the sales floor, and reported daily and weekly sales metrics to the team. Top seller across my time at the store, with top-performer recognition three years in a row.",
    },
    {
      organization: "Kate Spade New York",
      role: "Sales Associate",
      dates: "Mar 2020 – Jul 2022",
      summary:
        "Built a strong sales record through deep product knowledge, repeat client outreach, and consistent service across a high-traffic floor.",
    },
  ] satisfies ResumeRole[],
  certificationsIntro:
    "After the econometrics and research training, I kept going with structured programs in finance and data science that build on the same quantitative foundation.",
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
    "My projects center on research data infrastructure and tools that make economic evidence easier to produce, check, and use.",
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
        "Data pipelines and tools for reproducible econometric and institutional analysis.",
      href: withBase("/portfolio#projects"),
      cta: "Open portfolio",
    },
    {
      title: "Publications",
      description: "Published papers and finished research reports.",
      href: withBase("/portfolio#publications"),
      cta: "Open portfolio",
    },
    {
      title: "Macro by Mark",
      description: "My macroeconomics learning site with models, simulators, and concept guides.",
      href: externalLinks.macroByMark,
      cta: "Visit site",
    },
  ] satisfies ResumeProjectCard[],
  skillsIntro: "I picked these up through research, teaching, and customer-facing work.",
  skillGroups: [
    {
      title: "Economics, Finance & Policy",
      items: ["Higher-education finance", "Pricing and aid systems", "Market analysis", "Policy interpretation"],
    },
    {
      title: "Statistics, Econometrics & Research",
      items: ["Panel econometrics", "Fixed effects", "Instrumental variables", "Causal inference", "Stata", "R"],
    },
    {
      title: "Data Science, Programming & Engineering",
      items: ["Python", "SQL", "DuckDB", "PyArrow", "Reproducible ETL", "Data validation", "TypeScript and Next.js"],
    },
    {
      title: "Communication, Teaching & Leadership",
      items: ["Lecture design", "Student mentoring", "Public speaking", "Stakeholder translation"],
    },
  ] satisfies SkillGroup[],
};

export const portfolioPage = {
  title: "Portfolio",
  lead: "Research papers, data pipelines, and publications on econometrics, causal inference, and higher-education finance.",
  menu: [
    { id: "research", label: "Research" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
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
      intro: "Data pipelines and research tools I built for reproducible analysis, plus Macro by Mark.",
      summaryLabel: "Overview",
    },
    {
      id: "publications",
      label: "Publications",
      intro: "Published papers and finished research reports.",
      summaryLabel: "Abstract",
    },
  ] satisfies PortfolioHubSection[],
  tags: [
    { id: "econometrics-causal", label: "Econometrics & Causal Inference" },
    { id: "data-engineering", label: "Data Engineering" },
    { id: "higher-ed-policy", label: "Higher Education & Policy" },
    { id: "finance-pricing", label: "Finance & Pricing" },
    { id: "labor-social", label: "Labor & Social Policy" },
    { id: "econ-education", label: "Economics Education" },
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
      tags: ["econometrics-causal", "finance-pricing", "higher-ed-policy"],
    },
    {
      id: "portfolio-ai-gender-wage",
      sectionId: "research",
      year: "2025",
      eyebrow: "Working paper",
      title: "AI Diffusion and Gender Wage Inequality",
      abstract:
        "Uses CPS-MORG data and a quasi-experimental design to test whether the spread of AI changed gender wage gaps in tech and non-tech jobs.",
      tags: ["econometrics-causal", "labor-social"],
    },
    {
      id: "portfolio-financial-literacy-food",
      sectionId: "research",
      year: "2025",
      eyebrow: "Master's capstone",
      title: "Financial Literacy and Food Insecurity in Seniors",
      abstract:
        "Examines how financial literacy relates to food insecurity among older adults in Clark County using multiple probability-based models and locally collected survey data.",
      tags: ["econometrics-causal", "labor-social"],
    },
    {
      id: "portfolio-macro-by-mark",
      sectionId: "projects",
      year: "2026",
      eyebrow: "Product",
      title: "Macro by Mark",
      abstract:
        "A macroeconomics learning site I built and run. It has concept guides, schools of thought, policy chapters, theoretical models with graded practice, and simulators that run in the browser.",
      tags: ["econ-education"],
      href: externalLinks.macroByMark,
      ctaLabel: "Visit site",
    },
    {
      id: "portfolio-ipeds-panel-builder",
      sectionId: "projects",
      year: "2026",
      eyebrow: "Data engineering",
      title: "IPEDS Harmonized Panel Builder",
      abstract:
        "A reproducible Python and SQL pipeline that converts fragmented NCES IPEDS releases into auditable institution-year panels with provenance, harmonization, and release checks built in.",
      tags: ["data-engineering", "higher-ed-policy"],
      href: externalLinks.ipedsPanelRepo,
      ctaLabel: "GitHub repo",
    },
    {
      id: "portfolio-fsa-panel-pipeline",
      sectionId: "projects",
      year: "2026",
      eyebrow: "Data engineering",
      title: "Federal Student Aid Volume Reports Panel Pipeline",
      abstract:
        "Transforms Federal Student Aid volume reports into dependable institution-year panels keyed by OPEID8 and award year, with QA checks for coverage, duplicates, gaps, and descriptor conflicts.",
      tags: ["data-engineering", "higher-ed-policy", "finance-pricing"],
      href: externalLinks.fsaPanelRepo,
      ctaLabel: "GitHub repo",
    },
    {
      id: "portfolio-variable-browser",
      sectionId: "projects",
      year: "2025",
      eyebrow: "Analytical tooling",
      title: "IPEDS Variable Browser",
      abstract:
        "A browser-style utility that organizes variables, definitions, and release differences so repeated institutional-data analysis starts faster and with less manual metadata hunting.",
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
      tags: ["data-engineering", "econometrics-causal"],
    },
    {
      id: "portfolio-bennett-publication",
      sectionId: "publications",
      year: "2025",
      eyebrow: "Published research",
      title: "Revisiting Bennett’s Hypothesis",
      abstract:
        "Published in Spectra Undergraduate Research Journal. Uses National Center for Education Statistics data to test whether government and institutional aid raise the cost of attendance at public and private nonprofit colleges.",
      tags: ["higher-ed-policy", "finance-pricing"],
      href: externalLinks.bennettDoi,
      ctaLabel: "Read publication",
    },
    {
      id: "portfolio-race-college-costs",
      sectionId: "publications",
      year: "2024",
      eyebrow: "Research paper",
      title: "The Race for Increasing College Costs",
      abstract:
        "A cross-sectional paper on tuition growth, aid, and institutional pricing, framed around Bennett’s Hypothesis and built on National Center for Education Statistics data.",
      tags: ["higher-ed-policy", "finance-pricing"],
    },
  ] satisfies PortfolioHubEntry[],
};

export const profilesPage = {
  title: "Profiles",
  lead: "Where to find my work and academic record online.",
  videoSrc: withBase("/media/canva-profiles.mp4"),
  buttons: [
    { label: "LinkedIn", icon: "linkedin", href: externalLinks.linkedIn },
    { label: "GitHub", icon: "github", href: externalLinks.github },
    { label: "ORCID", icon: "orcid", href: externalLinks.orcid },
    { label: "ResearchGate", icon: "researchgate", href: externalLinks.researchGate },
    { label: "Google Scholar", icon: "scholar", href: externalLinks.googleScholar },
  ] satisfies ProfileButton[],
} satisfies ProfilesPage;
