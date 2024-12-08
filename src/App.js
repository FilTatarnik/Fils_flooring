import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import DynamicMainPage from './components/DynamicMainPage';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        {/* <DynamicMainPage /> */}
        <MainPage />
        {/* <Navbar />
        <Hero />
        <About />
        <OurWork />
        <Contact />
        <Footer /> */}
      </main>
    </div>
  );
}

export default App;