// Complete projects data for Sriram's portfolio

export const projects = [
  {
    id: "hall-booking-management-system",
    numericId: "01",
    title: "Hall Booking Management System",
    subtitle: "Enterprise-grade reservation & administrative approval platform",
    category: "Full Stack",
    featured: true,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    description: "A web-based hall booking system designed to replace the traditional manual booking and approval workflow with an automated digital pipeline.",
    problem: "Educational institutions and event venues frequently suffer from double bookings, paper-based requisition delays, lack of real-time slot visibility, and inefficient manual approval cycles.",
    solution: "Engineered a centralized MERN web application where faculty and staff can query live hall availability, submit multi-slot requests, track approval statuses in real-time, and receive automated notifications while administrators have full governance.",
    features: [
      "Staff booking portal with real-time slot selection",
      "Dynamic hall availability calendar with conflict detection",
      "Hierarchical Admin & Father approval workflow pipeline",
      "Automated booking status notifications & audit trail",
      "MongoDB database with indexed date/time schemas",
      "Fully responsive interface optimized for mobile and desktop"
    ],
    role: "Full Stack Developer / Team Leader (FrontierWox)",
    roleContribution: "Led the development sprint at FrontierWox. Designed the database models for halls and time-slot allocations, built RESTful endpoints for booking transactions, implemented role-based authorization, and oversaw frontend component integration.",
    challenges: "Handling concurrent booking requests for the same hall slot without race conditions, and modeling flexible recurring slots.",
    whatILearned: "Mastered concurrency checks in MongoDB transactions, role-based JWT auth flows, scalable state management with React, and leading a team through Agile delivery sprints.",
    github: "https://github.com/srirams00/Hall-booking",
    liveDemo: "https://sjc-campus-hall-allocation.vercel.app/",
    badge: "MERN Stack"
  },
  {
    id: "qr-code-generator",
    numericId: "02",
    title: "QR Code Generator",
    subtitle: "Custom data encoding & vector QR generation tool",
    category: "Tools",
    featured: true,
    technologies: ["React"],
    description: "An independently developed project created to explore how QR codes are generated, formatted, error-corrected, and rendered.",
    problem: "Existing online QR tools are often overloaded with intrusive ads, tracking parameters, and paywalls for high-resolution vector exports.",
    solution: "Created a lightweight, ad-free utility that transforms URLs, plain text, Wi-Fi credentials, and contact cards into customizable QR codes with instant vector (SVG) and raster (PNG) downloads.",
    features: [
      "Custom error correction level selection (L, M, Q, H)",
      "Instant real-time QR generation preview",
      "Custom color palettes, border margins, and size controls",
      "Export in high-res PNG and vector SVG formats",
      "Support for URLs, vCards, Wi-Fi configuration, and text",
      "Zero telemetry and privacy-preserving client/server generation"
    ],
    role: "Sole Developer",
    roleContribution: "Explored Reed-Solomon error correction algorithms, designed the Python encoding backend, and built an interactive frontend with live canvas previews.",
    challenges: "Understanding the matrix alignment patterns, timing patterns, and optimal error-correction trade-offs.",
    whatILearned: "Deepened knowledge of binary data encoding, 2D matrix transformation, algorithmic error correction, and Python image manipulation pipelines.",
    github: "https://github.com/",
    liveDemo: "https://subtle-kataifi-748794.netlify.app/",
    badge: "Python & Web"
  },
  {
    id: "it-department-website",
    numericId: "03",
    title: "IT Department Website",
    subtitle: "Academic portal for student resources & faculty circulars",
    category: "Backend",
    featured: false,
    technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
    description: "A centralized academic portal built for the college Information Technology department to streamline departmental circulars, faculty listings, and curriculum archives.",
    problem: "Academic departments regularly disperse course syllabi, lab manuals, and exam circulars over fragmented group chats and notice boards, creating information silos.",
    solution: "Constructed a lightweight, secure department hub with an administrative dashboard for faculty to publish notices, organize student project archives, and catalog lab resources.",
    features: [
      "Categorized departmental announcements and event notifications",
      "Faculty directory with research specializations and office hours",
      "Downloadable lab manuals, code templates, and syllabi repository",
      "Admin dashboard with CRUD management for department heads",
      "Lightweight SQLite schema designed for rapid local deployment",
      "Accessible, fast-loading design with zero external heavy frameworks"
    ],
    role: "Full Stack Developer",
    roleContribution: "Authored Flask routing architecture, structured SQLite tables with foreign key constraints, implemented session-based authentication, and created responsive frontend templates.",
    challenges: "Building a lightweight role-based access system using native Flask sessions without external monolithic libraries.",
    whatILearned: "Solidified database normalization, SQL queries, relational schema modeling, server-side template rendering, and REST endpoint construction.",
    github: "https://github.com/",
    liveDemo: "",
    badge: "Python & Flask"
  },
  
];
