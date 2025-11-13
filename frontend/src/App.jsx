import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import SpideyBackground from './components/SpideyBackground';

function App() {
  return (
    <>
      <SpideyBackground />

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
