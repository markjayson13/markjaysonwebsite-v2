import { withBase } from "../utils/paths";

export type NavLink = {
  label: string;
  href: string;
};

export type CornerMenuItem = {
  label: string;
  href: string;
  title: string;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
  note: string;
};

export type GatewayCard = {
  title: string;
  description: string;
  href: string;
  accent: string;
  audience: string;
};

export type SkillCluster = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  organization: string;
  dateRange: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  dateRange: string;
  summary: string;
  highlights: string[];
};

export type ResearchItem = {
  status: string;
  title: string;
  outlet: string;
  date: string;
  summary: string;
  methods: string[];
  links: { label: string; href: string }[];
};

export type PortfolioEntry = {
  title: string;
  category: string;
  timeframe: string;
  problem: string;
  approach: string;
  outcome: string;
  tools: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  category: "Academic" | "Professional" | "Creative" | "Social";
  note: string;
  enabled: boolean;
};

export type PerformanceCredit = {
  date: string;
  title: string;
  role: string;
  venue: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: withBase("/") },
  { label: "Bio", href: withBase("/bio") },
  { label: "Resume", href: withBase("/resume") },
  { label: "Portfolio", href: withBase("/portfolio") },
  { label: "Profiles", href: withBase("/profiles") },
];

export const cornerMenuItems: CornerMenuItem[] = [
  {
    label: "About",
    href: withBase("/bio"),
    title: "About",
    description:
      "I’m Mark Jayson Farol, an economist, artist, scientist, musician, and statistician working at the intersection of data, policy, and creative expression.",
  },
  {
    label: "Resume/CV",
    href: withBase("/resume"),
    title: "Resume/CV",
    description: "(Placeholder)",
  },
  {
    label: "Portfolio",
    href: withBase("/portfolio"),
    title: "Portfolio",
    description: "Research, projects, public writing, and creative work.",
  },
  {
    label: "Profiles",
    href: withBase("/profiles"),
    title: "Profiles",
    description:
      "A curated hub of my academic, professional, technical, and creative presence across the web.",
  },
];

export const profile = {
  name: "Mark Jayson Farol",
  shortName: "MJF",
  title: "Economist with a creative edge",
  headline:
    "Data Scientist (Econometrics) | Pricing Analytics and Financial Economics | Causal Inference | High-Dimensional Administrative Data",
  degreeLine:
    "M.A. in Quantitative Business Economics graduate from the University of Nevada, Las Vegas",
  location: "Las Vegas, Nevada, United States",
  relocation: "Relocating to New York, NY",
  summary:
    "I pair rigorous economics with the arts because real impact needs both analytical precision and human connection.",
  mission:
    "My work turns messy, high-volume data into clean, decision-ready evidence and then translates the analysis into clear stories stakeholders can act on.",
  audience:
    "I am exploring analyst roles where quantitative depth meets real-world decisions, especially across financial services, economic research, pricing, strategy, risk, and policy analysis.",
  distinction:
    "Selected as an Outstanding Student Commencement Speaker for translating complex analysis into persuasive takeaways.",
  languages: ["English", "Tagalog"],
  tools: ["Stata", "R", "Python", "Excel", "DuckDB", "PyArrow", "GitHub"],
};

