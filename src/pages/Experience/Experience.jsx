
import React from "react";
import { Code2 } from "lucide-react";

const ExperienceSection = () => {
  const experience = {
    icon: Code2,
    title: "Virtual Software Development Intern",
    company: "Bluestock Fintech",
    period: "2025 - Present",
    description:
      "Currently interning as a Software Developer at Bluestock Fintech, contributing to real-world projects focused on stock market analytics and data-driven platforms.",
  };

  const Icon = experience.icon;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#04081A] to-[#060C24] overflow-hidden py-32 px-6">
      {/* Gradient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(60,60,100,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(60,60,100,0.15)_1px,transparent_1px)] bg-[size:50px_50px] opacity-70 [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 animate-[float_3s_ease-in-out_infinite] rounded-full bg-cyan-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="relative mb-16 text-center">
        <h2 className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">
          Experience
        </h2>
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
        <p className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl mx-auto">
          “Gaining hands-on exposure to real-world software development and modern web technologies.”
        </p>
      </div>

      {/* Centered Experience Card */}
      <div className="relative group w-full max-w-3xl">
        {/* Glowing Animated Border */}
        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 transition-all duration-700 group-hover:opacity-100 blur-sm" />

        {/* Card Body */}
        <div className="relative rounded-2xl border border-gray-800/60 bg-gray-900/90 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-blue-900/30">
          {/* Icon Section */}
          <div className="relative mb-8 flex justify-center">
            <div className="absolute -inset-6 animate-pulse rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 blur-xl transition-all duration-500 group-hover:opacity-60" />
            <Icon className="relative z-10 h-14 w-14 text-cyan-400 transition-transform duration-500 group-hover:rotate-12" />
          </div>

          {/* Details */}
          <div className="text-center space-y-4">
            <h3 className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
              {experience.title}
            </h3>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <span className="font-semibold text-blue-400 text-lg">
                {experience.company}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-mono">
                {experience.period}
              </span>
            </div>
            <p className="mt-4 border-l-4 border-blue-500/50 pl-6 text-gray-300 text-base leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Decorative Gradient Corners */}
          <div className="absolute top-4 right-4 h-10 w-10">
            <div className="absolute top-0 right-0 h-[2px] w-6 bg-cyan-500/50" />
            <div className="absolute top-0 right-0 h-6 w-[2px] bg-cyan-500/50" />
          </div>
          <div className="absolute bottom-4 left-4 h-10 w-10">
            <div className="absolute bottom-0 left-0 h-[2px] w-6 bg-purple-500/50" />
            <div className="absolute bottom-0 left-0 h-6 w-[2px] bg-purple-500/50" />
          </div>
        </div>
      </div>

      {/* Soft Background Glow */}
      <div className="absolute left-16 top-32 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-16 right-16 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl delay-700" />
    </div>
  );
};

export default ExperienceSection;
