import React, { useState } from 'react';
import './AddProject.css';

function AddProject({ toggleAddProject }) {
  const [projectData, setProjectData] = useState({
    title: '',
    category: 'web',
    description: '',
    technologies: '',
    link: '',
    github: '',
    image: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value
    });
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProjectData({
        ...projectData,
        image: e.target.files[0]
      });
    }
  };
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!projectData.title.trim()) {
      tempErrors.title = "Title is required";
      isValid = false;
    }
    
    if (!projectData.description.trim()) {
      tempErrors.description = "Description is required";
      isValid = false;
    }
    
    if (!projectData.technologies.trim()) {
      tempErrors.technologies = "At least one technology is required";
      isValid = false;
    }
    
    if (!projectData.image) {
      tempErrors.image = "Project image is required";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // In a real application, you would send this data to your backend
      // For demonstration, we'll simulate a successful submission
      setTimeout(() => {
        alert('Project added successfully!');
        setIsSubmitting(false);
        toggleAddProject();
      }, 1500);
    }
  };
  
  return (
    <div className="add-project-overlay">
      <div className="add-project-modal">
        <div className="modal-header">
          <h2>Add New Project</h2>
          <button className="close-btn" onClick={toggleAddProject}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={projectData.title}
              onChange={handleChange}
              placeholder="Enter project title"
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={projectData.category}
              onChange={handleChange}
            >
              <option value="web">Web</option>
              <option value="app">Mobile App</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleChange}
              placeholder="Describe your project"
              rows="4"
            ></textarea>
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="technologies">Technologies</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={projectData.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB, etc. (comma separated)"
            />
            {errors.technologies && <span className="error">{errors.technologies}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="link">Live Demo URL</label>
            <input
              type="url"
              id="link"
              name="link"
              value={projectData.link}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="github">GitHub Repository</label>
            <input
              type="url"
              id="github"
              name="github"
              value={projectData.github}
              onChange={handleChange}
              placeholder="https://github.com/username/repo"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Project Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
            {errors.image && <span className="error">{errors.image}</span>}
            {projectData.image && (
              <div className="image-preview">
                <img src={URL.createObjectURL(projectData.image)} alt="Preview" />
              </div>
            )}
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={toggleAddProject}>Cancel</button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProject; 