export const pageStats = {
  home: [
    { value: "1", label: "Published article", note: "Spectra Undergraduate Research Journal" },
    { value: "5", label: "Economics courses supported", note: "Micro, macro, statistics, econometrics, capstone" },
    { value: "3", label: "Working papers in motion", note: "Higher-ed finance and pricing dynamics" },
    { value: "200+", label: "Students supported per term", note: "Lecture, review, tutoring, and office hours" },
  ],
  resume: [
    { value: "4", label: "Core roles featured", note: "Research, teaching, and client-facing operations" },
    { value: "5", label: "Courses taught and supported", note: "ECON 102, 103, 261, 441, and 495" },
    { value: "3", label: "Top-seller recognitions", note: "kate spade new york tenure" },
    { value: "NYC", label: "Relocation target", note: "Open to analyst roles in New York" },
  ],
  research: [
    { value: "2004-2024", label: "IPEDS panel span", note: "Research-ready institution-year infrastructure" },
    { value: "100th", label: "WEAI conference", note: "Working paper presentation milestone" },
    { value: "3", label: "Current paper streams", note: "Pricing, aid packaging, and finance" },
    { value: "NCES", label: "Primary data backbone", note: "IPEDS, CPS-MORG, and local survey work" },
  ],
  portfolio: [
    { value: "5", label: "Featured case studies", note: "From data engineering to forecasting and strategy" },
    { value: "3.49%", label: "Forecast MAPE", note: "Airline RPM time-series project" },
    { value: "IV", label: "Causal toolset", note: "Instrumental variables, fixed effects, and panel models" },
    { value: "End-to-end", label: "Delivery style", note: "Problem framing, data work, analysis, and narrative" },
  ],
  artistry: [
    { value: "Actor", label: "Performance lane", note: "Stage and screen training with live credits" },
    { value: "Singer", label: "Creative lane", note: "Choir, gala performance, tenor and baritone work" },
    { value: "Director", label: "Production lane", note: "Creative leadership and ensemble direction" },
    { value: "UNLV", label: "Training bridge", note: "Economics major with theatre minor" },
  ],
  socials: [
    { value: "Academic", label: "Research identity", note: "Scholar, ORCID, and ResearchGate" },
    { value: "Professional", label: "Career identity", note: "LinkedIn and portfolio-facing presence" },
    { value: "Creative", label: "Performance identity", note: "Backstage and legacy creative portfolio" },
    { value: "Link-only", label: "Contact posture", note: "No phone or home address published" },
  ],
} satisfies Record<string, Metric[]>;

export const gatewayCards: GatewayCard[] = [
  {
    title: "Read the story",
    description: "Start with the throughline connecting economics, communication, and performance.",
    href: "#story",
    accent: "#67e6c5",
    audience: "Overview",
  },
  {
    title: "Review the resume",
    description: "See roles, teaching experience, research work, education, and certifications in progress.",
    href: withBase("/resume"),
    accent: "#d6a34e",
    audience: "Recruiters",
  },
  {
    title: "Open the research",
    description: "Jump to publications, working papers, methods, datasets, and academic profiles.",
    href: withBase("/research"),
    accent: "#8ab4ff",
    audience: "Faculty and collaborators",
  },
  {
    title: "Explore the portfolio",
    description: "Read professional case studies on pricing, forecasting, policy analysis, and data engineering.",
    href: withBase("/portfolio"),
    accent: "#ef7d72",
    audience: "Hiring managers",
  },
  {
    title: "Enter the artistry",
    description: "See performance credits, training, headshots, and the creative side of the work.",
    href: withBase("/artistry"),
    accent: "#d98cff",
    audience: "Creative teams",
  },
  {
    title: "Find the links",
    description: "Visit the academic, professional, and creative platforms where my work lives online.",
    href: withBase("/socials"),
    accent: "#8fd36f",
    audience: "Connections",
  },
];

export const skillClusters: SkillCluster[] = [
  {
    title: "Causal inference and econometrics",
    items: [
      "Panel data and fixed effects",
      "Dynamic specifications and difference-GMM",
      "Instrumental variables and hypothesis testing",
      "Regression interpretation for decision-makers",
    ],
  },
  {
    title: "Data engineering and validation",
    items: [
      "IPEDS and NCES data harmonization",
      "Dictionary lakes and schema-aware QC",
      "Research-ready long and wide panel construction",
      "Feature engineering and release-drift checks",
    ],
  },
  {
    title: "Communication and delivery",
    items: [
      "Lecture design and large-section instruction",
      "Executive summaries and policy storytelling",
      "Slide decks, presentations, and public speaking",
      "1:1 mentoring and stakeholder-facing interpretation",
    ],
  },
];

export const honors = [
  "Outstanding Student Commencement Speaker",
  "Published author in Spectra Undergraduate Research Journal",
  "WEAI 100th Annual Conference presenter",
  "Co-builder of the UNLV ECON 495 Undergraduate Working Paper Journal",
];

