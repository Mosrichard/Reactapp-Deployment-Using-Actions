import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Rocket, 
  GitBranch, 
  Server, 
  BarChart3,
  ShoppingCart,
  Package
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/deployments', icon: Rocket, label: 'Deployments' },
    { path: '/pipelines', icon: GitBranch, label: 'Pipelines' },
    { path: '/environments', icon: Server, label: 'Environments' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Main</h3>
        <nav className="sidebar-nav">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink 
              key={path}
              to={path} 
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="sidebar-section">
        <h3>Quick Actions</h3>
        <div className="quick-actions">
          <button className="quick-action-btn">
            <Package size={16} />
            <span>Deploy Queue</span>
            <span className="badge">3</span>
          </button>
          <button className="quick-action-btn">
            <ShoppingCart size={16} />
            <span>Batch Deploy</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;