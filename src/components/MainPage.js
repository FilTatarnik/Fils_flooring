import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroBackground from '../assets/IMG3.jpg';
import familyImage from '../assets/IMG4.jpg';
import hardwoodImage from '../assets/IMG5.jpg';
import ctaImage from '../assets/IMG6.jpg';

const MainPage = () => {
  return (
    <div className="main-container">
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-content">
          <h1>Fils Flooring</h1>
          <p className="tagline">Elevate Every Step</p>
        </div>
        <ChevronDown size={48} color="white" className="scroll-indicator" />
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <h2>Quality Flooring, Lasting Beauty</h2>
          <p>
            Fils Flooring connects people to their spaces through high-quality flooring solutions
            that blend style and durability, helping every home and business stand out with lasting beauty.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-image">
            <img src={ctaImage} alt="Flooring sample showcasing style" />
          </div>
          <div className="cta-content">
            <h2>Step into Style</h2>
            <button className="btn-primary">Schedule Now</button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="container">
          <ul className="features-list">
            <li>Designed for Living</li>
            <li>Unmatched Comfort</li>
            <li>Exceptional Craftsmanship</li>
            <li>Built to Last</li>
          </ul>
        </div>
      </section>

      {/* FAMILY APPROVED SECTION */}
      <section className="family-section">
        <div className="container family-container">
          <div className="family-text">
            <h2>Whole Family Approved</h2>
            <p>
              A favorite for families and homeowners alike, Fils Flooring offers not just beautiful designs but durable solutions for every room.
              Crafted with premium materials, our floors stand up to daily wear and tear.
            </p>
          </div>
          <div className="family-image">
            <img src={familyImage} alt="Family enjoying a beautifully floored home" />
          </div>
        </div>
      </section>

      {/* HARDWOOD TRANSFORMATION SECTION */}
      <section className="hardwood-section">
        <div className="container hardwood-container">
          <div className="hardwood-image">
            <img src={hardwoodImage} alt="Premium hardwood floors" />
          </div>
          <div className="hardwood-text">
            <h2>Hardwood Transformation</h2>
            <p>
              Elevate your home with timeless elegance. Our premium hardwood collection offers the perfect blend of style and durability.
              Whether you’re after a modern finish or classic warmth, our hardwood floors transform any room with lasting quality.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="closing-section">
        <div className="container">
          <h2>
            Experience the epitome of elegance with Fils Flooring. Where artistry meets precision,
            our premium floors exude sophistication—transforming your home or business into a sanctuary of timeless luxury.
          </h2>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Fil's Flooring Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
