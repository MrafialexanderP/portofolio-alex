import React from 'react';
import { FaReact, FaJs, FaHtml5, FaPython, FaUnity } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss, SiBlender } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs size={36} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={36} color="#61DAFB" /> },
    { name: 'TypeScript', icon: <SiTypescript size={36} color="#3178C6" /> },
    { name: 'Vite', icon: <SiVite size={36} color="#646CFF" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} color="#06B6D4" /> },
    { name: 'HTML & CSS', icon: <FaHtml5 size={36} color="#E34F26" /> },
    { name: 'Python', icon: <FaPython size={36} color="#3776AB" /> },
    { name: 'Unity', icon: <FaUnity size={36} color="#ffffff" /> },
    { name: 'Blender', icon: <SiBlender size={36} color="#F5792A" /> }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px' }} className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Who I am</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am a passionate Software Developer with a strong focus on Frontend Development. I love creating beautiful, interactive, and user-friendly web applications.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              My journey involves not just web development, but also exploring game development with Unity and 3D modeling with Blender, allowing me to bring a unique, multidimensional perspective to UI/UX design.
            </p>
          </div>

          <div style={{ flex: '1 1 400px' }} className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>My Skills</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  padding: '1.5rem 1rem', 
                  borderRadius: '12px', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}
                className="skill-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {skill.icon}
                  <span style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.9rem' }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
