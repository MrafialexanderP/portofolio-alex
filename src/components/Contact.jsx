import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Let's talk about your next project</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>hello@rafialexander.dev</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 400px' }} className="glass-card">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    background: 'rgba(15, 23, 42, 0.5)', 
                    color: '#fff',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }} 
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    background: 'rgba(15, 23, 42, 0.5)', 
                    color: '#fff',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }} 
                />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  placeholder="Hello, I'd like to talk about..."
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    background: 'rgba(15, 23, 42, 0.5)', 
                    color: '#fff',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }} 
                ></textarea>
              </div>
              <button className="btn-primary" style={{ justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
