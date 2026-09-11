# Swetha's Dev Hub

Build a complete, professional, modern personal developer portfolio website for Swetha S, a 2026 Computer Science Engineering graduate specializing in Java Full-Stack Development, backend systems, REST APIs, AI/ML, and automation.

### Design & Aesthetic
- Dark-first theme (near-black / charcoal background, electric blue / blue-violet primary accent, subtle cyan highlight, crisp white and light gray text).
- Clean, minimal, recruiter-focused, technical aesthetic reminiscent of a modern engineering SaaS site.
- Subtle interactive visual elements like glowing connected nodes, architecture/API flow graphics in the hero background without clutter.
- Responsive design across desktop, tablet, and mobile.

### User Assets & Links
- Profile Photo: Copy the uploaded image attachment ('Swetha Proffesional Photo.jpeg') into `src/assets/profile.jpg` (or `public/profile.jpg`) and display it in the Hero section (right on desktop, centered on mobile) with soft rounded/circular frame, subtle border, and accent glow. Alt text: "Swetha S — Software Developer".
- Resume: Place the uploaded PDF attachment ('Swetha_S.pdf') into `public/Swetha_S_Resume.pdf` and link all "Download Resume" buttons to it.
- Social Links:
  - GitHub: https://github.com/SwethaS-07
  - LinkedIn: https://www.linkedin.com/in/swetha-s-71aa71278
  - LeetCode: https://leetcode.com/u/swethas_07/
  - Email: swethasathaiah6@gmail.com
  - Location: Chennai, India

### Key Sections to Include
1. Sticky Navbar: SWETHA S logo, nav links (Home, About, Skills, Experience, Projects, AI & Automation, Achievements, Education, Contact), GitHub/LinkedIn/LeetCode icons, "Download Resume" button, smooth scrolling, compact translucent backdrop on scroll, mobile hamburger menu.
2. Hero Section:
   - Availability badge: "Open to Software Developer Opportunities"
   - Intro: "Hi, I'm Swetha S"
   - Heading: "Building Reliable Software with Java, AI & Automation."
   - Subheading: "Computer Science Engineering graduate specializing in Java Full-Stack Development, backend systems, REST APIs, AI/ML, and automation."
   - CTAs: "View My Projects" (scrolls to projects), "Download Resume" (opens PDF), "Let's Connect →" (scrolls to contact).
   - Right side: Professional photo with subtle background API/workflow node visuals.
3. About Section:
   - Concise engineering narrative highlighting Java full-stack, Spring Boot, MySQL, JWT, AI/ML, automation, and problem solving.
   - Key Stats Cards: 43+ REST APIs, 100+ LeetCode Problems, 75% Gesture Recognition Accuracy, 8.66 CGPA.
4. Technical Skills Section:
   - Categorized cards with recognizable technology logos/icons (using Lucide icons or brand SVGs):
     - Languages: Java, Python, JavaScript, SQL
     - Backend: Spring Boot, REST APIs, Hibernate, JPA, JWT Authentication, Role-Based Access Control
     - Frontend: HTML5, CSS3, JavaScript, Angular, TypeScript
     - AI / Machine Learning: SVM, Neural Networks, Gesture Recognition, Pattern Recognition, OpenCV Basics, Data Preprocessing
     - Database: MySQL, Database Design, CRUD Operations
     - Tools: Git, GitHub, Postman, Maven, IntelliJ IDEA, VS Code, Eclipse, Cloudinary, PyAutoGUI / Scripting
     - Computer Science: Data Structures & Algorithms, Object-Oriented Programming, Problem Solving
   - No fake percentages; clean tags/badges with brand icons.
5. Experience Section (Vertical Timeline):
   - Java Full-Stack Developer Intern at TVK Technologies (Jul 2026 – Aug 2026): Backend architecture, query optimization, API response times, Agile sprints, automated code reviews, Git/GitHub.
   - Java Full-Stack Developer Intern at Amdox Technologies (Jan 2026 – Apr 2026): Task Management System, Java, Spring Boot, MySQL, JWT, Cloudinary, concurrent user support, RBAC, Agile/Scrum.
6. Featured Projects Section with Interactive Detail Modals:
   - Project 1: Task Management System (Java, Spring Boot, MySQL, Hibernate, JWT, REST APIs, Cloudinary) - Highlight: 43+ REST APIs, 10 MySQL tables.
   - Project 2: IoT-Enhanced Sign Language Glove (Python, Arduino, Flex Sensors, SVM, Neural Networks, Bluetooth) - Highlight: 75% Gesture Recognition Accuracy, presented at ICASEM 2025 International Conference.
   - Project 3: Job Tracking System (Java, Spring Boot, Angular, TypeScript, MySQL, REST API) - Features: Application management, CRUD, Angular services, search, custom 404 routing.
   - Project 4: Career Guidance Web Platform (HTML, CSS, JavaScript) - Personalized career recommendations, rule-based recommendation logic.
   - Each project card has GitHub link, Live Demo button (if applicable), and "View Details" opening a modal with Problem, Solution, Architecture Flow diagram/steps, Technical Implementation, Key Features, and Measurable Results.
7. Dedicated AI & Automation Section:
   - Title: "AI & Automation"
   - Subtitle: "Exploring practical AI integrations, intelligent automation workflows, and software systems that combine backend engineering with AI capabilities."
   - 3 focused pillars: AI/ML (SVM, Neural Networks, Gesture Recognition), Automation (REST API automation, workflow automation, PyAutoGUI, Python scripting), and Backend Integration (Spring Boot, REST APIs, Cloudinary APIs, Database systems).
8. Achievements Section:
   - 100+ LeetCode Problems (Hashing, Arrays, Binary Search, Stack patterns)
   - TCS iON NQT (Overall: 69.02%, Java: 72.52%, Adv Quant & Reasoning: 77.69%)
   - Innovative Project Award (Computer Society of India — Kancheepuram Chapter)
   - ICASEM 2025 Research Presentation
9. Education & Certifications:
   - B.E. Computer Science Engineering, Jerusalem College of Engineering (March 2026, CGPA: 8.50)
   - TCS iON National Qualifier Test (NQT) & HackerRank Java (Basic)
10. Profiles & Contact Section:
    - "Find Me Online" cards linking to GitHub, LinkedIn, LeetCode.
    - Contact form (Name, Email, Subject, Message) with client-side validation and toast confirmation, plus mailto link and direct contact cards.
11. Footer:
    - SWETHA S, "Software Developer | Java | AI | Automation", quick links, © 2026 Swetha S.

### Architecture & Code Structure
- Structure into clean modules: `src/data/` for projects, skills, and experience so content can be updated in one place.
- Reusable components in `src/components/`.
- Ensure flawless responsive design, accessibility, and smooth animations.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://swetha-s-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/95528b6f-304f-4cc9-a249-7bbeff6e583c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
