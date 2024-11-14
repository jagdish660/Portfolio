// import logo from './logo.svg';
import './App.css';

// src/App.js
import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
      </nav>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
