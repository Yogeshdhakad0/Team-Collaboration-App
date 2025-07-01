



// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';
// import { GetProject } from '../feature/project/projectslice';
// import { Link } from 'react-router-dom';
// import { Plus } from 'lucide-react';

// const ProjectAll = () => {
//   const dispatch = useDispatch();
//   const { projects = [] } = useSelector((state) => state.project || {});

//   useEffect(() => {
//     dispatch(GetProject());
//   }, [dispatch]);

//   return (
//     <div className="px-4 py-6 sm:px-8 md:px-12 lg:px-16 bg-gray-50 min-h-screen">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">All Projects</h2>
//         <Link to={'/dashboard'} className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
//           <Plus size={18} />
//           Back home
//         </Link>
//       </div>

//       {projects.length === 0 ? (
//         <div className="text-center py-10 sm:py-14 bg-white rounded-xl border-2 border-dashed border-gray-300 shadow-sm">
//           <div className="max-w-sm mx-auto px-4">
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects yet</h3>
//             <p className="text-gray-600 mb-4 text-sm">
//               Create your first project to start organizing tasks and collaborating with your team.
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
//             >
//               <div className="flex items-start justify-between mb-3">
//                 <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{project.name}</h3>
//                 <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
//                   {project?.status || 'Pending'}
//                 </span>
//               </div>

//               <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project?.description}</p>

//               <div className="mb-3">
//                 <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
//                   <span>Progress</span>
//                   <span>{project?.progress || 2}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//                     style={{ width: `${project?.progress || 2}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
//                 <span>Due: {new Date(project?.dueDate).toLocaleDateString()}</span>
//                 <span>{project?.members?.length || 0} members</span>
//               </div>

//               <Link
//                 to={`/project/${project._id}`}
//                 className="inline-block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-lg transition-colors text-sm"
//               >
//                 View Project
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectAll;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { GetProject } from '../feature/project/projectslice';
import { Link } from 'react-router-dom';
import { Plus, CalendarDays, Users, TrendingUp, ChevronRight } from 'lucide-react'; // TrendingUp icon retained for empty state

const ProjectAll = () => {
  const dispatch = useDispatch();
  const { projects = [] } = useSelector((state) => state.project || {});

  useEffect(() => {
    dispatch(GetProject());
      window.scrollTo(0, 0)
  }, [dispatch]);

  // Helper function for status badge styling


  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">

            {/* <Link
          to={'/dashboard'}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
        >
          <Plus size={20} />
          Back Home
        </Link> */}

 <Link
        // onClick={() => navigate('/dashboard')}
        to={'/admin/dashboard'}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Back to Home
      </Link>


        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">All Projects</h1>
    
      </div>

      {/* Conditional Rendering for Projects */}
      {projects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-300 shadow-lg flex flex-col items-center justify-center">
          <TrendingUp className="w-24 h-24 text-gray-400 mb-6" />
          <div className="max-w-md mx-auto px-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">No projects yet!</h3>
            <p className="text-gray-600 mb-6 text-base">
              It looks like you haven't created any projects. Start by creating your first project to organize tasks and collaborate with your team.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-md"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Project
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Project Header: Name and Status */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 pr-2">{project.projectname || 'Unnamed Project'}</h3>
                {/* <span className={`px-3 py-1 text-xs font-semibold rounded-full flex-shrink-0 ${getStatusBadgeClass(project.status)}`}>
                  {project?.status?.replace(/-/g, ' ') || 'Pending'}
                </span> */}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{project?.description || 'No description provided for this project.'}</p>

              {/* Removed Progress Bar section */}
              {/* <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span className="font-semibold">{project?.progress || 0}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(project?.progress || 0, 100)}%` }}
                  ></div>
                </div>
              </div> */}

              {/* Metadata: Created At, Updated At, Due Date, Members */}
              <div className="flex flex-col gap-2 text-xs text-gray-500 mb-6 mt-auto border-t pt-4 border-gray-100">
                {project.createdAt && (
                  <div className="flex items-center">
                    <CalendarDays className="w-3.5 h-3.5 mr-2 text-gray-400" />
                    <span>Created: {new Date(project.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
                {project.updatedAt && (
                  <div className="flex items-center">
                    <CalendarDays className="w-3.5 h-3.5 mr-2 text-gray-400" />
                    <span>Updated: {new Date(project.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
                {project.dueDate && (
                  <div className="flex items-center">
                    <CalendarDays className="w-3.5 h-3.5 mr-2 text-gray-400" />
                    <span>Due: {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
                {project.members && (
                  <div className="flex items-center">
                    <Users className="w-3.5 h-3.5 mr-2 text-gray-400" />
                    <span>{project.members.length || 0} members</span>
                  </div>
                )}
              </div>

              {/* View Project Button */}
              <Link
                to={`/project/${project._id}`}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-md"
              >
                View Project <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectAll;