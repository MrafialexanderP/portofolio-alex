import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContributionGrid = ({ year, totalContributions, data }) => {
  // Constants for GitHub graph colors (Dark Mode)
  const colors = {
    0: 'rgba(255, 255, 255, 0.05)', // Empty
    1: '#0e4429', // Lightest green
    2: '#006d32', 
    3: '#26a641', 
    4: '#39d353'  // Darkest/brightest green
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div style={{ marginBottom: '2rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ color: '#fff', fontWeight: 500 }}>{totalContributions} contributions in {year}</h3>
      </div>
      
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid rgba(255,255,255,0.1)', 
        borderRadius: '8px', 
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        overflowX: 'auto'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', minWidth: '800px' }}>
          {/* Days column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '1.5rem', paddingRight: '0.5rem' }}>
            {days.map((day, i) => (
              <div key={i} style={{ height: '12px', fontSize: '10px', color: 'var(--text-secondary)', lineHeight: '12px' }}>
                {day}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            {/* Months row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '0.5rem', paddingRight: '2rem' }}>
              {months.map((month, i) => (
                <span key={i} style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{month}</span>
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
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: colors[level] || colors[0], 
                        borderRadius: '2px',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.border = 'none';
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '10px', color: 'var(--text-secondary)' }}>
          <span>Less</span>
          <div style={{ width: '12px', height: '12px', backgroundColor: colors[0], borderRadius: '2px' }}></div>
          <div style={{ width: '12px', height: '12px', backgroundColor: colors[1], borderRadius: '2px' }}></div>
          <div style={{ width: '12px', height: '12px', backgroundColor: colors[2], borderRadius: '2px' }}></div>
          <div style={{ width: '12px', height: '12px', backgroundColor: colors[3], borderRadius: '2px' }}></div>
          <div style={{ width: '12px', height: '12px', backgroundColor: colors[4], borderRadius: '2px' }}></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

const GithubContributions = () => {
  // Fungsi helper untuk generate mock data yang menyerupai pola screenshot
  // Screenshot 2025: Banyak hijau di bulan Jul-Dec
  // Screenshot 2026: Banyak hijau di bulan Jan-Apr
  const generateData = (year) => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        let level = 0;
        
        if (year === 2025) {
          // Pola untuk 2025 (lebih banyak kontribusi di paruh kedua tahun)
          if (i > 25 && Math.random() > 0.6) {
            level = Math.floor(Math.random() * 4) + 1;
          } else if (Math.random() > 0.95) {
            level = Math.floor(Math.random() * 2) + 1;
          }
        } else if (year === 2026) {
          // Pola untuk 2026 (lebih banyak kontribusi di paruh pertama tahun)
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
      // Animate title
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

      // Animate the grids
      gsap.fromTo('.github-grid',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
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
    <section id="github" className="section" ref={containerRef} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <h2 className="section-title github-title">GitHub Contributions</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="github-grid">
            <ContributionGrid year="2026" totalContributions={185} data={data2026} />
          </div>
          <div className="github-grid">
            <ContributionGrid year="2025" totalContributions={193} data={data2025} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
