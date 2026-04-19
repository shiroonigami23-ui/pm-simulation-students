export default function SkillsSection() {
  const skills = ['React','Vue','Next.js','Node.js','Python','Django','Flask',
    'MongoDB','PostgreSQL','Docker','Git','AWS','Figma'];
  return (
    <section style={{ padding:'4rem 2rem', background:'#1e293b', textAlign:'center' }}>
      <h2 style={{ fontSize:'2rem', fontWeight:700, marginBottom:'2rem' }}>Skills</h2>
      <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center', maxWidth:'800px', margin:'0 auto' }}>
        {skills.map(s => (
          <span key={s} style={{ background:'#0f172a', border:'1px solid #334155', color:'#e2e8f0',
            padding:'0.5rem 1.2rem', borderRadius:'20px', fontSize:'0.9rem' }}>{s}</span>
        ))}
      </div>
    </section>
  );
}
