import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('About');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Ganaendra Ravindra</h1> 
          <nav>
            <ul>
              <li className={activeSection === 'About' ? 'active' : ''}>
                <Link to="/" onClick={() => handleSetActive('About')}>About Me</Link>
              </li>
              <li className={activeSection === 'Portfolio' ? 'active' : ''}>
                <Link to="/portfolio" onClick={() => handleSetActive('Portfolio')}>Portfolio</Link>
              </li>
              <li className={activeSection === 'Contact' ? 'active' : ''}>
                <Link to="/contact" onClick={() => handleSetActive('Contact')}>Contact</Link>
              </li>
              <li className={activeSection === 'Resume' ? 'active' : ''}>
                <Link to="/resume" onClick={() => handleSetActive('Resume')}>Resume</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
