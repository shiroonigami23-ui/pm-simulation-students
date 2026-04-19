'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLink } from '@fortawesome/pro-solid-svg-icons'; // Pro

const projects = [
  { name: 'TaskFlow', desc: 'React-based project manager', tech: ['React','Node.js','MongoDB'], url: '#' },
  { name: 'DataHarvest', desc: 'Python CLI for data collection', tech: ['Python','Click','SQLite'], url: '#' },
  { name: 'VueShop', desc: 'E-commerce Vue.js storefront', tech: ['Vue 3','Express','Stripe'], url: '#' },
];

export default function ProjectsSection() {
  return (
    <section style={{ padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
        <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.75rem', color: '#818cf8' }} />
        Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
        {projects.map(p => (
          <div key={p.name} style={{ background: '#1e293b', borderRadius: '12px', padding: '1.5rem', border: '1px solid #334155' }}>
            <h3 style={{ marginBottom: '0.5rem', color: '#e2e8f0' }}>{p.name}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {p.tech.map(t => (
                <span key={t} style={{ background: '#312e81', color: '#a5b4fc', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem' }}>{t}</span>
              ))}
            </div>
            <a href={p.url} style={{ color: '#818cf8', textDecoration: 'none', fontSize: '0.85rem' }}>
              <FontAwesomeIcon icon={faExternalLink} style={{ marginRight: '0.4rem' }} />View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
