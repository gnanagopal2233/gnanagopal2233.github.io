/**
 * All site content lives here. Facts come from Gopal's resume.
 * Client confidentiality: the biopharma client is never named and no client data is shown.
 */

export const profile = {
  name: "Gopal Adusumilli",
  fullName: "Gnana Gopal Adusumilli",
  role: "Forward Deployed · Full-Stack Software Engineer",
  location: "Frederick, MD · open to relocation",
  pitch:
    "I embed with the teams who use the software and ship it into regulated production: clinical supply, quality systems, and cloud platforms that people depend on every day.",
  email: "gnanagopal1441@gmail.com",
  github: "https://github.com/Gopal2233",
  linkedin: "https://www.linkedin.com/in/gopaladusumilli/",
};

export const stats = [
  { value: "5+", label: "years shipping production software" },
  { value: "1,000+", label: "pharma shipments / month through my receiving module" },
  { value: "100,000+", label: "user actions audit-logged for 21 CFR Part 11" },
  { value: "99.9%", label: "uptime on AWS microservices" },
  { value: "5", label: "AWS & Azure certifications" },
];

export const fdeTraits = [
  {
    title: "On site with the people who use it",
    body: "I work at the client's site next to warehouse staff, quality reviewers and admins. I turn what they actually do into software, not just what a ticket describes.",
  },
  {
    title: "Regulated by default",
    body: "Audit trails, role-based access, electronic records and validation-ready workflows are part of my first design, not something added later.",
  },
  {
    title: "From requirements to production",
    body: "I gather requirements across regions and stakeholders, design the services, and own CI/CD and monitoring once they're live.",
  },
  {
    title: "AI-native workflow",
    body: "I build with Claude Code using custom skills, connectors and MCP servers, and I ship LLM systems that have evals and guardrails, not just demos.",
  },
];

export const qmsCase = {
  eyebrow: "Case study · GxP-regulated biopharma client",
  title: "Clinical supply receiving & Quality Management System (QMS)",
  context:
    "A clinical-trial supply organization needed to move receiving, inspection and quality processes off spreadsheets and paper into one validated system. Every action had to be attributable and auditable under FDA 21 CFR Part 11. I lead development on the Receiving and QMS modules, working on site with the operations and quality teams.",
  modules: [
    {
      name: "Receiving & inspection",
      points: [
        "End-to-end receiving module handling 1,000+ pharmaceutical shipments a month, with multi-package inspection workflows",
        "Real-time 7-section inspection wizard that cut inspection completion time by 25%",
        "Temperature-excursion tracking with alerts and segregation workflows for cold-chain materials",
        "Secure photo upload for discrepancy evidence and temperature-logger graphs, stored on AWS S3",
      ],
    },
    {
      name: "Deviations & CAPA",
      points: [
        "Workflows to report a deviation, investigate it, and follow through on corrective and preventive actions",
        "Excursions and inspection discrepancies captured as structured quality events, with full history",
      ],
    },
    {
      name: "Change control",
      points: ["Change requests routed through role-based review and approval steps", "Every state transition recorded with who, what, when and why"],
    },
    {
      name: "Document control & e-signatures",
      points: ["Versioned controlled documents and SOPs", "Electronic signatures and an immutable audit trail designed around 21 CFR Part 11"],
    },
  ],
  platform: [
    "Role-based access control for 5 user roles across 15+ features (Spring Security, OAuth2, JWT)",
    "Admin dashboard with audit logging of 100,000+ user actions and reporting in Tableau, Birst and AWS QuickSight",
    "Auto-save with debounced React state management that reduced data loss by 95%",
    "Docker-containerized services (Spring Boot, Flask, Golang) on AWS",
  ],
  stack: ["React.js", "Spring Boot", "Flask", "Golang", "MySQL", "AWS S3", "Docker", "Splunk", "Tableau", "QuickSight", "PySpark"],
  confidentiality: "Client name, data and screenshots are omitted under confidentiality.",
};

