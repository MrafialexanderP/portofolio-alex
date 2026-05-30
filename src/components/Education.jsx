import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);
  
  const educationData = [
    {
      period: 'SMP',
      school: 'SMP 1 Margahayu',
      description: 'Menyelesaikan pendidikan menengah pertama dan mulai mengeksplorasi minat dalam berbagai bidang.',
      color: 'var(--accent)'
    },
    {
      period: 'SMK',
      school: 'SMK Daarut Tauhiid Boarding School Bandung',
      description: 'Menyelesaikan pendidikan menengah kejuruan dengan fokus pada pengembangan diri, kepemimpinan dan softskill.',
      color: 'var(--accent-2)'
    },
    {
      period: 'Kuliah',
      school: 'IPB University',
      description: 'Menempuh pendidikan tinggi, memperdalam ilmu di bidang Informatika dan aktif dalam berbagai kegiatan organisasi dan pengembangan perangkat lunak.',
      color: 'var(--accent-3)'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.edu-title',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.edu-title',
            start: 'top 90%',
            once: true
          }
        }
      );

      gsap.fromTo('.edu-card', 
        { opacity: 0, scale: 0.8, rotation: (i) => i % 2 === 0 ? -5 : 5 },
        {
          opacity: 1, 
          scale: 1,
          rotation: (i) => i % 2 === 0 ? 1.5 : -1.5,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.edu-container',
            start: 'top 80%',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="section" ref={containerRef} style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: 'var(--border-width) solid var(--border-color)',
      borderBottom: 'var(--border-width) solid var(--border-color)',
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }}>
      <div className="container">
        <h2 className="section-title edu-title" style={{ color: 'var(--text-primary)', marginBottom: '3rem' }}>Education Journey</h2>
        
        <div className="edu-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          {educationData.map((edu, index) => (
            <div key={index} className="edu-card brutal-card" style={{ 
              backgroundColor: edu.color,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                backgroundColor: '#fff',
                border: 'var(--border-width) solid var(--border-color)',
                padding: '0.5rem 1.5rem',
                fontWeight: 900,
                fontSize: '1.2rem',
                boxShadow: '4px 4px 0px 0px var(--border-color)',
                textTransform: 'uppercase'
              }}>
                {edu.period}
              </div>
              
              <h3 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginTop: '1rem', marginBottom: '1rem', color: '#000' }}>
                {edu.school}
              </h3>
              
              <p style={{ fontSize: '1.1rem', fontWeight: 500, color: '#000', borderLeft: '4px solid #000', paddingLeft: '1rem' }}>
                {edu.description}
              </p>
            </div>
          ))}
          
          <div className="edu-card brutal-card" style={{ 
            backgroundColor: 'var(--accent-4)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            marginTop: '1rem'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              backgroundColor: '#fff',
              border: 'var(--border-width) solid var(--border-color)',
              padding: '0.5rem 1.5rem',
              fontWeight: 900,
              fontSize: '1.2rem',
              boxShadow: '4px 4px 0px 0px var(--border-color)'
            }}>
              STARTUP
            </div>
            
            <h3 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', marginTop: '1rem', marginBottom: '1rem', color: '#000' }}>
              BGEO
            </h3>
            
            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: '#000', borderLeft: '4px solid #000', paddingLeft: '1rem', marginBottom: '2rem' }}>
              Selain menempuh pendidikan juga, saya dan teman-teman juga membangun sebuah startup bernama BGEO. Ini adalah langkah kami untuk menciptakan inovasi dan memberikan solusi melalui produk digital.
            </p>
            
            <a href="https://www.instagram.com/bgeodev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{
              alignSelf: 'flex-start',
              backgroundColor: '#fff',
              color: '#000',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: '1.1rem',
              padding: '0.8rem 1.5rem',
              border: 'var(--border-width) solid var(--border-color)',
              boxShadow: '4px 4px 0px 0px var(--border-color)',
              textTransform: 'uppercase',
              transition: 'transform 0.1s, box-shadow 0.1s',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0px 0px var(--border-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border-color)';
            }}
            >
              Visit BGEO on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
