export const profile = {
  name: "Swetha S",
  role: "Software Developer | Java | AI | Automation",
  email: "swethasathaiah6@gmail.com",
  location: "Chennai, India",
  github: "https://github.com/SwethaS-07",
  linkedin: "https://www.linkedin.com/in/swetha-s-71aa71278",
  leetcode: "https://leetcode.com/u/swethas_07/",
  resume: "/Swetha_S_Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI & Automation", href: "#ai-automation" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "43+", label: "REST APIs Built" },
  { value: "100+", label: "LeetCode Problems" },
  { value: "75%", label: "Gesture Recognition Accuracy" },
  { value: "8.66", label: "CGPA" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "Code2",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: [
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "JPA",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    items: ["HTML5", "CSS3", "JavaScript", "Angular", "TypeScript"],
  },
  {
    title: "AI / Machine Learning",
    icon: "BrainCircuit",
    items: [
      "SVM",
      "Neural Networks",
      "Gesture Recognition",
      "Pattern Recognition",
      "OpenCV Basics",
      "Data Preprocessing",
    ],
  },
  {
    title: "Database",
    icon: "Database",
    items: ["MySQL", "Database Design", "CRUD Operations"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Maven",
      "IntelliJ IDEA",
      "VS Code",
      "Eclipse",
      "Cloudinary",
      "PyAutoGUI / Scripting",
    ],
  },
  {
    title: "Computer Science",
    icon: "Binary",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"],
  },
];

