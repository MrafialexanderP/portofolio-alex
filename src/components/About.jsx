import React, { useEffect, useRef } from 'react';
import { FaReact, FaJs, FaHtml5, FaPython, FaUnity } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss, SiBlender } from 'react-icons/si';

const About = () => {
  const textElementRef = useRef(null);
  const svgContainerRef = useRef(null);

  // State variables for smooth animation (Lerp)
  const currentOffset = useRef(50);
  const targetOffset = useRef(50);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (svgContainerRef.current) {
        const rect = svgContainerRef.current.getBoundingClientRect();
        const distance = rect.top - (window.innerHeight / 2);
        // Calculate target based on scroll distance
        targetOffset.current = 50 + (distance * 0.04);
      }
    };

    const animate = () => {
      // Lerp (Linear Interpolation) untuk smoothing
      currentOffset.current += (targetOffset.current - currentOffset.current) * 0.08;

      if (textElementRef.current) {
        // Terapkan nilai yang sudah di-smooth dengan ketelitian 2 desimal
        textElementRef.current.setAttribute('startOffset', `${currentOffset.current.toFixed(2)}%`);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial target calc
    animate(); // Start animation loop

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const skills = [
    { name: 'JavaScript', icon: <FaJs size={36} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={36} color="#61DAFB" /> },
    { name: 'TypeScript', icon: <SiTypescript size={36} color="#3178C6" /> },
    { name: 'Vite', icon: <SiVite size={36} color="#646CFF" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} color="#06B6D4" /> },
    { name: 'HTML & CSS', icon: <FaHtml5 size={36} color="#E34F26" /> },
    { name: 'Python', icon: <FaPython size={36} color="#3776AB" /> },
    { name: 'Unity', icon: <FaUnity size={36} color="#000000" /> },
    { name: 'Blender', icon: <SiBlender size={36} color="#F5792A" /> }
  ];

  return (
    <div id="about">
      {/* SVG Wave Transition */}
      <div ref={svgContainerRef} style={{ width: '100%', overflow: 'hidden', lineHeight: 0, position: 'relative', marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 250" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <path id="wavePath" d="M0,150 C320,250 420,50 1440,150 L1440,250 L0,250 Z" fill="#FDFCF5" />
          <path id="textPathRef" d="M0,140 C320,240 420,40 1440,140" fill="none" />
          <text style={{ fontSize: '42px', fontWeight: 900, fill: '#FFFFFF', letterSpacing: '2px', fontFamily: '"Outfit", "Inter", sans-serif' }}>
            <textPath ref={textElementRef} href="#textPathRef" startOffset="50%" textAnchor="middle">
              Get to Know More About Who I Am and My Skills
            </textPath>
          </text>
        </svg>
      </div>

      <section className="section" style={{ backgroundColor: '#FDFCF5', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1E293B', fontWeight: 800 }}>Who I am</h3>
              <p style={{ color: '#475569', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                I am a passionate and dedicated Software Developer with a strong specialization in Frontend Development, where creativity meets functionality. I truly enjoy transforming ideas into visually appealing, interactive, and user-friendly web applications that provide meaningful experiences for users. For me, development is not only about writing code, but also about building digital products that are both efficient and enjoyable to use.</p>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                My journey in technology goes far beyond web development alone. I also enjoy collaborating with friends and teammates to build projects together, because working as a team allows us to share ideas, solve challenges, and create better results through collaboration. At the same time, I am passionate about developing personal projects independently to strengthen my skills and expand my portfolio. By balancing teamwork and self-driven projects, I continue to grow both technically and creatively as a developer.
              </p>
            </div>

            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1E293B', fontWeight: 800 }}>My Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                {skills.map((skill, index) => (
                  <div key={index} style={{
                    background: '#FFFFFF',
                    padding: '1.5rem 1rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    {skill.icon}
                    <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layered Bottom Wave Divider */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: 'transparent', transform: 'translateY(-1px)' }}>
        <svg viewBox="0 0 1440 150" style={{ width: '100%', height: 'auto', display: 'block' }}>
          {/* Layer 1 - Lightest */}
          <path fill="#FDFCF5" fillOpacity="0.2" d="M0,0 C480,180 960,-60 1440,120 L1440,0 L0,0 Z"></path>
          {/* Layer 2 - Medium */}
          <path fill="#FDFCF5" fillOpacity="0.5" d="M0,0 C480,140 960,-30 1440,90 L1440,0 L0,0 Z"></path>
          {/* Layer 3 - Solid */}
          <path fill="#FDFCF5" d="M0,0 C480,100 960,0 1440,60 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
