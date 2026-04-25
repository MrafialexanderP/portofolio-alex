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
      image: '/rsi.png',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: {
        github: 'https://github.com/MrafialexanderP/rekayasa-surya-home.git',
        live: ''
      }
    },
    {
      title: 'Sistem Deteksi Kantuk Mahasiswa',
      description: 'Sistem cerdas berbasis penglihatan komputer (Computer Vision) untuk mendeteksi tingkat kantuk mahasiswa saat berada di kelas.',
      image: '',
      tech: ['Python', 'Computer Vision'],
      links: {
        github: 'https://github.com/MrafialexanderP/Sistem_Deteksi_Kantuk_Mahasiswa.git',
        live: ''
      }
    },
    {
      title: 'Dashboard Admin Face Recognition',
      description: 'Dashboard admin terintegrasi untuk mendeteksi orang yang masuk menggunakan teknologi pengenalan wajah (Face Recognition).',
      image: '',
      tech: ['Python', 'Dashboard'],
      links: {
        github: 'https://github.com/MrafialexanderP/Dashboard_AdminUT.git',
        live: ''
      }
    },
    {
      title: 'Dashboard Penyiraman Tanaman Otomatis',
      description: 'Sistem IoT PlanKita dengan antarmuka dashboard untuk memantau dan melakukan penyiraman tanaman secara otomatis.',
      image: '',
      tech: ['IoT', 'Web Dashboard'],
      links: {
        github: 'https://github.com/MrafialexanderP/PlanKita_Secomp.git',
        live: ''
      }
    },
    {
      title: 'JR Konveksi',
      description: 'Website manajemen penjualan dan sistem kasir/login untuk kelancaran operasional toko baju JR Konveksi.',
      image: '', 
      tech: ['Web', 'Dashboard'],
      links: {
        github: '',
        live: 'https://jrkonveksi.my.id/login'
      }
    },
    {
      title: 'Website Kasir',
      description: 'Aplikasi sistem Point of Sale (POS) modern berbasis web untuk mengelola transaksi dengan mudah dan cepat.',
      image: '',
      tech: ['Web', 'Database'],
      links: {
        github: 'https://github.com/MrafialexanderP/Website-kasir.git',
        live: ''
      }
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
    <section id="projects" className="section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title projects-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', overflow: 'hidden', backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                ) : (
                  <div style={{ color: 'var(--text-secondary)', textAlign: 'center', opacity: 0.5 }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>📷</span>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>No Image Available</p>
                  </div>
                )}
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
