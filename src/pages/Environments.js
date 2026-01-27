import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Shield, Activity } from 'lucide-react';
import { mockData } from '../utils/mockData';

const Environments = () => {
  const { environments } = mockData;
  
  const getEnvironmentIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'production': return Globe;
      case 'staging': return Server;
      case 'development': return Shield;
      case 'testing': return Activity;
      default: return Server;
    }
  };

  return (
    <div className="environments-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="page-header">
          <h1>Environments</h1>
          <p>Monitor and manage your deployment environments</p>
        </div>

        <div className="card-grid">
          {environments.map((env, index) => {
            const IconComponent = getEnvironmentIcon(env.name);
            return (
              <motion.div
                key={env.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="card-header">
                  <div className="env-icon" style={{ backgroundColor: `var(--color-${env.color})` }}>
                    <IconComponent size={24} />
                  </div>
                  <div className={`status-badge status-${env.status === 'healthy' ? 'success' : env.status}`}>
                    <Activity size={16} />
                    {env.status}
                  </div>
                </div>
                
                <h3 className="env-name">{env.name}</h3>
                <p className="env-url">{env.url}</p>
                
                <div className="env-stats">
                  <div className="stat">
                    <span>Deployments</span>
                    <strong>{env.deployments}</strong>
                  </div>
                  <div className="stat">
                    <span>Uptime</span>
                    <strong>{env.uptime}</strong>
                  </div>
                </div>
                
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                  <button className="btn btn-secondary">Deploy</button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Environments;