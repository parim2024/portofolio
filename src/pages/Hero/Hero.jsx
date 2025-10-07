import React, { useState, useEffect } from "react";
//import meImage from './../../assets/me_image.jpeg';

// Animated Background Grid
// Animated Grid without background bubbles
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full opacity-10">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="cyan" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);


// Floating badges
const FloatingBadge = ({ text, delay = 0, position }) => (
  <div 
    className="absolute px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm text-cyan-400 font-medium animate-bounce"
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: '3s',
      ...position
    }}
  >
    {text}
  </div>
);

const Hero = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const fullCode = `const profile = {
  name: 'Paridhi Mittal',
  title: 'MERN Stack Developer | Turning Problems Into Code ,
  skills: [
    'C++' , 'Python' , 'React' , 'Redux' , 'Express',
    'SQL', 'MongoDB', 'JavaScript', 'Git' 'Node.js', 
    'TailwindCSS'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullCode.length) {
        setDisplayedCode(fullCode.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#0a0e27] text-white min-h-screen relative overflow-hidden">
      <AnimatedGrid />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm text-cyan-400">
              <span className="animate-pulse">●</span> Welcome to my universe
            </div>
            
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                Hello<span className="text-cyan-400">!</span>
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Paridhi</span>
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Mittal
              </h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl px-6 py-3 inline-block">
              <p className="text-lg sm:text-xl text-gray-300">
              Solving complex problems with DSA 💡 | Passionate about building scalable web applications 🚀 
              </p>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
               Crafting frameworks and coding the future 💻✨
            </p>

            <div className="flex flex-wrap gap-4">
             <a
          href="https://drive.google.com/file/d/1GhHuZuIGbbN7GphuNPuHp3WV_eCqwKml/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          View Resume
        </a>
            </div>
          </div>

          {/* Right Column - Code Terminal */}
          <div className="relative">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm text-gray-400 font-mono">developer.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-auto max-h-[600px]">
                <pre className="text-gray-300">
                  <code>
                    {displayedCode.split('\n').map((line, i) => {
                      const trimmed = line.trim();
                      let color = 'text-gray-300';
                      
                      if (trimmed.startsWith('const') || trimmed.startsWith('function') || trimmed.startsWith('return')) {
                        color = 'text-purple-400';
                      } else if (trimmed.includes(':') && !trimmed.includes('://')) {
                        const parts = line.split(':');
                        return (
                          <div key={i}>
                            <span className="text-yellow-400">{parts[0]}:</span>
                            <span className="text-cyan-400">{parts.slice(1).join(':')}</span>
                          </div>
                        );
                      } else if (trimmed.startsWith("'") || trimmed.includes("'")) {
                        color = 'text-green-400';
                      }
                      
                      return <div key={i} className={color}>{line || '\n'}</div>;
                    })}
                    <span className="animate-pulse text-cyan-400">▊</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
<div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
  <span className="text-gray-400 text-sm">About me</span>
  <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
    <div className="w-1 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
  </div>
</div>






{/*About me*/}
<section
  id="about-me"
  className="relative bg-[#0a0e27] text-white py-24 px-6 sm:px-10 mt-20"
>
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-60 items-center">

    {/* Left - Photo */}
   <div className="flex justify-center lg:justify-end relative">
  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 via-transparent to-transparent blur-3xl animate-pulse"></div>
  <img
    src="https://i.postimg.cc/MZr8CqsJ/Whats-App-Image-2025-10-07-at-11-57-49-removebg-preview-1.png"
    alt="Paridhi Mittal"
    className="w-72 h-72 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)] z-10"
  />
</div>


    {/* Right - About Text */}
 <div className="space-y-6 lg:text-left text-center">
  <h2 className="text-5xl font-extrabold text-cyan-400 tracking-tight">
    About Me
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed">
    Hi! I'm <span className="text-cyan-400 font-semibold">Paridhi Mittal</span>, 
    a passionate <span className="text-white font-medium">MERN Stack Developer</span> 
    and <span className="text-white font-medium">SDE aspirant</span> who loves transforming 
    ideas into interactive, high-performance web applications. I aim to build products 
    that are not just functional but also intuitive and user-centric.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed">
    Along with development, I have a strong foundation in 
    <span className="text-cyan-400 font-semibold"> Data Structures and Algorithms</span>, 
    which helps me write efficient, optimized, and scalable code. I enjoy solving 
    challenging problems, breaking them into smaller parts, and approaching each 
    with logical precision.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed">
    I thrive on learning new technologies, improving system design understanding, 
    and constantly refining my coding and analytical skills. For me, development 
    is not just about writing code — it’s about creating solutions that make an impact.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed italic">
    A logical thinker, a creative developer, and a learner who believes consistency 
    turns potential into mastery.
  </p>
</div>


  </div>
</section>


    </div>



  );
};

export default Hero;