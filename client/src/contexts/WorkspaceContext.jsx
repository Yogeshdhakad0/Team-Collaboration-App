import React, { createContext, useContext, useState } from 'react';

const WorkspaceContext = createContext(undefined);

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};

export const WorkspaceProvider = ({ children }) => {
  const [workspaces, setWorkspaces] = useState([
    {
      id: '1',
      name: 'Marketing Team',
      description: 'Digital marketing campaigns and content strategy',
      color: 'bg-blue-500',
      members: 8,
      projects: 3,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Product Development',
      description: 'Feature development and product roadmap',
      color: 'bg-green-500',
      members: 12,
      projects: 5,
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'Design System',
      description: 'UI/UX design and component library',
      color: 'bg-purple-500',
      members: 6,
      projects: 2,
      createdAt: '2024-01-20'
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      workspaceId: '1',
      status: 'active',
      progress: 65,
      dueDate: '2024-03-15',
      members: ['user1', 'user2', 'user3']
    },
    {
      id: '2',
      name: 'Mobile App Launch',
      description: 'iOS and Android app development',
      workspaceId: '2',
      status: 'active',
      progress: 40,
      dueDate: '2024-04-30',
      members: ['user2', 'user4', 'user5']
    }
  ]);

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Design homepage mockup',
      description: 'Create initial design concepts for the new homepage',
      projectId: '1',
      assignee: 'John Doe',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-02-15',
      createdAt: '2024-02-01'
    },
    {
      id: '2',
      title: 'Setup development environment',
      description: 'Configure local development setup for the project',
      projectId: '1',
      assignee: 'Jane Smith',
      status: 'done',
      priority: 'medium',
      dueDate: '2024-02-10',
      createdAt: '2024-02-01'
    },
    {
      id: '3',
      title: 'Content strategy meeting',
      description: 'Plan content structure and messaging',
      projectId: '1',
      assignee: 'Mike Johnson',
      status: 'todo',
      priority: 'low',
      dueDate: '2024-02-20',
      createdAt: '2024-02-01'
    }
  ]);

  const createWorkspace = (workspaceData) => {
    const newWorkspace = {
      ...workspaceData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setWorkspaces(prev => [...prev, newWorkspace]);
  };

  const createProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Date.now().toString()
    };
    setProjects(prev => [...prev, newProject]);
  };

  const createTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const value = {
    workspaces,
    projects,
    tasks,
    createWorkspace,
    createProject,
    createTask,
    updateTask,
    deleteTask
  };

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
};