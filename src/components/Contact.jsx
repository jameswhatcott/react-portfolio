import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      if (name === 'email' && !emailRegex.test(value)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === '') {
        newErrors[field] = 'This field is required';
      }
    });
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      emailjs.send('service_hfkcjy4', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
        .then((response) => {
          alert('Form submitted successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          alert('Failed to send the message, please try again.');
        });
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;