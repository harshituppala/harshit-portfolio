export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  "fullName": "Harshit Kumar Uppala",
  "displayName": "Harshit Uppala",
  "firstName": "HARSHIT",
  "seriesTag": "",
  "originalLabel": "AN UPPALA ORIGINAL",
  "role": "Applied AI · Software & Cloud",
  "tagline": [
    "Applied AI",
    "Software engineering",
    "Cloud engineering"
  ],
  "intro": "I\u2019m Harshit. I write software, ask a lot of questions, and tend to follow a good idea further than I originally planned. AI and cloud engineering are where much of that curiosity takes me. I care about making things useful, clear, and a pleasure to use.",
  "location": "St. John’s, Newfoundland & Labrador",
  "email": "harshuuppala@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/harshit-kumar-uppala-8b65271a5/",
    "github": "https://github.com/harshituppala"
  },
  "resumePdf": "/assets/Harshit_Uppala_Resume.pdf",
  "portrait": {
    "src": "/assets/harshit-monogram.svg",
    "srcSet": "",
    "alt": "HU monogram with an abstract AI evidence network"
  },
  "interests": [
    "Applied AI",
    "Agent reliability",
    "AWS architecture"
  ]
};

export const education = [
  {
    "school": "Memorial University of Newfoundland",
    "place": "Canada",
    "degree": "B.Sc. Computer Science · Minor in Business Administration",
    "period": "Expected December 2026",
    "score": "Final year"
  }
];

export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
{
  "id": "incidentdesk",
  "title": "IncidentDesk",
  "year": "2026",
  "genre": "Operational recovery \u2022 Prototype",
  "logline": "Investigate a failing checkout/payment service, inspect the evidence, and approve a bounded recovery with verification and rollback.",
  "stack": [
    "Python",
    "HTTP services",
    "SQLite",
    "Docker",
    "Local models"
  ],
  "build": [
    "A local operational recovery lab with correlated evidence, two recovery runbooks and explicit human approval.",
    "Rules remain the default. Measured local-model failures and unfinished real-user feedback are documented."
  ],
  "features": [
    "Evidence-bound recovery proposals",
    "Human approval and stale-state guards",
    "Verification and conditional rollback",
    "Documented model failures"
  ],
  "metrics": [
    {
      "value": "Prototype",
      "label": "Project status"
    },
    {
      "value": "Source",
      "label": "Public repository \u00b7 hosted demo pending"
    }
  ],
  "github": "https://github.com/harshituppala/incidentdesk",
  "palette": {
    "from": "#102116",
    "via": "#315a39",
    "to": "#0a100c",
    "accent": "#bdfa8c"
  },
  "motif": "flow"
},
  {
    "id": "atlas",
    "title": "ATLAS",
    "year": "2026",
    "genre": "Applied AI • In development",
    "logline": "From dense documents to traceable decisions. A workspace for requirements, supporting evidence, and human review.",
    "stack": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL"
    ],
    "build": [
      "Developing a document intelligence workflow for RFP and contract requirements, with source-linked evidence and explicit human review.",
      "The local implementation is evolving through tested milestones. Live model quality and AWS deployment will be reported only after validation."
    ],
    "features": [
      "Document ingestion and source locations",
      "Evidence review workflow",
      "Tenant isolation",
      "Grounded retrieval"
    ],
    "metrics": [
      {
        "value": "Building",
        "label": "Project status"
      },
      {
        "value": "Local",
        "label": "Portfolio preview · AWS hosting later"
      }
    ],
    "palette": {
      "from": "#2a0610",
      "via": "#7a0f24",
      "to": "#0b0710",
      "accent": "#ff3d5a"
    },
    "motif": "shield"
  },
  {
    "id": "chaoslab",
    "title": "CHAOSLAB",
    "year": "2026",
    "genre": "AI reliability • In development",
    "logline": "Beyond the perfect demo. Repeatable experiments that reveal how AI workflows behave under pressure.",
    "stack": [
      "Python",
      "pytest",
      "Evaluation",
      "Fault injection"
    ],
    "build": [
      "Developing an independent evaluation companion to ATLAS, focused on reproducible test cases and failure behavior.",
      "The goal is to compare quality, latency, and cost with traceable experiments. Published benchmarks will follow validated runs."
    ],
    "features": [
      "Reproducible evaluation scenarios",
      "Failure and security test cases",
      "Benchmark reporting",
      "Quality and reliability analysis"
    ],
    "metrics": [
      {
        "value": "Building",
        "label": "Project status"
      },
      {
        "value": "Local",
        "label": "Portfolio preview · AWS hosting later"
      }
    ],
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "flow"
  },
  {
    "id": "patchwork",
    "title": "PATCHWORK",
    "year": "2026",
    "genre": "Developer tools • Planned",
    "logline": "From a failed build to a reviewable fix. A planned maintenance agent with isolated checks and human approval.",
    "stack": [
      "Python",
      "GitHub APIs",
      "Docker",
      "CI/CD"
    ],
    "build": [
      "Planned: diagnose a narrow set of CI failures, propose a patch, and run isolated checks.",
      "Changes should be reviewed by a human before merge. Implementation begins after ATLAS and CHAOSLAB have stronger foundations."
    ],
    "features": [
      "Planned: CI failure diagnosis",
      "Planned: sandboxed validation",
      "Planned: patch proposals",
      "Planned: human-reviewed pull requests"
    ],
    "metrics": [
      {
        "value": "Planned",
        "label": "Project status"
      },
      {
        "value": "Local",
        "label": "Portfolio preview · AWS hosting later"
      }
    ],
    "palette": {
      "from": "#1a0d02",
      "via": "#8a4a07",
      "to": "#0a0806",
      "accent": "#ffb547"
    },
    "motif": "tenants"
  }
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    "id": "direction",
    "title": "Applied AI",
    "org": "Engineering focus",
    "detail": "Building practical systems around evidence, evaluation, and human oversight.",
    "laurel": "Current direction"
  },
  {
    "id": "degree",
    "title": "December 2026",
    "org": "Expected graduation",
    "detail": "Completing Computer Science at Memorial University of Newfoundland.",
    "laurel": "Next chapter"
  },
  {
    "id": "learning",
    "title": "Cloud & AI",
    "org": "Learning in progress",
    "detail": "Studying AWS architecture and AI engineering alongside project development.",
    "laurel": "Learning journey"
  }
];

