import React from 'react';
import './certifications.css';

// Import certificate images
import hackmanthanCert from '../../public/certificate1.jpeg';
import techblitzCert from '../../public/certificate2.jpeg';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "HackManthan 2025 - Participation Certificate",
      organization: "EventEye & GeeksforGeeks",
      event: "24-hour Hackathon at Lovely Professional University",
      date: "2025",
      image: hackmanthanCert,
      description: "Successfully participated in HackManthan 2025, a 24-hour hackathon organized by EventEye, held at Lovely Professional University. Demonstrated enthusiasm, creativity, and contribution towards building innovative solutions during the event."
    },
    {
      id: 2,
      title: "Tech Blitz 2025 - Participation Certificate",
      organization: "Coding Ninjas LPU & Learner's Arc",
      event: "24-hour Hackathon on Web Development and AI",
      date: "September 19-20, 2025",
      image: techblitzCert,
      description: "Participated in Tech Blitz 2025, a 24-hour hackathon organized by Coding Ninjas LPU, showcasing skills and innovation in the fields of Web Development and Artificial Intelligence. The event featured expert-led sessions providing valuable insights, mentorship, and industry-driven knowledge."
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
            <span className="stat-number">2</span>
            <span className="stat-label">Hackathons</span>
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