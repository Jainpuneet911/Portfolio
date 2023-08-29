// src/components/AboutMe.js

import React from 'react';
import './Aboutme.css';
import profilepic from "../profile-pic.png"; // Import your photo
import { FaCertificate , FaBook } from 'react-icons/fa'; // Import the certification icon

const AboutMe = () => {
  return (
    <div className="about-me" id='about-me'>
      <div className="center-content">
        <p>Get to know more</p>
      </div>
      <div className="about-me-content">
        <h1>About Me</h1>
        <div className="about-me-section">
          <div className="profile">
            <img src={profilepic} alt="Your Photo" />
          </div>
          <div className='about-me-cards'>
          <div className="cards">
            <div className="card">
              <FaBook />
              <h3>Education</h3>
              <p>B-tech in computer science engineering</p>
            </div>
            <div className="card">
              <FaCertificate />
              <h3>Certifications</h3>
              <p>Your certification details go here...</p>
            </div>
          </div>
      <div className="about-me-paragraph">
        <p>
        Hi, I'm Puneet Jain, a dynamic Computer Science Engineering student. My proficiency in programming, data structures, and problem-solving, combined with a passion for web development and designing . With a keen interest in the latest technologies and a  mindset, I'm poised to contribute effectively to your development team's success.
        </p>
      </div>
      </div>
    </div>
    </div>
      </div>
  );
};

export default AboutMe;
