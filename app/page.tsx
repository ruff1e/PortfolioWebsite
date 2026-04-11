// page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Activity } from "lucide-react";

const SKILLS = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
  Frameworks: [
    "FastAPI",
    "Django",
    "Spring Boot",
    "Spring",
    "Next.js",
    "React",
  ],
  "Databases & Tools": [
    "PostgreSQL",
    "SQLAlchemy",
    "MySQL",
    "Redis",
    "Celery",
    "Prisma",
    "Docker",
    "PyTest",
    "JUnit",
  ],
  "Cloud & DevOps": ["Linux/Unix", "Git/GitHub", "CI/CD"],
};

const TICKER_ITEMS = [
  "● OPEN TO FULL-TIME ROLES",
  "▲ Spring Boot · FastAPI · Next.js",
  "● Junior @ Arizona State University",
  "▲ Backend Engineering · Distributed Systems",
  "● Python · Java · TypeScript · C++",
  "▲ 4 PROJECTS ONLINE",
  "● Self-hosting · Open Source · Building",
];

const STATS = [
  { label: "Projects", value: "5+" },
  { label: "Languages", value: "5+" },
  { label: "Internships", value: "1" },
];

function PulseDot() {
  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4b1] opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00d4b1]" />
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen text-gray-300 selection:bg-[#00d4b1]/30 selection:text-[#00d4b1]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="#about"
            className="font-mono text-sm text-[#00d4b1] font-bold hover:opacity-80 transition"
          >
            {"> emre.kadirhan"}
          </Link>
          <div className="flex gap-6 items-center">
            {["about", "projects", "skills", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-36 pb-20 space-y-32">
        {/* HERO */}
        <section id="about" className="scroll-mt-32 space-y-8">
          <div className="flex items-center gap-3">
            <PulseDot />
            <p className="text-[#00d4b1] font-mono text-xs tracking-widest uppercase">
              Available · Open to work
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Emre <span className="text-[#00d4b1]">Kadirhan</span>
              </h1>
              <p className="text-xl font-mono text-gray-400">
                Computer Science Student
                <span className="animate-blink text-[#00d4b1]">_</span>
              </p>

              {/* STATS */}
              <div className="flex items-center justify-center md:justify-start gap-8 py-2 border-y border-white/[0.06]">
                {STATS.map(({ label, value }) => (
                  <div key={label} className="text-center md:text-left">
                    <div className="text-2xl font-bold text-white font-mono">
                      {value}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6">
                <Link
                  href="/ResumeEmreKadirhan.pdf"
                  target="_blank"
                  className="bg-[#00d4b1] px-5 py-2.5 rounded text-sm font-bold text-black hover:opacity-90 transition shadow-lg shadow-[#00d4b1]/10 flex items-center gap-2"
                >
                  <FileText size={18} /> Resume
                </Link>
                <div className="flex gap-5 text-gray-500">
                  <Link
                    href="https://github.com/ruff1e"
                    target="_blank"
                    className="hover:text-[#00d4b1] transition"
                  >
                    <Github size={22} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/emre-kadirhan-b68142228/"
                    target="_blank"
                    className="hover:text-[#00d4b1] transition"
                  >
                    <Linkedin size={22} />
                  </Link>
                  <Link
                    href="mailto:kadirhanemreemre@gmail.com"
                    className="hover:text-[#00d4b1] transition"
                  >
                    <Mail size={22} />
                  </Link>
                </div>
              </div>
            </div>

            {/* PROFILE CARD */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-[#00d4b1] blur-2xl opacity-10" />
              <div className="relative p-1 rounded-2xl border border-[#00d4b1]/20 bg-[#0d1525]/60 backdrop-blur-sm">
                <Image
                  src="/mefoto.png"
                  alt="Emre"
                  width={192}
                  height={192}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover"
                />
                <div className="px-3 py-2 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-gray-500">
                    @ruff1e
                  </span>
                  <span className="text-[9px] font-mono text-[#00d4b1]/80 bg-[#00d4b1]/10 px-2 py-0.5 rounded-full border border-[#00d4b1]/20 flex items-center gap-1.5">
                    <PulseDot /> ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & EXPERIENCE */}
        <section className="space-y-12">
          <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0d1525]/40 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 mb-4">
              <Activity size={13} className="text-[#00d4b1]" />
              <p className="text-[#00d4b1] font-mono text-xs tracking-widest uppercase">
                About
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              I am currently a Junior at Arizona State University studying
              Computer Science. My main focus is to learn backend development by
              building and self-hosting projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <p className="text-[#00d4b1] font-mono text-xs tracking-widest uppercase">
                {"> cd experience"}
              </p>
            </div>
            <h3 className="text-xl font-bold text-white">Work Experience</h3>
            <ExperienceItem
              company="TQueue Software"
              role="Software Engineer Intern"
              date="June 2024 – Aug 2024"
              points={[
                "Developed and maintained RESTful APIs using Spring Boot for a customer queue management system that served as the primary API layer for core product",
                "Refactored the customer management module into a more service-oriented architecture, reducing technical debt",
                "Wrote unit and integration tests using JUnit and Mockito, increasing test coverage on the customer service module from near zero to roughly 70%",
              ]}
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-32 space-y-10">
          <div className="space-y-2">
            <p className="text-[#00d4b1] font-mono text-xs tracking-widest uppercase">
              {"> ls projects/"}
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Featured Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ProjectItem
              title="Feature Flag A/B"
              tags={["Java/Spring Boot", "Redis", "PostgreSQL", "Docker"]}
              github="https://github.com/ruff1e/FeatureFlag"
              points={[
                "Flag evaluation engine supporting different targeting rules with priority-ordered evaluation",
                "Consistent hash-based variant assignment",
                "Redis caching layer keyed by flag and user ID with a 5-minute TTL",
                "JWT authentication via Spring Security filter chain",
              ]}
            />
            <ProjectItem
              title="Bot Battle Arena"
              tags={["Python/FastAPI", "Celery/Redis", "PostgreSQL", "Docker"]}
              github="https://github.com/ruff1e/BotArena"
              points={[
                "Real-time battle via WebSockets",
                "Celery/Redis based async queue",
                "PostgreSQL schema design",
                "Fully isolated dockerized environment",
              ]}
            />
            <ProjectItem
              title="SwingVision — AI Golf Analyzer"
              tags={["Next.js", "Python", "MediaPipe"]}
              github="https://github.com/ruff1e/Golf-Swing-Analysis"
              points={[
                "Real-time AI pose skeletons",
                "Redis-based async queue",
                "PostgreSQL schema design",
              ]}
            />
            <ProjectItem
              title="Rate Limiter Library"
              tags={["Python", "FastAPI", "Django", "Redis"]}
              github="https://github.com/ruff1e/RateLimiterLibrary"
              points={[
                "Rate limiting library for FastAPI and Django with three configurable algorithms",
                "Flexible API supporting both route-level decorators and global middleware",
              ]}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-32 space-y-10">
          <div className="space-y-2">
            <p className="text-[#00d4b1] font-mono text-xs tracking-widest uppercase">
              {"> cat skills.json"}
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Tech Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="p-5 rounded-xl border border-white/[0.06] bg-[#0d1525]/40 space-y-4 hover:border-[#00d4b1]/20 transition-colors"
              >
                <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                  <span className="text-[#00d4b1]">//</span> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#00d4b1]/5 border border-[#00d4b1]/10 text-gray-300 rounded text-xs font-mono hover:border-[#00d4b1]/40 hover:text-[#00d4b1] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-32 text-center py-20 space-y-8 border-t border-white/[0.06]"
        >
          <div className="flex items-center justify-center gap-2">
            <PulseDot />
            <p className="text-[#00d4b1] font-mono text-xs tracking-widest uppercase">
              Online · Responds within 24h
            </p>
          </div>
          <h2 className="text-5xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed font-light">
            I'm always interested in new opportunities or just a good
            conversation about tech.
          </p>
          <Link href="mailto:kadirhanemreemre@gmail.com">
            <button className="bg-[#00d4b1] text-black px-10 py-4 rounded font-bold hover:scale-105 transition-all shadow-xl shadow-[#00d4b1]/20 flex items-center gap-3 mx-auto">
              <Mail size={20} /> Say Hello
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function ProjectItem({
  title,
  tags,
  points,
  github,
}: {
  title: string;
  tags: string[];
  points: string[];
  github?: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0d1525]/40 backdrop-blur-sm hover:border-[#00d4b1]/25 transition-all group flex flex-col h-full">
      <div className="flex justify-between items-start mb-5">
        <h3 className="text-base font-bold text-white group-hover:text-[#00d4b1] transition-colors">
          {title}
        </h3>
        {github && (
          <Link
            href={github}
            target="_blank"
            className="text-gray-600 hover:text-[#00d4b1] transition shrink-0 ml-2"
          >
            <Github size={18} />
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono bg-[#00d4b1]/5 text-[#00d4b1]/70 rounded border border-[#00d4b1]/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="space-y-2.5 flex-1 text-sm text-gray-400 font-light">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[#00d4b1]/40 shrink-0 mt-0.5">▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({
  company,
  role,
  date,
  points,
  location,
}: {
  company: string;
  role: string;
  date: string;
  points: string[];
  location?: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0d1525]/40 backdrop-blur-sm hover:border-[#00d4b1]/25 transition-colors">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5 pb-5 border-b border-white/[0.06]">
        <div>
          <h3 className="text-lg font-bold text-white">{company}</h3>
          <p className="text-[#00d4b1] font-mono text-sm mt-1">{role}</p>
        </div>
        <div className="text-left md:text-right shrink-0">
          {location && (
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              {location}
            </p>
          )}
          <p className="text-xs text-gray-600 font-mono">{date}</p>
        </div>
      </div>
      <ul className="space-y-3 text-sm text-gray-400 leading-relaxed font-light">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[#00d4b1]/40 shrink-0 mt-0.5">▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}