export const certifications = {
  inProgress: [
    "Financial Modeling and Valuation Analyst (FMVA)",
    "Commercial Banking and Credit Analyst (CBCA)",
    "Capital Markets and Securities Analyst (CMSA)",
    "Business Intelligence and Data Analyst (BIDA)",
    "Financial Planning and Wealth Management Professional (FPWMP)",
    "FinTech Industry Professional (FTIP)",
    "Financial Planning and Analysis Professional (FPAP)",
  ],
  inPreparation: ["FINRA Securities Industry Essentials (SIE)"],
};

export const coursesSupported = [
  "ECON 102 - Principles of Microeconomics",
  "ECON 103 - Principles of Macroeconomics",
  "ECON 261 - Principles of Statistics",
  "ECON 441 - Econometrics",
  "ECON 495 - Seminar in Economic Research",
];

export const experiences: ExperienceItem[] = [
  {
    role: "Graduate Teaching Assistant",
    organization: "University of Nevada, Las Vegas",
    dateRange: "Aug 2024 - Dec 2025",
    location: "Las Vegas, Nevada",
    summary:
      "Supported five core economics courses through lecture design, student mentorship, tutoring, assessment support, and large-section instruction.",
    bullets: [
      "Created lecture slide decks and delivered lectures and review sessions for 200+ students per semester across micro and macro principles.",
      "Provided quantitative course support in statistics and econometrics, helping students interpret probability, hypothesis tests, and regression output.",
      "Held high-traffic office hours five days per week and coached students through capstone research design, data work, and final presentations.",
      "Partnered with faculty on pacing, assessment design, and recurring pain-point analysis.",
    ],
    skills: [
      "University lecturing",
      "Instructional design",
      "Public speaking",
      "Tutoring and mentoring",
      "Communication",
    ],
  },
  {
    role: "Graduate Researcher",
    organization: "University of Nevada, Las Vegas",
    dateRange: "Aug 2024 - Dec 2025",
    location: "Las Vegas, Nevada",
    summary:
      "Pursued research beyond degree requirements on higher-education finance, college cost drivers, and causal identification with national administrative data.",
    bullets: [
      "Built an IPEDS panel construction pipeline that converts cross-sectional releases into consistent institution-year data suitable for longitudinal analysis.",
      "Authored three working papers on college pricing dynamics, aid packaging, and institutional behavior using fixed effects and IV strategies.",
      "Expanded technical depth through advanced econometrics, panel methods, and self-directed data engineering work in Stata, R, and Python.",
      "Presented one working paper at WEAI's 100th Annual Conference.",
    ],
    skills: ["Econometrics", "Panel data analysis", "Causal inference", "Data engineering", "GitHub"],
  },
  {
    role: "Lead Sales Associate",
    organization: "kate spade new york",
    dateRange: "Jul 2022 - Jul 2023",
    location: "Las Vegas, Nevada",
    summary:
      "Led floor execution, high-touch clienteling, and store operations while routinely driving five-figure sales shifts and communicating KPIs to the team.",
    bullets: [
      "Ranked as the top seller across tenure and earned top-performer recognition for three consecutive years.",
      "Analyzed selling reports and operational records to forecast performance and communicate daily and weekly metrics to a 15-person team.",
      "Supported opening and closing leadership, cash controls, bank deposits, and accuracy across roughly $3,600 in daily transactions.",
      "Built repeat clientele through proactive outreach and confident issue de-escalation.",
    ],
    skills: [
      "Sales operations",
      "Clienteling and CRM",
      "KPI reporting",
      "Team leadership",
      "Retail operations and cash handling",
    ],
  },
  {
    role: "Sales Associate",
    organization: "kate spade new york",
    dateRange: "Mar 2020 - Jul 2022",
    location: "Las Vegas, Nevada",
    summary:
      "Focused on revenue growth through product storytelling, personalized customer recommendations, and polished execution in a fast-moving retail environment.",
    bullets: [
      "Worked toward aggressive sales goals through repeat clientele, outreach, and customer-tailored recommendations.",
      "Built deep product knowledge across categories and communicated value with clarity and speed.",
      "Shared floor insights with peers, supported peak traffic needs, and helped maintain a customer-ready selling environment.",
      "Handled objections and high-tension situations with diplomacy while protecting the brand experience.",
    ],
    skills: ["Sales", "Clienteling and CRM", "Product knowledge", "Adaptability", "Cashiering"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Arts in Quantitative Business Economics",
    institution: "University of Nevada, Las Vegas",
    dateRange: "Aug 2024 - Dec 2025",
    summary:
      "Completed advanced training in econometrics and applied data analysis while supporting undergraduate teaching and building research infrastructure.",
    highlights: [
      "Capstone research included financial literacy and food insecurity among seniors plus a quasi-experimental study of AI diffusion and gender wage inequality.",
      "Supported microeconomics, macroeconomics, statistics, econometrics, and undergraduate research seminar instruction.",
      "Authored three working papers, presented at WEAI, and co-built the UNLV ECON 495 Undergraduate Working Paper Journal.",
      "Affiliations: Western Economic Association International and American Economic Association.",
    ],
  },
  {
    degree: "Bachelor of Science in Business Administration in Economics, Theatre minor",
    institution: "University of Nevada, Las Vegas",
    dateRange: "Aug 2019 - May 2024",
    summary:
      "Built the academic base in economics, econometrics, and research methods while maintaining a creative practice through theatre and performance.",
    highlights: [
      "Produced applied research using NCES and IPEDS data on the relationship between student aid and college costs.",
      "Published undergraduate work in Spectra Undergraduate Research Journal and presented at the Undergraduate Research Symposium.",
      "Theatre training strengthened public speaking, collaboration, storytelling, and fast iteration.",
      "Activities and societies: Economics Club.",
    ],
  },
];

export const researchItems: ResearchItem[] = [
  {
    status: "Published research",
    title: "Revisiting Bennett's Hypothesis: The Unintended Effects of Student Financial Aid on the Cost of College",
    outlet: "Spectra Undergraduate Research Journal",
    date: "May 15, 2025",
    summary:
      "Published article examining tuition and cost-of-attendance drivers with NCES and IPEDS data, translating the findings into policy-relevant implications for students and institutions.",
    methods: ["IPEDS", "Stata", "Econometric modeling", "Public policy"],
    links: [
      { label: "DOI", href: "https://doi.org/10.9741/2766-7227.1033" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=vdr24hsAAAAJ&hl=en" },
      { label: "ORCID", href: "https://orcid.org/0009-0004-1245-9959" },
    ],
  },
  {
    status: "Working paper",
    title: "Packaging Hierarchies in U.S. Higher Education: Pell Exposure and the Composition of Aid",
    outlet: "Faculty collaboration in progress",
    date: "Sep 2025 - present",
    summary:
      "Maps how U.S. colleges structure aid packages for full-time, first-time undergraduates and tests whether higher Pell exposure shifts the mix of grants, loans, and institutional top-off support.",
    methods: ["IPEDS", "Fixed effects", "Shift-share IV", "Grant displacement analysis"],
    links: [],
  },
  {
    status: "Working paper",
    title: "A Dynamic Structure of the Causal Link Between Federal Student Aid and College Prices",
    outlet: "Draft in progress",
    date: "Jan 2025 - present",
    summary:
      "Studies whether increases in federal student aid raise published college prices, using institution-year panels, high-dimensional fixed effects, and dynamic difference-GMM.",
    methods: ["Dynamic panels", "Difference-GMM", "Index construction", "Higher-ed finance"],
    links: [],
  },
  {
    status: "Research infrastructure",
    title: "IPEDS Panel Construction Pipeline",
    outlet: "Research data engineering system",
    date: "Aug 2025 - present",
    summary:
      "Python ETL pipeline that automates IPEDS downloads, harmonization, provenance-safe panel construction, and QC artifact generation from 2004 through 2024.",
    methods: ["Python", "pandas", "DuckDB", "PyArrow", "ETL and data quality"],
    links: [],
  },
];

export const researchProfiles = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=vdr24hsAAAAJ&hl=en",
    note: "Citation profile and publication record",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0004-1245-9959",
    note: "Research identity and verified work metadata",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Mark-Jayson-Farol?ev=hdr_xprf",
    note: "Academic network profile and research visibility",
  },
];

