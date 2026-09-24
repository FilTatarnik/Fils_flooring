import React from 'react';
import Icon from './Icons';
import { business } from '../data/site';

// Sticky call / schedule bar shown only on small screens.
const MobileCTA = ({ onSchedule }) => (
  <div className="mobile-cta" role="region" aria-label="Quick contact">
    <a href={business.phoneHref} className="mobile-cta-call">
      <Icon name="phone" size={20} /> Call
    </a>
    <button onClick={onSchedule} className="mobile-cta-schedule">
      <Icon name="calendar" size={20} /> Free Estimate
    </button>
  </div>
);

export default MobileCTA;
