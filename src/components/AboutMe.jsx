import React from 'react';

export default function AboutMe() {
  return (
    <section id="about-us">
      <div className="hero-section">
        <h2>Full-Stack Developer & Software Consultant</h2>
        <p className="hero-subtitle">Building scalable solutions that drive business growth and technical innovation</p>
      </div>
      
      <div className="about-content">
        <div className="founder-section">
          <img id="founder-photo" src='/images/headshot.jpeg' alt="James Whatcott - Full-Stack Developer"/>                    
          <div className="founder-info">
            <h3>James Whatcott</h3>
            <p className="role-title">Full-Stack Developer & Software Consultant</p>
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies, 
              database design, and scalable application architecture. I specialize in creating 
              custom software solutions that solve real business problems.
            </p>
            <p>
              With experience at Blake Learning Solutions, I've built API integrations, 
              customized e-commerce platforms, and implemented systems that increased sales by 22%. 
              I bring both technical expertise and business acumen to every project.
            </p>
          </div>
        </div>
        
        <div className="dual-audience-section">
          <div className="audience-card">
            <h3>For Businesses & Clients</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <h4>🚀 Rapid Development</h4>
                <p>Quick turnaround times without compromising quality</p>
              </div>
              <div className="benefit-item">
                <h4>💰 Cost-Effective</h4>
                <p>No overhead costs - direct developer-to-client relationship</p>
              </div>
              <div className="benefit-item">
                <h4>💼 Business Focused</h4>
                <p>Solutions designed to drive measurable business results</p>
              </div>
              <div className="benefit-item">
                <h4>🔄 Ongoing Support</h4>
                <p>Long-term partnership for maintenance and updates</p>
              </div>
            </div>
          </div>
          
          <div className="audience-card">
            <h3>For Employers & Teams</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <h4>💻 Technical Excellence</h4>
                <p>Full-stack development with modern technologies</p>
              </div>
              <div className="benefit-item">
                <h4>🎯 Proven Results</h4>
                <p>Track record of delivering impactful solutions</p>
              </div>
              <div className="benefit-item">
                <h4>🧠 Adaptable Skills</h4>
                <p>Quick learner with diverse technology stack</p>
              </div>
              <div className="benefit-item">
                <h4>🤝 Team Player</h4>
                <p>Experience collaborating in development teams</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="services-overview">
          <h3>What I Do</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Custom Web Applications</h4>
              <p>Full-stack applications built with modern technologies</p>
            </div>
            <div className="service-card">
              <h4>E-commerce Solutions</h4>
              <p>WooCommerce customization and integration</p>
            </div>
            <div className="service-card">
              <h4>API Development</h4>
              <p>Robust backend systems and integrations</p>
            </div>
            <div className="service-card">
              <h4>Performance Optimization</h4>
              <p>Speed and efficiency improvements</p>
            </div>
          </div>
        </div>
        
        <div className="company-values">
          <h3>My Approach</h3>
          <p>
            Whether you're a business owner looking for a custom solution or a company seeking 
            a skilled developer, I bring the same commitment to quality, communication, and results. 
            I believe in building long-term relationships and creating solutions that grow with your needs.
          </p>
          <p>
            When I'm not coding, you'll find me singing, participating in theatrical productions, 
            or spending time with my family at our Whatcottage in Ontario, Canada. I'm a proud member 
            of The Church of Jesus Christ of Latter-day Saints and believe in building relationships 
            based on trust and integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
