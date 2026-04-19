export default function ContactSection() {
  return (
    <section style={{ padding:'4rem 2rem', textAlign:'center' }}>
      <h2 style={{ fontSize:'2rem', fontWeight:700, marginBottom:'1rem' }}>Get In Touch</h2>
      <p style={{ color:'#94a3b8', marginBottom:'2rem' }}>Open to freelance projects and full-time opportunities.</p>
      <a href="mailto:alex@example.com"
         style={{ background:'#4f46e5', color:'white', padding:'0.8rem 2rem', borderRadius:'8px', textDecoration:'none', fontWeight:600 }}>
        Send Email
      </a>
    </section>
  );
}
