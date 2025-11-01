import React from 'react';
import './about.css';

const About = ({ setCurrentPage }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm Subhalaxmi Choudhury, a passionate MCA graduate from CV Raman Global University 
              with a strong foundation in computer applications and software development. With a 
              CGPA of 8.31 in my Master's and 8.12 in my Bachelor's degree in Mathematics from 
              Ravenshaw University, I bring both technical expertise and analytical thinking to 
              every project.
            </p>
            
            <p className="about-description">
              My journey in technology began with a love for mathematics and problem-solving. 
              Through my academic career, I've developed proficiency in programming 
              languages including C, C++, and modern web technologies like 
              JavaScript, React, HTML, and CSS. I'm particularly interested in full-stack 
              development and data analysis.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="highlight-content">
                  <h4>Education Excellence</h4>
                  <p>MCA with 8.31 CGPA, B.Sc Mathematics with 8.12 CGPA</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="highlight-content">
                  <h4>Technical Skills</h4>
                  <p>Proficient in multiple programming languages and modern web technologies</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="highlight-content">
                  <h4>Data Analysis</h4>
                  <p>Strong analytical skills with experience in data visualization and insights</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years of Study</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Programming Languages</span>
              </div>
            </div>

            <div className="about-cta">
              <button onClick={() => setCurrentPage('contact')} className="btn btn-primary contact-button">Get In Touch</button>
              <a href="/cv.pdf" className="btn btn-primary contact-button" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-image">
              <div className="image-container">
                <img src="/formal-full.png" alt="Subhalaxmi Choudhury" className="about-img" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>Subhalaxmi Choudhury</h4>
                    <p>MCA Graduate & Aspiring Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-cards">
              <h3>Technical Expertise</h3>
              <div className="skills-grid-mini">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <span>HTML/CSS</span>
                  <div className="skill-level">90%</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <span>JavaScript</span>
                  <div className="skill-level">75%</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <span>React</span>
                  <div className="skill-level">70%</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <span>MySQL</span>
                  <div className="skill-level">80%</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <span>C/C++</span>
                  <div className="skill-level">85%</div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <span>Data Analysis</span>
                  <div className="skill-level">75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;