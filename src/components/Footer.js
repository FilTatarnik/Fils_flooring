import React from 'react';
import Icon from './Icons';
import { business, nav, services } from '../data/site';

const Footer = ({ onSchedule }) => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <a href="#top" className="logo logo-light">
          <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="logo-text">Fil’s <em>Flooring</em></span>
        </a>
        <p>
          Professional flooring installation for homes and businesses across Chicago’s
          northwest suburbs.
        </p>
        <button className="btn btn-accent" onClick={onSchedule}>
          <Icon name="calendar" size={18} /> Free Estimate
        </button>
      </div>

      <div>
        <h4>Explore</h4>
        <ul>
          {nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
          <li><a href="#schedule">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4>Services</h4>
        <ul>
          {services.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>
            <a href={business.phoneHref} className="footer-phone">
              <Icon name="phone" size={16} /> {business.phone}
            </a>
          </li>
          <li className="footer-muted">Streamwood / Elgin, IL</li>
        </ul>
      </div>
    </div>

    <div className="container footer-bottom">
      <p>© {new Date().getFullYear()} {business.legalName} All rights reserved.</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
