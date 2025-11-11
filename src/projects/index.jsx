import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing skills, projects, and experience. Built with modern React.js and responsive design principles.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Font Awesome"],
      features: [
        "Responsive design",
        "Interactive animations",
        "Contact form",
        "Project showcase"
      ],
      status: "In Progress",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Library Management System",
      description: "Console-based application in C++ for managing library operations including book inventory, member management, and borrowing system.",
      technologies: ["C++", "File Handling", "OOP"],
      features: [
        "Book inventory management",
        "Member registration",
        "Issue and return system",
        "Search functionality"
      ],
      status: "Completed",
      category: "System Software"
    }
  ];

  const categories = ["All", "Web Development",  "System Software"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-description">
          Here are some of the projects I've worked on during my academic journey and personal learning.
        </p>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-category">
                <span className="category-badge">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note">
          <p>
            <i className="fas fa-info-circle"></i>
            These projects demonstrate my learning journey and practical application of various technologies. 
            I'm continuously working on new projects to enhance my skills and explore emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;