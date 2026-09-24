import React, { useEffect, useState } from 'react';
import Icon from './Icons';
import { business, serviceOptions } from '../data/site';

const today = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const emptyForm = (service = '') => ({
  name: '',
  phone: '',
  email: '',
  service,
  city: '',
  date: '',
  time: '',
  message: '',
  _gotcha: '', // spam honeypot (Formspree ignores submissions where this is filled)
});

const ScheduleForm = ({ idPrefix = 'sf', defaultService = '', onDone }) => {
  const [form, setForm] = useState(emptyForm(defaultService));
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  useEffect(() => {
    setForm((f) => ({ ...f, service: defaultService || f.service }));
  }, [defaultService]);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    try {
      const res = await fetch(business.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `New estimate request from ${form.name}${form.service ? ` — ${form.service}` : ''}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data.errors ? data.errors.map((x) => x.message).join(', ') : data.error;
        throw new Error(msg || 'Something went wrong. Please try again.');
      }
      setStatus({ submitting: false, success: true, error: null });
      setForm(emptyForm());
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  if (status.success) {
    return (
      <div className="form-success" role="status">
        <div className="form-success-icon"><Icon name="check" size={32} /></div>
        <h3>Request received!</h3>
        <p>
          Thanks for reaching out. We’ll contact you shortly to confirm your estimate.
          Need us sooner? Call <a href={business.phoneHref}>{business.phone}</a>.
        </p>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setStatus({ submitting: false, success: false, error: null });
            if (onDone) onDone();
          }}
        >
          {onDone ? 'Close' : 'Send another request'}
        </button>
      </div>
    );
  }

  const id = (n) => `${idPrefix}-${n}`;

  return (
    <form className="schedule-form" onSubmit={submit} noValidate={false}>
      <div className="form-row">
        <div className="field">
          <label htmlFor={id('name')}>Full name *</label>
          <input id={id('name')} name="name" autoComplete="name" required value={form.name} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor={id('phone')}>Phone *</label>
          <input id={id('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel" required value={form.phone} onChange={update} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor={id('email')}>Email *</label>
          <input id={id('email')} name="email" type="email" autoComplete="email" required value={form.email} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor={id('city')}>City / Town</label>
          <input id={id('city')} name="city" autoComplete="address-level2" value={form.city} onChange={update} />
        </div>
      </div>

      <div className="field">
        <label htmlFor={id('service')}>Type of flooring</label>
        <select id={id('service')} name="service" value={form.service} onChange={update}>
          <option value="">Select one…</option>
          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor={id('date')}>Preferred date</label>
          <input id={id('date')} name="date" type="date" min={today()} value={form.date} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor={id('time')}>Preferred time</label>
          <select id={id('time')} name="time" value={form.time} onChange={update}>
            <option value="">Any time</option>
            <option>Morning (8–11am)</option>
            <option>Midday (11am–2pm)</option>
            <option>Afternoon (2–5pm)</option>
            <option>Evening (5–7pm)</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor={id('message')}>Project details</label>
        <textarea
          id={id('message')}
          name="message"
          rows={4}
          placeholder="Rooms, approximate square footage, current flooring, timeline…"
          value={form.message}
          onChange={update}
        />
      </div>

      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="visually-hidden"
        aria-hidden="true"
        value={form._gotcha}
        onChange={update}
      />

      {status.error && <p className="form-error" role="alert">{status.error}</p>}

      <button type="submit" className="btn btn-accent btn-lg btn-block" disabled={status.submitting}>
        {status.submitting ? 'Sending…' : (<><Icon name="calendar" size={20} /> Request my free estimate</>)}
      </button>
      <p className="form-note">We’ll reach out to confirm a time. No spam, ever.</p>
    </form>
  );
};

export default ScheduleForm;
