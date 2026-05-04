import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
      },
      color: 'var(--accent)'
    },
    {
      title: 'Website Alumni IPB Jakarta',
      description: 'Platform website resmi untuk jejaring Alumni IPB Jakarta dengan antarmuka yang modern. (Bagian Frontend)',
      image: '/alumniipb.png',
      tech: ['React', 'Vite', 'CSS'],
      links: {
        github: 'https://github.com/MrafialexanderP/AlumniIPB_jakarta.git',
        live: ''
      },
      color: 'var(--accent-2)'
    },
    {
      title: 'Company Profile PT RSI',
      description: 'Website company profile perusahaan untuk PT Rekayasa Surya Home.',
      image: '/rsi.png',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: {
        github: 'https://github.com/MrafialexanderP/rekayasa-surya-home.git',
        live: ''
      },
      color: 'var(--accent-3)'
    },
    {
      title: 'Sistem Deteksi Kantuk Mahasiswa',
      description: 'Sistem cerdas berbasis penglihatan komputer (Computer Vision) untuk mendeteksi tingkat kantuk mahasiswa saat berada di kelas.',
      image: '',
      tech: ['Python', 'Computer Vision'],
      links: {
        github: 'https://github.com/MrafialexanderP/Sistem_Deteksi_Kantuk_Mahasiswa.git',
        live: ''
      },
      color: 'var(--accent-4)'
    },
    {
      title: 'Dashboard Admin Face Recognition',
      description: 'Dashboard admin terintegrasi untuk mendeteksi orang yang masuk menggunakan teknologi pengenalan wajah (Face Recognition).',
      image: '',
      tech: ['Python', 'Dashboard'],
      links: {
        github: 'https://github.com/MrafialexanderP/Dashboard_AdminUT.git',
        live: ''
      },
      color: 'var(--accent)'
    },
    {
      title: 'Dashboard Penyiraman Tanaman Otomatis',
      description: 'Sistem IoT PlanKita dengan antarmuka dashboard untuk memantau dan melakukan penyiraman tanaman secara otomatis.',
      image: '',
      tech: ['React', 'Vite', 'CSS'],
      links: {
        github: 'https://github.com/MrafialexanderP/PlanKita_Secomp.git',
        live: ''
      },
      color: 'var(--accent-2)'
    },
    {
      title: 'JR Konveksi',
      description: 'Website manajemen penjualan dan sistem kasir/login untuk kelancaran operasional toko baju JR Konveksi.',
      image: '',
      tech: ['Web', 'Dashboard'],
      links: {
        github: '',
        live: 'https://jrkonveksi.my.id/login'
      },
      color: 'var(--accent-3)'
    },
    {
      title: 'Website Kasir',
      description: 'Aplikasi sistem Point of Sale (POS) modern berbasis web untuk mengelola transaksi dengan mudah dan cepat.',
      image: '',
      tech: ['Web', 'Database'],
      links: {
        github: 'https://github.com/MrafialexanderP/Website-kasir.git',
        live: ''
      },
      color: 'var(--accent-4)'
    },
    {
      title: 'Website Potobooth Fotokan',
      description: 'Dibuat dengan desain modern, responsif, dan user-friendly untuk memberikan pengalaman pemesanan yang cepat dan praktis.',
      image: '/Fotokan.png',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      links: {
        github: '',
        live: ''
      },
      color: 'var(--accent)'
    }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-title',
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo('.project-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
    <section id="projects" className="section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title projects-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="brutal-card project-card" style={{ padding: 0, overflow: 'visible', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {/* Project Badge */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                backgroundColor: project.color,
                border: 'var(--border-width) solid var(--border-color)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.2rem',
                zIndex: 10,
                boxShadow: '4px 4px 0px 0px var(--border-color)'
              }}>
                {index + 1}
              </div>

              <div style={{ 
                height: '200px', 
                overflow: 'hidden', 
                backgroundColor: '#fff', 
                borderBottom: 'var(--border-width) solid var(--border-color)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative'
              }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(110%) grayscale(10%)' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: `repeating-linear-gradient(45deg, ${project.color}, ${project.color} 10px, var(--bg-surface) 10px, var(--bg-surface) 20px)`, opacity: 0.5 }}>
                  </div>
                )}
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: project.color }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#000', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>{project.title}</h3>
                <p style={{ color: '#000', marginBottom: '1.5rem', fontSize: '1rem', flex: 1, fontWeight: 500, borderLeft: '3px solid #000', paddingLeft: '0.5rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.5rem',
                      background: '#fff',
                      color: '#000',
                      border: '2px solid #000',
                      textTransform: 'uppercase'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', borderTop: 'var(--border-width) solid #000', paddingTop: '1rem' }}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="brutal-link">
                      <FaGithub size={18} /> Code
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="brutal-link">
                      <ExternalLink size={18} strokeWidth={3} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .brutal-link {
          color: #000;
          display: flex;
          alignItems: center;
          gap: 0.5rem;
          textDecoration: none;
          fontSize: 1rem;
          fontWeight: 800;
          textTransform: uppercase;
          background: #fff;
          padding: 0.25rem 0.5rem;
          border: 2px solid #000;
          box-shadow: 2px 2px 0px 0px #000;
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .brutal-link:hover {
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0px 0px #000;
        }
      `}</style>
    </section>
  );
};

export default Projects;
