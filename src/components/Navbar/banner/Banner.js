import React, { useState, useEffect } from 'react';
import './Banner.css';
import bg1 from '../../../assets/images/bg1.jpg';
import bg2 from '../../../assets/images/bg2.jpg';
import bg3 from '../../../assets/images/bg3.jpg';

const images = [bg1, bg2, bg3];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="banner" className="banner-image" />

      <div className="content">
        <h1 className="description">
          {/* Optional heading or tagline */}
        </h1>
      </div>

      <button className="prev" onClick={prevSlide}>&lt;</button>
      <button className="next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Banner;
