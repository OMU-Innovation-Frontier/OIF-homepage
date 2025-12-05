import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Strengths from './components/Strengths';
import Activities from './components/Activities';
import Organization from './components/Organization';
import Projects from './components/Projects';
import Message from './components/Message';
import FAQ from './components/FAQ';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Strengths />
      <Activities />
      <Organization />
      <Projects />
      <Message />
      <FAQ />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
