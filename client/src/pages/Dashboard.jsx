
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, FolderOpen, Calendar, BarChart3 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

import Sidebar from '../components/Sidebar';
import WorkspaceCard from '../components/WorkspaceCard';
import StatsCard from '../components/StatsCard';
import Allmember from '../components/Allmember';
import CreateWorkspaceModal from '../components/CreateWorkspaceModal';
import { Getallusers, GetWorkspace } from '../feature/workspace/workspaceslice';
import { GetProject } from '../feature/project/projectslice';
import { GetAllComment } from '../feature/comment/commentslice';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();

  const { Workspaces = [], Alluser = [] } = useSelector((state) => state.workspace || {});
  const { projects = [] } = useSelector((state) => state.project || {});
  const { commetall = {} } = useSelector((state) => state.comment || {});

  const admin = commetall?.admin?.length || 0;
  const member = commetall?.member?.length || 0;
  const totalcomment = admin + member;

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [memberall, setmemberall] = useState(false);

  useEffect(() => {
    dispatch(Getallusers());
    dispatch(GetWorkspace());
    dispatch(GetProject());
    dispatch(GetAllComment());
     window.scrollTo(0, 0)
  }, [dispatch]);

  const stats = [
    {
      title: 'Total Workspaces',
      value: Workspaces.length,
      icon: <FolderOpen className="w-6 h-6" />,
      color: 'blue-500',
    },
    {
      title: 'Active Projects',
      value: projects.length,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'green-500',
    },
    {
      title: 'Team Members',
      value: Alluser.length,
      icon: <Users className="w-6 h-6" />,
      color: 'purple-500',
    },
    {
      title: 'Total Comments',
      value: totalcomment,
      icon: <Calendar className="w-6 h-6" />,
      color: 'orange-500',
    },
  ];

  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8 ">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name || 'User'}!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Here's what's happening with your teams today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatsCard {...stat} />
              </motion.div>
            ))}
          </div>

          {/* Workspaces */}
          <div className="sm:gap-8">
            <div className="xl:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Workspaces</h2>
                <button
                  onClick={() => setmemberall(memberall?false:true)}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New workspace
                </button>
              </div>

              {memberall ? (
                <Allmember />
              ) : Workspaces.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300"
                >
                  <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No workspaces yet
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base px-4">
                    Create your first workspace to get started with your team collaboration.
                  </p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Workspace
                  </button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {Workspaces.map((workspace, index) => (
                    <motion.div
                      key={workspace._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <WorkspaceCard workspace={workspace} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showCreateModal && (
        <CreateWorkspaceModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
