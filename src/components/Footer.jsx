import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">UNISHARE SRI LANKA</h2>
          <p className="footer-desc">
            The leading education providing network in Sri Lanka. We offer higher studies 
            for people in our country and overseas.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Our Courses</a></li>
            <li><a href="/results">Student Results</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li><Mail size={18} className="contact-icon"/> unisharesrilanka@gmail.com</li>
            <li><Phone size={18} className="contact-icon"/> 0766050632 / 0788490780</li>
            <li><MessageCircle size={18} className="contact-icon"/> WhatsApp: 0766050632</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UNISHARE SRI LANKA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
