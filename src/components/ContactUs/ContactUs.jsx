import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-section">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon phone-icon" />
          <h2>Call Us</h2>
          <p>+91 9553787313</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon mail-icon" />
          <h2>Email Us</h2>
          <p>foodiehub@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon location-icon" />
          <h2>Visit Us</h2>
          <p>123 Main Street, Hyderabad, Telangana</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="form-section">
        <h2 className="form-title">Get In Touch</h2>

        <form className="contact-form">
          <div className="input-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" className="full-width" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Footer Info */}
      <div className="contact-footer">
        <div className="footer-box">
          <FaFacebookF className="footer-icon" />
          <span>Follow Us</span>
        </div>

        <div className="footer-box">
          <FaMapMarkerAlt className="footer-icon red" />
          <span>Find Us</span>
        </div>

        <div className="footer-box">
          <FaClock className="footer-icon" />
          <span>Working Hours: Mon - Sat, 9:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;