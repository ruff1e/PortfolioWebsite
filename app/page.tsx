"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const SKILLS = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++"],
  Frameworks: ["Next.js", "React", "Django", "Spring Boot"],
  "Databases & Tools": ["PostgreSQL", "MySQL", "Redis", "Prisma", "Docker"],
  "Cloud & DevOps": ["AWS", "CI/CD", "Linux/Unix", "Git/GitHub"],
};

const ACCENT = "#10b981";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-300 selection:bg-[#10b981]/30 selection:text-[#10b981]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#about" className="font-mono text-sm text-[#10b981] font-bold hover:opacity-80 transition">
            {"> emre.kadirhan"}
          </Link>
          <div className="flex gap-6">
            {["about", "projects", "skills", "contact"].map((item) => (
              <Link key={item} href={`#${item}`} className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* HERO SECTION */}
        <section id="about" className="scroll-mt-32 space-y-6">
          <p className="text-[#10b981] font-mono text-sm tracking-widest">{"> hello_world"}</p>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Emre <span className="text-[#10b981]">Kadirhan</span>
              </h1>
              <p className="text-xl font-mono text-gray-400">
                Computer Science Student<span className="animate-blink text-[#10b981]">_</span>
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                <Link href="/ResumeEmreKadirhan.pdf" target="_blank" className="bg-[#10b981] px-5 py-2.5 rounded text-sm font-bold text-black hover:opacity-90 transition shadow-lg shadow-[#10b981]/10 flex items-center gap-2">
                  <FileText size={18} /> Resume
                </Link>
                <div className="flex gap-5 text-gray-500">
                  <Link href="https://github.com/ruff1e" className="hover:text-[#10b981] transition"><Github size={22} /></Link>
                  <Link href="https://www.linkedin.com/in/emre-kadirhan-b68142228/" className="hover:text-[#10b981] transition"><Linkedin size={22} /></Link>
                  <Link href="mailto:kadirhanemreemre@gmail.com" className="hover:text-[#10b981] transition"><Mail size={22} /></Link>
                </div>
              </div>
            </div>

            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-[#10b981] blur-2xl opacity-10" />
              <Image src="/mefoto.png" alt="Emre" width={180} height={180} className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border border-white/10 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* INTRODUCTION & EXPERIENCE SECTION */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="text-[#10b981] font-mono text-sm tracking-widest">{"> about_me"}</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Who I Am</h2>
            <div className="max-w-2xl space-y-4 text-gray-400 leading-relaxed text-lg font-light">
              <p>
                I am currently a Junior at Arizona State University studying Computer Science. 
                My main focus is to learn by developing and self-hosting projects that solves real-world problems.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-[#10b981] font-mono text-sm tracking-widest">{"> cd experience"}</p>
            <h3 className="text-xl font-bold text-white mb-8">Work Experience</h3>
            <ExperienceItem
              company="TQueue Software"
              role="Software Engineer Intern"
              date="June 2024 – Aug 2024"
              location="Istanbul, Turkey"
              points={[
                "Optimized backend queries and refactored core service paths to improve scalability.",
                "Redesigned customer management module to a modular architecture, reducing tech debt.",
                "Contributed to code reviews, improving overall team delivery speed and code quality.",
              ]}
            />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32 space-y-10">
          <div className="space-y-2">
            <p className="text-[#10b981] font-mono text-sm tracking-widest">{"> ls projects/"}</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectItem
              title="SwingVision - AI Golf Analyzer"
              tags={["Next.js", "Python", "MediaPipe"]}
              github="https://github.com/ruff1e/Golf-Swing-Analysis"
              points={["Real-time AI pose skeletons.", "Redis-based async queue.", "PostgreSQL schema design."]}
            />
            <ProjectItem
              title="E-Commerce Auction"
              tags={["Django", "Stripe API", "SQLite"]}
              points={["Real-time bid validation.", "Secure payment processing.", "Category filtering."]}
            />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-32 space-y-10">
          <div className="space-y-2">
            <p className="text-[#10b981] font-mono text-sm tracking-widest">{"> cat skills.json"}</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest">{"// " + category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 text-gray-300 rounded text-sm font-mono hover:border-[#10b981]/40 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CNTACT SECTION */}
        <section id="contact" className="scroll-mt-32 text-center py-20 space-y-8 border-t border-white/5">
          <p className="text-[#10b981] font-mono text-sm tracking-widest">{"> send_message"}</p>
          <h2 className="text-5xl font-bold text-white tracking-tight">Let's Connect</h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed font-light">
            I'm always interested in new opportunities or just a good conversation about tech.
          </p>
          <Link href="mailto:kadirhanemreemre@gmail.com">
            <button className="bg-[#10b981] text-black px-10 py-4 rounded font-bold hover:scale-105 transition-all shadow-xl shadow-[#10b981]/20 flex items-center gap-3 mx-auto">
              <Mail size={20} /> Say Hello
            </button>
          </Link>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] border-t border-white/5">
        <div>{"> emre.kadirhan"}</div>
        <div>Built with Next.Js</div>
      </footer>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function ProjectItem({ title, tags, points, github }: any) {
  return (
    <div className="p-8 rounded-xl border border-white/5 bg-[#0d0d0d]/40 backdrop-blur-sm hover:border-[#10b981]/20 transition-all group flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-white group-hover:text-[#10b981] transition-colors">{title}</h3>
        {github && <Link href={github} target="_blank" className="text-gray-500 hover:text-white transition"><Github size={20} /></Link>}
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string) => (
          <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 text-[#10b981]/80 rounded">{tag}</span>
        ))}
      </div>
      <ul className="space-y-3 flex-1 text-sm text-gray-400 font-light">
        {points.map((point: string, i: number) => <li key={i}>{point}</li>)}
      </ul>
    </div>
  );
}

function ExperienceItem({ company, role, date, points, location }: any) {
  return (
    <div className="p-8 rounded-xl border border-white/5 bg-[#0d0d0d]/40 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <p className="text-[#10b981] font-mono text-sm mt-1">{role}</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{location}</p>
          <p className="text-xs text-gray-600 mt-1">{date}</p>
        </div>
      </div>
      <ul className="space-y-3 text-sm text-gray-400 leading-relaxed font-light">
        {points.map((point: string, i: number) => <li key={i}>{point}</li>)}
      </ul>
    </div>
  );
}