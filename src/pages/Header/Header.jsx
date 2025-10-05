/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Track active link based on current path
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });

  // Track mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track window width for responsive design
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation Links
  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="w-full md:fixed md:left-1/2 md:top-4 md:w-auto md:-translate-x-1/2 md:transform">
        <div className="animate-[gradient-x_3s_linear_infinite] bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-[length:200%_200%] p-[2px] md:rounded-full">
          <nav className="bg-gray-900/90 px-4 py-2.5 backdrop-blur-md md:rounded-full md:px-6">

            {/* Mobile Header */}
            <div className="flex items-center justify-between px-2 md:hidden">
              <Link to="/" className="font-bold text-white">Portfolio</Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:gap-1 md:py-0 lg:gap-2">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 md:rounded-full md:py-1.5 ${
                      activeLink === id
                        ? "bg-white/15 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`text-base transition-transform ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span>{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
