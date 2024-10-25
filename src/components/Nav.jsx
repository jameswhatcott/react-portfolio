import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Import your CSS file

export default function Nav() {
  return (
    <div className="nav-container">
      <header>
    <h1 class="google">James Whatcott</h1>
    <nav>
      
        
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Me
          </NavLink>
        
      
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
            Portfolio
          </NavLink>
        
        
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
            Resume
          </NavLink>
        
        
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        
      
    </nav>
    </header>
    </div>
  );
}
