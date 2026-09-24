import React from 'react';
import Icon from './Icons';
import { services } from '../data/site';

const Services = ({ onSchedule }) => (
  <section className="section" id="services">
    <div className="container">
      <div className="section-head">
        <p className="eyebrow">What we install</p>
        <h2>Every floor, every room.</h2>
        <p className="lead">
          From a single bathroom to a full home or commercial space, we handle the
          material, the prep and the install — start to finish.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <article className="service-card" key={s.title}>
            <div className="service-icon"><Icon name={s.icon} size={28} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <button className="text-link" onClick={() => onSchedule(s.title)}>
              Get a quote <Icon name="arrow" size={16} />
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
