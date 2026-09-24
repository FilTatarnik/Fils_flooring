import React from 'react';
import Icon from './Icons';
import { business, hero } from '../data/site';

const Hero = ({ onSchedule }) => (
  <section className="hero" id="top">
    <img className="hero-bg" src={hero.image} alt="" aria-hidden="true" />
    <div className="hero-overlay" />
    <div className="container hero-inner">
      <p className="eyebrow eyebrow-light">{hero.eyebrow}</p>
      <h1 className="hero-title">{hero.title}</h1>
      <p className="hero-subtitle">{hero.subtitle}</p>
      <div className="hero-actions">
        <button className="btn btn-accent btn-lg" onClick={onSchedule}>
          <Icon name="calendar" size={20} /> Schedule a Free Estimate
        </button>
        <a className="btn btn-ghost btn-lg" href={business.phoneHref}>
          <Icon name="phone" size={20} /> {business.phone}
        </a>
      </div>
      <ul className="hero-highlights">
        {hero.highlights.map((h) => (
          <li key={h}><Icon name="check" size={18} /> {h}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
