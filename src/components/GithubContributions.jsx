import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContributionGrid = ({ year, totalContributions, data, accentColor }) => {
  // Constants for GitHub graph colors (Neobrutalism High Contrast)
  const colors = {
    0: 'var(--bg-surface)', // Empty
    1: '#bbf7d0', // Light green
    2: '#4ade80', 
    3: '#16a34a', 
    4: '#14532d'  // Dark green
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div className="brutal-card" style={{ marginBottom: '2rem', width: '100%', backgroundColor: accentColor }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: 'var(--border-width) solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <h3 style={{ color: '#000', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>{totalContributions} contributions in {year}</h3>
      </div>
      
      <div style={{ 
        padding: '1.5rem', 
        border: 'var(--border-width) solid var(--border-color)', 
        backgroundColor: '#fff',
        overflowX: 'auto',
        boxShadow: '4px 4px 0px 0px var(--border-color)'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', minWidth: '800px' }}>
          {/* Days column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '1.5rem', paddingRight: '0.5rem' }}>
            {days.map((day, i) => (
              <div key={i} style={{ height: '14px', fontSize: '12px', color: '#000', fontWeight: 800, lineHeight: '14px' }}>
                {day}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {/* Months row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '0.5rem', paddingRight: '2rem' }}>
              {months.map((month, i) => (
                <span key={i} style={{ fontSize: '12px', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>{month}</span>
              ))}
            </div>

            {/* Squares grid (52 weeks x 7 days) */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {data.map((week, weekIndex) => (
                <div key={weekIndex} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {week.map((level, dayIndex) => (
                    <div 
                      key={dayIndex} 
                      style={{ 
                        width: '14px', 
                        height: '14px', 
                        backgroundColor: colors[level] || colors[0], 
                        border: '2px solid #000',
                        transition: 'transform 0.1s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.3) translate(-1px, -1px)';
                        e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000';
                        e.currentTarget.style.zIndex = 10;
                        e.currentTarget.style.position = 'relative';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translate(0, 0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.zIndex = 1;
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '12px', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>
          <span>Less</span>
          <div style={{ width: '14px', height: '14px', backgroundColor: colors[0], border: '2px solid #000' }}></div>
          <div style={{ width: '14px', height: '14px', backgroundColor: colors[1], border: '2px solid #000' }}></div>
          <div style={{ width: '14px', height: '14px', backgroundColor: colors[2], border: '2px solid #000' }}></div>
          <div style={{ width: '14px', height: '14px', backgroundColor: colors[3], border: '2px solid #000' }}></div>
          <div style={{ width: '14px', height: '14px', backgroundColor: colors[4], border: '2px solid #000' }}></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

const GithubContributions = () => {
  const generateData = (year) => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        let level = 0;
        
        if (year === 2025) {
          if (i > 25 && Math.random() > 0.6) {
            level = Math.floor(Math.random() * 4) + 1;
          } else if (Math.random() > 0.95) {
            level = Math.floor(Math.random() * 2) + 1;
          }
        } else if (year === 2026) {
          if (i < 20 && Math.random() > 0.5) {
            level = Math.floor(Math.random() * 4) + 1;
          } else if (Math.random() > 0.95) {
            level = Math.floor(Math.random() * 2) + 1;
          }
        }
        
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const data2025 = React.useMemo(() => generateData(2025), []);
  const data2026 = React.useMemo(() => generateData(2026), []);

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.github-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.github-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.github-grid',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="github" className="section" ref={containerRef} style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title github-title">GitHub Contributions</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div className="github-grid">
            <ContributionGrid year="2026" totalContributions={185} data={data2026} accentColor="var(--accent)" />
          </div>
          <div className="github-grid">
            <ContributionGrid year="2025" totalContributions={193} data={data2025} accentColor="var(--accent-2)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
