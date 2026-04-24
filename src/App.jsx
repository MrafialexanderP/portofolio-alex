import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GithubContributions from './components/GithubContributions';
import Contact from './components/Contact';
import PillNav from './components/PillNav';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'fixed', top: 0, zIndex: 100, paddingTop: '1rem' }}>
        <PillNav
          logo="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Katherine"
          logoAlt="Rafi Alexander"
          items={[
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Github', href: '#github' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="#about"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#0f172a"
          pillColor="#1e293b"
          hoveredPillTextColor="#38bdf8"
          pillTextColor="#e2e8f0"
        />
      </div>

      <main>
        <Hero />
        <About />
        <Projects />
        <GithubContributions />
        <Contact />
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rafi Alexander. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
