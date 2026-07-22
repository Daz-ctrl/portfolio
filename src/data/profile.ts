export interface PersonalDetails {
  name: string
  location: string
  email: string
  github: string
  linkedin: string
  headline: string
  summary: string
  highlights: string[]
}

export interface Education {
  institution: string
  degree: string
  duration: string
  score?: string
}

export interface WorkExperience {
  company: string
  role: string
  duration: string
  focus: string
}

export interface Project {
  name: string
  tech: string
  summary: string
  link: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export const personalDetails: PersonalDetails = {
  name: 'Kameswara Surya Yashmit Akundi',
  location: 'Greater Visakhapatnam Area, India',
  email: 'kameswara.surya@gmail.com',
  github: 'https://github.com/Daz-ctrl',
  linkedin: 'https://www.linkedin.com/in/kameswara-surya-yashmit-akundi',
  headline: 'Cybersecurity & Cloud Security Analyst',
  summary:
    'Cybersecurity & Cloud Security Analyst | Networking & Endpoint Security | Certified: Oracle Cloud AI Associate, OCI AI Agent Studio, Cisco Networking | Endpoint security | Linux Administration | Agentic AI',
  highlights: [
    'Cybersecurity & Cloud Security Analyst',
    'Networking & Endpoint Security',
    'Oracle Cloud AI Associate',
    'OCI AI Agent Studio',
    'Cisco Networking',
    'Endpoint Security',
    'Linux Administration',
    'Agentic AI',
  ],
}

export const education: Education[] = [
  {
    institution: 'Nadimpalli Satyanarayana Raju Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    duration: '2026 – 2030',
  },
  {
    institution: 'Sri Chaitanya College of Education',
    degree: 'Senior Secondary Education (Class XII)',
    duration: 'Completed March 2026',
    score: '943 / 1000',
  },
]

export const workExperience: WorkExperience[] = [
  {
    company: 'Oxcode',
    role: 'Founding Builder',
    duration: 'July 2026 – Present',
    focus:
      'Acting as a Foundation Member regularly active in the community, providing suggestions for improvements and contributing to platform growth.',
  },
  {
    company: 'FlyRank',
    role: 'AI/ML & Backend Intern',
    duration: 'July 2026 – November 2026',
    focus:
      'Developing high-throughput backend pipelines, machine learning model integrations, and structured data processing architectures.',
  },
  {
    company: 'CodeAlpha',
    role: 'Cybersecurity Intern',
    duration: 'July 2026 – August 2026',
    focus:
      'Executed practical cybersecurity engineering tasks spanning network traffic analysis (Scapy), intrusion detection (Snort/Suricata), static code security auditing, and corporate phishing defense modules.',
  },
]

export const projects: Project[] = [
  {
    name: 'Agentic-Mail-Classifier',
    tech: 'Python, Google GenAI SDK, Pydantic, OS/shutil/glob',
    summary:
      'Engineered a production-grade, dual-agent automation pipeline to ingest, structurally classify, and triage incoming document batches against malicious threat criteria with zero-hallucination Pydantic schemas.',
    link: 'https://github.com/Daz-ctrl/Agentic-Mail-Classifier',
  },
  {
    name: 'Secure Cloud Network',
    tech: 'Terraform, Checkov (SAST), DevSecOps, OCI / Cloud',
    summary:
      'Configured a dual-subnet cloud network topology using Terraform (IaC) integrated with Checkov static analysis for automated Shift-Left compliance and threat mitigation.',
    link: 'https://github.com/Daz-ctrl/secure-cloud-network',
  },
  {
    name: 'Automated Linux Hardening & Audit Tool',
    tech: 'Linux Systems, Bash Shell Scripting, sed, systemctl, UFW',
    summary:
      'Built a native Bash security audit engine that programmatically audits host configurations, enforces UFW rules, and automatically patches system security policies.',
    link: '',
  },
  {
    name: 'Network Intrusion Detection System (NIDS)',
    tech: 'Python, Scapy, JSON Rule Engine, Telemetry Logging',
    summary:
      'Automated Python network security scanning interface that parses, tracks, and alerts against anomalous payload flows in real-time with modular JSON logic schemas and autonomous incident containment.',
    link: 'https://github.com/Daz-ctrl/CodeAlpha_Network_IDS',
  },
  {
    name: 'Basic Network Sniffer',
    tech: 'Python 3.x, Scapy, Layer 3 Raw Sockets',
    summary:
      'Lightweight Python-based network analysis tool that intercepts, parses, and logs live Layer 3 network traffic with protocol classification, data extraction, and hexadecimal payload inspection.',
    link: 'https://github.com/Daz-ctrl/CodeAlpha_Basic_Network_Sniffer',
  },
  {
    name: 'Secure Coding Review Lab',
    tech: 'Python, SQLite, python-dotenv, Regex, AppSec',
    summary:
      'Interactive source code audit lab demonstrating SQL Injection, OS Command Injection, and Hardcoded Secrets vulnerabilities alongside their secure remediation strategies using parameterized queries, input validation, and environment isolation.',
    link: 'https://github.com/Daz-ctrl/CodeAlpha_Secure_Coding',
  },
]

export const certifications: Certification[] = [
  { name: 'OCI 2025 AI Foundations Associate', issuer: 'Oracle' },
  { name: 'Oracle Fusion AI Agent Studio Certified Foundations Associate (Rel 1)', issuer: 'Oracle' },
  { name: 'Introduction to Business Management: Winning Externally', issuer: 'IIT Bombay' },
  { name: 'Endpoint Security Foundation', issuer: 'Cisco' },
  { name: 'Networking Essentials', issuer: 'Cisco' },
  { name: 'Linux Unhatched Core Essentials', issuer: 'Cisco' },
  { name: 'Cyber Threat Management', issuer: 'Cisco' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco' },
  { name: 'AI Skills Fest Specialist', issuer: 'Microsoft' },
  { name: 'Anthropic AI Fluency Framework', issuer: 'Anthropic' },
  { name: 'Operating Systems Support', issuer: 'Cisco' },
  { name: 'IT Customer Support Basics', issuer: 'Cisco' },
  { name: 'IT Support Specialist', issuer: 'Cisco' },
  { name: 'Junior Cybersecurity Analyst', issuer: 'Cisco' },
]

export const skills: SkillCategory[] = [
  {
    category: 'AI & GenAI',
    items: [
      'Multi-Agent AI Systems',
      'Google GenAI SDK',
      'Prompt Engineering',
      'LLM Integration',
      'Pydantic Structured Outputs',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      'Oracle Cloud Infrastructure (OCI)',
      'Microsoft Azure',
      'Terraform (IaC)',
      'Checkov (SAST)',
    ],
  },
  {
    category: 'Security & Networking',
    items: [
      'DevSecOps',
      'Snort/Suricata IDS',
      'Scapy',
      'UFW',
      'Network Subnetting',
      'Cisco Packet Tracer',
    ],
  },
  {
    category: 'Systems & Automation',
    items: [
      'Linux Systems Administration',
      'Bash Scripting',
      'Python',
      'Git/GitHub',
      'Systemd',
    ],
  },
]