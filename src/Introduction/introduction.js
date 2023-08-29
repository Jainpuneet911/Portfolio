import React from 'react';
import './introduction.css';
import profilepic from "../profile-pic.png";
import myresume from "../myresume.pdf";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="image">
        <img className="profile-pic" src={profilepic} alt="Your Name" />
      </div>
      <div className="text">
        <h1>Hello, I'm</h1>
        <h2>Puneet Jain</h2>
        <p>Front End Developer</p>
        <div className="buttons">
          <button className="cv-button"><a href={myresume} download>Download CV</a></button>
          <button className="contact-button">Contact Info</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
