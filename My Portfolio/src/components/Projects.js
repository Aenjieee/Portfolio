// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

function Projects({ toggleAddProject }) {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: '/images/projects/project1.jpg',
      description: 'A fully responsive e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://example.com/project1',
      github: 'https://github.com/username/project1'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      image: '/images/projects/project2.jpg',
      description: 'A productivity app to manage daily tasks and schedules',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: 'https://example.com/project2',
      github: 'https://github.com/username/project2'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      image: '/images/projects/project3.jpg',
      description: 'A personal portfolio website showcasing my work and skills',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project3',
      github: 'https://github.com/username/project3'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      image: '/images/projects/project4.jpg',
      description: 'A weather application that displays current and forecasted weather data',
      technologies: ['React', 'OpenWeather API', 'CSS'],
      link: 'https://example.com/project4',
      github: 'https://github.com/username/project4'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'app',
      image: '/images/projects/project5.jpg',
      description: 'A mobile app to track workouts and fitness progress',
      technologies: ['React Native', 'GraphQL', 'Node.js'],
      link: 'https://example.com/project5',
      github: 'https://github.com/username/project5'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      category: 'web',
      image: '/images/projects/project6.jpg',
      description: 'A web application to find and save recipes based on ingredients',
      technologies: ['JavaScript', 'API Integration', 'Bootstrap'],
      link: 'https://example.com/project6',
      github: 'https://github.com/username/project6'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={filter === 'app' ? 'active' : ''} 
            onClick={() => setFilter('app')}
          >
            Mobile
          </button>
          <button 
            className="add-project-btn"
            onClick={toggleAddProject}
          >
            <i className="fas fa-plus"></i> Add Project
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;