export const experience = [
  {
    role: "Java Full-Stack Developer Intern",
    company: "TVK Technologies",
    period: "Jul 2026 – Aug 2026",
    points: [
      "Contributed to backend architecture for production-facing modules.",
      "Optimized SQL queries and reduced API response times.",
      "Worked in Agile sprints with regular planning and review ceremonies.",
      "Participated in automated code reviews and Git/GitHub based workflows.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Git", "GitHub"],
  },
  {
    role: "Java Full-Stack Developer Intern",
    company: "Amdox Technologies",
    period: "Jan 2026 – Apr 2026",
    points: [
      "Built a Task Management System end-to-end with Java and Spring Boot.",
      "Implemented JWT authentication and role-based access control.",
      "Integrated Cloudinary for media handling and MySQL for persistence.",
      "Supported concurrent users while following Agile/Scrum practices.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "JWT", "Cloudinary"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  tech: string[];
  highlight: string;
  github?: string;
  demo?: string;
  problem: string;
  solution: string;
  architecture: string[];
  implementation: string[];
  features: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    title: "Task Management System",
    tagline: "Secure, role-aware task platform with a full REST backend.",
    tech: ["Java", "Spring Boot", "MySQL", "Hibernate", "JWT", "REST APIs", "Cloudinary"],
    highlight: "43+ REST APIs · 10 MySQL tables",
    github: "https://github.com/SwethaS-07",
    problem:
      "Teams needed a single place to assign, track and audit tasks with strict control over who can see and change what.",
    solution:
      "A Spring Boot backend exposing 43+ REST endpoints, backed by a normalized 10-table MySQL schema, with JWT authentication and role-based access control.",
    architecture: [
      "Client request → JWT filter validates token",
      "Controller layer → request validation & DTO mapping",
      "Service layer → business rules and role checks",
      "Repository (JPA/Hibernate) → MySQL",
      "Cloudinary API for attachment storage",
    ],
    implementation: [
      "Spring Security with JWT issuance, refresh and stateless sessions.",
      "Hibernate/JPA entity relationships across 10 normalized tables.",
      "Layered architecture: controller, service, repository, DTO.",
      "Cloudinary SDK integration for file and image uploads.",
    ],
    features: [
      "Task creation, assignment, status workflow and comments",
      "Role-based dashboards for admin, manager and member",
      "Attachment upload with cloud storage",
      "Filtering, search and audit trail",
    ],
    results: [
      "43+ documented REST endpoints tested in Postman",
      "10-table relational schema with referential integrity",
      "Stable performance under concurrent user load",
    ],
  },
  {
    title: "IoT-Enhanced Sign Language Glove",
    tagline: "Wearable glove translating hand gestures into readable text.",
    tech: ["Python", "Arduino", "Flex Sensors", "SVM", "Neural Networks", "Bluetooth"],
    highlight: "75% gesture recognition accuracy · ICASEM 2025",
    github: "https://github.com/SwethaS-07",
    problem:
      "Everyday communication is difficult for sign language users when the listener does not understand signs.",
    solution:
      "A sensor glove that captures finger flex data, streams it over Bluetooth, and classifies gestures using SVM and neural network models.",
    architecture: [
      "Flex sensors on glove → Arduino analog reads",
      "Bluetooth module → Python receiver",
      "Signal smoothing & feature extraction",
      "SVM / neural network classifier",
      "Text output for the listener",
    ],
    implementation: [
      "Arduino firmware sampling five flex sensors with calibration routine.",
      "Python pipeline for noise filtering and feature windows.",
      "SVM baseline compared against a small neural network classifier.",
      "Dataset collection and preprocessing across repeated gesture sessions.",
    ],
    features: [
      "Real-time gesture capture over Bluetooth",
      "Per-user calibration",
      "Multi-gesture vocabulary",
      "Live text output",
    ],
    results: [
      "75% recognition accuracy on the trained gesture set",
      "Presented at the ICASEM 2025 International Conference",
    ],
  },
  {
    title: "Job Tracking System",
    tagline: "Track job applications end-to-end with an Angular front end.",
    tech: ["Java", "Spring Boot", "Angular", "TypeScript", "MySQL", "REST API"],
    highlight: "Full CRUD with Angular services and routing",
    github: "https://github.com/SwethaS-07",
    problem:
      "Job seekers lose track of applications, interview stages and follow-ups across scattered notes and emails.",
    solution:
      "A Spring Boot REST API paired with an Angular client for managing applications, statuses and searches in one dashboard.",
    architecture: [
      "Angular components → Angular services (HttpClient)",
      "REST API (Spring Boot controllers)",
      "Service layer → JPA repositories",
      "MySQL persistence",
    ],
    implementation: [
      "Typed Angular services wrapping every REST endpoint.",
      "Reactive forms with validation for application entry.",
      "Angular Router with a custom 404 route.",
      "Spring Boot CRUD controllers with DTO validation.",
    ],
    features: [
      "Create, read, update and delete applications",
      "Status tracking across interview stages",
      "Search and filter across applications",
      "Custom 404 routing",
    ],
    results: [
      "Complete CRUD coverage between Angular client and REST API",
      "Clean separation of components, services and models",
    ],
  },
  {
    title: "Career Guidance Web Platform",
    tagline: "Rule-based career recommendations from student inputs.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlight: "Personalized recommendations, no backend required",
    github: "https://github.com/SwethaS-07",
    problem:
      "Students often choose career paths without a structured way to map their interests and strengths to options.",
    solution:
      "A lightweight web platform that collects interests and skills, then applies rule-based logic to suggest matching career tracks.",
    architecture: [
      "Input form → answer collection",
      "Rule engine in JavaScript scores each career track",
      "Ranked recommendations rendered to the page",
    ],
    implementation: [
      "Vanilla JavaScript scoring rules mapped to career categories.",
      "Responsive layout built with semantic HTML and CSS.",
      "Client-side validation for all inputs.",
    ],
    features: [
      "Interest and skill questionnaire",
      "Rule-based recommendation engine",
      "Ranked results with guidance notes",
      "Fully responsive interface",
    ],
    results: [
      "Instant recommendations with zero backend dependency",
      "Used as a guidance aid for peer students",
    ],
  },
];

export const aiPillars = [
  {
    icon: "BrainCircuit",
    title: "AI / Machine Learning",
    body: "Classical and neural approaches for real signal data — SVM classifiers, small neural networks, gesture and pattern recognition, and the preprocessing that makes them work.",
    tags: ["SVM", "Neural Networks", "Gesture Recognition", "Data Preprocessing"],
  },
  {
    icon: "Bot",
    title: "Automation",
    body: "Removing repetitive work with scripted workflows — REST API automation, Postman collections, desktop automation with PyAutoGUI, and Python utility scripting.",
    tags: ["REST API Automation", "Workflow Automation", "PyAutoGUI", "Python Scripting"],
  },
  {
    icon: "Plug",
    title: "Backend Integration",
    body: "Wiring intelligence into real systems — Spring Boot services, well-documented REST APIs, third-party integrations like Cloudinary, and relational database design.",
    tags: ["Spring Boot", "REST APIs", "Cloudinary API", "MySQL"],
  },
];

export const achievements = [
  {
    icon: "Code2",
    title: "100+ LeetCode Problems",
    detail: "Consistent practice across hashing, arrays, binary search and stack patterns.",
  },
  {
    icon: "Award",
    title: "TCS iON NQT",
    detail: "Overall 69.02% · Java 72.52% · Advanced Quantitative & Reasoning 77.69%.",
  },
  {
    icon: "Trophy",
    title: "Innovative Project Award",
    detail: "Computer Society of India — Kancheepuram Chapter.",
  },
  {
    icon: "ScrollText",
    title: "ICASEM 2025 Research Presentation",
    detail: "Presented the IoT-Enhanced Sign Language Glove at an international conference.",
  },
];

export const education = [
  {
    title: "B.E. Computer Science Engineering",
    org: "Jerusalem College of Engineering",
    meta: "March 2026 · CGPA 8.66",
  },
];

export const certifications = [
  "TCS iON National Qualifier Test (NQT)",
  "HackerRank Java (Basic)",
];
