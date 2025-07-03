import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm <span>Sahil Aslam</span></h1>
        <p>A passionate Frontend Developer crafting beautiful web experiences.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/Sahil_Aslam_Resume.pdf" download className="btn-outline">Download Resume</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
