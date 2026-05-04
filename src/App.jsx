import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GithubContributions from './components/GithubContributions';
import Contact from './components/Contact';

function BrutalistNav() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { label: 'About', href: '#about', color: 'var(--accent)' },
    { label: 'Projects', href: '#projects', color: 'var(--accent-2)' },
    { label: 'Github', href: '#github', color: 'var(--accent-3)' },
    { label: 'Contact', href: '#contact', color: 'var(--accent-4)' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'var(--bg-surface)',
      borderBottom: 'var(--border-width) solid var(--border-color)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <a href="#hero" style={{
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.5rem',
          fontWeight: 900,
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          border: 'var(--border-width) solid var(--border-color)',
          padding: '0.25rem 0.75rem',
          background: 'var(--accent-3)',
          boxShadow: '3px 3px 0px 0px var(--border-color)',
          transition: 'transform 0.1s, box-shadow 0.1s',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-2px, -2px)';
          e.currentTarget.style.boxShadow = '5px 5px 0px 0px var(--border-color)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = '3px 3px 0px 0px var(--border-color)';
        }}>
          RA
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '1rem' }} className="desktop-nav">
          {items.map((item) => (
            <a key={item.href} href={item.href} style={{
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.5rem 1rem',
              border: 'var(--border-width) solid var(--border-color)',
              background: '#fff',
              boxShadow: '3px 3px 0px 0px var(--border-color)',
              transition: 'transform 0.1s, box-shadow 0.1s',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = item.color;
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '5px 5px 0px 0px var(--border-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '3px 3px 0px 0px var(--border-color)';
            }}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            display: 'none',
            background: isOpen ? 'var(--accent-2)' : 'var(--accent)',
            border: 'var(--border-width) solid var(--border-color)',
            padding: '0.5rem 1rem',
            fontWeight: 900,
            cursor: 'pointer',
            boxShadow: isOpen ? '1px 1px 0px 0px var(--border-color)' : '4px 4px 0px 0px var(--border-color)',
            transform: isOpen ? 'translate(3px, 3px)' : 'translate(0, 0)',
            transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav-container ${isOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <a 
            key={item.href} 
            href={item.href} 
            onClick={() => setIsOpen(false)} 
            className={`mobile-nav-link ${isOpen ? 'show' : ''}`}
            style={{
              background: item.color,
              transitionDelay: isOpen ? `${index * 0.1}s` : '0s' // Stagger in, hide immediately
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
      
      <style>{`
        .mobile-nav-container {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--bg-surface);
          border-bottom: var(--border-width) solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          gap: 1rem;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 5;
        }
        
        .mobile-nav-container.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
          box-shadow: 0px 10px 0px 0px var(--border-color);
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 900;
          font-size: 1.5rem;
          padding: 1rem;
          border: var(--border-width) solid var(--border-color);
          text-align: center;
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 4px 4px 0px 0px var(--border-color);
        }

        .mobile-nav-link.show {
          opacity: 1;
          transform: translateX(0);
        }
        
        .mobile-nav-link:active {
          transform: translate(2px, 2px) !important;
          box-shadow: 2px 2px 0px 0px var(--border-color) !important;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

function App() {
  return (
    <>
      <BrutalistNav />

      <main style={{ paddingTop: '80px' }}>
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
