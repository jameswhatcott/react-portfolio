import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Nav() {
  return (
    <div className="nav-container">
      <header>
        <div className="logo-section">
          <div className="logo-container">
            <img src="/images/WWS 2.jpg" alt="Whatcott Web Solutions" className="logo-image" />
            <div className="logo-text">
              <h1 className="agency-logo">Whatcott Web Solutions</h1>
              <p className="tagline">Full-Stack Development & Custom Software Solutions</p>
            </div>
          </div>
        </div>
        <nav>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
            Work
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
