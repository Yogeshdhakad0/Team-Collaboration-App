import React from 'react';
import { Link } from 'react-router-dom';
import { Users, FolderOpen, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkspaceCard = ({ workspace }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl border border-gray-300 p-4 sm:p-6 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${workspace.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-1 text-center   ">
        {workspace.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
        {workspace.description}
      </p>

      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{workspace.members} members</span>
          </div>
          <div className="flex items-center space-x-1">
            <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{workspace.projects} projects</span>
          </div>
        </div>
      </div>

      <Link
        to={`/admin/workspace/${workspace._id}`}
        className="inline-flex items-center justify-center w-full px-4 py-2 sm:py-3   bg-blue-500 hover:bg-blue-700 text-gray-700 rounded-lg  transition-colors font-medium text-sm sm:text-base"
      >
        Open Workspace
      </Link>
    </motion.div>
  );
};

export default WorkspaceCard;