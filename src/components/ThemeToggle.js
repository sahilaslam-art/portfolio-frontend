import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
