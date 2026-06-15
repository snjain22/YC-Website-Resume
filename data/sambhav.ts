import type { ProfileData } from "@/lib/types";

export const sambhav: ProfileData = {
  slug: "sambhav",
  name: "Sambhav Nath Jain",
  tagline:
    "Machine learning engineer building multi-modal AI systems, autonomous flight software, and enterprise agent platforms.",
  bio: "Computer Science & Engineering (AI & ML) student at MIT Manipal (MAHE), graduating May 2026. I've shipped production ML across startups, enterprises, and research labs — from 0-1 business classification systems at HyperVerge, to GPS-denied drone navigation at Raphe mPhibr, to multi-agent orchestration at M.H. Alshaya.",
  email: "sambhavjain1404@gmail.com",
  phone: "+919108659053",
  location: "Manipal, India",
  socials: {
    github: "https://github.com/snjain22",
    linkedin: "https://www.linkedin.com/in/sambhav-jain-631365215",
  },
  photo: "/sambhav.jpeg",
  photoPosition: "center 40%",
  resumePdf: "/sambhav-resume.pdf",
  accent: "cyan",

  education: [
    {
      school: "Manipal Institute of Technology, MAHE",
      degree: "B.Tech — Computer Science & Engineering (AI & ML)",
      location: "Manipal, India",
      dates: "Aug 2022 – May 2026",
    },
  ],

  experience: [
    {
      company: "HyperVerge",
      role: "Machine Learning Engineer Intern",
      location: "Bangalore, India",
      dates: "Aug 2025 – Present",
      bullets: [
        "Shipped production code — built a multi-modal AI pipeline now live in HyperVerge's underwriting product.",
        "Worked on a 0-1 business classification system POC for US clients, automating standardized code predictions using multi-modal AI models across enterprise data sources.",
        "Modified pipeline for automated merchant categorization and multilingual text extraction from diverse Indian shop images.",
      ],
      tech: ["Python", "LLMs", "VLMs", "Multimodal AI"],
    },
    {
      company: "Raphe mPhibr",
      role: "Software Research Intern",
      location: "Noida, India",
      dates: "Jun 2025 – Jul 2025",
      bullets: [
        "Developed SITL simulation environment integrating 3D software with proprietary UAV autopilot systems for VTOL aircraft testing, mission planning, and pilot training.",
        "Designed GPS-independent navigation algorithm for autonomous drone flight in GPS-denied zones with seamless mode transitions.",
        "Consolidated 5+ debugging tools into unified flight planning software, reducing test times by 60% with senior management recognition.",
      ],
      tech: ["Linux", "Custom Autopilot Firmware", "Ground Control Software"],
    },
    {
      company: "M.H. Alshaya Co. WLL",
      role: "Data, Analytics & AI Intern",
      location: "Kuwait City, Kuwait",
      dates: "May 2025 – Jun 2025",
      bullets: [
        "Automated SharePoint file summarization using GPT-4, reducing JIRA ticket analysis time by 90%.",
        "Built a Multi-Agent Orchestration MVP via Azure AI Agent Foundry, earning senior leadership recognition.",
        "Deployed custom Copilot Agents to streamline workflows and improve data accessibility across the firm.",
      ],
      tech: ["Azure OpenAI", "PowerApps", "SharePoint", "Azure AI Agent Foundry", "Python"],
    },
    {
      company: "Samsung R&D Institute, India",
      role: "Samsung PRISM Project",
      location: "Remote",
      dates: "Jun 2024 – Feb 2025",
      bullets: [
        "Developed Large Action Model to automate system actions (wifi/bluetooth toggle, SMS) via natural language using Llama 70B.",
      ],
      tech: ["Java", "OpenRouter", "Llama-70B"],
    },
  ],

  products: [
    {
      name: "AI Dating Coach — Zach AI",
      oneLine:
        "Personality-driven AI coaching product built in collaboration with Zach AI.",
      description:
        "Built an AI Dating Coach in collaboration with Zach AI, modeled on the tone and advice style of a popular creator. The product delivers personalized coaching through a conversational AI trained to capture the creator's voice, frameworks, and guidance patterns.",
      tech: ["LLMs", "Prompt Engineering", "Conversational AI"],
    },
  ],

  projects: [
    {
      name: "RAG-based Personal Knowledge Assistant",
      description:
        "Built a Personal Knowledge Assistant using RAG and a VectorDB to query personal document collections.",
      tech: ["Python", "LangChain"],
    },
    {
      name: "Glaucoma Diagnosis using CCT and RL",
      description:
        "Developed a glaucoma detection model using a Compact Convolutional Transformer combined with Reinforcement Learning.",
      tech: ["Python", "PyTorch"],
    },
  ],

  skills: [
    {
      category: "Programming",
      items: ["Python", "Java", "C", "C++", "SQL", "Dart (Flutter)"],
    },
    {
      category: "AI / ML",
      items: ["Gemini", "OpenRouter", "FAISS", "PyTorch", "OpenCV", "ChromaDB", "LangChain"],
    },
    {
      category: "Cloud & Tools",
      items: [
        "Azure OpenAI",
        "Vertex AI",
        "AWS",
        "Git",
        "VS Code",
        "Adobe Premiere Pro",
        "Photoshop",
        "Lightroom",
      ],
    },
  ],

  leadership: [
    {
      role: "Management Committee Member",
      org: "TEDx MAHE & Think Tank, Manipal",
      dates: "Mar 2024 – Mar 2025",
      bullets: [
        "Recruited junior crew, cold-emailed 20+ speakers, and ideated event themes.",
      ],
    },
    {
      role: "Core Committee Member",
      org: "ACM Manipal Chapter",
      dates: "Nov 2022 – Aug 2025",
      bullets: [
        "Interviewed and assessed 30+ candidates for technical club recruitment.",
      ],
    },
  ],
};
