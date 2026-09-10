// Technical Skills catalog for Sriram
// Grouped into clear domains with functional descriptions (no fake percentages)

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, modern, and accessible user interfaces with clean architecture.",
    skills: [
      {
        name: "React.js",
        icon: "Atom",
        description: "Component-driven architecture, custom hooks, and state management",
        level: "Core Competency"
      },
      {
        name: "JavaScript (ES6+)",
        icon: "FileCode2",
        description: "Modern asynchronous programming, DOM APIs, and closures",
        level: "Proficient"
      },
      {
        name: "HTML5 & Semantic Web",
        icon: "Code",
        description: "Accessible markup, SEO optimization, and structural hierarchy",
        level: "Proficient"
      },
      {
        name: "CSS3 & Modern Layouts",
        icon: "Palette",
        description: "Flexbox, CSS Grid, Custom Properties, and responsive animations",
        level: "Proficient"
      },
      {
        name: "Responsive Design",
        icon: "LayoutTemplate",
        description: "Mobile-first layouts adaptable from 320px screens to ultrawide displays",
        level: "Core Competency"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting reliable APIs, server logic, and business workflows.",
    skills: [
      {
        name: "Node.js",
        icon: "Server",
        description: "Event-driven runtime for high-throughput server applications",
        level: "Proficient"
      },
      {
        name: "Express.js",
        icon: "Layers",
        description: "RESTful API routing, middleware chains, and error handling",
        level: "Proficient"
      },
      {
        name: "Python",
        icon: "Terminal",
        description: "Backend scripting, automation, algorithms, and data structures",
        level: "Proficient"
      },
      {
        name: "Flask",
        icon: "Cpu",
        description: "Lightweight WSGI web micro-framework for modular services",
        level: "Familiar"
      },
      {
        name: "REST APIs",
        icon: "Network",
        description: "Stateless endpoint design, JSON payloads, and HTTP status handling",
        level: "Core Competency"
      }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "Modeling structured schemas, optimizing queries, and ensuring data integrity.",
    skills: [
      {
        name: "MongoDB",
        icon: "Database",
        description: "Document-oriented NoSQL database design and aggregation pipelines",
        level: "Proficient"
      },
      {
        name: "MongoDB Atlas",
        icon: "Cloud",
        description: "Cloud database cluster provisioning, indexing, and monitoring",
        level: "Proficient"
      },
      {
        name: "SQLite",
        icon: "HardDrive",
        description: "Self-contained, serverless zero-configuration relational database",
        level: "Familiar"
      },
      {
        name: "SQL & Relational Concepts",
        icon: "Table2",
        description: "Foreign keys, entity relationships, normalization, and joins",
        level: "Familiar"
      }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core algorithmic thinking, data structures, and computational problem solving.",
    skills: [
      {
        name: "JavaScript",
        icon: "Braces",
        description: "Full-stack language for client interactions and server runtime",
        level: "Primary"
      },
      {
        name: "Python",
        icon: "FileCode",
        description: "High-level language for backend services and rapid utility tooling",
        level: "Primary"
      },
      {
        name: "C",
        icon: "Binary",
        description: "Foundational understanding of memory management, pointers, and systems",
        level: "Academic Foundation"
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    description: "Modern developer workflow tools, version control, and cloud platforms.",
    skills: [
      {
        name: "Git",
        icon: "GitBranch",
        description: "Distributed version control, branching strategies, and merge workflows",
        level: "Daily Workflow"
      },
      {
        name: "GitHub",
        icon: "Github",
        description: "Repository collaboration, pull requests, and project tracking",
        level: "Daily Workflow"
      },
      {
        name: "VS Code",
        icon: "Laptop",
        description: "Productive editor setup with debuggers and extensions",
        level: "Primary IDE"
      },
      {
        name: "Figma",
        icon: "Figma",
        description: "Interface wireframing, UI prototyping, and design tokens inspection",
        level: "Design Tool"
      },
      {
        name: "Vercel & Netlify",
        icon: "Globe",
        description: "Continuous deployment and hosting for modern frontend web applications",
        level: "Deployment"
      },
      {
        name: "Render & PythonAnywhere",
        icon: "Radio",
        description: "Cloud hosting for backend APIs, Node.js, and Flask services",
        level: "Deployment"
      }
    ]
  },
  {
    id: "concepts",
    title: "Core Architecture & Concepts",
    description: "Essential software engineering principles, security models, and patterns.",
    skills: [
      {
        name: "Authentication & Authorization",
        icon: "ShieldCheck",
        description: "JWT tokens, bcrypt hashing, session cookies, and role-based access",
        level: "Implemented in Projects"
      },
      {
        name: "CRUD & API Design",
        icon: "Workflow",
        description: "Clean resource-oriented architectures with resilient error handling",
        level: "Standard Practice"
      },
      {
        name: "Database Schema Design",
        icon: "Boxes",
        description: "Entity relationship mapping, indexing strategies, and data integrity",
        level: "Standard Practice"
      },
      {
        name: "Version Control Discipline",
        icon: "GitFork",
        description: "Atomic commits, descriptive PRs, and collaborative teamwork",
        level: "Standard Practice"
      }
    ]
  }
];

// Quick overview stats for home page module
export const quickOverviewCards = [
  {
    title: "Full Stack Development",
    skills: "React • Node.js • Express • MongoDB",
    icon: "Layers",
    description: "End-to-end web applications with clean frontend-backend coordination."
  },
  {
    title: "Programming",
    skills: "Python • JavaScript • C",
    icon: "Code2",
    description: "Algorithmic thinking, data structures, and practical problem solving."
  },
  {
    title: "Tools & Platforms",
    skills: "Git • GitHub • VS Code • Figma",
    icon: "Wrench",
    description: "Modern developer tooling for version control, design, and deployment."
  },
  {
    title: "Leadership & Impact",
    skills: "Team Leader • Hackathons",
    icon: "Users",
    description: "Guided technical team sprints during internship with structured execution."
  }
];
