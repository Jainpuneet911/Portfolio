import React from 'react';
import './Skill.css'; 
import { FaJava, FaReact, FaJs, FaDatabase, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';

const skills = [
  { name: "Java", icon: <FaJava />, percentage: 80 },
  { name: "ReactJs", icon: <FaReact />, percentage: 80 },
  { name: "JavaScript", icon: <FaJs />, percentage: 80 },
  { name: "HTML", icon: <FaHtml5 />, percentage: 90 },
  { name: "CSS", icon: <FaCss3 />, percentage: 90 },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 60 },
  { name: "Database", icon: <FaDatabase />, percentage: 70 },
];

const Skill = () => {
  return (
    <>
      <div className="skill">
        <div className="center-content">
          <p>Explore my Expertises</p>
          <h1>My Skills</h1>
        </div>
      
        <div className="content-container">
          <div className="text-left">
            <div className="text-left-heading">
              <h2>My Technical skills and Prowesses</h2>
            </div>
            <div className="description">
              <p>
                These are my skills and the percentage of experience I have using these skills.
              </p>
            </div>
          </div>
      
          <div className="skills-container">
            <div className="skill-icons">
              {skills.map((skill, index) => (
                <div className="skill-icon" key={index}>
                  {skill.icon}
                  <p>{skill.name}</p>
                  <div className="percentage-bar">
                    <div className="filler" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
