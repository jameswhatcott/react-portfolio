import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact">
      <div className="contact-header">
        <h2>Let's Work Together</h2>
        <p className="contact-subtitle">Ready to build something amazing? Get in touch for a free consultation.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Why Work With Me?</h3>
          <div className="benefits">
            <div className="benefit-item">
              <h4> Results-Driven</h4>
              <p>Focus on solutions that drive measurable business growth</p>
            </div>
            <div className="benefit-item">
              <h4>⚡ Fast Delivery</h4>
              <p>Quick turnaround times without compromising quality</p>
            </div>
            <div className="benefit-item">
              <h4>💬 Clear Communication</h4>
              <p>Regular updates and transparent project management</p>
            </div>
            <div className="benefit-item">
              <h4> Ongoing Support</h4>
              <p>Long-term partnership for maintenance and updates</p>
            </div>
            <div className="benefit-item">
              <h4>💰 Competitive Pricing</h4>
              <p>Direct developer rates without agency overhead</p>
            </div>
            <div className="benefit-item">
              <h4>🛠️ Full-Stack Expertise</h4>
              <p>End-to-end development from concept to deployment</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Start Your Project</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-field">
              <label htmlFor="company">Company/Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Custom Web Application</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="api">API Development</option>
                  <option value="optimization">Performance Optimization</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="employment">Employment Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                  <option value="employment">Employment Discussion</option>
                </select>
              </div>
            </div>
            
            <div className="form-field">
              <label htmlFor="timeline">Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-2-months">1-2 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            
            <div className="form-field">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}