export const applyPilot = {
  eyebrow: "Open source · LLM agents",
  title: "ApplyPilot: a multi-agent job application pilot that doesn't make things up",
  summary:
    "Most auto-apply bots optimize for volume and invent experience. ApplyPilot finds roles through public ATS APIs, scores fit, tailors a resume with RAG over a bank of real experience, checks every claim against its source, and submits only when every confidence check passes. Everything else goes to a human review queue.",
  pipeline: ["Scout", "Filter", "Score", "Tailor (RAG)", "Verify", "Gate", "Apply"],
  highlights: [
    "Every tailored bullet cites the source bullet it came from. A deterministic and LLM-entailment verifier reverts any claim the source doesn't support.",
    "Hybrid retrieval: BM25 plus embeddings, fused with Reciprocal Rank Fusion",
    "Playwright applier for Greenhouse, Lever and Ashby. CAPTCHAs and unknown required fields go to a human.",
    "MCP server, so Claude can run the whole job search by chat; Next.js dashboard with per-agent traces",
    "Hallucination eval: 6/7 fabrications caught by the deterministic layer, 0 faithful rewrites reverted",
  ],
  stack: ["TypeScript", "Next.js", "Playwright", "SQLite", "Claude / OpenAI / Ollama", "MCP", "Zod", "Vitest"],
  repo: "https://github.com/Gopal2233/applypilot",
};

export const experience = [
  {
    company: "Oriontek Inc",
    detail: "Embedded at a GxP-regulated biopharma client",
    title: "Software Engineer",
    dates: "May 2025 – Present",
    location: "Frederick, MD",
    points: [
      "Lead development of a Clinical Trial Inventory Management System's Receiving and QMS modules (see case study)",
      "Designed RBAC for 5 roles across 15+ features with Spring Security, OAuth2 and JWT",
      "Built temperature-excursion monitoring with Python, PySpark and Teradata SQL",
    ],
  },
  {
    company: "HCL Global Systems Inc",
    title: "Software Engineer",
    dates: "Nov 2024 – Apr 2025",
    location: "Remote",
    points: [
      "Cut response times by 30% for a system serving 50K+ daily users (React.js, Spring Boot, Flask, MySQL)",
      "Built microservices on AWS ECS, EKS and Lambda with Docker, reaching 99.9% uptime",
      "Automated CI/CD with Jenkins and AWS CodePipeline, reducing deployment time by 40%",
    ],
  },
  {
    company: "Changing The Present",
    title: "Information Technology Intern",
    dates: "Aug 2023 – Nov 2024",
    location: "New York, NY",
    points: [
      "Full-stack platform work that drove a 25% rise in engagement and a 20% rise in income in six months",
      "Rebuilt the charity gift purchase platform with React.js and Redux, leading to a 56% rise in subscriptions",
      "Built an ETL pipeline from Shopify into Power BI and Tableau, improving processing efficiency by 65%",
    ],
  },
  {
    company: "Accenture",
    title: "Application Development Analyst",
    dates: "Sep 2019 – Jul 2022",
    location: "Bangalore, India",
    points: [
      "Migrated a legacy application to Spring Boot microservices, improving performance by 17% for 25,000 monthly users",
      "Gathered requirements with stakeholders across APAC, EMEA, LATAM and NA",
      "Automated reporting with JavaScript and Python, cutting manual analysis time by 70%",
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Golang"],
  "Frameworks": ["Spring Boot", "React.js", "Next.js", "Node.js", "Express.js", "Flask", "PySpark"],
  "AI & LLM": ["Claude Code", "MCP", "RAG", "LLM evals", "Prompt engineering", "Cursor"],
  Cloud: ["AWS (ECS, EKS, Lambda, S3)", "Azure", "GCP", "Docker", "Terraform", "Jenkins", "GitHub Actions"],
  Data: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Teradata", "Redis"],
  "Observability & BI": ["Splunk", "Tableau", "Power BI", "QuickSight", "Birst"],
};

export const certifications = [
  "AWS Certified Developer – Associate",
  "AWS Certified Cloud Practitioner",
  "Azure Administrator Associate (AZ-104)",
  "Azure Fundamentals (AZ-900)",
  "Azure AI Fundamentals (AI-900)",
];

export const education = [
  { school: "University of Cincinnati", degree: "M.S. Information Technology · GPA 4.0", dates: "2022 – 2023" },
  { school: "Visvesvaraya Technological University", degree: "B.E. Computer Science", dates: "2015 – 2019" },
];
