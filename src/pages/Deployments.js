import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Plus, 
  ShoppingCart, 
  Grid, 
  List,
  SortAsc
} from 'lucide-react';
import DeploymentCard from '../components/DeploymentCard';
import { mockData } from '../utils/mockData';
import './Deployments.css';

const Deployments = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedDeployments, setSelectedDeployments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const { deployments } = mockData;

  const filteredDeployments = deployments.filter(deployment => {
    const matchesSearch = deployment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deployment.version.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || deployment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const toggleDeploymentSelection = (deploymentId) => {
    setSelectedDeployments(prev => 
      prev.includes(deploymentId) 
        ? prev.filter(id => id !== deploymentId)
        : [...prev, deploymentId]
    );
  };

  return (
    <div className="deployments-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="deployments-header">
          <div className="header-content">
            <h1>Deployments</h1>
            <p>Manage and monitor your application deployments</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={20} />
            New Deployment
          </button>
        </div>

        <div className="deployments-toolbar">
          <div className="search-section">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search deployments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-section">
              <select 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Status</option>
                <option value="success">Success</option>
                <option value="running">Running</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              
              <button className="btn btn-secondary">
                <Filter size={16} />
                More Filters
              </button>
            </div>
          </div>

          <div className="view-controls">
            <div className="view-mode-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={16} />
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </button>
            </div>
            
            <button className="btn btn-secondary">
              <SortAsc size={16} />
              Sort
            </button>
          </div>
        </div>

        {selectedDeployments.length > 0 && (
          <div className="batch-actions">
            <div className="batch-info">
              <ShoppingCart size={20} />
              <span>{selectedDeployments.length} deployments selected</span>
            </div>
            <div className="batch-buttons">
              <button className="btn btn-secondary">Batch Deploy</button>
              <button className="btn btn-danger">Remove Selected</button>
            </div>
          </div>
        )}

        <div className={`deployments-container ${viewMode}`}>
          {filteredDeployments.map((deployment, index) => (
            <motion.div
              key={deployment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="deployment-wrapper"
            >
              <div className="deployment-checkbox">
                <input
                  type="checkbox"
                  checked={selectedDeployments.includes(deployment.id)}
                  onChange={() => toggleDeploymentSelection(deployment.id)}
                />
              </div>
              <DeploymentCard deployment={deployment} />
            </motion.div>
          ))}
        </div>

        {filteredDeployments.length === 0 && (
          <div className="empty-state">
            <h3>No deployments found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Deployments;