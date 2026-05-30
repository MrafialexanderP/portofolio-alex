import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis';

import PillNav from './components/PillNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GithubContributions from './components/GithubContributions';
import Contact from './components/Contact';
import Education from './components/Education';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('#hero');

  useLayoutEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0, 0);

    // Setup active state tracking for PillNav (Scroll Spy)
    const sections = ['#hero', '#about', '#education', '#projects', '#github', '#contact'];
    
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: id,
        start: 'top 40%',
        end: 'bottom 40%',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    // Sticky header animation
    ScrollTrigger.create({
      start: 'top -80',
      end: 999999,
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to('#main-header', { padding: '0.5rem 0', duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to('#main-header', { padding: '1.5rem 0', duration: 0.3, ease: 'power2.out' });
        }
      }
    });

    // Floating shapes parallax globally
    const shapes = document.querySelectorAll('.global-shape');
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: (i + 1) * 100,
        rotation: (i % 2 === 0 ? 1 : -1) * 360,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const navItems = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Github', href: '#github' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div ref={containerRef} className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Global Decorative Floating Shapes */}
      <div className="global-shape" style={{ position: 'absolute', top: '10%', left: '5%', width: '40px', height: '40px', background: 'var(--accent)', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0 var(--border-color)', zIndex: 0 }}></div>
      <div className="global-shape" style={{ position: 'absolute', top: '30%', right: '10%', width: '30px', height: '30px', borderRadius: '50%', background: 'var(--accent-2)', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0 var(--border-color)', zIndex: 0 }}></div>
      <div className="global-shape" style={{ position: 'absolute', top: '60%', left: '8%', width: '45px', height: '45px', background: 'var(--accent-4)', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0 var(--border-color)', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', zIndex: 0 }}></div>
      <div className="global-shape" style={{ position: 'absolute', top: '85%', right: '5%', width: '50px', height: '50px', background: 'var(--accent-3)', border: 'var(--border-width) solid var(--border-color)', boxShadow: '4px 4px 0 var(--border-color)', zIndex: 0 }}></div>

      <header id="main-header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: 'transparent',
        padding: '1.5rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <PillNav 
              items={navItems} 
              activeHref={activeSection}
            />
          </div>
        </div>
      </header>

      <main style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Projects />
        <GithubContributions />
        <Contact />
      </main>

      <footer style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rafi Alexander. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