export type Certification = { issuer: string; name: string; link?: string; status: 'Earned' | 'Exam scheduled' | 'Planned'; detail: string };

export const certifications: Certification[] = [
 { issuer: 'AWS', name: 'AWS Certified Cloud Practitioner', status: 'Earned', detail: 'Passed. A foundation in cloud concepts, AWS services, security, and cloud economics.' },
 { issuer: 'AWS', name: 'AWS Certified Solutions Architect – Associate', status: 'Exam scheduled', detail: 'Preparing for the next step in designing resilient, secure, and cost-aware AWS architectures.' },
 { issuer: 'Anthropic', name: 'Claude Certified Architect – Foundations', status: 'Planned', detail: 'Planned certification in Claude solution architecture; target November 2026.' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "The languages behind the applications",
    "skills": [
      {
        "name": "Python",
        "mono": "Py",
        "note": "Used in projects"
      },
      {
        "name": "TypeScript",
        "mono": "Ts",
        "note": "Used in projects"
      },
      {
        "name": "SQL",
        "mono": "SQL",
        "note": "Used in projects"
      }
    ]
  },
  {
    "id": "ai",
    "title": "AI & Retrieval",
    "subtitle": "From source documents to reviewable answers",
    "skills": [
      {
        "name": "RAG & retrieval",
        "mono": "Rg",
        "note": "In development"
      },
      {
        "name": "Structured outputs",
        "mono": "{}",
        "note": "In development"
      },
      {
        "name": "LangGraph",
        "mono": "Lg",
        "note": "Used in projects"
      },
      {
        "name": "Evaluation",
        "mono": "Ev",
        "note": "Used in projects"
      }
    ]
  },
  {
    "id": "application",
    "title": "Application Engineering",
    "subtitle": "Interfaces, APIs, and persistent data",
    "skills": [
      {
        "name": "React",
        "mono": "Re",
        "note": "Used in projects"
      },
      {
        "name": "FastAPI",
        "mono": "Fa",
        "note": "Used in projects"
      },
      {
        "name": "PostgreSQL",
        "mono": "Pg",
        "note": "Used in projects"
      },
      {
        "name": "REST APIs",
        "mono": "API",
        "note": "Used in projects"
      }
    ]
  },
  {
    "id": "cloud",
    "title": "Cloud & Delivery",
    "subtitle": "How software is packaged, shipped, and operated",
    "skills": [
      {
        "name": "AWS architecture",
        "mono": "AWS",
        "note": "Studying"
      },
      {
        "name": "Docker",
        "mono": "Dk",
        "note": "Used in projects"
      },
      {
        "name": "Git / GitHub",
        "mono": "Git",
        "note": "Used in projects"
      },
      {
        "name": "CI/CD",
        "mono": "CI",
        "note": "In development"
      }
    ]
  },
  {
    "id": "reliability",
    "title": "Reliability & Security",
    "subtitle": "The behavior beyond the happy path",
    "skills": [
      {
        "name": "pytest",
        "mono": "Pt",
        "note": "Used in projects"
      },
      {
        "name": "Tenant isolation",
        "mono": "Ti",
        "note": "Used in projects"
      },
      {
        "name": "Citation validation",
        "mono": "Cv",
        "note": "Used in projects"
      },
      {
        "name": "Observability",
        "mono": "Ot",
        "note": "In development"
      }
    ]
  }
];

