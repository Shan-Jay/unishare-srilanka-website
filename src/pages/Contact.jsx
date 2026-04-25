import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="container py-8">
        
        <div className="contact-header text-center mb-12">
          <h1 className="text-gradient">Contact Us</h1>
          <p className="subtitle">We'd love to hear from you. Get in touch with UNISHARE SRI LANKA for any inquiries.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-cards">
            
            <div className="info-card glass">
              <div className="info-icon">
                <Phone size={28}/>
              </div>
              <h3>Call & WhatsApp</h3>
              <p>0766050632</p>
              <p>0788490780</p>
            </div>

            <div className="info-card glass">
              <div className="info-icon">
                <Mail size={28}/>
              </div>
              <h3>Email Us</h3>
              <p>unisharesrilanka@gmail.com</p>
              <p>Available 24/7 for support</p>
            </div>

            <div className="info-card glass">
              <div className="info-icon">
                <MapPin size={28}/>
              </div>
              <h3>Visit Us</h3>
              <p>UNISHARE SRI LANKA Headquarters</p>
              <p>Sri Lanka</p>
            </div>

          </div>

          <div className="contact-form-section glass">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="input-field" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="input-field" placeholder="Course Inquiry" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="input-field" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
