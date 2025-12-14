import React, { useState } from 'react';

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/meoydqro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({ submitting: false, success: true, error: null });
        setFormData({ email: '', message: '' });
        setTimeout(onClose, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        submitting: false, 
        success: false, 
        error: error.message || 'Submission failed' 
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              disabled={submitStatus.submitting}
              className="btn btn-primary"
            >
              {submitStatus.submitting ? 'Sending...' : 'Submit'}
            </button>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              type="button"
            >
              Close
            </button>
          </div>

          {submitStatus.success && (
            <p className="submit-message success">Thanks for joining!</p>
          )}

          {submitStatus.error && (
            <p className="submit-message error">{submitStatus.error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;