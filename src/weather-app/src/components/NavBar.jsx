import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NavBar.css';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Link to="/">accueil</Link></li>
        <li><Link to="/weather">weather</Link></li>
        <li><Link to="/about">à propos</Link></li>
        <li><Link to="/auth">S'authentifier</Link></li>
      </ul>
    </nav>
  );
}


    