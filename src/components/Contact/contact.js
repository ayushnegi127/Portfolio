import React, { useState } from 'react';
import './contact.css';
import location from "../../asset/location.png";
import mail from "../../asset/mail.png";
import mobile from "../../asset/mobile.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setSubmitStatus('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        } else {
          setSubmitStatus('Failed to send message.');
        }
      } catch (error) {
        setSubmitStatus('Error sending message.');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1>Leave ME Your Info</h1>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Your Full Name (Required)</label>
            <input
              className="input-box"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            
            <label>Your Email (Required)</label>
            <input
              className="input-box"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            
            <label>Subject</label>
            <input
              className="input-box"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            
            <label>Your Message</label>
            <textarea
              className="input-box"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            
            <button id='contact-form-button' type="submit">SEND MESSAGE</button>
            {submitStatus && <p className="status">{submitStatus}</p>}
          </form>
        </div>
      </div>
      <div className="contact-container">
        <h1 >Contact Information</h1>
        <div className="contact-info">
          <div className="info-block">
            <div className="info-item">
              <img className="info-icon" src={location} alt="location" />
              <div className="info-details">
                <p><span className="label">Country:</span> <span className="value">Bangladesh</span></p>
                <p><span className="label">City:</span> <span className="value">Dhaka</span></p>
                <p><span className="label">Street:</span> <span className="value">35 Vhatara, Badda</span></p>
              </div>
            </div>
          </div>
          <div className="info-block">
            <div className="info-item">
              <img className="info-icon" src={mail} alt="mail" />
              <div className="info-details">
                <p><span className="label">Email:</span> <span className="value">youremail@gmail.com</span></p>
                <p><span className="label">Skype:</span> <span className="value">@yourusername</span></p>
                <p><span className="label">Telegram:</span> <span className="value">@yourusername</span></p>
              </div>
            </div>
          </div>
          <div className="info-block">
            <div className="info-item">
              <img className="info-icon" src={mobile} alt="mobile" />
              <div className="info-details">
                <p><span className="label">Support services:</span> <span className="value">15369</span></p>
                <p><span className="label">Office:</span> <span className="value">+58 (021)356 587 235</span></p>
                <p><span className="label">Personal:</span> <span className="value">+58 (021)356 587 235</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
