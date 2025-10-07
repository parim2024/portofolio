/* eslint-disable no-unused-vars */

import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";


import { Code2, Database, Cpu } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiExpress,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { TbBrandVscode, TbBrain } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2, BsFileEarmarkText, BsQuestionCircle } from "react-icons/bs";
import { SiClerk } from "react-icons/si";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20">
   {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[shimmer_2s_infinite]"></div>*/}
    <CardContent className="relative z-10 p-6">
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`rounded-xl bg-gray-800/50 p-3 transition-transform duration-300 group-hover:scale-110 ${color}`}
        >
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative flex items-center gap-2 border-gray-600 bg-gray-800/50 px-3 py-2 text-gray-100 transition-all duration-300 hover:scale-105 hover:bg-gray-700/80 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transition-transform duration-300 group-hover/badge:scale-110">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Programming Languages",
      color: "text-yellow-400",
      skills: [
        { name: "C++", icon: <BsFileEarmarkCode className="h-4 w-4 text-[#00599C]" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" /> },
        { name: "SQL", icon: <BsFileEarmarkCode className="h-4 w-4 text-[#00618A]" /> },
        { name: "MySQL", icon: <SiMysql className="h-4 w-4 text-[#4479A1]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="h-4 w-4 text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4 text-[#38B2AC]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="h-4 w-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="h-4 w-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="h-4 w-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="h-4 w-4 text-[#000000]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="h-4 w-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-4 w-4 text-[#47A248]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="h-4 w-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="h-4 w-4 text-[#007ACC]" /> },
        { name: "Redux", icon: <SiRedux className="h-4 w-4 text-[#764ABC]" /> },
        { name: "Firebase", icon: <SiFirebase className="h-4 w-4 text-[#FFCA28]" /> }, 
        { name: "Clerk", icon: <SiClerk className="h-4 w-4 text-[#2563EB]" /> },
        { name: "Vercel", icon: <SiVercel className="h-4 w-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="h-4 w-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Problem Solving & Decision Making",
      color: "text-purple-400",
      skills: [
        { name: "Data Structures & Algorithms", icon: <BsFileEarmarkCode className="h-4 w-4 text-[#00599C]" /> },
        { name: "Logical Thinking", icon: <TbBrain className="h-4 w-4 text-[#F59E0B]" /> },
        { name: "Project Planning", icon: <BsFileEarmarkText className="h-4 w-4 text-[#10B981]" /> },
        { name: "Decision Making", icon: <BsQuestionCircle className="h-4 w-4 text-[#6366F1]" /> },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#04081A] pt-24 text-white lg:pt-28">

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(100,100,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,100,255,0.1)_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <section className="container relative z-10 mx-auto px-4 py-11">
     {/* <div className="flex items-center justify-center">
          <IconCloudDemo />
        </div>*/}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
