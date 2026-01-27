import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './MetricCard.css';

const MetricCard = ({ title, value, change, trend, icon: Icon, color }) => {
  return (
    <div className={`metric-card metric-${color}`}>
      <div className="metric-header">
        <div className="metric-icon">
          <Icon size={24} />
        </div>
        <div className="metric-trend">
          {trend === 'up' ? (
            <TrendingUp size={16} className="trend-up" />
          ) : (
            <TrendingDown size={16} className="trend-down" />
          )}
          <span className={`change ${trend === 'up' ? 'positive' : 'negative'}`}>
            {change}
          </span>
        </div>
      </div>
      
      <div className="metric-content">
        <h3 className="metric-value">{value}</h3>
        <p className="metric-title">{title}</p>
      </div>
      
      <div className="metric-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.random() * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;