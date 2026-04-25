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
            <ul className="wrapper" style={{ marginLeft: '1rem' }}>
              <a href="https://github.com/MrafialexanderP" target="_blank" rel="noopener noreferrer" className="icon github">
                <span className="tooltip">GitHub</span>
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rafi-alexander-7ab8bb218/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLg1q90MhS0CmPnmjbsbKxw%3D%3D" className="icon linkedin">
                <span className="tooltip">LinkedIn</span>
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:alexanderpmrafi@gmail.com" className="icon email">
                <span className="tooltip">Email</span>
                <Mail size={20} />
              </a>
            </ul>
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
              <img src="alex.jpg" alt="Rafi Alexander" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
      <style>{`
        .wrapper {
          display: inline-flex;
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: "Poppins", sans-serif;
          justify-content: center;
        }

        .wrapper .icon {
          position: relative;
          background: #fff;
          border-radius: 50%;
          margin: 0 10px;
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          color: #333;
          text-decoration: none;
        }

        .wrapper .tooltip {
          position: absolute;
          top: 0;
          font-size: 14px;
          background: #fff;
          color: #fff;
          padding: 5px 8px;
          border-radius: 5px;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          white-space: nowrap;
        }

        .wrapper .tooltip::before {
          position: absolute;
          content: "";
          height: 8px;
          width: 8px;
          background: #fff;
          bottom: -3px;
          left: 50%;
          transform: translate(-50%) rotate(45deg);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .wrapper .icon:hover .tooltip {
          top: -45px;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .wrapper .icon:hover span,
        .wrapper .icon:hover .tooltip {
          text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
        }

        .wrapper .github:hover,
        .wrapper .github:hover .tooltip,
        .wrapper .github:hover .tooltip::before {
          background: #333;
          color: #fff;
        }

        .wrapper .linkedin:hover,
        .wrapper .linkedin:hover .tooltip,
        .wrapper .linkedin:hover .tooltip::before {
          background: #0077b5;
          color: #fff;
        }

        .wrapper .email:hover,
        .wrapper .email:hover .tooltip,
        .wrapper .email:hover .tooltip::before {
          background: #ea4335;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Hero;
