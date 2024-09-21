import React from 'react';

const Hero = () => {
  return (
    <section className="hero parallax-section">
      <div className="parallax-bg" style={{backgroundImage: "url('/IMG1.jpg')"}}></div>
      <div className="hero-content">
        <h1>Fil's Flooring Inc</h1>
        <p>Transforming spaces, one floor at a time</p>
      </div>
    </section>
  );
};

export default Hero;