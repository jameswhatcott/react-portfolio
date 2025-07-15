import React from 'react';

export default function Resume() {
  return (
    <section id="services">
      <div className="services-header">
        <h2>Services & Expertise</h2>
        <p className="services-subtitle">Comprehensive development solutions for businesses and teams</p>
      </div>
      
      <div className="services-container">
        <div className="service-category">
          <h3>Development Services</h3>
          <div className="service-items">
            <div className="service-item">
              <h4>Custom Web Applications</h4>
              <p>Full-stack web applications built with modern technologies</p>
              <ul>
                <li>React, Vue.js, and Angular frontends</li>
                <li>Node.js, Python, and Java backends</li>
                <li>Database design and optimization</li>
                <li>User authentication and authorization</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h4>API Development & Integration</h4>
              <p>Robust RESTful APIs and third-party integrations</p>
              <ul>
                <li>REST API design and development</li>
                <li>Third-party service integrations</li>
                <li>Payment gateway implementations</li>
                <li>Data migration and synchronization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="service-category">
          <h3>Business Solutions</h3>
          <div className="service-items">
            <div className="service-item">
              <h4>E-commerce Development</h4>
              <p>Complete online store solutions and customizations</p>
              <ul>
                <li>WooCommerce customization and themes</li>
                <li>Payment processing integration</li>
                <li>Inventory management systems</li>
                <li>Order processing automation</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h4>Database & Data Solutions</h4>
              <p>Custom database design and data management</p>
              <ul>
                <li>MongoDB and SQL database design</li>
                <li>Data migration and optimization</li>
                <li>Backup and recovery systems</li>
                <li>Performance monitoring and tuning</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="service-category">
          <h3>Technical Consulting</h3>
          <div className="service-items">
            <div className="service-item">
              <h4>Performance Optimization</h4>
              <p>Speed and efficiency improvements for existing applications</p>
              <ul>
                <li>Frontend performance optimization</li>
                <li>Database query optimization</li>
                <li>Caching implementation strategies</li>
                <li>CDN and infrastructure optimization</li>
              </ul>
            </div>
            
            <div className="service-item">
              <h4>Technical Architecture</h4>
              <p>System design and technical planning</p>
              <ul>
                <li>Scalable architecture design</li>
                <li>Technology stack recommendations</li>
                <li>Security implementation</li>
                <li>DevOps and deployment strategies</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h3>Ready to Build Something Amazing?</h3>
          <p>Whether you're a business looking for a custom solution or a company seeking a skilled developer, let's discuss how I can help achieve your goals.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button">Get Your Free Quote</a>
            <a href="/contact" className="cta-button secondary">View My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
