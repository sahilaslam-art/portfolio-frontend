import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <div className="App">
      <Header />
      <About /> 
      <Projects />
      <Contact/>
      <Footer/>
      <ScrollToTop />


    </div>
  );
}

export default App;
