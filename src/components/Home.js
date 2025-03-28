// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const textRef = useRef(null);
  
  useEffect(() => {
    const texts = ['Developer', 'Designer', 'Creator'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    const type = () => {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      
      if (textRef.current) {
        textRef.current.textContent = letter;
      }
      
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 150);
      }
    };
    
    type();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">John Doe</span></h1>
        <h2>I'm a <span ref={textRef} className="typed-text"></span></h2>
        <p>Passionate about creating beautiful and functional web experiences.</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;