export const portfolioEntries: PortfolioEntry[] = [
  {
    title: "IPEDS Panel Construction Pipeline",
    category: "Data engineering and research infrastructure",
    timeframe: "2025 - present",
    problem:
      "IPEDS releases are largely cross-sectional, which makes longitudinal causal work difficult when identifiers, schemas, and reporting structures drift over time.",
    approach:
      "Built a multistage Python workflow for automated downloads, dictionary ingestion, harmonization, long-panel construction, wide exports, and QC outputs with deterministic dedupe logic.",
    outcome:
      "Created a reusable institution-year backbone for higher-education finance research that preserves provenance and produces analysis-ready panels.",
    tools: ["Python", "pandas", "PyArrow", "DuckDB", "requests", "BeautifulSoup"],
  },
  {
    title: "Airline RPM Forecasting",
    category: "Forecasting and model communication",
    timeframe: "May 2025",
    problem:
      "Forecast Alaska Airlines monthly Revenue Passenger Miles in a format that would make sense to a hiring-manager audience, not just an academic evaluator.",
    approach:
      "Ran exploratory analysis, transformation, stationarity testing, seasonal ARIMA selection, residual diagnostics, and a SARIMA plus GARCH refinement for volatility clustering.",
    outcome:
      "Produced 12-month forecasts with scenario bands and reported strong out-of-sample accuracy, with MAPE around 3.49 percent.",
    tools: ["R", "ARIMA", "SARIMA", "GARCH", "Monte Carlo simulation"],
  },
  {
    title: "AI Diffusion and Gender Wage Inequality",
    category: "Labor economics and quasi-experimental analysis",
    timeframe: "Jan 2025 - May 2025",
    problem:
      "Assess whether the diffusion of generative AI shifted gender wage inequality across tech and non-tech roles after the 2018 acceleration period.",
    approach:
      "Built a CPS-MORG analysis sample from IPUMS, estimated pooled OLS with triple-interaction structure, and paired the results with Blinder-Oaxaca decompositions.",
    outcome:
      "Found persistent wage gaps in both sectors, with post-2018 AI gains lifting wages modestly without materially changing the gender differential.",
    tools: ["Stata", "CPS-MORG", "Causal inference", "Decomposition methods"],
  },
  {
    title: "Financial Literacy and Food Insecurity in Seniors",
    category: "Applied policy research and stakeholder reporting",
    timeframe: "Jun 2025 - Jul 2025",
    problem:
      "Test whether stronger financial literacy reduces food insecurity among seniors in Clark County using original survey data and policy-relevant controls.",
    approach:
      "Constructed USDA food insecurity outcomes, built multiple literacy indices, estimated LPM, logit, probit, and IV-probit models, and packaged the findings for stakeholders.",
    outcome:
      "Results showed a consistent negative association between financial literacy and food insecurity, with larger causal estimates once endogeneity and SNAP selection were addressed.",
    tools: ["Stata", "Survey data", "PCA", "IV-probit", "Stakeholder presentation"],
  },
  {
    title: "Potential Expansion for Caesars Entertainment to the Philippines",
    category: "Strategy and market analysis",
    timeframe: "Jan 2024 - May 2024",
    problem:
      "Evaluate whether Caesars should enter the Philippine market while balancing tourism opportunity, regulatory complexity, and regional alternatives.",
    approach:
      "Combined macro indicators, tourism and spending trends, regulatory analysis, and competitor benchmarking across Southeast Asian markets.",
    outcome:
      "Delivered an entry memo with scenario-based tradeoffs, risk mitigations, and a practical due-diligence path for decision-makers.",
    tools: ["Market research", "Competitive analysis", "Scenario planning", "Regulatory analysis"],
  },
];

