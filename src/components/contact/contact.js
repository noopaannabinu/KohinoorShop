import React from 'react';
import './contact.css';
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span>+91 9447549524</span>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <a href="https://www.instagram.com/binu.antony.1422/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="contact-item">
          <FaFacebookF className="icon" />
          <a href="https://facebook.com/yourshop" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>Kohinoor Glass and Plywood,Near Busstand, Kelakam, Kerala</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
