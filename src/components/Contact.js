import React, { useState } from 'react';
import ContactFormModal from './ContactFormModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="contact parallax-section">
      <div className="parallax-bg" style={{backgroundImage: "url('/assets/IMG7.jpg')"}}></div>
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>Ready to transform your space? Contact us today for a free consultation.</p>
        <button className="contact-button" onClick={() => setIsModalOpen(true)}>Contact Us</button>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;