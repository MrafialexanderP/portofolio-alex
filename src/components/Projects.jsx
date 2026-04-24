import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Company Profile CS Corp',
      description: 'Website company profile untuk CS Corp yang responsif dan interaktif. Dikerjakan bersama tim BGEO (Bagian Frontend).',
      image: '/cscorp.png',
      tech: ['React', 'JavaScript', 'CSS'],
      links: {
        github: '',
        live: 'https://cscorp.co.id/'
      }
    },
    {
      title: 'Website Alumni IPB Jakarta',
      description: 'Platform website resmi untuk jejaring Alumni IPB Jakarta dengan antarmuka yang modern. (Bagian Frontend)',
      image: '/alumniipb.png',
      tech: ['React', 'Vite', 'CSS'],
      links: {
        github: 'https://github.com/MrafialexanderP/AlumniIPB_jakarta.git',
        live: ''
      }
    },
    {
      title: 'Company Profile PT RSI',
      description: 'Website company profile perusahaan untuk PT Rekayasa Surya Home.',
      image: '/rsi.png', // Ganti dengan nama file gambar Anda di folder public
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: {
        github: 'https://github.com/MrafialexanderP/rekayasa-surya-home.git',
        live: ''
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#fff' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--accent)',
                      borderRadius: '999px'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                      <FaGithub size={18} /> Code
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
