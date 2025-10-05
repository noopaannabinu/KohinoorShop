import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <div className="about-section" style={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>
      {/* About Text */}
      <h2>About Us</h2>
      <p>
        Kohinoor Glass & Plywood is dealing with products such as tiles, sanitary ware, tap fittings, hardware, locks, mirrors, and other building materials.
      </p>
      <p>
        We also supply Melwood WPC doors, Kattla, window frames, designer mirrors, teak doors, window membrane doors, UV doors, louvres, chimneys, burners, and many more.
      </p>
      <p>
        We have brands like Century, PVC, WPC, Oxywood, Plywood, Powerwood, Godrej, Butterfly, Saint-Gobain glass, Greenwood, Odiwood, Supreme—we are authorized dealers for these brands.
      </p>
      <p>
       We also undertake interior and exterior work, supply and fix WPC doors, windows, window frames and provide on-site service for our customers.
      </p>

      {/* Centered Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link 
          to="/aboutus" 
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default About;
