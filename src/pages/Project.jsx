/* eslint-disable no-unused-vars */ import React, { useRef, useEffect } from "react"; 
import { ReactLenis } from "lenis/react"; 
import { motion , useTransform, useScroll } from "framer-motion";
 import PropTypes from "prop-types";

// ----------------- Project Data -----------------
const projects = [
{
  title: "Lingo Connect – Real-Time Language Exchange Platform",
  description: `Lingo Connect is a full-stack MERN language exchange platform that enables users to learn and practice multiple languages through real-time chat and community interaction. 
It features secure authentication, WebSocket-based instant messaging, and intuitive UI built with React and Tailwind CSS. 
The backend, powered by Node.js, Express, and MongoDB, manages user sessions, chat rooms, and message persistence, ensuring seamless multilingual communication. 
Designed for scalability, the project emphasizes real-time data flow, modular architecture, and responsive design.`,
  link: "https://i.postimg.cc/xd5gNj7W/lingo-Connect-Home.png",  
  color: "#ed649e",
  githubLink: "https://github.com/parim2024/LingoConnect-",
  liveLink: "https://lingo-connect-mu.vercel.app/",
},
  {
    title: "MindSpace – Mental Health Wellness Platforme",
    description: `MindSpace is an AI-driven MERN stack application designed to promote emotional well-being through mood tracking, anonymous posts, and intelligent chatbot interaction. 
Built using React, Node.js, Express, and MongoDB, it allows users to share thoughts safely and receive automated, empathetic responses from an integrated Gemini API chatbot. 
The app includes JWT authentication, RESTful APIs, and secure CRUD operations, offering both privacy and personalization in user experience. 
Focused on usability and data security, MindSpace combines modern UI/UX with meaningful user engagement.`,
    link: "https://i.postimg.cc/MK1LKwWg/Screenshot-2025-10-07-at-11-46-59-AM.png",
    color: "#8f89ff",
    githubLink: "https://github.com/parim2024/chatbotMern",
    liveLink: "https://chatbot-mern-rho.vercel.app/",
  },
  {
    title: "Sorting Visualizer – Interactive Algorithm Visualization Tool",
      description: `A dynamic React and Tailwind CSS application that visually demonstrates how popular sorting algorithms work. 
Users can select algorithms such as Bubble Sort, Merge Sort, Quick Sort, and more, and watch the step-by-step process of array elements being sorted in real time. 
The app includes speed control, animation cancellation, and responsive design, making it an educational tool for understanding algorithmic concepts and improving problem-solving skills.`,
    link: "https://media.geeksforgeeks.org/wp-content/uploads/20210203193907/Screenshot20210203184533.jpg",
    color: "#ffffff",
    githubLink: "https://github.com/parim2024/sorting-visualizer",
    liveLink: "https://sorting-visualizer-r8pz-awfmb1g5h-paridhi-mittals-projects.vercel.app/",
  },
{
  title: "Personal Portfolio – Showcasing Projects & Skills",
  description: `A modern and responsive personal portfolio website built using React and Tailwind CSS to highlight my projects, skills, and experience as a MERN Stack Developer. 
It features smooth scrolling animations, interactive UI elements, and a visually appealing design created from scratch. 
The site is fully responsive, optimized for performance, and serves as a central hub to display my web development work, GitHub projects, and contact details.`,
    link: "https://i.postimg.cc/LXftBH04/Screenshot-2025-10-07-at-11-48-29-AM.png",
    color: "#ffffff",
    githubLink: "https://github.com/parim2024/portofolio",
    liveLink: "https://portofolio-gamma-beryl.vercel.app/",
  },

];


// ----------------- Projects Component (RAFCE) -----------------
const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="w-full bg-slate-950 text-white">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
};

export default Projects;

// ----------------- Card Component -----------------
const Card = ({ i, title, description, url, color, progress, range, targetScale, githubLink, liveLink }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] origin-top md:w-[85%] lg:w-[75%] xl:w-[65%]"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-zinc-900 shadow-xl md:flex-row">
          {/* Left Image */}
          <div className="relative h-[250px] w-full overflow-hidden md:h-[400px] md:w-[55%] lg:h-[450px]">
            <motion.img
              src={url}
              alt={title}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 mix-blend-overlay"
              style={{ backgroundColor: color }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md md:left-6 md:top-6 md:px-4 md:py-2 md:text-sm">
              Project {i + 1}
            </div>
          </div>

          {/* Right Text */}
          <div className="flex w-full flex-col justify-between p-6 md:w-[45%] md:p-8 lg:p-10">
            <div>
              <div className="mb-4 flex items-center gap-3 md:mb-6">
                <div className="h-2 w-2 rounded-full md:h-3 md:w-3" style={{ backgroundColor: color }} />
                <div className="h-[1px] w-12 bg-gray-600 md:w-20" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-white md:mb-4 md:text-2xl lg:text-3xl">{title}</h2>
              <p className="line-clamp-3 max-w-md text-sm leading-relaxed text-gray-400 md:line-clamp-none md:text-base">{description}</p>
            </div>

            <div className="mt-4 pt-4 md:mt-auto">
              <div className="mb-4 h-[1px] w-full bg-gray-800 md:mb-6" />
              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <GithubIcon color={color} />
                  <span className="text-xs font-medium md:text-sm" style={{ color }}>Code</span>
                </motion.a>
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <LiveIcon color={color} />
                  <span className="text-xs font-medium md:text-sm" style={{ color }}>Live</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ----------------- Icons -----------------
const GithubIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LiveIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

// ----------------- PropTypes -----------------
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};