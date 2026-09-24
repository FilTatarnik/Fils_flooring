import React, { useEffect, useRef } from 'react';
import Icon from './Icons';
import ScheduleForm from './ScheduleForm';

const ScheduleModal = ({ isOpen, onClose, service }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    document.body.classList.add('no-scroll');
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Move focus into the dialog for keyboard / screen-reader users.
    const first = panelRef.current && panelRef.current.querySelector('input, select, textarea');
    if (first && window.matchMedia('(min-width: 720px)').matches) first.focus();
    else if (panelRef.current) panelRef.current.focus();

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedule-modal-title"
        tabIndex={-1}
        ref={panelRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={24} />
        </button>
        <p className="eyebrow">Free, no-obligation</p>
        <h2 id="schedule-modal-title" className="modal-title">Schedule your estimate</h2>
        <p className="muted">Tell us a bit about your project and when works best for you.</p>
        <ScheduleForm idPrefix="modal" defaultService={service} onDone={onClose} />
      </div>
    </div>
  );
};

export default ScheduleModal;
