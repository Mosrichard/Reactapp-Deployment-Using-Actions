import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Play, Pause, Settings } from 'lucide-react';
import { mockData } from '../utils/mockData';

const Pipelines = () => {
  const { pipelines } = mockData;

  return (
    <div className="pipelines-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="page-header">
          <h1>CI/CD Pipelines</h1>
          <p>Manage your continuous integration and deployment pipelines</p>
        </div>

        <div className="card-grid">
          {pipelines.map((pipeline, index) => (
            <motion.div
              key={pipeline.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="card-header">
                <div className="card-title">
                  <GitBranch size={20} />
                  <h3>{pipeline.name}</h3>
                </div>
                <div className={`status-badge status-${pipeline.status}`}>
                  {pipeline.status}
                </div>
              </div>
              
              <div className="pipeline-stages">
                {pipeline.stages.map((stage, idx) => (
                  <div key={idx} className="stage-item">
                    <div className="stage-dot"></div>
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
              
              <div className="pipeline-stats">
                <div className="stat">
                  <span>Success Rate</span>
                  <strong>{pipeline.success}%</strong>
                </div>
                <div className="stat">
                  <span>Last Run</span>
                  <strong>{pipeline.lastRun}</strong>
                </div>
              </div>
              
              <div className="card-actions">
                <button className="btn btn-primary">
                  <Play size={16} />
                  Run Pipeline
                </button>
                <button className="btn btn-secondary">
                  <Settings size={16} />
                  Configure
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Pipelines;