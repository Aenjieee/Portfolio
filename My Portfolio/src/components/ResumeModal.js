import React, { useEffect, useState } from 'react';
import './ResumeModal.css';

function ResumeModal({ toggleModal, resumeFile }) {
  const [fileUrl, setFileUrl] = useState(null);
  
  useEffect(() => {
    // Create object URL when component mounts or resumeFile changes
    if (resumeFile) {
      const url = URL.createObjectURL(resumeFile);
      setFileUrl(url);
      
      // Clean up the URL when component unmounts
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [resumeFile]);
  
  // Function to render PDF or image preview if a file is uploaded
  const renderFilePreview = () => {
    if (!resumeFile || !fileUrl) return null;
    
    if (resumeFile.type.includes('pdf')) {
      return (
        <div className="pdf-preview">
          <iframe 
            src={fileUrl} 
            title="Resume PDF" 
            width="100%" 
            height="500px"
          ></iframe>
        </div>
      );
    } else if (resumeFile.type.includes('image')) {
      return (
        <div className="image-preview">
          <img src={fileUrl} alt="Resume" />
        </div>
      );
    } else {
      return (
        <div className="file-preview">
          <p>Preview not available for this file type.</p>
          <a href={fileUrl} download={resumeFile.name} className="download-link">
            Download {resumeFile.name}
          </a>
        </div>
      );
    }
  };

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal">
        <div className="resume-modal-header">
          <h2>My Resume</h2>
          <button className="close-btn" onClick={toggleModal}>×</button>
        </div>
        
        {resumeFile ? (
          <div className="resume-content uploaded-resume">
            <div className="uploaded-file-info">
              <h3>Uploaded Resume</h3>
              <p><strong>Filename:</strong> {resumeFile.name}</p>
              <p><strong>Type:</strong> {resumeFile.type}</p>
              <p><strong>Size:</strong> {Math.round(resumeFile.size / 1024)} KB</p>
            </div>
            {renderFilePreview()}
          </div>
        ) : (
          <div className="resume-content">
            <div className="resume-section">
              <h3>Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <p className="institution">University of Technology</p>
                <p className="period">2015 - 2019</p>
                <p>Graduated with honors. Specialized in web development and software engineering.</p>
              </div>
            </div>
            
            <div className="resume-section">
              <h3>Work Experience</h3>
              <div className="resume-item">
                <h4>Senior Front-end Developer</h4>
                <p className="institution">Tech Solutions Inc.</p>
                <p className="period">2021 - Present</p>
                <ul>
                  <li>Lead a team of 5 developers in building responsive web applications</li>
                  <li>Implemented modern React architecture with Redux for state management</li>
                  <li>Improved website performance by 40% through code optimization</li>
                  <li>Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                </ul>
              </div>
              
              <div className="resume-item">
                <h4>Web Developer</h4>
                <p className="institution">Digital Creations</p>
                <p className="period">2019 - 2021</p>
                <ul>
                  <li>Developed and maintained client websites using HTML, CSS, JavaScript</li>
                  <li>Built custom WordPress themes and plugins</li>
                  <li>Implemented responsive designs for mobile compatibility</li>
                  <li>Worked with APIs to integrate third-party services</li>
                </ul>
              </div>
            </div>
            
            <div className="resume-section">
              <h3>Skills</h3>
              <div className="skills-list">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Git</span>
                <span>Responsive Design</span>
                <span>UI/UX</span>
                <span>RESTful APIs</span>
              </div>
            </div>
            
            <div className="resume-section">
              <h3>Certifications</h3>
              <div className="resume-item">
                <h4>Full Stack Web Development</h4>
                <p className="institution">Coding Academy</p>
                <p className="period">2020</p>
              </div>
              <div className="resume-item">
                <h4>Advanced React Patterns</h4>
                <p className="institution">Frontend Masters</p>
                <p className="period">2021</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="resume-modal-footer">
          <button onClick={toggleModal} className="close-resume-btn">Close</button>
          {resumeFile && fileUrl ? (
            <a 
              href={fileUrl} 
              download={resumeFile.name} 
              className="download-btn-link"
            >
              <i className="fas fa-download"></i> Download
            </a>
          ) : (
            <button onClick={() => window.print()} className="print-btn">
              <i className="fas fa-print"></i> Print
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeModal; 