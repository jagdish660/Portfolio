
import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from './components/Projects';
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
// import ContactWA from "./components/ContactWA";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div class="nav"><a href="#aboutme">About Me</a></div>
        <div class="nav"><a href="#project">Projects</a></div>
        <div class="nav"><a href="#skills">Skills</a></div>
        <div class="nav"><a href="#contact">Contact Me</a></div>
      </nav>

      <section id="aboutme">
        <AboutMe />
        <About />
      </section>

      <section id="project">
        <Projects />
      </section>
      

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <ContactMe />
        {/* <ContactWA /> */}
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
