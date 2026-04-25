import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="/logo.png" alt="UNISHARE Logo" style={{ height: '44px', objectFit: 'contain' }} />
          <span className="logo-text">UNISHARE</span>
        </NavLink>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/courses" className="nav-link" onClick={() => setIsOpen(false)}>Courses</NavLink>
          <NavLink to="/results" className="nav-link" onClick={() => setIsOpen(false)}>Results</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
