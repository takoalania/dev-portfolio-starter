type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  category: 'personal' | 'contributions';
};

type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  logo?: string;
  website?: string;
  description: string[];
  tech?: string[];
};

export type SkillGroup = {
  category: string;
  icon: "react" | "node" | "tools";
  items: string[];
};

export const siteConfig: {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  website: string;
  ogImage: string; 
  favicon: string;
  projects: Project[];
  experience: Experience[];
  skills: SkillGroup[];
} = {
  name: "Your Name",
  title: "Frontend Developer",
  bio: "I build clean, fast, and accessible web applications using modern technologies.",
  email: "you@example.com",
  location: "City, Country",
  phone: "+49 1521 1234567", // Example number – replace with your own
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  website: "https://yourdomain.com",
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",

  projects: [
    {
      title: "Project One",
      description: "Short description of your first project goes here.",
      image: "/projects/placeholder.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com/project-one",
      codeUrl: "https://github.com/yourusername/project-one",
      category: "personal",
    },
    {
      title: "Project Two",
      description: "Short description of your second project goes here.",
      image: "/projects/placeholder.png",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com/project-two",
      codeUrl: "https://github.com/yourusername/project-two",
      category: "personal",
    },
    {
      title: "Contribution One",
      description: "Short description of a team or open-source contribution.",
      image: "/projects/placeholder.png",
      tech: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://example.com/contribution-one",
      category: "contributions",
    },
    {
      title: "Contribution Two",
      description: "Another brief description of your work contribution.",
      image: "/projects/placeholder.png",
      tech: ["Vue", "Node.js"],
      liveUrl: "https://example.com/contribution-two",
      category: "contributions",
    },
  ],

  experience: [
    {
        company: "Company A",
        title: "Frontend Developer",
        location: "Remote",
        period: "2023 – Present",
        logo: "/logos/placeholder.png",
        website: "https://companya.example.com",
        description: [
        "Developed reusable UI components with modern frontend frameworks.",
        "Implemented responsive design and cross-browser compatibility.",
        "Collaborated with cross-functional teams in agile sprints.",
        ],
        tech: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
        company: "Company B",
        title: "Web Developer",
        location: "Onsite",
        period: "2021 – 2023",
        logo: "/logos/placeholder.png",
        website: "https://companyb.example.com",
        description: [
        "Maintained and improved existing codebase.",
        "Assisted in writing unit and integration tests.",
        "Participated in daily stand-ups and product planning meetings.",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
    },
  ],
  skills: [
    {
        category: "Frontend",
        icon: "react",
        items: [
        "React", "Next.js", "JavaScript", "TypeScript",
        "Tailwind CSS", "CSS Modules", "Component Libraries"
        ]
    },
    {
        category: "Backend",
        icon: "node",
        items: [
        "Node.js", "Express.js", "REST APIs", "GraphQL",
        "PostgreSQL", "MongoDB", "ORMs"
        ]
    },
    {
        category: "Tools & Testing",
        icon: "tools",
        items: [
        "Git", "Docker", "CI/CD", "Jest", "Cypress", "Figma"
        ]
    }
  ],
};