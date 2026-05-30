import React, { useRef, useLayoutEffect, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const PillNav = ({ items, activeHref }) => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const pillRefs = useRef([]);

  // Move indicator to the active pill's position
  const moveIndicator = useCallback(() => {
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex === -1) return;

    const activePill = pillRefs.current[activeIndex];
    const nav = navRef.current;
    const indicator = indicatorRef.current;

    if (!activePill || !nav || !indicator) return;

    const navRect = nav.getBoundingClientRect();
    const pillRect = activePill.getBoundingClientRect();

    const left = pillRect.left - navRect.left;
    const width = pillRect.width;
    const height = pillRect.height;

    gsap.to(indicator, {
      x: left,
      width: width,
      height: height,
      duration: 0.4,
      ease: 'power3.out',
      overwrite: true,
    });

    // Scroll the active pill into view inside the nav (for mobile overflow)
    activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeHref, items]);

  // Position indicator on mount and when activeHref changes
  useLayoutEffect(() => {
    // On first render, set indicator instantly (no animation)
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex === -1) return;

    const activePill = pillRefs.current[activeIndex];
    const nav = navRef.current;
    const indicator = indicatorRef.current;

    if (!activePill || !nav || !indicator) return;

    const navRect = nav.getBoundingClientRect();
    const pillRect = activePill.getBoundingClientRect();

    gsap.set(indicator, {
      x: pillRect.left - navRect.left,
      width: pillRect.width,
      height: pillRect.height,
    });
  }, []); // Only on mount

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
    }
  };

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
        overflowX: 'auto',
        maxWidth: '90vw',
        position: 'relative',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
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
        .pill-nav-container::-webkit-scrollbar {
          display: none;
        }
        .nav-pill:hover {
          background: var(--accent);
          color: #000 !important;
        }
      `}</style>
    </nav>
  );
};

export default PillNav;
