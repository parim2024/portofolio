import React, { useState } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      school: "JSS Academy of Technical Education, Noida",
      mascot: "🎓",
      year: "2022 - 2026",
      achievements: ["Current CGPA: 8.22", "Branch: Computer Science & Engineering"],
      skills: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
      description:
        "Pursuing a B.Tech in CSE with a focus on problem solving, software engineering, and full-stack web development using the MERN stack.",
    },
    {
      degree: "Senior Secondary (Class XII)",
      school: "Aadharshila The School, Chandpur",
      mascot: "📘",
      year: "2021 - 2022",
      achievements: ["Percentage: 90.2%", "Stream: Science (PCM)"],
      skills: ["Physics", "Chemistry", "Mathematics", "English"],
      description:
        "Built a strong academic foundation in core science and analytical reasoning, developing logical and mathematical thinking.",
    },
    {
      degree: "Secondary (Class X)",
      school: "Aadharshila The School, Chandpur",
      mascot: "📗",
      year: "2019 - 2020",
      achievements: ["Percentage: 94%"],
      skills: ["Mathematics", "English", "Science", "Social Studies"],
      description:
        "Excelled in academics and extracurricular activities, setting the base for a career in technology and innovation.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04081A] py-40">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[length:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent">
            Education
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            A journey of continuous learning, innovation, and growth — from strong fundamentals to building impactful projects.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative rounded-xl border p-8 backdrop-blur-md transition-all duration-500 ${
                hoveredIndex === index
                  ? "scale-[1.03] border-teal-400 bg-gray-900/70 shadow-lg shadow-teal-500/20"
                  : "border-blue-400/20 bg-gray-900/60"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                {/* Degree + School */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="flex items-center gap-2 text-gray-300">
                    <BookOpen className="h-5 w-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {edu.year}
                  </p>
                </div>

                {/* Description */}
                <p className="border-l-2 border-teal-500 pl-3 text-sm italic text-gray-300">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-400"
                      >
                        <Award className="h-4 w-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glowing Decorations */}
      <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default EducationSection;
