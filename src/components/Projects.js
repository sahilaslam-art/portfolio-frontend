import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    { title: 'Portfolio Website', description: 'A modern portfolio using React.js' },
    { title: 'Weather App', description: 'Weather forecast using API' },
    { title: 'Todo App', description: 'Basic task manager using hooks' }
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="project-list">
        {projectList.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
