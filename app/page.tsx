"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      {/* Header Section */}
      <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 mb-12">
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">
            Hi, I'm Emre
          </h1>
          <p className="text-lg font-medium text-gray-200 mb-4">
            Computer Science Student in Ohio
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I'm currently a junior at Arizona State University, learning full-stack 
            engineering by building and self-hosting projects on my home server.
          </p>
          
          <div className="flex items-center space-x-5">
            <Link href="/ResumeEmreKadirhan.pdf" target="_blank">
              <button className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-800 transition text-sm font-medium text-white">
                <FileText size={16} />
                Resume
              </button>
            </Link>

            <Link href="https://github.com/ruff1e" 
                target="_blank" 
                className="text-gray-400 hover:text-white transition"
                title="GitHub"
              >
                <Github size={24} />
            </Link>
  
            <Link href="https://www.linkedin.com/in/emre-kadirhan-b68142228/" 
                target="_blank" 
                className="text-gray-400 hover:text-white transition"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>

            <Link href="mailto:kadirhanemreemre@gmail.com" 
                className="text-gray-400 hover:text-white transition"
                title="Email Me"
              >
                <Mail size={24} />
              </Link>
          </div>
        </div>

        <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
          <Image 
            src="/og.png" 
            alt="Emre"
            width={160}
            height={160}
            className="rounded-2xl object-cover border-2 border-[#6700c2] shadow-2xl"
          />  
        </div>
      </section>

      <hr className="border-gray-800 mb-10" />

      {/* Navigation Tabs */}
      <div className="w-full">
        <div className="flex bg-[#111] p-1 rounded-xl mb-10 border border-gray-800">
          {["projects", "work", "education"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg capitalize transition ${
                activeTab === tab ? "bg-gray-800 text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab === "work" ? "Work Experience" : tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === "projects" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <ProjectItem 
                title="SwingVision - AI Golf Swing Analyzer"
                tags={["Next.js", "Python", "PostgreSQL", "Redis", "MediaPipe", "Prisma"]}
                github="https://github.com/ruff1e/Golf-Swing-Analysis"
                points={[
                  "Built a Python worker using OpenCV and MediaPipe to overlay real-time AI pose skeletons on golf swing videos.",
                  "Integrated Redis based async task queue to offload video processing, keeping web response times under 200ms.",
                  "Architected a PostgreSQL (Neon) schema to manage user accounts and professional coaching feedback.",
                  "Implemented role-based access control using Next.js and BetterAuth for user/admin experiences."
                ]}
              />
              <ProjectItem 
                title="E-Commerce Auction Platform"
                tags={["Python", "Django", "SQLite", "Stripe API"]}
                points={[
                  "Built a full-featured auction platform with real-time bid validation, category filtering, and watchlists.",
                  "Integrated Stripe API for secure payment processing on completed auction transactions."
                ]}
              />
              <ProjectItem 
                title="Student Management System"
                tags={["Java", "Spring Boot", "MySQL", "Postman"]}
                points={[
                  "Architected a full-stack CRUD application with Spring Boot to manage academic records and personal data.",
                  "Designed and tested 15+ RESTful API endpoints using Postman covering full request/response lifecycles.",
                  "Implemented multi-parameter search and dynamic sorting to reduce administrative retrieval time."
                ]}
              />
            </div>
          )}

          {activeTab === "work" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ExperienceItem 
                company="TQueue Software StartUp"
                location="Mugla, Turkiye"
                role="Software Engineer Intern"
                date="June 2024 - August 2024"
                points={[
                  "Optimized backend queries and refactored inefficient code paths, improving performance and scalability of core services",
                  "Refactored the customer management module to a more modular, service-oriented architecture, reducing technical debt and improving feature delivery speed",
                  "Participated in code reviews for a team of 3+ engineers, providing constructive feedback that improved code quality and reduced review cycle time"
                ]}
                logoSrc="/david.png" 
              />
            </div>
          )}

          {activeTab === "education" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
              <EducationItem 
                school="Arizona State University"
                degree="Bachelor of Computer Science"
                date="2025 - 2027"
                gpa="3.86"
                logo="/asulogo.jpg"
              />
              <EducationItem 
                school="University of Texas at Dallas"
                degree="Bachelor of Computer Science"
                date="2022 - 2025"
                logo="/utdlogo.png"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

/* --- Sub-Components --- */

function ProjectItem({ title, tags, points, github }: { title: string, tags: string[], points: string[], github?: string }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 bg-[#0d0d0d] hover:border-gray-700 transition-colors group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[#6700c2] transition-colors">{title}</h3>
        {github && (
          <Link href={github} target="_blank" className="text-gray-500 hover:text-white transition">
            <Github size={20} />
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-900 border border-gray-800 text-gray-400 rounded">
            {tag}
          </span>
        ))}
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-3">
            <span className="text-[#6700c2] font-bold">/</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ company, role, date, points, logoSrc, location }: any) {
  return (
    <div className="flex gap-4">
      <div className="relative w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg shrink-0 overflow-hidden">
        <Image src={logoSrc} alt={company} fill className="p-2 object-contain" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
          <div>
            <h3 className="font-bold text-white text-lg">{company}</h3>
            <p className="text-sm text-[#6700c2] font-medium italic">{role}</p>
          </div>
          <div className="text-left md:text-right mt-1 md:mt-0">
            <p className="text-xs font-bold text-gray-300 uppercase tracking-wide">{location}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {points.map((point: string, i: number) => (
            <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-3">
              <span className="text-gray-600">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EducationItem({ school, degree, date, gpa, logo }: any) {
  return (
    <div className="flex gap-4">
      <div className="relative w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg shrink-0 overflow-hidden">
        <Image src={logo} alt={school} fill className="p-1 object-contain" />
      </div>
      <div>
        <h3 className="font-bold text-white text-lg">{school}</h3>
        <p className="text-sm text-gray-400">{degree} • {date}</p>
        {gpa && <p className="text-sm text-[#6700c2] font-medium mt-1">GPA: {gpa}</p>}
      </div>
    </div>
  );
}