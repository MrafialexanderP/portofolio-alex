import React, { useRef, useLayoutEffect, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const PillNav = ({ items, activeHref }) => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const pillRefs = useRef([]);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle Resize for Mobile Toggle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop: Move indicator to the active pill's position
  const moveIndicator = useCallback(() => {
    if (isMobile) return;
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex === -1) return;

    const activePill = pillRefs.current[activeIndex];
    const indicator = indicatorRef.current;

    if (!activePill || !indicator) return;

    // Use offsetLeft instead of getBoundingClientRect for stable positioning
    gsap.to(indicator, {
      x: activePill.offsetLeft,
      width: activePill.offsetWidth,
      height: activePill.offsetHeight,
      duration: 0.4,
      ease: 'power3.out',
      overwrite: true,
    });
  }, [activeHref, items, isMobile]);

  // Desktop: Position indicator on mount
  useLayoutEffect(() => {
    if (isMobile) return;
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex === -1) return;

    const activePill = pillRefs.current[activeIndex];
    const indicator = indicatorRef.current;

    if (!activePill || !indicator) return;

    gsap.set(indicator, {
      x: activePill.offsetLeft,
      width: activePill.offsetWidth,
      height: activePill.offsetHeight,
    });
  }, [isMobile]); // Re-run when switching back to desktop

  // Animate indicator when activeHref changes
  useEffect(() => {
    moveIndicator();
  }, [activeHref, moveIndicator]);

  // Recalculate on resize
  useEffect(() => {
    const onResize = () => moveIndicator();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [moveIndicator]);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 80 }, ease: 'power3.inOut' });
      if (isMobile) setIsOpen(false);
    }
  };

  // Mobile Menu Animation
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (isOpen) {
      // Get the natural height first
      gsap.set(menu, { display: 'flex', height: 'auto' });
      const fullHeight = menu.scrollHeight;
      gsap.fromTo(menu,
        { height: 0 },
        { height: fullHeight, duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(menu, {
        height: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(menu, { display: 'none' });
        }
      });
    }
  }, [isOpen]);

  // Mobile Layout (Burger Menu)
  if (isMobile) {
    return (
      <div style={{ position: 'relative', width: '100%', padding: '0 1rem', zIndex: 1000 }}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: isOpen ? '#000' : '#fff',
            color: isOpen ? '#fff' : '#000',
            border: 'var(--border-width) solid var(--border-color)',
            boxShadow: '4px 4px 0px 0px var(--border-color)',
            padding: '0.75rem 1.5rem',
            fontSize: '1.2rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 0.2s, color 0.2s'
          }}
        >
          <span>MENU</span>
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{isOpen ? '✕' : '☰'}</span>
        </button>

        <div 
          ref={mobileMenuRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '1rem',
            right: '1rem',
            background: 'var(--accent-2)',
            border: 'var(--border-width) solid var(--border-color)',
            boxShadow: '6px 6px 0px 0px var(--border-color)',
            height: 0,
            overflow: 'hidden',
            display: 'none',
            flexDirection: 'column',
            zIndex: 999
          }}
        >
          {items.map((item, i) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  padding: '1rem 1.5rem',
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#000',
                  background: isActive ? '#000' : 'transparent',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  borderBottom: i === items.length - 1 ? 'none' : '4px solid var(--border-color)',
                  transition: 'background 0.2s, color 0.2s'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Layout (Pill Nav)
  return (
    <nav
      ref={navRef}
      className="pill-nav-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        border: 'var(--border-width) solid var(--border-color)',
        borderRadius: '50px',
        padding: '5px',
        boxShadow: '4px 4px 0px 0px var(--border-color)',
        gap: '4px',
        position: 'relative',
      }}
    >
      {/* Moving Indicator */}
      <div
        ref={indicatorRef}
        style={{
          position: 'absolute',
          top: '5px',
          left: 0,
          height: '36px',
          background: '#000',
          borderRadius: '50px',
          zIndex: 0,
          pointerEvents: 'none',
          willChange: 'transform, width',
        }}
      />

      {items.map((item, i) => {
        const isActive = activeHref === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            ref={(el) => (pillRefs.current[i] = el)}
            onClick={(e) => handleLinkClick(e, item.href)}
            className="nav-pill"
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              textDecoration: 'none',
              color: isActive ? '#fff' : '#000',
              fontWeight: 800,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              position: 'relative',
              zIndex: 1,
              transition: 'color 0.3s ease',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
            }}
          >
            {item.label}
          </a>
        );
      })}

      <style>{`
        .nav-pill:hover {
          background: var(--accent);
          color: #000 !important;
        }
      `}</style>
    </nav>
  );
};

export default PillNav;
