import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScheduleModal from './components/ScheduleModal';

function App() {
  const [modal, setModal] = useState({ open: false, service: '' });

  // Buttons can pass a service name (e.g. "Tile") to pre-select it in the form.
  const openSchedule = useCallback((service) => {
    setModal({ open: true, service: typeof service === 'string' ? service : '' });
  }, []);
  const closeSchedule = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header onSchedule={openSchedule} />
      <main id="main">
        <Hero onSchedule={openSchedule} />
        <Services onSchedule={openSchedule} />
        <Gallery />
        <Process onSchedule={openSchedule} />
        <About />
        <FAQ />
        <Schedule />
      </main>
      <Footer onSchedule={openSchedule} />
      <MobileCTA onSchedule={openSchedule} />
      <ScheduleModal isOpen={modal.open} onClose={closeSchedule} service={modal.service} />
    </div>
  );
}

export default App;
