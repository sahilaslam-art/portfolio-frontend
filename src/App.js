import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
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
