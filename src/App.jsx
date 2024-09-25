import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


// Pass users array to the List component as a prop
export default function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
          
        </Routes>
    </div>
    </Router>
  );
}
