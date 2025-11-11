import React from 'react';
import './certifications.css';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "HackManthan 2025 - Participation Certificate",
      organization: "EventEye & GeeksforGeeks",
      event: "24-hour Hackathon at Lovely Professional University",
      date: "2025",
      image: "/certificate1.jpeg",
      description: "Successfully participated in HackManthan 2025, a 24-hour hackathon organized by EventEye, held at Lovely Professional University. Demonstrated enthusiasm, creativity, and contribution towards building innovative solutions during the event."
    },
    {
      id: 2,
      title: "Tech Blitz 2025 - Participation Certificate",
      organization: "Coding Ninjas LPU & Learner's Arc",
      event: "24-hour Hackathon on Web Development and AI",
      date: "September 19-20, 2025",
      image: "/certificate2.jpeg",
      description: "Participated in Tech Blitz 2025, a 24-hour hackathon organized by Coding Ninjas LPU, showcasing skills and innovation in the fields of Web Development and Artificial Intelligence. The event featured expert-led sessions providing valuable insights, mentorship, and industry-driven knowledge."
    },
    {
      id: 3,
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      organization: "Oracle University",
      event: "Oracle Certified Professional Certificate",
      date: "October 31, 2025",
      image: "/certificate3.png",
      description: "Oracle Certified Professional in Cloud Infrastructure 2025 Generative AI. This certificate recognizes proficiency in Oracle's cloud infrastructure and generative AI technologies. Valid until October 31, 2027."
    },
    {
      id: 4,
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      organization: "Oracle University",
      event: "Oracle Certified Foundations Associate Certificate",
      date: "October 31, 2025",
      image: "/certificate4.png",
      description: "Oracle Certified Foundations Associate in Cloud Infrastructure 2025. This certificate validates foundational knowledge of Oracle Cloud Infrastructure services and concepts. Valid until October 31, 2027."
    }
  ];

  return (
    <div className="certifications-container">
      <div className="certifications-content">
        <h2 className="certifications-title">My Certifications</h2>
        <p className="certifications-subtitle">
          Professional certificates and achievements in technology and innovation
        </p>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                  loading="lazy"
                />
                <div className="certificate-overlay">
                  <button className="view-certificate-btn">
                    View Certificate
                  </button>
                </div>
              </div>
              
              <div className="certificate-info">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-organization">{cert.organization}</p>
                <p className="certificate-event">{cert.event}</p>
                <p className="certificate-date">{cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-stats">
          <div className="stat-item">
            <span className="stat-number">{certificates.length}</span>
            <span className="stat-label">Certificates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Total Achievements</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">48+</span>
            <span className="stat-label">Hours Coded</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;