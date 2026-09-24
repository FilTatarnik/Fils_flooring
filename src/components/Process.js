import React from 'react';
import { process } from '../data/site';

const Process = ({ onSchedule }) => (
  <section className="section section-tint" id="process">
    <div className="container">
      <div className="section-head">
        <p className="eyebrow">How it works</p>
        <h2>A simple, no-surprises process.</h2>
      </div>

      <ol className="process-list">
        {process.map((step, i) => (
          <li className="process-step" key={step.title}>
            <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>

      <div className="center">
        <button className="btn btn-dark btn-lg" onClick={onSchedule}>
          Start with step one
        </button>
      </div>
    </div>
  </section>
);

export default Process;
