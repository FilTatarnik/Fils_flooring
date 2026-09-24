import React, { useEffect, useState } from 'react';
import Icon from './Icons';
import { business, nav } from '../data/site';

const Header = ({ onSchedule }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close on Escape / resize.
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={close} aria-label={`${business.name} home`}>
          <span className="logo-mark" aria-hidden="true">
            <span /><span /><span />
          </span>
          <span className="logo-text">
            Fil’s <em>Flooring</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={business.phoneHref}>
            <Icon name="phone" size={18} />
            <span>{business.phone}</span>
          </a>
          <button className="btn btn-accent btn-sm header-cta" onClick={onSchedule}>
            Free Estimate
          </button>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <button
            className="btn btn-accent btn-block"
            onClick={() => { close(); onSchedule(); }}
          >
            <Icon name="calendar" size={20} /> Schedule a Free Estimate
          </button>
          <a className="btn btn-outline-dark btn-block" href={business.phoneHref}>
            <Icon name="phone" size={20} /> Call {business.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
