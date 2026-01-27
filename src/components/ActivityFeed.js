import React from 'react';
import { Activity, GitCommit, Rocket, AlertTriangle, CheckCircle } from 'lucide-react';
import './ActivityFeed.css';

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'deployment': return Rocket;
      case 'commit': return GitCommit;
      case 'alert': return AlertTriangle;
      case 'success': return CheckCircle;
      default: return Activity;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return '#10b981';
      case 'running': return '#3b82f6';
      case 'warning': return '#f59e0b';
      case 'error': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>
          <Activity size={20} />
          Activity Feed
        </h2>
        <button className="btn btn-secondary">View All</button>
      </div>

      <div className="activity-list">
        {activities.map((activity, index) => {
          const IconComponent = getActivityIcon(activity.type);
          return (
            <div key={activity.id} className="activity-item">
              <div 
                className="activity-icon"
                style={{ backgroundColor: getStatusColor(activity.status) }}
              >
                <IconComponent size={16} />
              </div>
              
              <div className="activity-content">
                <h4 className="activity-title">{activity.title}</h4>
                <p className="activity-description">{activity.description}</p>
                <span className="activity-timestamp">{activity.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;