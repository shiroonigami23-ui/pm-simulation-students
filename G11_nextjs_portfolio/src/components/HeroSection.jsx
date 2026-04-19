'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/pro-solid-svg-icons'; // Pro icons
import { faArrowDown } from '@fortawesome/pro-regular-svg-icons';         // Pro icons

export default function HeroSection() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '2rem', background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
        Hi, I'm <span style={{ color: '#818cf8' }}>Alex Dev</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', marginBottom: '2rem' }}>
        Full-Stack Developer | Open Source Contributor | Problem Solver
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
        <a href="https://github.com" style={{ color: '#e2e8f0', fontSize: '1.5rem' }}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com" style={{ color: '#e2e8f0', fontSize: '1.5rem' }}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <FontAwesomeIcon icon={faArrowDown} style={{ color: '#818cf8', fontSize: '1.5rem', animation: 'bounce 1s infinite' }} />
    </section>
  );
}
