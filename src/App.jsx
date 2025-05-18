"use client";

import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
