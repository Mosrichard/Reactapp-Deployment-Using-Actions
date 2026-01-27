import React from 'react';
import { Search, Bell, User, Settings } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>CI/CD Hub</h1>
        <span className="beta-badge">Pro</span>
      </div>
      
      <div className="navbar-search">
        <Search size={20} />
        <input 
          type="text" 
          placeholder="Search deployments, pipelines..." 
          className="search-input"
        />
      </div>
      
      <div className="navbar-actions">
        <button className="nav-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <button className="nav-btn">
          <Settings size={20} />
        </button>
        <div className="user-avatar">
          <User size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;