import React from "react";
import "./aboutus.css";

// If your images are in src/assets/images/
import missionImg from "../assets/images/mission.jpg";
import visionImg from "../assets/images/vision.jpg";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 style={{ marginTop: '100px', textAlign: 'center' }}>
  About <span>Us</span>
</h1>
        <p>
          Welcome to <strong>Kohinoor Shop</strong>, your trusted destination for 
          premium glass, WPC doors, and home interior solutions. We’ve been serving 
          our community with dedication and quality for last 25 years.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision">
        <div className="mission">
          <img src={team1} alt="Our Mission" />
          <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide top-quality materials that transform 
              houses into homes. We focus on affordability, durability, and 
              excellent service for every customer.
            </p>
          </div>
        </div>

        <div className="vision">
          <div>
            <h2>Our Vision</h2>
            <p>
              We envision becoming the most trusted brand in glass and WPC 
              solutions across the region, helping families and businesses 
              create spaces that inspire comfort and style.
            </p>
          </div>
          <img src={team2} alt="Our Vision" />
        </div>
      </section>

      {/* Posters Section */}
{/* Posters Section */}
<section 
  style={{ 
    padding: '40px 20px', 
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  }}
>
  
  {/* Poster 1 */}
  <div style={{ marginBottom: '40px' }}>
    <img 
      src={missionImg} 
      alt="Poster 1" 
      style={{ 
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  </div>

  {/* Poster 2 */}
  <div>
    <img 
      src={visionImg} 
      alt="Poster 2" 
      style={{ 
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  </div>
</section>


    </div>
  );
};

export default AboutUs;
