import React from 'react';
import './home.css';
import profileImg from '../../public/passportsize-formal.png';

const Home = ({ setCurrentPage }) => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="highlight">Subhalaxmi Choudhury</span>
            </h1>
            <h2 className="home-subtitle">
              MCA Student & Aspiring Full Stack Developer
            </h2>
            <p className="home-description">
              I'm a passionate MCA student with a strong foundation in computer applications and software development. 
              Enthusiastic about learning new technologies, building innovative solutions, and creating impactful digital experiences with modern web technologies.
            </p>
            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary view-my-work">
                View My Work
              </a>
              <a href="#contact" className="btn btn-primary get-in-touch">
                Get In Touch
              </a>
            </div>
            <div className="home-social">
              <a href="mailto:subhalaxmichoudhury174@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/subhalaxmi-choudhury-a1b7a7381" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/918594937084" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-placeholder">
              <img src={profileImg} alt="Subhalaxmi Choudhury" className="profile-img" />
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">C</div>
              <div className="floating-element element-2">C++</div>
              <div className="floating-element element-3">JavaScript</div>
              <div className="floating-element element-4">HTML</div>
              <div className="floating-element element-5">CSS</div>
              <div className="floating-element element-6">Data Analysis</div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Home;