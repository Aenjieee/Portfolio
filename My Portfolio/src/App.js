// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AddProject from './components/AddProject';
import './App.css';

function App() {
  const [showAddProject, setShowAddProject] = useState(false);
  
  const toggleAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects toggleAddProject={toggleAddProject} />
      {showAddProject && <AddProject toggleAddProject={toggleAddProject} />}
      <Contact />
    </div>
  );
}

export default App;