export const artistryProfile = {
  statement:
    "The artistic practice is not a side note. It is where voice, presence, empathy, and storytelling were sharpened long before they became part of lectures, presentations, and research delivery.",
  bio: [
    "Mark Jayson Farol is an actor, singer, performer, and director whose training spans Liberty High School theatre and choir work, UNLV theatre study, and live performance credits in Nevada.",
    "That creative background shapes the professional work too: it adds presence to public speaking, rhythm to teaching, and a human layer to the way complex analysis gets communicated.",
  ],
  skills: [
    "Acting",
    "Singing",
    "Dance",
    "Directing",
    "Acoustic guitar",
    "Piano and keyboards",
    "Comedy",
    "Fashion modeling",
    "Bilingual performance",
  ],
  training: [
    "Liberty High School - Advanced Theatre Studies",
    "Liberty High School - Chamber Choir and Show Choir",
    "University of Nevada, Las Vegas - Theatre study with stage and screen acting concentration",
  ],
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/616a28c4-e219-48d1-8f89-2c5ba62d85f5-bWFpbi1uLW4tMC0wLTAtODcwLTEyMDA.jpg",
    alt: "Mark Jayson Farol headshot in warm studio lighting",
    caption: "Backstage headshot",
  },
  {
    src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/54e4686f-0101-471b-9b89-577b2252a045-bWFpbi1uLW4tMC0wLTAtNjQwLTg1Mw.JPG",
    alt: "Mark Jayson Farol portrait in dark styling",
    caption: "Performance portrait",
  },
  {
    src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/87fec5b5-ca79-49b6-86d7-4ab3fc32cb5f-bWFpbi1uLW4tMC0wLTAtOTYwLTcyMA.JPG",
    alt: "Mark Jayson Farol smiling headshot",
    caption: "Creative profile image",
  },
  {
    src: "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/84fc1c20-16d2-4731-9885-d1fb1371891e-bWFpbi1uLW4tMC0wLTAtOTYwLTcyMA.JPG",
    alt: "Mark Jayson Farol in a fashion-forward headshot",
    caption: "Gallery still",
  },
];

