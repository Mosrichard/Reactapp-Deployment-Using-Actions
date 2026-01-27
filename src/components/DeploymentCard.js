import React from 'react';
import { Play, Pause, RotateCcw, Eye, ShoppingCart } from 'lucide-react';
import './DeploymentCard.css';

const DeploymentCard = ({ deployment }) => {
  const { name, version, environment, status, timestamp, author } = deployment;

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'green';
      case 'running': return 'blue';
      case 'pending': return 'orange';
      case 'failed': return 'red';
      default: return 'gray';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return <Play size={16} />;
      case 'pending': return <Pause size={16} />;
      case 'failed': return <RotateCcw size={16} />;
      default: return null;
    }
  };

  return (
    <div className="deployment-card">
      <div className="deployment-header">
        <div className="deployment-info">
          <h3 className="deployment-name">{name}</h3>
          <span className="deployment-version">{version}</span>
        </div>
        <div className={`status-badge status-${getStatusColor(status)}`}>
          {getStatusIcon(status)}
          <span>{status}</span>
        </div>
      </div>

      <div className="deployment-details">
        <div className="detail-item">
          <span className="detail-label">Environment</span>
          <span className="detail-value">{environment}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Author</span>
          <span className="detail-value">{author}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Deployed</span>
          <span className="detail-value">{timestamp}</span>
        </div>
      </div>

      <div className="deployment-actions">
        <button className="btn btn-secondary">
          <Eye size={16} />
          View Logs
        </button>
        <button className="btn btn-primary">
          <ShoppingCart size={16} />
          Add to Queue
        </button>
      </div>

      {status === 'running' && (
        <div className="deployment-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: '65%' }}
            ></div>
          </div>
          <span className="progress-text">65% Complete</span>
        </div>
      )}
    </div>
  );
};

export default DeploymentCard;