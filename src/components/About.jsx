import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaJs, FaHtml5, FaPython, FaUnity } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss, SiBlender } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(marqueeRef.current,
        { attr: { startOffset: -1000 } },
        {
          attr: { startOffset: 0 },
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'JavaScript', icon: <FaJs size={48} color="#000" />, bg: '#F7DF1E' },
    { name: 'React', icon: <FaReact size={48} color="#000" />, bg: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript size={48} color="#fff" />, bg: '#3178C6' },
    { name: 'Vite', icon: <SiVite size={48} color="#000" />, bg: '#646CFF' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} color="#000" />, bg: '#06B6D4' },
    { name: 'HTML & CSS', icon: <FaHtml5 size={48} color="#fff" />, bg: '#E34F26' },
    { name: 'Python', icon: <FaPython size={48} color="#fff" />, bg: '#3776AB' },
    { name: 'Unity', icon: <FaUnity size={48} color="#fff" />, bg: '#000000' },
    { name: 'Blender', icon: <SiBlender size={48} color="#000" />, bg: '#F5792A' }
  ];

  return (
    <div id="about" ref={containerRef} style={{ 
      borderBottom: 'var(--border-width) solid var(--border-color)',
      backgroundColor: 'var(--bg-surface)'
    }}>
      {/* Wave Transition Section Divider */}
      <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        backgroundColor: 'var(--bg-surface)', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" preserveAspectRatio="none" style={{ width: '100%', minWidth: '1000px', height: '180px', display: 'block' }}>
          {/* Top filled area with a wave at the bottom */}
          <path fill="var(--accent-4)" stroke="var(--border-color)" strokeWidth="6" strokeLinecap="square" 
            d="M-1440,150 C-1120,50 -1020,250 -720,150 C-420,50 -320,250 0,150 C320,50 420,250 720,150 C1020,50 1120,250 1440,150 C1760,50 1860,250 2160,150 C2460,50 2560,250 2880,150 L2880,-100 L-1440,-100 Z" />
          
          {/* Invisible path for the text to follow */}
          <path id="wavyPath" fill="none" stroke="none" 
            d="M-1440,150 C-1120,50 -1020,250 -720,150 C-420,50 -320,250 0,150 C320,50 420,250 720,150 C1020,50 1120,250 1440,150 C1760,50 1860,250 2160,150 C2460,50 2560,250 2880,150" />
            
          <text fill="#ffffff" fontSize="42" fontWeight="900" style={{ fontFamily: 'Georgia, serif', textTransform: 'uppercase', letterSpacing: '4px', textShadow: '2px 2px 0px #000' }} dy="-20">
            <textPath href="#wavyPath" startOffset="0" ref={marqueeRef}>
              &nbsp;GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS • GET TO KNOW MORE ABOUT WHO I AM AND MY SKILLS •
            </textPath>
          </text>
        </svg>
      </div>

      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }} className="brutal-card">
              <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-3)', border: '2px solid #000', padding: '0.2rem 0.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
                BIO
              </div>
              <h3 className="about-title" style={{ fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text-primary)' }}>Who I am</h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, borderLeft: '4px solid var(--accent)', paddingLeft: '1rem' }}>
                I am a passionate and dedicated Software Developer with a strong specialization in Frontend Development, where creativity meets functionality. I truly enjoy transforming ideas into visually appealing, interactive, and user-friendly web applications that provide meaningful experiences for users. For me, development is not only about writing code, but also about building digital products that are both efficient and enjoyable to use.
              </p>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, borderLeft: '4px solid var(--accent-2)', paddingLeft: '1rem' }}>
                My journey in technology goes far beyond web development alone. I also enjoy collaborating with friends and teammates to build projects together, because working as a team allows us to share ideas, solve challenges, and create better results through collaboration. At the same time, I am passionate about developing personal projects independently to strengthen my skills and expand my portfolio. By balancing teamwork and self-driven projects, I continue to grow both technically and creatively as a developer.
              </p>
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-2)', border: '2px solid #000', padding: '0.2rem 0.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                TECH STACK
              </div>
              <h3 className="about-title" style={{ fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>My Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
                {skills.map((skill, index) => (
                  <div key={index} style={{
                    background: skill.bg,
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    border: 'var(--border-width) solid var(--border-color)',
                    boxShadow: '4px 4px 0px 0px var(--border-color)',
                    transition: 'all 0.1s ease-out',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-2px, -2px)';
                      e.currentTarget.style.boxShadow = '6px 6px 0px 0px var(--border-color)';
                      e.currentTarget.style.filter = 'brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                      e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border-color)';
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  >
                    {skill.icon}
                    <span style={{ 
                      fontWeight: 800, 
                      color: skill.bg === '#000000' || skill.bg === '#3178C6' || skill.bg === '#3776AB' || skill.bg === '#E34F26' ? '#fff' : '#000', 
                      fontSize: '0.9rem',
                      textTransform: 'uppercase'
                    }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-title { font-size: 2.5rem; }
        @media (max-width: 768px) {
          .about-title { font-size: 2rem; }
          .scroll-marquee-text { font-size: 1.2rem !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
