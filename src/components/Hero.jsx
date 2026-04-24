import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>

        <div style={{ flex: 1 }} className="animate-fade-in">
          <h2 style={{ color: 'var(--accent)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>
            Hello, I'm
          </h2>
          <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', color: '#fff' }}>
            Rafi Alexander
          </h1>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Frontend Developer & Software Engineer
          </h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            I build interactive, responsive, and elegant digital experiences. Specializing in modern frontend technologies to bring creative ideas to life.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
              <a href="https://github.com/MrafialexanderP" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-link">
                <FaGithub size={24} />
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-link">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:[EMAIL_ADDRESS]" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="animate-fade-in delay-200">
          <div style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--bg-surface), var(--accent))',
            padding: '5px',
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.2)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              {/* Placeholder for Profile Picture */}
              <img src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Katherine" alt="Rafi Alexander" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
