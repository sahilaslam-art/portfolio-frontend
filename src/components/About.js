import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I’m Sahil Aslam, a passionate Frontend Developer focused on building responsive and interactive web experiences. I specialize in HTML, CSS, JavaScript, and React.js, and I love turning designs into reality.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
