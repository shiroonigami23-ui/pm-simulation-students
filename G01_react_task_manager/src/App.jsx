import React from 'react';
import {{ Routes, Route }} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
function App() {{
  return (<><Navbar/><div className="container"><Routes><Route path="/" element={{<Dashboard/>}}/></Routes></div></>);
}}
export default App;
