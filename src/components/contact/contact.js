import React from 'react';
import './contact.css';
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';


function Contact() {
  return (
    <div className="contact-section">
      {/* Logo */}
     

     
      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <span>+91 9447549524</span>
        </div>

        <div className="contact-card">
          <FaInstagram className="icon" />
          <h4>Instagram</h4>
          <a href="https://www.instagram.com/binu.antony.1422/" target="_blank" rel="noopener noreferrer">
            @binu.antony.1422
          </a>
        </div>

        <div className="contact-card">
          <FaFacebookF className="icon" />
          <h4>Facebook</h4>
          <a href="https://facebook.com/yourshop" target="_blank" rel="noopener noreferrer">
            facebook.com/yourshop
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h4>Visit Us</h4>
          <span>Kohinoor Glass and Plywood,<br/> Near Busstand, Kelakam, Kerala</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
