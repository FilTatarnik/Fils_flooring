import React from 'react';
import Icon from './Icons';
import { about } from '../data/site';

const About = () => (
  <section className="section" id="about">
    <div className="container about-grid">
      <div className="about-media">
        <img className="about-img-main" src={about.image} alt="Hardwood floor being installed" loading="lazy" />
        <img className="about-img-secondary" src={about.secondaryImage} alt="Finished hardwood landing" loading="lazy" />
      </div>

      <div className="about-copy">
        <p className="eyebrow">About us</p>
        <h2>{about.title}</h2>
        {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}

        <ul className="check-list">
          {about.points.map((pt) => (
            <li key={pt}><Icon name="check" size={18} /> {pt}</li>
          ))}
        </ul>

        <dl className="stats">
          {about.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default About;
