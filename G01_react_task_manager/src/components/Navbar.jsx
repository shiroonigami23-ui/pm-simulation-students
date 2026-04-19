import React from 'react';
import {{ Link }} from 'react-router-dom';
export default function Navbar() {{
  return (
    <nav style={{{{background:'#4f46e5',padding:'1rem 2rem',color:'white',display:'flex',gap:'1.5rem',alignItems:'center'}}}}>
      <Link to="/" style={{{{color:'white',textDecoration:'none',fontWeight:700,fontSize:'1.2rem'}}}}>TaskFlow</Link>
    </nav>
  );
}}
