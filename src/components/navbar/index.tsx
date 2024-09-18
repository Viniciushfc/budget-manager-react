import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/icon-logo.jpg'
import './index.css';

const Navbar: React.FC<{ user: any, onLogout: () => void }> = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h1>Budget Manager</h1>
          <img className="logo-img" src={Logo} alt="Logo" />
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          {user ? (
            <a onClick={() => { onLogout(); setMenuOpen(false); }}>Logout</a>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
