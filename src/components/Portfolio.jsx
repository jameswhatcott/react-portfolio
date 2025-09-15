import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <h2>Featured Projects</h2>
        <p className="portfolio-subtitle">Technical solutions that deliver business value</p>
      </div>
      
      <div className="projects-grid">
        <div id="app-0" className="project-card">
          <h3>FinFlow</h3>
          <p className="project-description">
            <strong>Description:</strong> Personal Finance Tracker designed for budgeting<br/>
            <strong>Technical Achievement:</strong> Built in Java Spring-Boot
          </p>
          <a href="https://github.com/jameswhatcott/finflow#" className="project-link">
            <img src='/images/finflow.png' alt="FinFlow"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">Java</span>
            <span className="tech-tag">ThymeLeaf</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">Maven</span>
          </div>
        </div>
        
        <div id="app-1" className="project-card">
          <h3>Branches - Genealogy Web Platform</h3>
          <p className="project-description">
            <strong>Description:</strong> New ways to build your family history!<br/>
            <strong>Technical Achievement:</strong> React app with MongoDB backend and graphQL
          </p>
          <a href="https://branches-gb9v.onrender.com/" className="project-link">
            <img src='/images/branches.png' alt="Branches Data Visualization"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">BalkanGraphJS</span>
            <span className="tech-tag">GraphQL</span>
          </div>
        </div>
        
        <div id="app-2" className="project-card">
          <h3>SD Coastal Customs</h3>
          <p className="project-description">
            <strong>Business Impact:</strong> E-Commerce Shop for SD Coastal Customs<br/>
            <strong>Technical Achievement:</strong> Built in Shopify with various plugins
          </p>
          <a href="https://sdcoastalcustoms.com" className="project-link">
            <img src='/images/sdcoastalcustoms.png' alt="SD Coastal Customs"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">Shopify</span>
          </div>
        </div>
        
        <div id="app-3" className="project-card">
          <h3>Angular Pokedex Application</h3>
          <p className="project-description">
            <strong>Business Impact:</strong> Interactive data visualization and user engagement<br/>
            <strong>Technical Achievement:</strong> Modern Angular application with API integration
          </p>
          <a href="https://pokedex-5mx0.onrender.com/" className="project-link">
            <img src='/images/pokedex.png' alt="Angular Pokedex"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">Angular</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">Responsive Design</span>
          </div>
        </div>
        
        <div id="app-4" className="project-card">
          <h3>Interactive Gaming Platform</h3>
          <p className="project-description">
            <strong>Business Impact:</strong> Engaging user experience with modern UI<br/>
            <strong>Technical Achievement:</strong> React-based interactive application
          </p>
          <a href="https://continue-4su3.onrender.com/" className="project-link">
            <img src='/images/games page.png' alt="Continue"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Interactive UI</span>
            <span className="tech-tag">State Management</span>
          </div>
        </div>
        
        <div id="app-5" className="project-card">
          <h3>What's My Sky? Weather App</h3>
          <p className="project-description">
            <strong>Business Impact:</strong> User-friendly weather information platform<br/>
            <strong>Technical Achievement:</strong> API integration with beautiful UI
          </p>
          <a href="https://jameswhatcott.github.io/constellation-weather-app/" className="project-link">
            <img src='/images/constellation-weather pic.jpeg' alt="Constellation Weather App"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">Weather API</span>
            <span className="tech-tag">Responsive Design</span>
            <span className="tech-tag">User Experience</span>
            <span className="tech-tag">Frontend</span>
          </div>
        </div>
        
        <div id="app-6" className="project-card">
          <h3>Weather Dashboard</h3>
          <p className="project-description">
            <strong>Business Impact:</strong> Clean, intuitive weather monitoring<br/>
            <strong>Technical Achievement:</strong> Modern frontend with API integration
          </p>
          <a href="https://jameswhatcott.github.io/weather-app/" className="project-link">
            <img src='/images/weather app pic.png' alt="Weather App"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">Frontend</span>
            <span className="tech-tag">API Integration</span>
            <span className="tech-tag">Clean UI</span>
            <span className="tech-tag">JavaScript</span>
          </div>
        </div>
        
        <div id="app-7" className="project-card">
          <h3>Task Management System</h3>
          <p className="project-description">
            <strong>Business Impact:</strong> Productivity tool for personal and team use<br/>
            <strong>Technical Achievement:</strong> Local storage with modern interface
          </p>
          <a href="https://jameswhatcott.github.io/task-manager/" className="project-link">
            <img src='/images/Task manager pic.png' alt="Task Manager"/>
          </a>
          <div className="tech-stack">
            <span className="tech-tag">Productivity</span>
            <span className="tech-tag">User Interface</span>
            <span className="tech-tag">Local Storage</span>
            <span className="tech-tag">JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
