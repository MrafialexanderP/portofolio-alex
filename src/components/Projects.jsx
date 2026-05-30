import React, { useLayoutEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const colors = ['#FFD600', '#FF8AD8', '#52D3D8', '#CFFF5E'];
  
  const projects = [
    {
      title: 'Company Profile CS Corp',
      description: 'Website company profile untuk CS Corp yang responsif dan interaktif. Dikerjakan bersama tim BGEO (Bagian Frontend).',
      image: '/cscorp.png',
      tech: ['React', 'JavaScript', 'CSS'],
      links: { github: '', live: 'https://cscorp.co.id/' },
    },
    {
      title: 'Website Alumni IPB Jakarta',
      description: 'Platform website resmi untuk jejaring Alumni IPB Jakarta dengan antarmuka yang modern. (Bagian Frontend)',
      image: '/alumniipb.png',
      tech: ['React', 'Vite', 'CSS'],
      links: { github: 'https://github.com/MrafialexanderP/AlumniIPB_jakarta.git', live: '' },
    },
    {
      title: 'Company Profile PT RSI',
      description: 'Website company profile perusahaan untuk PT Rekayasa Surya Home.',
      image: '/rsi.png',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: { github: 'https://github.com/MrafialexanderP/rekayasa-surya-home.git', live: '' },
    },
    {
      title: 'Sistem Deteksi Kantuk Mahasiswa',
      description: 'Sistem cerdas berbasis penglihatan komputer (Computer Vision) untuk mendeteksi tingkat kantuk mahasiswa saat berada di kelas.',
      image: '',
      tech: ['Python', 'Computer Vision'],
      links: { github: 'https://github.com/MrafialexanderP/Sistem_Deteksi_Kantuk_Mahasiswa.git', live: '' },
    },
    {
      title: 'Dashboard Admin Face Recognition',
      description: 'Dashboard admin terintegrasi untuk mendeteksi orang yang masuk menggunakan teknologi pengenalan wajah (Face Recognition).',
      image: '',
      tech: ['Python', 'Dashboard'],
      links: { github: 'https://github.com/MrafialexanderP/Dashboard_AdminUT.git', live: '' },
    },
    {
      title: 'Dashboard Penyiraman Tanaman Otomatis',
      description: 'Sistem IoT PlanKita dengan antarmuka dashboard untuk memantau dan melakukan penyiraman tanaman secara otomatis.',
      image: '',
      tech: ['React', 'Vite', 'CSS'],
      links: { github: 'https://github.com/MrafialexanderP/PlanKita_Secomp.git', live: '' },
    },
    {
      title: 'JR Konveksi',
      description: 'Website manajemen penjualan dan sistem kasir/login untuk kelancaran operasional toko baju JR Konveksi.',
      image: '',
      tech: ['Web', 'Dashboard'],
      links: { github: '', live: 'https://jrkonveksi.my.id/login' },
    },
    {
      title: 'Website Kasir',
      description: 'Aplikasi sistem Point of Sale (POS) modern berbasis web untuk mengelola transaksi dengan mudah dan cepat.',
      image: '',
      tech: ['Web', 'Database'],
      links: { github: 'https://github.com/MrafialexanderP/Website-kasir.git', live: '' },
    },
    {
      title: 'Website Potobooth Fotokan',
      description: 'Dibuat dengan desain modern, responsif, dan user-friendly untuk memberikan pengalaman pemesanan yang cepat dan praktis.',
      image: '/Fotokan.png',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      links: { github: '', live: '' },
    }
  ];

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Stagger reveal when section enters
      gsap.fromTo('.project-card',
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Horizontal Scroll Logic
      // Calculate dynamic width based on the actual scrollWidth of the horizontal container
      const getScrollAmount = () => {
        let projectsWidth = wrapperRef.current.scrollWidth;
        // Calculate the total distance to move the wrapper so the last item touches the right edge
        // Adding a bit of buffer
        let paddingBuffer = window.innerWidth < 768 ? 50 : window.innerWidth * 0.1;
        return -(projectsWidth - window.innerWidth + paddingBuffer); 
      };

      const tween = gsap.to(wrapperRef.current, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${wrapperRef.current.scrollWidth}`, // Scroll duration equals width
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section" ref={containerRef} style={{ overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title projects-title">Featured Projects</h2>
      </div>

      <div style={{ width: '100%', paddingLeft: 'max(1rem, calc((100vw - 1200px) / 2))', overflowX: 'hidden' }}>
        <div ref={wrapperRef} className="projects-wrapper flex flex-row gap-6 md:gap-10 w-max py-8 pr-[10vw]">
          {projects.map((project, index) => {
            const cardColor = colors[index % colors.length];
            return (
            <div key={index} className="brutal-card project-card group" style={{ 
              padding: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              minWidth: '380px',
              height: '500px', // Fixed shorter height
              backgroundColor: cardColor,
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s'
            }}>
              
              {/* Huge Background Number */}
              <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                fontSize: '12rem',
                fontWeight: 900,
                color: '#000',
                opacity: 0.1,
                lineHeight: 1,
                pointerEvents: 'none',
                zIndex: 0
              }}>
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Top Image Area (35% height) */}
              <div style={{ 
                height: '35%', 
                overflow: 'hidden', 
                backgroundColor: '#fff', 
                borderBottom: 'var(--border-width) solid var(--border-color)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(110%) grayscale(20%)', transition: 'transform 0.5s' }}
                    className="group-hover:scale-110"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: `repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 10px)`, opacity: 0.2 }}>
                  </div>
                )}
              </div>

              {/* Bottom Info Area */}
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#000', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>{project.title}</h3>
                
                <p style={{ color: '#000', marginBottom: '1.5rem', fontSize: '1.1rem', flex: 1, fontWeight: 600, borderLeft: '4px solid #000', paddingLeft: '1rem', lineHeight: 1.5 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      padding: '0.25rem 0.75rem',
                      background: '#fff',
                      color: '#000',
                      border: '2px solid #000',
                      textTransform: 'uppercase',
                      boxShadow: '2px 2px 0px 0px #000'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', borderTop: 'var(--border-width) solid #000', paddingTop: '1.5rem' }}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="brutal-btn">
                      <FaGithub size={20} /> Code
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="brutal-btn">
                      <ExternalLink size={20} strokeWidth={3} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
      <style>{`
        .project-card:hover {
          transform: translateY(-15px) rotate(2deg) !important;
          box-shadow: 16px 16px 0px 0px var(--border-color) !important;
          z-index: 20;
        }

        .brutal-btn {
          color: #000;
          display: flex;
          alignItems: center;
          justifyContent: center;
          gap: 0.5rem;
          textDecoration: none;
          fontSize: 1rem;
          fontWeight: 900;
          textTransform: uppercase;
          background: #fff;
          padding: 0.5rem 1rem;
          border: 3px solid #000;
          box-shadow: 4px 4px 0px 0px #000;
          transition: transform 0.1s, box-shadow 0.1s, background-color 0.1s;
        }
        .brutal-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px 0px #000;
          background: #000;
          color: #fff;
        }

        @media (max-width: 1024px) {
          .project-card {
            max-width: 85vw !important;
            min-width: 85vw !important;
            height: 450px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
