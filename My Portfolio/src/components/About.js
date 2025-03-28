import React, { useState, useRef } from 'react';
import './About.css';
import ResumeModal from './ResumeModal';

function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const toggleResumeModal = () => {
    setShowResumeModal(!showResumeModal);
  };
  
  const downloadResume = () => {
    // If user has uploaded a resume, download that
    if (resumeFile) {
      const url = URL.createObjectURL(resumeFile);
      const link = document.createElement('a');
      link.href = url;
      link.download = resumeFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      // Otherwise use the default resume
      const resumeUrl = '/resume.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'John_Doe_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  const handleResumeUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if the file is an image or PDF
      if (file.type.includes('image') || file.type.includes('pdf') || 
          file.type.includes('doc') || file.type.includes('docx')) {
        setResumeFile(file);
        alert(`Resume "${file.name}" uploaded successfully!`);
      } else {
        alert('Please upload a valid file (PDF, DOC, DOCX, JPG, PNG)');
      }
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/profile.jpg" alt="John Doe" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate web developer with a strong foundation in both front-end and back-end technologies.
              With over 5 years of experience in the industry, I specialize in creating responsive, user-friendly
              websites and applications that deliver exceptional user experiences.
            </p>
            <p>
              My journey in web development began during my college years, and since then, I've been constantly
              learning and adapting to new technologies and methodologies to stay at the forefront of the industry.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span>Name:</span> John Doe
              </div>
              <div className="info-item">
                <span>Email:</span> john.doe@example.com
              </div>
              <div className="info-item">
                <span>Age:</span> 28
              </div>
              <div className="info-item">
                <span>From:</span> New York, USA
              </div>
            </div>
            <div className="resume-buttons">
              <button onClick={downloadResume} className="btn download-btn">
                <i className="fas fa-download"></i> Download Resume
              </button>
              <button onClick={toggleResumeModal} className="btn view-btn">
                <i className="fas fa-eye"></i> View Resume
              </button>
              <button onClick={triggerFileInput} className="btn upload-btn">
                <i className="fas fa-upload"></i> Upload Resume
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleResumeUpload} 
                style={{ display: 'none' }} 
                accept=".pdf,.doc,.docx,.png,.jpg"
              />
            </div>
            {resumeFile && (
              <div className="resume-file-info">
                <p><i className="fas fa-file-alt"></i> {resumeFile.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {showResumeModal && <ResumeModal toggleModal={toggleResumeModal} resumeFile={resumeFile} />}
    </section>
  );
}

export default About; 