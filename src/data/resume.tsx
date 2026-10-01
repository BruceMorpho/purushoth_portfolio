import { Icons } from "@/components/icons";
import {
  HomeIcon, Instagram, Wrench, Cpu, Printer, MonitorSmartphone, Server,
  Network, Globe, Router, ShieldCheck, Flame, Cloud, FolderTree,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Skill = { name: string; logo?: string; icon?: LucideIcon };

const SKILL_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: "Technical Support & Troubleshooting",
    skills: [
      { name: "Hardware Diagnostics", icon: Cpu },
      { name: "Software Troubleshooting", icon: Wrench },
      { name: "PC & Printer Repair", icon: Printer },
      { name: "Remote Desktop Support", icon: MonitorSmartphone },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Windows 10/11", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Windows Server", icon: Server },
      { name: "macOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux" },
    ],
  },
  {
    title: "Networking Concepts",
    skills: [
      { name: "TCP/IP", icon: Network },
      { name: "DNS", icon: Globe },
      { name: "DHCP", icon: Router },
      { name: "VPN", icon: ShieldCheck },
      { name: "Firewalls", icon: Flame },
      { name: "Wireshark", logo: "https://cdn.simpleicons.org/wireshark" },
    ],
  },
  {
    title: "Admin Tools & Ticketing",
    skills: [
      { name: "Active Directory", icon: FolderTree },
      { name: "Office 365", icon: Cloud },
      { name: "ServiceNow", logo: "/skills/servicenow.png" },
    ],
  },
];

export const DATA = {
  name: "Purushoth",
  initials: "PR",
  url: "https://linkedin.com/in/purushoth-tech",
  location: "Chennai, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Chennai,+Tamil+Nadu",
  description:
    "Tech Support Engineer. I love solving problems, helping people, and learning new technologies. Very active on LinkedIn.",
  summary:
    "Hello, I’m Purushoth, a Tech Support Engineer with a strong foundation in IT support, troubleshooting, networking, and system administration. I hold an M.Sc. in Computer Science and enjoy solving technical challenges, supporting users, and continuously learning new technologies. My experience includes working with Windows and Linux environments, hardware and software support, Active Directory, networking tools, and technical issue resolution. I am passionate about delivering reliable IT solutions that improve system performance and user experiences. Through academic projects and hands-on learning, I have developed practical skills in technical support, automation, and problem-solving, and I am actively seeking opportunities in IT Support, Technical Support, Help Desk, and Desktop Support roles.",
  avatarUrl: "/me2.png",
  skills: SKILL_GROUPS,
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

  work: [] as {
    company: string;
    title: string;
    logoUrl: string;
    start: string;
    end?: string;
    description: string;
  }[],
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
