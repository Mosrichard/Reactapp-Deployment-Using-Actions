import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';
import { mockData } from '../utils/mockData';

const Analytics = () => {
  const { analytics } = mockData;
  const { deploymentTrends, performanceData, statusDistribution } = analytics;

  return (
    <div className="analytics-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="page-header">
          <h1>Analytics</h1>
          <p>Insights and metrics for your CI/CD performance</p>
        </div>

        <div className="analytics-grid">
          <div className="chart-card">
            <h3>
              <TrendingUp size={20} />
              Deployment Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deploymentTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="deployments" fill="#667eea" />
                <Bar dataKey="success" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>
              <Clock size={20} />
              Average Deploy Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#667eea" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>
              <Target size={20} />
              Deployment Status
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="metrics-summary">
            <h3>
              <Zap size={20} />
              Key Metrics
            </h3>
            <div className="metrics-list">
              <div className="metric-item">
                <span>Total Deployments</span>
                <strong>1,247</strong>
              </div>
              <div className="metric-item">
                <span>Success Rate</span>
                <strong>98.5%</strong>
              </div>
              <div className="metric-item">
                <span>Avg Deploy Time</span>
                <strong>3.2 min</strong>
              </div>
              <div className="metric-item">
                <span>Active Pipelines</span>
                <strong>24</strong>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;