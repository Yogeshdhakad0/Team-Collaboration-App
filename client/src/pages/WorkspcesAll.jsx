// import React, { useEffect } from 'react'
// import WorkspaceCard from '../components/WorkspaceCard'
// import { useDispatch, useSelector } from 'react-redux'
// import { FolderOpen, Plus } from 'lucide-react'
// import { motion } from 'framer-motion';
// import RecentActivity from '../components/RecentActivity';
// const WorkspcesAll = () => {

//     const dispatch=useDispatch()

//     const { Workspaces } = useSelector((state) => state.workspace);



//   return (
//            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
//             {/* Workspaces */}
//             <div className="xl:col-span-2">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Workspaces</h2>
//                 <button
//                   onClick={() => setmemberall(true)}
//                   className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   New workspace
//                 </button>
//               </div>

            

//               {Workspaces.length === 0 ? (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center py-8 sm:py-12 bg-white rounded-xl border-2 border-dashed border-gray-300"
//                 >
//                   <FolderOpen className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
//                     No workspaces yet
//                   </h3>
//                   <p className="text-gray-600 mb-4 text-sm sm:text-base px-4">
//                     Create your first workspace to get started with your team collaboration.
//                   </p>
//                   <button
//                     onClick={() => setShowCreateModal(true)}
//                     className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
//                   >
//                     <Plus className="w-4 h-4 mr-2" />
//                     Create Workspace
//                   </button>
//                 </motion.div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                   {Workspaces.map((workspace, index) => (
//                     <motion.div
//                       key={workspace._id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       <WorkspaceCard workspace={workspace} />
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//             </div>

         
         
//           </div>
//   )
// }

// export default WorkspcesAll





import React, { useEffect, useState } from 'react';
import WorkspaceCard from '../components/WorkspaceCard';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, FolderOpen, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { GetWorkspace } from '../feature/workspace/workspaceslice';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const WorkspcesAll = () => {
  const dispatch = useDispatch();
  const [setShowCreateModal, setShowCreateModalState] = useState(false);
  const [setmemberall, setmemberallState] = useState(false);
  const { Workspaces } = useSelector((state) => state.workspace);
    
const  Navigate=useNavigate()
  useEffect(() => {
    dispatch(GetWorkspace());
      window.scrollTo(0, 0)
  }, [dispatch]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 bg-[#f4f8fb] min-h-screen  sm:pt-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">

              <button
          onClick={() => Navigate('/admin/dashboard')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2a4e]">
            Your Workspaces
          </h2>
          {/* <Link
          to={'/dashboard'}
            
            className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm sm:text-base shadow-md"
          >
            <Plus className="w-4 h-4 mr-2" />
           Back home
          </Link> */}
        </div>

        {/* Workspaces */}
        {Workspaces.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <FolderOpen className="w-14 h-14 sm:w-16 sm:h-16 text-[#1b2a4e] mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-[#1b2a4e] mb-2">
              No workspaces yet
            </h3>
            <p className="text-gray-600 mb-5 text-sm sm:text-base px-4 max-w-md mx-auto">
              Create your first workspace to get started with your team collaboration.
            </p>
            <button
              onClick={() => setShowCreateModalState(true)}
              className="inline-flex items-center px-6 py-2.5 bg-[#26c6da] text-white rounded-full hover:bg-[#1fb3ca] transition text-sm sm:text-base shadow-lg"
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
  );
};

export default WorkspcesAll;