export const performanceCredits: PerformanceCredit[] = [
  {
    date: "Feb 2018",
    title: "Radium Girls",
    role: "Dr. Flinn / C.B. Charlie Lee",
    venue: "LHS Patriot Theatre",
  },
  {
    date: "Apr 2018",
    title: "Rock of Ages",
    role: "Ensemble",
    venue: "LHS Patriot Theatre",
  },
  {
    date: "Nov 2018",
    title: "Shattered Stardust",
    role: "Character ensemble",
    venue: "LHS Patriot Theatre",
  },
  {
    date: "Dec 2018",
    title: "Check Please: Take Two",
    role: "Director",
    venue: "LHS Patriot Theatre",
  },
  {
    date: "Feb 2019",
    title: "The Curious Incident of the Dog in the Nighttime",
    role: "Christopher / Ensemble",
    venue: "LHS Patriot Theatre",
  },
  {
    date: "Apr 2019",
    title: "Willy Wonka",
    role: "Augustus Gloop",
    venue: "LHS Patriot Theatre",
  },
  {
    date: "Sep 2018",
    title: "Public Education Foundation Ed Hero Award Gala",
    role: "Performing artist",
    venue: "Las Vegas, Nevada",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/markjaysonfarol/",
    category: "Professional",
    note: "Professional profile and current positioning",
    enabled: true,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=vdr24hsAAAAJ&hl=en",
    category: "Academic",
    note: "Publications and citation profile",
    enabled: true,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0004-1245-9959",
    category: "Academic",
    note: "Verified research identity",
    enabled: true,
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Mark-Jayson-Farol?ev=hdr_xprf",
    category: "Academic",
    note: "Academic networking profile",
    enabled: true,
  },
  {
    label: "Backstage",
    href: "https://www.backstage.com/tal/mark-jayson-farol/",
    category: "Creative",
    note: "Performance profile, credits, and headshots",
    enabled: true,
  },
  {
    label: "Legacy creative portfolio",
    href: "https://markjay1869760.wixsite.com/mysite",
    category: "Creative",
    note: "Earlier artist portfolio and archived material",
    enabled: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/markjayson13/",
    category: "Social",
    note: "Public social presence",
    enabled: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/markjaysonfarol13",
    category: "Social",
    note: "Public social profile",
    enabled: true,
  },
  {
    label: "X",
    href: "https://twitter.com/mark_jayson13",
    category: "Social",
    note: "Public social profile",
    enabled: true,
  },
];
