import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section id="home" className="min-h-screen flex items-center">
        <Home />
      </section>
      <section id="about" className="py-16 bg-white">
        <About />
      </section>
      
      <section id="projects" className="py-16 bg-gray-100">
        <Projects />
      </section>
      
   
      
      <Footer />
    </div>
  );
}

export default App;