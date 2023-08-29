// App.js
import React from 'react';
import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/introduction';
import AboutMe from './About me/Aboutme';
import Skill from './Skillsection/Skill';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Introduction />
        <AboutMe />
        <Skill id="skills" /> {/* Assign an ID for the Skills section */}
        <Projects id="projects" /> {/* Assign an ID for the Projects section */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
