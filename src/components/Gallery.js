import React, { useCallback, useEffect, useState } from 'react';
import Icon from './Icons';
import { gallery } from '../data/site';

const Gallery = () => {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  const prev = useCallback(
    () => setActive((i) => (i - 1 + gallery.length) % gallery.length),
    []
  );
  const next = useCallback(() => setActive((i) => (i + 1) % gallery.length), []);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.classList.add('no-scroll');
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, prev, next]);

  // Basic swipe support for phones/tablets.
  const [touchX, setTouchX] = useState(null);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    setTouchX(null);
  };

  return (
    <section className="section section-dark" id="work">
      <div className="container">
        <div className="section-head section-head-split">
          <div>
            <p className="eyebrow eyebrow-light">Our work</p>
            <h2>Recent projects.</h2>
          </div>
          <p className="lead">
            Real floors from real homes we’ve worked on. Tap any photo to take a closer look.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <button
              key={g.src + i}
              className={`gallery-item ${g.wide ? 'is-wide' : ''} ${g.tall ? 'is-tall' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View larger: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <span className="gallery-label">{g.label}</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
          onClick={() => setActive(null)}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <button className="lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
            <Icon name="close" size={28} />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <Icon name="chevronLeft" size={30} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption>
              {gallery[active].label}
              <span>{active + 1} / {gallery.length}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-nav lightbox-next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <Icon name="chevronRight" size={30} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
