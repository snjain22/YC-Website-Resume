import type { ProfileData } from "@/lib/types";

export const ayush: ProfileData = {
  slug: "ayush",
  name: "Ayush Amarnath Bhakat",
  tagline:
    "AI engineer building agentic systems, reinforcement learning research, and production LLM infrastructure.",
  bio: "Computer Science (AI & ML) student at MIT Manipal, graduating 2026. I build full-stack AI products — from commercial iOS apps with 13-agent backends to SDLC automation platforms and RL systems for optical networks. Currently interning at Phronetic AI, India's first full-stack Agentic AI platform.",
  email: "bhakat2004@gmail.com",
  phone: "+919173319289",
  location: "India",
  socials: {
    github: "https://github.com/Ashcarnage",
    linkedin: "https://www.linkedin.com/in/ayush-bhakat-5a9181287",
  },
  photo: "/ayush.svg",
  resumePdf: "/ayush-resume.pdf",
  accent: "amber",

  education: [
    {
      school: "Manipal Institute of Technology (MIT Manipal)",
      degree: "B.Tech — Computer Science (AI & ML)",
      location: "Udupi, India",
      dates: "2022 – 2026",
      notes: [
        "Coursework: Operating Systems, Data Structures, Algorithms, DBMS, OOP, Digital Systems & Computer Organization, AI, Machine Learning, Computer Vision, Artificial Neural Networks, Reinforcement Learning, NLP, Quantum Mechanics.",
      ],
    },
    {
      school: "Indian School Al Ghubra",
      degree: "Class XII — 94%",
      location: "Muscat, Oman",
      dates: "2022",
    },
    {
      school: "Indian School Al Ghubra",
      degree: "Class X — 91%",
      location: "Muscat, Oman",
      dates: "2020",
    },
  ],

  experience: [
    {
      company: "Phronetic AI · Neuromind Technologies Pvt. Ltd.",
      role: "AI Intern (Onsite)",
      location: "Bengaluru, India",
      dates: "Jan 2026 – Jun 2026",
      blurb:
        "Phronetic AI is India's first full-stack Agentic AI platform, backed by Infibeam Avenues Limited, enabling low-code design, configuration, and deployment of AI agent teams for enterprises.",
      bullets: [
        "Designed and developed a Context-Aware AI Copilot with progressive tool disclosure for automated agent configuration. Built 3 architectural versions: a foundation with 6 core tools and SSE streaming middleware (JSON Patch state sync, reasoning extraction, tool-name humanization); an expanded version with 15+ tools featuring automated LLM-driven tool creation with AST validation, API import parsing, and MCP-based third-party SaaS integration; and a production-hardened version introducing a Skills architecture for dynamic tool visibility via deterministic guard functions, modular prompt assembly from 4 independent files, and multi-pattern leaked output suppression.",
        "Led a cross-functional team as Project Lead to acquire the Gujarat Police Department as a client. Built an end-to-end AI pipeline for FIR filing automation that intelligently predicts applicable legal sections (IPC/BNS) to prefill FIRs using NLP-based classification. Delivered the product pitch and technical demonstration to the client, resulting in successful acquisition.",
      ],
      tech: ["Pydantic AI", "LiteLLM", "AWS Lambda", "MCP"],
    },
    {
      company: "C-HIT",
      role: "AI Intern (Remote)",
      location: "Remote",
      dates: "Jul 2025 – Sep 2025",
      blurb:
        "C-HIT offers healthcare IT solutions leveraging cybersecurity and AI/ML techniques to modernize federal health systems.",
      bullets: [
        "Built EVIQ, a production-ready EDI X12N 278 validation engine (FastAPI, 2200+ line validator) implementing WEDI SNIP Level 1–7 compliance testing with configurable segment terminators, automatic encoding conversion, and HIPAA-compliant audit logging. Developed a comprehensive ISA/IEA envelope validator and dual-schema comparison for custom trading partner specifications.",
        "Developed a multi-agent AI system (LangGraph, Groq/OpenAI) with three specialized agents: an Enhanced Validator Agent with sub-agents for syntax intelligence, business rules (TR3), and ICD-10/CPT/HCPCS code set validation; a Dynamic Mapper Agent for automated ESL schema generation and field mapping; and a Document Generation Agent for compliance reporting and executive summaries.",
        "Built a RAG pipeline using ChromaDB vector database with EDI-specific chunking strategies and Neo4j knowledge graphs for healthcare terminology relationships, enabling semantic search across EDI standards, error patterns, and compliance rules for context-aware validation.",
        "Implemented automated user story and test case generation from business requirements, and automated EDI file generation using auto-diff comparison against X12 standards for verification and validation workflows.",
        "Designed the prior authorization automation system aligned with the CMS WISeR Model, integrating FHIR R4 interoperability for medical necessity assessment, claims prediction, and denial risk analysis.",
      ],
      tech: ["FastAPI", "LangGraph", "Groq", "OpenAI", "ChromaDB", "Neo4j", "FHIR R4"],
    },
    {
      company: "Oman Data Park",
      role: "AI Intern (Onsite)",
      location: "Oman",
      dates: "Dec 2024 – Jan 2025",
      blurb:
        "ODP is a cloud service provider offering datacenters, cybersecurity and AI-enabled cloud solutions for enterprises and government agencies.",
      bullets: [
        "Developed a Multi-Agent system for company data, leveraging MCP tools like web-search, OCR, custom MCPs for sub-agents along with chain-of-thought reasoning and multi-agent orchestration to effectively process company data and query complex tasks. A RAG-based system was used and the prototype was run with a Streamlit UI.",
        "The prototype was used for internal querying and testing as the company explored ideas around improving their AI domain. No access to sensitive data was granted.",
      ],
      tech: ["MCP", "RAG", "Streamlit", "OCR"],
    },
    {
      company: "Ather ByteBattles 2.0",
      role: "All India Firmware Challenge — Finalist",
      location: "India",
      dates: "April 2025",
      bullets: [
        "Ranked Top 30 among all-India participants for Ather's ByteBattles 2.0. Qualified for the final round, demonstrating competence and multi-disciplinary skill in electronics and Machine Learning.",
      ],
    },
  ],

  products: [
    {
      name: "LisnAI",
      oneLine: "AI-powered life diary iOS app — commercial B2C product.",
      description:
        "Built a commercial B2C iOS application that continuously records, transcribes, and stores conversations as a searchable life diary with actionable intent extraction and task automation. Architected a 13-agent backend pipeline (Entity, Router, Action, Memory, Chat, Query, Insight agents) using Vercel AI SDK with multi-provider LLM support (OpenAI, Anthropic, Gemini). Backend built on Bun/Hono with Firebase Firestore, Qdrant vector search, Inngest background jobs, and end-to-end encryption. iOS frontend uses SwiftUI with on-device transcription (iOS 26 SpeechAnalyzer) for a privacy-first, local-first architecture with optional cloud sync. Integrated Langfuse for LLM observability and cost tracking.",
      tech: [
        "Swift",
        "SwiftUI",
        "TypeScript",
        "Bun",
        "Hono",
        "Firebase Firestore",
        "Qdrant",
        "Inngest",
        "Vercel AI SDK",
        "Langfuse",
      ],
    },
    {
      name: "Aelvyn Systems",
      oneLine: "AI-powered SDLC automation platform with 13 specialized agents.",
      description:
        "Built a full-stack SDLC automation platform comprising 13 specialized AI agents (code review, security scanning, test generation, deployment, cost optimization, sales intelligence) orchestrated across 7 FastAPI microservices (Nexus, Forge, Sentinel, Crucible, Conduit, Herald, Ledger). Event-driven architecture using Redis Streams with 24 event types automating the PR → Review → Test → Deploy pipeline. Includes MCP server for IDE integration, CLI copilot, and Next.js admin dashboard. Three-tier LLM routing (Opus → Sonnet → GPT-4o-mini) with pydantic-ai agents, LangGraph workflows, and multi-tenant organization isolation.",
      tech: [
        "Python",
        "FastAPI",
        "Next.js",
        "PostgreSQL",
        "Redis Streams",
        "pydantic-ai",
        "LangGraph",
        "MCP",
      ],
    },
  ],

  projects: [
    {
      name: "OptiNet-GRPO — DRL for Elastic Optical Networks",
      description:
        "Developed a novel GRPO-based reinforcement learning system for routing and spectrum allocation (RSA) in C+L band elastic optical networks. Built a custom Gymnasium environment simulating NSFNET (14-node) topology with 320 spectrum slots and distance-dependent modulation selection (16QAM/8QAM/QPSK/BPSK). Designed a GQA Transformer policy (~500K parameters) trained via Group Relative Policy Optimization with Xi fragmentation metric as reward. Implemented an LLM reward model by fine-tuning Qwen 3.5-2B on 50K+ synthetic (state, blocking_rate) pairs using SFT and GRPO via TRL. Distributed training on Modal A100 GPUs with Weights & Biases experiment tracking.",
      tech: ["Python", "PyTorch", "Modal", "HuggingFace", "TRL", "W&B", "Gymnasium"],
    },
    {
      name: "Mental Health Conversational Agent with MCP Tool Calling",
      description:
        "Developed a multi-agent framework with MCP tool calls, agent orchestration, and chain-of-thought for medical analysis of user symptoms and documents like X-rays, MRI-scans, and prescriptions. MCP servers were created locally using vision transformers and web-search libraries. TTS (text-to-speech) and STT (speech-to-text) modules were wrapped around the main system. Used Streamlit for the UI.",
      tech: ["LLMs", "PyTorch", "FastMCP", "Streamlit", "Vision Transformers"],
    },
    {
      name: "Prostate Cancer Detection",
      description:
        "Developed a Reinforcement Learning aided 3D CNN-UNet architecture to segment cancerous regions in 3D MRI scans visualized in 3D Slicer. Multiple UNet architectures were explored and created through the RL algorithm REINFORCE, delivering 72% accuracy on 42 real MRI scans acquired from KMC (Kasturba Medical College).",
      tech: ["PyTorch", "Matplotlib", "3D Slicer", "REINFORCE"],
    },
    {
      name: "Chemical Reactor Control with Reinforcement Learning",
      description:
        "Developed a control system monitoring chemical reactor temperatures using two actuators — Coolant Flow and Heater Current. Leveraged Deep Deterministic Policy Gradient (DDPG) and improvements from control theory, NMPC, and PIDs to achieve near-perfect temperature tracking through efficient rollouts on a real (unsimulated) chemical reactor at MIT.",
      tech: ["PyTorch", "scikit-learn", "Matplotlib", "DDPG"],
    },
    {
      name: "DUNE CLI — Replicated Claude Code",
      description:
        "Built a command-line interface called DUNE CLI inspired by Claude Code which automates code generation, file creation, debugging, and self-improving code. Using LLMs as the orchestrator agent, this CLI has 7 tools the agent can reason about and use for tasks specified in an interactive chatbot-like session. Core features from Claude Code are replicated: codebase indexing, RAG, chat session memory, auto-looping and recursive tool calls with user permission for bash.",
      tech: ["Python", "Rich", "LangGraph", "FastMCP", "FastAPI"],
    },
    {
      name: "Small Reasoning Model via Knowledge Distillation + GRPO",
      description:
        "Built a 3B-parameter Small Language Model (inspired by Qwen 32B MoE architecture) using PyTorch with Grouped Query Attention (GQA) and efficient expert routing to enable Mixture of Experts (MoE), trained on Runpod A100 GPUs. Leveraging Knowledge Distillation, knowledge was transferred from a Qwen 32B teacher model into the self-made 3B MoE model after pretraining. Reasoning was enabled via GRPO for MoE models, inducing <think> tags.",
      tech: ["Python", "SkyRL", "PyTorch", "FastAPI", "Runpod A100"],
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["C", "Java", "Python", "Swift", "TypeScript", "SQL"],
    },
    {
      category: "AI / ML Tools",
      items: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "OpenCV",
        "PySpark",
        "PyTorch",
        "TensorFlow",
        "LangChain",
        "FastMCP",
        "FastAPI",
        "Pydantic AI",
        "Vercel AI SDK",
        "Hono",
        "Bun",
      ],
    },
    {
      category: "Web",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "jQuery",
        "Django",
        "React",
        "Next.js",
        "Node",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "Firebase Firestore", "Qdrant", "Redis", "SQLAlchemy"],
    },
    {
      category: "Cloud & Infra",
      items: ["AWS", "AWS Bedrock", "GCP", "Firebase", "Runpod", "Modal", "Docker"],
    },
    {
      category: "OS",
      items: ["Windows", "Linux", "macOS"],
    },
  ],

  achievements: [
    "Ranked Top 30 among 700+ all-India participants for Ather's ByteBattles 2.0 All-India Firmware Challenge, 2025.",
    "Completed Quantum Computing on-campus drive — gained insights into Quantum Computing for Neural Networks and earned a participation certificate.",
  ],
};
