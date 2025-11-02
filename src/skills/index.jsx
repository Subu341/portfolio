import React from 'react';
import './skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'C', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'R language', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'MS Office', level: 90 }
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Leadership',
    'Analytical Thinking',
    'Time Management',
    'Adaptability',
    'Creative Thinking'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>Core Competencies</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Master of Computer Applications (MCA)</h4>
              <p className="institution">Lovely Professional University</p>
              <p className="duration">2025</p>
              <p className="grade">Pursuing</p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Science (B.Sc) - Statistics</h4>
              <p className="institution">Government Autonomous University, Rourkela</p>
              <p className="duration">2022 - 2025</p>
              <p className="grade">CGPA: 7.5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;