export const skillEvidence: Record<string,string[]> = {
  "Python": [
    "ATLAS backend and CHAOSLAB evaluation runner."
  ],
  "TypeScript": [
    "Portfolio and ATLAS review interface."
  ],
  "SQL": [
    "Transactional persistence and database migrations."
  ],
  "RAG & retrieval": [
    "ATLAS source-linked retrieval; model quality evaluation remains ongoing."
  ],
  "Structured outputs": [
    "Model gateway work; live provider validation remains pending."
  ],
  "LangGraph": [
    "Bounded ATLAS workflow; no open-ended autonomous tools in the baseline."
  ],
  "Evaluation": [
    "Independent CHAOSLAB scenario runner and reproducible reports."
  ],
  "React": [
    "ATLAS evidence workbench and this portfolio."
  ],
  "FastAPI": [
    "ATLAS API, scoped access, document ingestion, and review endpoints."
  ],
  "PostgreSQL": [
    "Persistence work; deployment validation is a separate milestone."
  ],
  "REST APIs": [
    "Document, analysis, job, and review interfaces in ATLAS."
  ],
  "AWS architecture": [
    "Current learning focus; public cloud deployment has not been completed."
  ],
  "Docker": [
    "Project packaging and local service configuration."
  ],
  "Git / GitHub": [
    "Version control and incremental project milestones."
  ],
  "CI/CD": [
    "Automated checks and deployment workflow development."
  ],
  "pytest": [
    "Backend, regression, and evaluation checks."
  ],
  "Tenant isolation": [
    "Scoped source access, analysis queries, and review actions."
  ],
  "Citation validation": [
    "Exact source spans and content hashes checked against immutable inputs."
  ],
  "Observability": [
    "Allowlisted local trace metadata; cloud ingestion remains unfinished."
  ]
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "The Foundation",
    "period": "Now → December 2026",
    "synopsis": "Computer Science at Memorial University of Newfoundland.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "Computer Science",
        "description": "Building a foundation in software, databases, and engineering while completing my degree.",
        "tags": [
          "Computer Science",
          "Memorial University"
        ],
        "runtime": "Expected Dec 2026",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Building Toward Applied AI",
    "period": "2026",
    "synopsis": "An engineering portfolio built around practical AI and verifiable behavior.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "Evidence First",
        "description": "From dense documents to traceable decisions. A workspace for requirements, supporting evidence, and human review.",
        "tags": [
          "ATLAS",
          "In development"
        ],
        "runtime": "In development",
        "palette": {
          "from": "#2a0610",
          "via": "#7a0f24",
          "to": "#0b0710",
          "accent": "#ff3d5a"
        }
      },
      {
        "code": "S02 E02",
        "title": "Expect Failure",
        "description": "Beyond the perfect demo. Repeatable experiments that reveal how AI workflows behave under pressure.",
        "tags": [
          "CHAOSLAB",
          "In development"
        ],
        "runtime": "In development",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S02 E03",
        "title": "The Next Experiment",
        "description": "From a failed build to a reviewable fix. A planned maintenance agent with isolated checks and human approval.",
        "tags": [
          "PATCHWORK",
          "Planned"
        ],
        "runtime": "Planned",
        "palette": {
          "from": "#1a0d02",
          "via": "#8a4a07",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      }
    ]
  }
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    "label": "Flagship in progress",
    "title": "ATLAS",
    "detail": "Requirements → evidence → human review",
    "palette": {
      "from": "#2a0610",
      "via": "#7a0f24",
      "to": "#0b0710",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Reliability in progress",
    "title": "CHAOSLAB",
    "detail": "Test how AI behaves when things go wrong",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Next experiment",
    "title": "PATCHWORK",
    "detail": "Software maintenance with human oversight",
    "palette": {
      "from": "#1a0d02",
      "via": "#8a4a07",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Design principle",
    "title": "Evidence first",
    "detail": "Claims should have sources and tests",
    "palette": {
      "from": "#2a0610",
      "via": "#7a0f24",
      "to": "#0b0710",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Learning focus",
    "title": "AWS",
    "detail": "Cloud architecture · hosting comes later",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  }
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    "kicker": "Introducing",
    "title": "Harshit Uppala",
    "lines": [
      "Computer Science · Memorial University",
      "Expected graduation: December 2026"
    ]
  },
  {
    "kicker": "Direction",
    "title": "Applied AI",
    "lines": [
      "Useful applications. Grounded answers.",
      "Reliable workflows and human oversight."
    ]
  },
  {
    "kicker": "In development",
    "title": "ATLAS + CHAOSLAB",
    "lines": [
      "Enterprise document intelligence",
      "Independent evaluation and failure testing"
    ]
  },
  {
    "kicker": "Next chapter",
    "title": "Build. Test. Learn.",
    "lines": [
      "AWS architecture and AI engineering",
      "Canada · Newfoundland & Labrador"
    ]
  }
];

export type ProfileId = 'harshit' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'harshit',
    name: 'Harshit',
    blurb: 'Projects, background, and skills',
    color: '#e5132b',
    order: ['originals', 'skills', 'moments', 'about', 'journey', 'picks', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Projects, skills & background first',
    color: '#4cc9ff',
    order: ['originals', 'skills', 'moments', 'story', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'moments', 'about', 'journey', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Just browsing',
    blurb: 'Get to know the person behind the work',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Selected projects & principles', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Qualifications', card: 'Education & Credentials', meta: 'Education • Certifications • Current study', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Background • Projects & education', palette: violet },
};
