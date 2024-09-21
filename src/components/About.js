import React from 'react';

const About = () => {
  return (
    <section className="about parallax-section">
      <div className="parallax-bg" style={{backgroundImage: "url('/IMG2.jpg')"}}></div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Fil's Flooring Inc has been serving the community for over 20 years. We specialize in all types of flooring installations, from hardwood to tile, carpet to vinyl.</p>
      </div>
    </section>
  );
};

export default About;