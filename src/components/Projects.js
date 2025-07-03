import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Feedback Form</h3>
          <p>A simple React-based feedback form with input validation and list display.</p>
        </div>
        <div className="project-card">
          <h3>Landing Page</h3>
          <p>HTML/CSS-based responsive landing page with navbar and smooth scroll.</p>
        </div>
        <div className="project-card">
          <h3>To-Do App</h3>
          <p>React.js To-Do app with add, delete, and task completion feature.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
