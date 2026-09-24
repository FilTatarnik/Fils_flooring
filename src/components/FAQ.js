import React, { useState } from 'react';
import Icon from './Icons';
import { faqs, serviceAreas } from '../data/site';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section-tint" id="faq">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Questions</p>
          <h2>Good to know.</h2>
          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                  <h3>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      {f.q}
                      <Icon name="plus" size={20} className="faq-icon" />
                    </button>
                  </h3>
                  <div
                    className="faq-answer"
                    id={`faq-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <div><p>{f.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="area-card" id="areas">
          <div className="area-card-head">
            <Icon name="pin" size={22} />
            <h3>Areas we serve</h3>
          </div>
          <ul className="area-list">
            {serviceAreas.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className="muted small">…and surrounding northwest suburbs.</p>
        </aside>
      </div>
    </section>
  );
};

export default FAQ;
