// ============================================================
// portfolioData.js — Centralized configuration for Kanishka's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Kanishka Thakur",
  firstName: "Kanishka",
  brandName: "Kanishka",

  title: "Software Engineer | CSE Student",

  location: "Dehradun, Uttarakhand, India",

  phone: "+91 9755849124",

  emails: {
    primary: "rajputkanishka2468@gmail.com",
    secondary: "Kanishka.12576@stu.upes.ac.in",
  },

  resumeUrl: "/ResumeKanishka.pdf",
};

export const socialLinks = {
  github: "https://github.com/kanishkarajput205-collab",
  linkedin: "https://www.linkedin.com/in/kanishka-thakur-6a9a92369/",
};

export const heroContent = {
  greeting: "Hi, I'm Kanishka Thakur",

  titleHighlight: "Software Engineer | CSE Student",

  subtitle:
    "Aspiring Software Engineer passionate about writing clean code, solving challenging problems, and building reliable software through continuous learning.",

  ctaPrimary: {
    text: "View My Work",
    href: "#projects",
  },

  ctaSecondary: {
    text: "Contact Me",
    href:
      "mailto:Kanishka.12576@stu.upes.ac.in?subject=Portfolio Inquiry&body=Hello Kanishka,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },

  ctaResume: {
    text: "Download Resume",
    href: "/ResumeKanishka.pdf",
  },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `
Hi, I'm <span class="text-black font-black">Kanishka Thakur</span>, a third-year B.Tech Computer Science Engineering (Data Science) student at UPES, Dehradun.

I'm currently working as a Software Engineering Intern at Dotnitron, where I'm building backend services, REST APIs, and exploring Retrieval-Augmented Generation (RAG) systems using modern technologies.

I enjoy building scalable applications, solving real-world problems, and continuously improving my skills in Java, Python, Node.js, TypeScript, and Data Structures & Algorithms.
`
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "C", level: 50 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 60 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 }
      ]
    },
    {
      title: "Computer Science",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "OOP", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "Operating Systems", level: 75 },
        { name: "Computer Networks", level: 75 }
      ]
    }
  ]
};



// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Dotnitron Pvt. Ltd.",
    role: "Software Engineering Intern",
    duration: "Present",
    skills: [
      "Backend Development",
      "REST APIs",
      "LiteParse",
      "RAG Pipeline"
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Qdrant",
      "Docker"
    ]
  },
  {
    organization: "Womenite",
    role: "Summer Intern",
    duration: "Completed",
    skills: [
      "Professional Communication",
      "Team Collaboration",
      "Problem Solving"
    ],
    tech: []
  },
];

// Brand New Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex problems into efficient software solutions."
  },
  {
    name: "Teamwork",
    icon: "🤝",
    desc: "Collaborating effectively in internships and academic projects."
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Presenting ideas clearly and working effectively with teams."
  },
  {
    name: "Adaptability",
    icon: "🚀",
    desc: "Quickly learning new technologies and development tools."
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Always improving through projects, internships, and self-learning."
  },
  {
    name:"Leadership",
    icon:"🌟",
    desc:"Taking ownership of projects, collaborating with teams, and delivering solutions."
},
];

export const projects = [
  {
    id: "rag-learning-nodejs",
    number: "01",
    badge: "🚀 Featured Project",
    title: "RAG Learning Pipeline",
    description:
      "A Retrieval-Augmented Generation (RAG) learning project built with Node.js to explore document parsing, vector embeddings, semantic search, and AI-powered retrieval workflows. The project demonstrates backend engineering concepts including REST APIs, document processing, and scalable retrieval pipelines.",
    techTags: [
      "Node.js",
      "TypeScript",
      "REST API",
      "RAG",
      "Vector Search",
      "LiteParse"
    ],
    links: {
      github: "https://github.com/kanishkarajput205-collab/rag-learning-nodejs",
      demo: null,
    },
    isFlagship: true,
  },

  {
    id: "buy-sell-management-system",
    number: "02",
    badge: "💻 Java Project",
    title: "Buy & Sell Management System",
    description:
      "A Java-based marketplace application that enables buyers and sellers to manage products efficiently. The project demonstrates Object-Oriented Programming principles, multithreading, modular architecture, and file handling while providing an interactive console-based marketplace.",
    techTags: [
      "Java",
      "OOP",
      "Multithreading",
      "Collections",
      "File Handling"
    ],
    links: {
      github: "https://github.com/kanishkarajput205-collab/buy-sell-management-system",
      demo: null,
    },
    isFlagship: false,
  },

  {
    id: "notes-manager",
    number: "03",
    badge: "🌐 Web Project",
    title: "Notes Manager",
    description:
      "A responsive Notes Manager web application that allows users to create, edit, delete, and search notes with a clean and intuitive interface. Built using vanilla web technologies with a focus on usability and responsive design.",
    techTags: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "Responsive Design"
    ],
    links: {
      github: "https://github.com/kanishkarajput205-collab/notes-manager-app",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Womenite Summer Internship",
      issuer: "Womenite Foundation",
      icon: "💼",
    },
    {
      name: "SATHACK'25 Hackathon",
      issuer: "Thapar Institute of Engineering & Technology",
      icon: "🏆",
    },
  ],

  viewAllUrl: "/Kanishka_Certificates.pdf",
};

export const education = {
  degree: "B.Tech – Computer Science Engineering (Data Science)",
  institution: "University of Petroleum and Energy Studies (UPES)",
  cgpa: "7.0",
  graduation: "2028",
};

export const footerContent = {
  taglines: [
    "Software Engineering",
    "Java · Python · Node.js",
    "Building Real-World Applications",
    ],
  credential :"B.Tech CSE (Data Science) · UPES",
  copyright: `© ${new Date().getFullYear()} Kanishka Thakur. All Rights Reserved.`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
