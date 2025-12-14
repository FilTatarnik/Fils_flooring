import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBackground from '../assets/IMG3.jpg';
import familyImage from '../assets/IMG4.jpg';
import hardwoodImage from '../assets/IMG5.jpg';
import ctaImage from '../assets/IMG6.jpg';
import ContactFormModal from './ContactFormModal';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-image">
            <img src={ctaImage} alt="Flooring sample showcasing style" />
          </div>
        </div>
      </section>

            {/* Schedule now Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <button className="btn-primary" onClick={() => {
              console.log("Button clicked, attempting to open modal");
              openModal();
            }}>Schedule Now</button>
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
              Elevate your home with timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="closing-section">
        <div className="container">
          <h2>
            Fils Flooring. Where artistry meets precision,
            transforming your home or business into a sanctuary of timeless luxury.
          </h2>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Fil's Flooring Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* CONTACT FORM MODAL */}
      {isModalOpen && (
        <ContactFormModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default MainPage;