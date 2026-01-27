// Mock data service for the CI/CD Dashboard
export const mockData = {
  // Dashboard metrics
  metrics: [
    {
      title: 'Active Deployments',
      value: '12',
      change: '+3',
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Success Rate',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Avg Deploy Time',
      value: '4.2min',
      change: '-0.8min',
      trend: 'down',
      color: 'orange'
    },
    {
      title: 'Failed Builds',
      value: '2',
      change: '-1',
      trend: 'down',
      color: 'red'
    }
  ],

  // Deployment data
  deployments: [
    {
      id: 1,
      name: 'Frontend App',
      version: 'v2.1.4',
      environment: 'Production',
      status: 'success',
      timestamp: '2 minutes ago',
      author: 'John Doe',
      description: 'React application with latest UI updates',
      progress: 100
    },
    {
      id: 2,
      name: 'API Gateway',
      version: 'v1.8.2',
      environment: 'Staging',
      status: 'running',
      timestamp: '5 minutes ago',
      author: 'Jane Smith',
      description: 'REST API with authentication improvements',
      progress: 65
    },
    {
      id: 3,
      name: 'Database Migration',
      version: 'v3.0.1',
      environment: 'Development',
      status: 'pending',
      timestamp: '10 minutes ago',
      author: 'Mike Johnson',
      description: 'Schema updates for user management',
      progress: 0
    },
    {
      id: 4,
      name: 'Mobile App',
      version: 'v1.5.0',
      environment: 'Production',
      status: 'success',
      timestamp: '1 hour ago',
      author: 'Sarah Wilson',
      description: 'iOS and Android app with new features',
      progress: 100
    },
    {
      id: 5,
      name: 'Analytics Service',
      version: 'v2.3.1',
      environment: 'Staging',
      status: 'failed',
      timestamp: '2 hours ago',
      author: 'Tom Brown',
      description: 'Data processing and reporting service',
      progress: 45
    },
    {
      id: 6,
      name: 'Payment Gateway',
      version: 'v1.2.8',
      environment: 'Production',
      status: 'success',
      timestamp: '3 hours ago',
      author: 'Lisa Davis',
      description: 'Secure payment processing system',
      progress: 100
    },
    {
      id: 7,
      name: 'User Service',
      version: 'v1.9.3',
      environment: 'Development',
      status: 'running',
      timestamp: '4 hours ago',
      author: 'Alex Chen',
      description: 'User authentication and profile management',
      progress: 80
    },
    {
      id: 8,
      name: 'Notification Service',
      version: 'v2.1.0',
      environment: 'Staging',
      status: 'pending',
      timestamp: '5 hours ago',
      author: 'Emma Rodriguez',
      description: 'Email and push notification system',
      progress: 0
    }
  ],

  // Pipeline data
  pipelines: [
    {
      id: 1,
      name: 'Frontend CI/CD',
      status: 'running',
      lastRun: '5 minutes ago',
      success: 98.5,
      stages: ['Build', 'Test', 'Deploy'],
      duration: '3.2 min'
    },
    {
      id: 2,
      name: 'Backend API',
      status: 'success',
      lastRun: '1 hour ago',
      success: 95.2,
      stages: ['Build', 'Test', 'Security Scan', 'Deploy'],
      duration: '5.8 min'
    },
    {
      id: 3,
      name: 'Mobile App',
      status: 'pending',
      lastRun: '2 hours ago',
      success: 92.8,
      stages: ['Build', 'Test', 'Code Sign', 'Deploy'],
      duration: '8.1 min'
    },
    {
      id: 4,
      name: 'Database Migration',
      status: 'failed',
      lastRun: '3 hours ago',
      success: 89.3,
      stages: ['Backup', 'Migrate', 'Verify', 'Deploy'],
      duration: '12.4 min'
    }
  ],

  // Environment data
  environments: [
    {
      id: 1,
      name: 'Production',
      url: 'https://app.company.com',
      status: 'healthy',
      deployments: 45,
      uptime: '99.9%',
      color: 'green',
      lastDeployment: '2 hours ago'
    },
    {
      id: 2,
      name: 'Staging',
      url: 'https://staging.company.com',
      status: 'healthy',
      deployments: 128,
      uptime: '98.5%',
      color: 'blue',
      lastDeployment: '30 minutes ago'
    },
    {
      id: 3,
      name: 'Development',
      url: 'https://dev.company.com',
      status: 'warning',
      deployments: 256,
      uptime: '95.2%',
      color: 'orange',
      lastDeployment: '5 minutes ago'
    },
    {
      id: 4,
      name: 'Testing',
      url: 'https://test.company.com',
      status: 'healthy',
      deployments: 89,
      uptime: '97.8%',
      color: 'blue',
      lastDeployment: '1 hour ago'
    }
  ],

  // Activity feed data
  activities: [
    {
      id: 1,
      type: 'deployment',
      title: 'Frontend App deployed to Production',
      description: 'v2.1.4 successfully deployed',
      timestamp: '2 minutes ago',
      status: 'success',
      user: 'John Doe'
    },
    {
      id: 2,
      type: 'commit',
      title: 'New commit pushed to main branch',
      description: 'Fix: Update API endpoint configuration',
      timestamp: '5 minutes ago',
      status: 'info',
      user: 'Jane Smith'
    },
    {
      id: 3,
      type: 'deployment',
      title: 'API Gateway deployment started',
      description: 'v1.8.2 deploying to Staging',
      timestamp: '8 minutes ago',
      status: 'running',
      user: 'Mike Johnson'
    },
    {
      id: 4,
      type: 'alert',
      title: 'High memory usage detected',
      description: 'Database server exceeding 85% memory',
      timestamp: '12 minutes ago',
      status: 'warning',
      user: 'System'
    },
    {
      id: 5,
      type: 'success',
      title: 'All tests passed',
      description: 'Test suite completed successfully',
      timestamp: '15 minutes ago',
      status: 'success',
      user: 'CI System'
    },
    {
      id: 6,
      type: 'deployment',
      title: 'Mobile App build completed',
      description: 'v1.5.0 ready for deployment',
      timestamp: '20 minutes ago',
      status: 'success',
      user: 'Sarah Wilson'
    }
  ],

  // Analytics data
  analytics: {
    deploymentTrends: [
      { name: 'Mon', deployments: 12, success: 11, failed: 1 },
      { name: 'Tue', deployments: 19, success: 18, failed: 1 },
      { name: 'Wed', deployments: 15, success: 14, failed: 1 },
      { name: 'Thu', deployments: 22, success: 21, failed: 1 },
      { name: 'Fri', deployments: 18, success: 17, failed: 1 },
      { name: 'Sat', deployments: 8, success: 8, failed: 0 },
      { name: 'Sun', deployments: 5, success: 5, failed: 0 }
    ],
    performanceData: [
      { name: 'Jan', time: 4.2 },
      { name: 'Feb', time: 3.8 },
      { name: 'Mar', time: 4.1 },
      { name: 'Apr', time: 3.5 },
      { name: 'May', time: 3.2 },
      { name: 'Jun', time: 2.9 }
    ],
    statusDistribution: [
      { name: 'Success', value: 85, color: '#10b981' },
      { name: 'Failed', value: 10, color: '#ef4444' },
      { name: 'Pending', value: 5, color: '#f59e0b' }
    ]
  }
};

// Utility functions
export const getStatusColor = (status) => {
  switch (status) {
    case 'success': return '#10b981';
    case 'running': return '#3b82f6';
    case 'pending': return '#f59e0b';
    case 'failed': return '#ef4444';
    case 'warning': return '#f59e0b';
    case 'healthy': return '#10b981';
    default: return '#6b7280';
  }
};

export const formatTimestamp = (timestamp) => {
  // In a real app, this would format actual dates
  return timestamp;
};

export const calculateProgress = (status) => {
  switch (status) {
    case 'success': return 100;
    case 'running': return Math.floor(Math.random() * 40) + 40; // 40-80%
    case 'pending': return 0;
    case 'failed': return Math.floor(Math.random() * 30) + 20; // 20-50%
    default: return 0;
  }
};