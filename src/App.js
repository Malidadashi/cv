// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';
import Qualification from './Pages/Qualification.js';
import Portfolio from './Pages/Portfolio.js';
import Contact from './Pages/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
