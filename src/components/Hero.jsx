import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '40px', backgroundColor: 'var(--accent-4)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>

        <div style={{ flex: '1 1 300px' }} className="animate-fade-in brutal-card hero-content">
          <div style={{ 
            display: 'inline-block',
            backgroundColor: 'var(--accent)',
            border: 'var(--border-width) solid var(--border-color)',
            padding: '0.25rem 0.75rem',
            fontWeight: 900,
            marginBottom: '1rem',
            boxShadow: '3px 3px 0px 0px var(--border-color)',
            textTransform: 'uppercase'
          }}>
            Hello, I'm
          </div>
          <h1 className="hero-title" style={{ fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '-2px' }}>
            Rafi Alexander
          </h1>
          <h3 className="hero-subtitle" style={{ fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Frontend Developer & Software Engineer
          </h3>
          <p className="hero-desc" style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2.5rem', maxWidth: '600px', borderLeft: 'var(--border-width) solid var(--border-color)', paddingLeft: '1rem' }}>
            I build interactive, responsive, and elegant digital experiences. Specializing in modern frontend technologies to bring creative ideas to life.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary" style={{ backgroundColor: 'var(--accent-2)' }}>
              View My Work <ArrowRight size={20} strokeWidth={3} />
            </a>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/MrafialexanderP" target="_blank" rel="noopener noreferrer" className="brutal-social github">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rafi-alexander-7ab8bb218/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLg1q90MhS0CmPnmjbsbKxw%3D%3D" className="brutal-social linkedin">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:alexanderpmrafi@gmail.com" className="brutal-social email">
                <Mail size={24} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }} className="animate-fade-in delay-200 hero-img-wrapper">
          <div className="hero-img-box" style={{
            backgroundColor: 'var(--accent)',
            border: 'var(--border-width) solid var(--border-color)',
            boxShadow: '12px 12px 0px 0px var(--border-color)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform var(--transition-normal)'
          }}
          onMouseEnter={(e) => {
            if(window.innerWidth > 768) {
              e.currentTarget.style.transform = 'translate(-4px, -4px)';
              e.currentTarget.style.boxShadow = '16px 16px 0px 0px var(--border-color)';
            }
          }}
          onMouseLeave={(e) => {
            if(window.innerWidth > 768) {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '12px 12px 0px 0px var(--border-color)';
            }
          }}>
            {/* Background pattern for the image box */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px',
              opacity: 0.1,
              zIndex: 1
            }}></div>
            <img src="alex.jpg" alt="Rafi Alexander" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 2, filter: 'grayscale(20%) contrast(120%)' }} />
          </div>
        </div>

      </div>
      <style>{`
        .hero-title { font-size: 4.5rem; }
        .hero-subtitle { font-size: 2rem; }
        .hero-desc { font-size: 1.125rem; }
        .hero-img-box { width: 350px; height: 400px; }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; letter-spacing: -1px; }
          .hero-subtitle { font-size: 1.25rem; }
          .hero-desc { font-size: 1rem; }
          .hero-img-box { width: 100%; max-width: 350px; height: 350px; }
        }

        .brutal-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: #fff;
          color: var(--text-primary);
          border: var(--border-width) solid var(--border-color);
          box-shadow: 4px 4px 0px 0px var(--border-color);
          text-decoration: none;
          transition: all 0.1s;
        }
        .brutal-social:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px 0px var(--border-color);
        }
        .brutal-social.github:hover { background: #000; color: #fff; }
        .brutal-social.linkedin:hover { background: #0a66c2; color: #fff; }
        .brutal-social.email:hover { background: #ea4335; color: #fff; }
      `}</style>
    </section>
  );
};

export default Hero;
