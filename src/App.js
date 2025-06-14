import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/experience"

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-greyColor overflow-x-clip">
        <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16 ">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
