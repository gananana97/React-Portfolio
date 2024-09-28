import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header>
      <h1>Ganaendra Ravindra</h1>
      <nav>
        <ul>
          <li className={activeSection === 'About' ? 'active' : ''}>
            <Link to="/" onClick={() => setActiveSection('About')}>About Me</Link>
          </li>
          <li className={activeSection === 'Portfolio' ? 'active' : ''}>
            <Link to="/portfolio" onClick={() => setActiveSection('Portfolio')}>Portfolio</Link>
          </li>
          <li className={activeSection === 'Contact' ? 'active' : ''}>
            <Link to="/contact" onClick={() => setActiveSection('Contact')}>Contact</Link>
          </li>
          <li className={activeSection === 'Resume' ? 'active' : ''}>
            <Link to="/resume" onClick={() => setActiveSection('Resume')}>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
