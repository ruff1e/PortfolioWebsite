"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Hi, I'm Emre
          </h1>
          <p className="text-lg font-medium text-gray-200 mb-4">
            I'm a Computer Science Student living in Ohio.
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

        <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
          <Image 
            src="/og.png" 
            alt="Picture of me"
            width={200}
            height={200}
            className="rounded-2xl object-cover border-4 border-[#6700c2] shadow-xl"
          />  
        </div>
      </div>

      <hr className="border-gray-800 mb-10" />

      <div className="w-full">
        <div className="flex bg-[#111] p-1 rounded-xl mb-8 border border-gray-800">
          <button 
            onClick={() => setActiveTab("projects")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === "projects" ? "bg-gray-800 text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Projects
          </button>

          <button 
            onClick={() => setActiveTab("work")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === "work" ? "bg-gray-800 text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Work Experience
          </button>

          <button 
            onClick={() => setActiveTab("education")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === "education" ? "bg-gray-800 text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Education
          </button>
        </div>

        <div className="space-y-12 min-h-\[300px\]">
          {activeTab === "projects" && (
            <div className="animate-in fade-in duration-500">
              <ExperienceItem 
                company="Personal Portfolio"
                role="Next.js, Tailwind, TypeScript"
                date="2024"
                description={`● Created a modern portfolio using Next.js App Router
                ● Managed server-side and client-side components
                ● Designed a responsive UI with Tailwind CSS`}
                logoSrc="/og.png"
              />
            </div>
          )}

          {activeTab === "work" && (
            <div className="animate-in fade-in duration-500">
              <ExperienceItem 
                company="TQueue Software"
                role="Software Engineer Intern"
                date="June 2024 - August 2024"
                description={`● Participated in code reviews and provided constructive feedback to team members
                ● Optimized code for performance and scalability
                ● Developed new features to do tasks resulting in this efficiency metric
                ● Refactored customer management feature resulting in 20% less latency
                ● Refactored customer management feature to provide a more scalable solution`}
                logoSrc="/david.png"
              />
            </div>
          )}

          {activeTab === "education" && (
            <div className="animate-in fade-in duration-500 space-y-10">
              <div className="flex gap-4">
                <div className="relative w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg shrink-0 overflow-hidden">
                  <Image 
                    src="/asulogo.jpg" 
                    alt="ASU Logo"
                    fill 
                    className="p-1 object-contain" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Arizona State University</h3>
                  <p className="text-sm text-gray-400">Bachelor of Computer Science • 2025 - 2027</p>
                  <p className="text-sm text-gray-400">GPA: 3.86</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="relative w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg shrink-0 overflow-hidden">
                  <Image 
                    src="/utdlogo.png" 
                    alt="UTD Logo"
                    fill 
                    className="p-1 object-contain" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">University of Texas at Dallas</h3>
                  <p className="text-sm text-gray-400">Bachelor of Computer Science • 2022 - 2025</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface ExperienceProps {
  company: string;
  role: string;
  date: string;
  description: string;
  logoSrc: string;
}

function ExperienceItem({ company, role, date, description, logoSrc }: ExperienceProps) {
  return (
    <div className="flex gap-4 mb-10">
      <div className="relative w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg shrink-0 overflow-hidden">
        {logoSrc ? (
          <Image src={logoSrc} alt={company} fill className="p-2 object-contain" />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">{company}</h3>
        <p className="text-sm text-gray-400">{role} • {date}</p>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}