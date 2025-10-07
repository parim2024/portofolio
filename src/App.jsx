import React, { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";


import Header from "./pages/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Education from "./pages/Education/Education.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Project from "./pages/Project.jsx";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOnePage, setIsOnePage] = useState(false);

  return (
    <>
      <Header />
      {isOnePage ? (
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Project />
          <Contact />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
};

export default App;
