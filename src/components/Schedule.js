import React from 'react';
import Icon from './Icons';
import ScheduleForm from './ScheduleForm';
import { business } from '../data/site';

const Schedule = () => (
  <section className="section schedule-section" id="schedule">
    <div className="container schedule-grid">
      <div className="schedule-copy">
        <p className="eyebrow eyebrow-light">Free estimate</p>
        <h2>Let’s talk about your floors.</h2>
        <p className="lead">
          Pick a day that works for you and we’ll come out to measure, answer your questions
          and give you a clear, written quote — free and with no obligation.
        </p>

        <ul className="contact-list">
          <li>
            <span className="contact-icon"><Icon name="phone" size={20} /></span>
            <div>
              <small>Prefer to talk?</small>
              <a href={business.phoneHref}>{business.phone}</a>
            </div>
          </li>
          <li>
            <span className="contact-icon"><Icon name="pin" size={20} /></span>
            <div>
              <small>Service area</small>
              <span>Streamwood, Elgin &amp; the northwest suburbs</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="schedule-card">
        <h3>Request an estimate</h3>
        <ScheduleForm idPrefix="page" />
      </div>
    </div>
  </section>
);

export default Schedule;
