import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../DynamicMainPage.css';
import { Link } from 'react-scroll';
import IMG1 from '../assets/IMG1.jpg';
import IMG2 from '../assets/IMG2.jpg';
import IMG3 from '../assets/IMG3.jpg';
import IMG4 from '../assets/IMG4.jpg';
import IMG5 from '../assets/IMG5.jpg';
import IMG6 from '../assets/IMG6.jpg';
import IMG7 from '../assets/IMG7.jpg';
import IMG8 from '../assets/IMG8.jpg';
import IMG9 from '../assets/IMG9.jpg';




const DynamicMainPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-container">
      <section className="hero-section">
        <div 
          className="hero-background" 
          style={{ 
            backgroundImage: `url(${IMG3})`,
            transform: `translateY(${scrollY * 0.25}px)` 
          }}
        />
        <div className="hero-content">
          <h1 className="hero-title">Fils Flooring</h1>
          <p className="hero-subtitle">Where Every Step is an Experience</p>
          <button className="cta-button">Transform Your Space</button>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={48} color="white" />
        </div>
      </section>

      <section className="collections-section">
        <h2 className="section-title">Our Signature Collections</h2>
        <div className="collections-grid">
          {['Timeless Hardwood', 'Luxe Vinyl', 'Plush Carpet'].map((collection) => (
            <div key={collection} className="collection-card">
              <img src={IMG3} alt={collection} className="collection-image" />
              <div className="collection-content">
                <h3 className="collection-title">{collection}</h3>
                <p>Experience the beauty and durability of our {collection.toLowerCase()} collection.</p>
                <button className="cta-button">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Fils Flooring?</h2>
        <div className="features-grid">
          {[
            { title: 'Unmatched Quality', icon: '🏆' },
            { title: 'Expert Installation', icon: '🔧' },
            { title: 'Sustainable Materials', icon: '🌿' },
          ].map((item) => (
            <div key={item.title} className="feature-item">
              <div className="feature-icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p>We go above and beyond to ensure your satisfaction.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div 
          className="cta-background" 
          style={{ 
            backgroundImage: `url(${IMG1})`,
            transform: `translateY(${scrollY * 0.3}px)` 
          }}
        />
        <div className="cta-content" >
          <h2 className="section-title">Transform Your Space Today</h2>
          <p>Experience the Fils Flooring difference. Our expert team is ready to bring your vision to life.</p>
          <button className="cta-button">Get a Free Consultation</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fils Flooring</h3>
            <p>Elevating spaces with premium flooring solutions since 2011.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <p>Phone: (630) 433-6299</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Fil's Flooring Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DynamicMainPage;