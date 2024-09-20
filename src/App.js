import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Landing from './components/Landing.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
        <Landing />
        <Footer />
      </header>
    </div>
  );
}

export default App;
