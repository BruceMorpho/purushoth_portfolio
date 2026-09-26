import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Instagram } from "lucide-react";

export const DATA = {
  name: "Purushoth",
  initials: "PR",
  url: "https://linkedin.com/in/purushoth-tech",
  location: "Chennai, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Chennai,+Tamil+Nadu",
  description:
    "Tech Support Engineer",
  summary:
    "M.Sc. Computer Science graduate with practical knowledge in IT support, troubleshooting, networking, and system administration. Skilled in Windows, Linux, hardware and software support, and technical issue resolution. Looking for opportunities in IT Support, Technical Support, Help Desk, or Desktop Support.",
  avatarUrl: "/me2.png",
  skills: [
    { name: "Windows" },
    { name: "Linux" },
    { name: "Networking" },
    { name: "Ticketing Tools" },
    { name: "Wireshark" },
    { name: "Python" },
    { name: "Active Directory" },
  ],
 navbar: [
  { href: "/", icon: HomeIcon, label: "Home" },
],
  contact: {
  email: "purushothaman2709@gmail.com",
  tel: "9025991094",

  social: {
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/purushoth-tech",
      icon: Icons.linkedin,
      navbar: true,
    },

    GitHub: {
      name: "GitHub",
      url: "https://github.com/BruceMorpho",
      icon: Icons.github,
      navbar: true,
    },

    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/thepurushothverse?stkn=MTVkdXl1N2RuM3A1ZA==",
      icon: Instagram,
      navbar: true,
    },

    email: {
      name: "Email",
      url: "mailto:purushothaman2709@gmail.com",
      icon: Icons.email,
      navbar: true,
    },
  },
},

  work: [],
  education: [
    {
      school: "Bharathidasan University",
      href: "",
      degree: "M.Sc Computer Science",
      logoUrl: "/bdu-logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Bharathidasan University",
      href: "",
      degree: "B.Sc Computer Science",
      logoUrl: "/bdu-logo.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Resume Analyzer (AI Recruitment Tool)",
      href: "",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed an AI-powered Resume Analyzer using Python and Machine Learning libraries to automate resume screening. Implemented skill assessment and job-fit analysis based on uploaded resumes to support faster candidate shortlisting.",
      technologies: [
        "Python",
        "Pandas",
        "Flask",
        "Machine Learning",
      ],
      links: [],
      image: "/project/resume-analyzer.png",
      video: "",
    },
    {
      title: "A Review of Liver Patient Analysis Methods Using Machine Learning",
      href: "",
      dates: "2023 - 2025",
      active: true,
      description:
        "Conducted a literature review of machine learning models for liver patient analysis. Evaluated SVM, Decision Tree, and Random Forest algorithms and documented a comparative analysis based on accuracy.",
      technologies: [
        "Python",
        "Machine Learning",
        "SVM",
        "Decision Tree",
        "Random Forest",
      ],
      links: [],
      image: "/project/liver-ml.png",
      video: "",
    },
     {
    title: "BioVerix Technologies Website",
    href: "https://bioverixtechnology.netlify.app/",
    dates: "2026",
    active: true,
    description:
      "Developed and launched a modern responsive website for BioVerix Technologies to establish a professional online presence and showcase its aquaculture, biotechnology, laboratory services, and research support.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Claude AI",
      "Git",
      "GitHub",
      "Netlify",
    ],
    links: [
      {
        type: "Website",
        href: "https://bioverixtechnology.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/project/bioverix.png",
    video: "",
  },
  ],
  certifications: [
    "IBM - Information Technology Fundamentals",
    "Cybersecurity Analyst Job Simulation - Forage & Tata",
    "Introduction to Information Security & Fundamentals",
    "Be10x AI Tools Workshop",
  ],
  hackathons: [] as {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: { icon?: any; title: string; href: string }[];
}[],
} as const;
