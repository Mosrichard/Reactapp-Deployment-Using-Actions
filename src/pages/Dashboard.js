import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Rocket,
  GitBranch,
  Server,
  Activity
} from 'lucide-react';
import MetricCard from '../components/MetricCard';
import DeploymentCard from '../components/DeploymentCard';
import ActivityFeed from '../components/ActivityFeed';
import { mockData } from '../utils/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const { metrics, deployments: allDeployments, activities } = mockData;
  
  // Get recent deployments (first 3)
  const recentDeployments = allDeployments.slice(0, 3);

  return (
    <div className="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Monitor your CI/CD pipeline performance</p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MetricCard 
                {...metric} 
                icon={metric.title.includes('Deployments') ? Rocket : 
                      metric.title.includes('Success') ? CheckCircle :
                      metric.title.includes('Time') ? Clock : AlertCircle}
              />
            </motion.div>
          ))}
        </div>

        <div className="dashboard-content">
          <div className="deployments-section">
            <h2>Recent Deployments</h2>
            <div className="deployments-grid">
              {recentDeployments.map((deployment, index) => (
                <motion.div
                  key={deployment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DeploymentCard deployment={deployment} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="activity-section">
            <ActivityFeed activities={activities} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;