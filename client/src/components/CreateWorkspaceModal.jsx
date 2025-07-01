import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FolderOpen } from 'lucide-react';
import { useWorkspace } from '../contexts/WorkspaceContext';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateWorkspace } from '../feature/workspace/workspaceslice';

const CreateWorkspaceModal = () => {
const {id}=useParams()
const dispatch=useDispatch()
const Navigate=useNavigate()
  const [formData, setFormData] =useState({
    name: '',
  
   
  });

// members
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(formData)
   dispatch(CreateWorkspace({formData,id}))

setFormData({
  name:""
})
Navigate('/admin/dashboard')

  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Create Workspace</h2>
          <Link
           to={'/admin/dashboard'}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Workspace Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              placeholder="Enter workspace name"
              required
            />
          </div>

          {/* <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              placeholder="Brief description of the workspace"
            />
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Color
            </label>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setFormData({ ...formData, color })}
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${
                    formData.color === color ? 'ring-4 ring-blue-200' : ''
                  }`}
                >
                  <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
            <Link
             
            to={'/admin/dashboard'}
              className="flex-1 px-4 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors text-sm sm:text-base"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors text-sm sm:text-base"
            >
              Create Workspace
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateWorkspaceModal;