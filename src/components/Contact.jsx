import React, { useLayoutEffect, useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `New Message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:alexanderpmrafi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Membuka aplikasi email default pengguna
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    e.target.reset(); // Kosongkan form setelah sukses
    
    // Hilangkan status sukses setelah 3 detik
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus(null);
    }, 3000);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate title (enlarge)
      gsap.fromTo('.contact-title',
        { scale: 0.5, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 85%',
            once: true
          }
        }
      );

      // Animate left panel (info)
      gsap.fromTo('.contact-info',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );

      // Animate right panel (form fields stagger)
      gsap.fromTo('.contact-form-group',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="section" ref={containerRef} style={{ backgroundColor: 'var(--accent-3)' }}>
      <div className="container">
        <h2 className="section-title contact-title" style={{ color: '#fff' }}>Get In Touch</h2>

        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>

          <div style={{ flex: '1 1 300px' }} className="contact-info brutal-card">
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>Let's talk about your next project</h3>
            <p style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', border: 'var(--border-width) solid var(--border-color)', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', boxShadow: '4px 4px 0px 0px var(--border-color)' }}>
                  <Mail size={30} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.25rem', fontWeight: 900, textTransform: 'uppercase' }}>Email</h4>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>alexanderpmrafi@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', border: 'var(--border-width) solid var(--border-color)', background: 'var(--accent-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', boxShadow: '4px 4px 0px 0px var(--border-color)' }}>
                  <MapPin size={30} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.25rem', fontWeight: 900, textTransform: 'uppercase' }}>Location</h4>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 400px' }} className="brutal-card contact-form">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="JOHN DOE"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: 'var(--border-width) solid var(--border-color)',
                    background: '#fff',
                    color: '#000',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    boxShadow: '4px 4px 0px 0px var(--border-color)',
                    transition: 'box-shadow 0.1s'
                  }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--border-color)'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border-color)'}
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="JOHN@EXAMPLE.COM"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: 'var(--border-width) solid var(--border-color)',
                    background: '#fff',
                    color: '#000',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    boxShadow: '4px 4px 0px 0px var(--border-color)',
                    transition: 'box-shadow 0.1s'
                  }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--border-color)'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border-color)'}
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="HELLO, I'D LIKE TO TALK ABOUT..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: 'var(--border-width) solid var(--border-color)',
                    background: '#fff',
                    color: '#000',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    boxShadow: '4px 4px 0px 0px var(--border-color)',
                    transition: 'box-shadow 0.1s',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--border-color)'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border-color)'}
                ></textarea>
              </div>
              <div className="contact-form-group">
                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn" 
                  style={{ justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1, width: '100%', marginTop: '1rem', padding: '1rem', transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : (
                    <>SEND MESSAGE <Send size={20} strokeWidth={3} /></>
                  )}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div style={{ backgroundColor: '#4ade80', border: 'var(--border-width) solid #000', padding: '1rem', marginTop: '1rem', fontWeight: 800, textAlign: 'center', boxShadow: '4px 4px 0px 0px #000' }}>
                  PESAN ANDA BERHASIL DIKIRIM!
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ backgroundColor: '#f87171', border: 'var(--border-width) solid #000', padding: '1rem', marginTop: '1rem', fontWeight: 800, textAlign: 'center', boxShadow: '4px 4px 0px 0px #000' }}>
                  GAGAL MENGIRIM PESAN. COBA LAGI NANTI.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
      <style>{`
        .form-submit-btn:hover {
          transform: scale(1.05) translate(2px, 2px) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
