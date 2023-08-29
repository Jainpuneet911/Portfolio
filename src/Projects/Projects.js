import React from 'react';
import './Projects.css';

import profilepic1 from "../flipgame.png";
import profilepic3 from "../todolist.png";
import profilepic2 from "../github.png";


const Projects = () => {
  return (
    <div className='projects'>
    <div className="projects-container">
      <div className="projects-heading">
        <p>Browse my recent</p>
        <h1>Projects</h1>
      </div>
      <div className="project-cards">
        <div className="project-card">
          <div className="project-image-card">
          <img className="flip-pic" src={profilepic1} alt="Your Name" />
          </div>
          <div className="project-details-card">
            <h2>Project One</h2>
            <div className="button-container">
              <button className='git-button'>
                <a href="https://github.com/Jainpuneet911/GameOfFlips.github.io" >GitHub</a>
              </button>
              <button className='demo-button'>
                <a href="https://jainpuneet911.github.io/GameOfFlips.github.io/" >Live Demo</a>
              </button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-card">
          <img className="flip-pic" src={profilepic3} alt="Your Name" />
          </div>
          <div className="project-details-card">
            <h2>Project Two</h2>
            <div className="button-container">
              <button className='git-button'>
                <a href="https://github.com/Jainpuneet911/TodoList">GitHub</a>
              </button>
              <button className='demo-button'>
                <a href="https://punutodo.netlify.app/">Live Demo</a>
              </button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-card">
          <img className="flip-pic" src={profilepic2} alt="Your Name" />
          </div>
          <div className="project-details-card">
            <h2>Project Three</h2>
            <div className="button-container">
              <button className='git-button'>
                <a href="https://github.com/Jainpuneet911/Github-Reseacrcher-">GitHub</a>
              </button>
              <button className='demo-button'>
                <a href="your-demo-link1" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
