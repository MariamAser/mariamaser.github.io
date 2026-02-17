// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    eyebrow: "Capstone • Full-stack",
    title: "PlayToCode — AI-Enhanced Coding Education Platform",
    desc:
      "PlayToCode is a Duolingo-inspired coding education platform designed to make programming structured, interactive, and fun!",
    tags: ["React", "TailwindCSS", "Django", "PostgreSQL", "OAuth", "OpenAI API", "GCP Deployment"],
    links: [
      // replace with real links or remove
      //{ label: "GitHub", href: "https://github.com/" },
      //{ label: "Demo", href: "https://example.com" },
    ],
    bullets: [
      "Architected and developed a full-stack coding education platform with role-based authentication for students and teachers.",
      "Designed a normalized PostgreSQL schema and managed production-ready database migrations.",
      "Integrated OpenAI APIs to generate lesson content and adaptive practice problems."
      ,"Implemented secure Google OAuth authentication and session management.",
      "Built RESTful APIs for lesson progression, scoring logic, and user tracking.",
      "Deployed the application to a production environment with custom domain configuration and DNS setup.", "Managed SSL certificate provisioning to ensure secure HTTPS communication.",
      "Applied secure configuration practices to protect API keys, environment variables, and user data.",
      "Coordinated Git workflows and backend integration across the development team.",
    ],
  },
  {
    eyebrow: "For Fun! • Frontend",
    title: "Mariam Aser – Personal Portfolio Website",
    desc:
      "This Website!",
    tags: ["Vite","TailwindCSS", "HTML", "React", "JavaScript", "Custom UI Components","Git"],
    links: [
      // replace with real links or remove
      { label: "GitHub", href: "https://github.com/MariamAser/mariamaser.github.io" },
      //{ label: "Demo", href: "https://example.com" },
    ],
    bullets: [
      "Designed and developed a responsive portfolio to showcase projects and leadership experience.",
      "Implemented custom UI interactions and smooth scrolling effects to enhance user experience.",
      "Optimized layout for performance, accessibility, and mobile responsiveness.",
    ],
  },
  {
    eyebrow: "",
    title: "Sloogle – Search Engine",
    desc:
      "Sloogle is a lightweight search engine built to explore indexing, crawling, and relevance ranking.",
    tags: ["Python", "Information Retrieval", "Web Crawling", "OAuth"],
    links: [],
    bullets: [
      "Built a web crawler to scrape and parse structured content from target websites.",
      "Implemented an inverted index data structure for efficient search retrieval.",
      "Developed relevance-ranking logic to prioritize search results.",
      "Integrated Google OAuth for secure user authentication.",
      "Designed backend database models to store user history and frequently visited links.",
      "Created a responsive UI inspired by commercial search platforms."
    ],
  },
  {
    eyebrow: "Full Stack",
    title: "1on1 – Smart Scheduling Platform",
    desc:
      "1on1 is a scheduling platform built to streamline one-on-one meeting coordination. This project emphasized backend logic correctness, data integrity, and user-centered design.",
    tags: ["Django", "REST APIs","React", "Database Design"],
    links: [],
    bullets: [
      "RESTful APIs for authentication and scheduling logic",
      "Calendar availability and conflict detection algorithm",
      "Structured database model for time-slot validation",
      "Clean, intuitive frontend experience",
    ],
  },
  {
    eyebrow: "",
    title: "Flexible Radio Transceiver – Embedded Subsystem",
    desc:
      "As part of a hardware design project, I developed the microcontroller subsystem for a flexible radio transceiver device.",
    tags: ["C Programming","Microcontrollers", "PCB Design", "Altium"],
    links: [],
    bullets: [
      "Wrote C-based firmware for data bus communication",
      "Designed and tested custom PCB circuitry using Altium",
      "Integrated oscillator and communication subsystems",
      "Conducted lab-based validation and debugging",
    ],
  },
  {
    eyebrow: "",
    title: "Rainwater Harvesting System",
    desc:
      "Led research and design of a residential rainwater harvesting system for a private client.",
    tags: ["Systems Design","Sustainability", "Client-Focused Engineering", "AutoCAD", "3D Printing"],
    links: [],
    bullets: [
      "Conducted feasibility analysis",
      "Designed system architecture",
      "Created 3D-printed physical model", 
      "Presented solution to stakeholders",
    ],
  },
];

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
    {children}
  </span>
);

const LinkBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10"
  >
    {children} <span className="ml-2">↗</span>
  </a>
);

export default function Projects() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="pt-6 sm:pt-10">
        

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          Projects
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          A few things I’ve built (full-stack, cloud, security work, etc)
        </p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#FF9FFC]/10 blur-3xl" />
              <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[#5227FF]/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-3 text-xs font-semibold text-white/55">
                {p.eyebrow}
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                {p.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {p.desc}
              </p>

              {p.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              )}

              {p.bullets?.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-white/35" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {p.links?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <LinkBtn key={l.href} href={l.href}>
                      {l.label}
                    </LinkBtn>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* optional: small footer note */}
      <div className="mt-10 text-sm text-white/50">
        Want details on any project? Reach out via the Contact page!
      </div>
    </div>
  );
}
