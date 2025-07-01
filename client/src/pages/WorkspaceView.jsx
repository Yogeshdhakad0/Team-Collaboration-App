

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft, Plus, Users, Calendar, MoreVertical } from 'lucide-react';
// import Sidebar from '../components/Sidebar';
// import { useDispatch, useSelector } from 'react-redux';
// import { CreateProject, GetSingleiProject } from '../feature/project/projectslice';
// import { GetWorkspace } from '../feature/workspace/workspaceslice';

// const WorkspaceView = () => {
//   const { id } = useParams(); // workspaceId from URL

//   const { singleiprojects = [] } = useSelector((state) => state.project || {});
// const { Workspaces = [] } = useSelector((state) => state.workspace || {});

//   const dispatch=useDispatch()


//    const handleCreateProject = () => {
//     const newProject = {
//       ...formData,
    
//     };
//     setShowForm(false);
   
//     setFormData({ projectname: '', description: '' });
 
//     dispatch(CreateProject({formData,id}))





//   };
// useEffect(()=>{
// dispatch(GetSingleiProject(id))
//   dispatch(GetWorkspace());
// },[dispatch ,])



//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ projectname: '', description: '' });

//   const workspace = Workspaces.find(w => w._id === id);

//   if (!workspace) {
//     return <div>Workspace not found</div>;
//   }

//   const workspaceProjects = singleiprojects.filter(p => p.workspaceId === id);

//  console.log(workspaceProjects)

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar />
//       <div className="flex-1 lg:ml-64">
//         <div className="p-4 sm:p-6 lg:p-8">
//           <div className="flex items-center mb-6 sm:mb-8 ">
//             <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4 text-sm  bg-blue-500  px-1  py-1 rounded-md sm:text-base">
//               <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//               Back to Dashboard 
//             </Link>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//               <div className="flex items-center space-x-3 sm:space-x-4">
//                 <div className={`w-12 h-12 sm:w-16 sm:h-16 ${workspace.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
//                   <span className="text-lg sm:text-2xl font-bold text-white">
//                     {workspace.name.charAt(0).toUpperCase()}
//                   </span>
//                 </div>
//                 <div className="min-w-0 flex-1">
//                   <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
//                     {workspace.name}
//                   </h1>
//                   <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">{workspace.description}</p>
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
//                     <div className="flex items-center space-x-1">
//                       <Users className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span>{workspace.members} members</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span>Created {new Date(workspace.createdAt).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button className="text-gray-400 hover:text-gray-600 self-start sm:self-center">
//                 <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Projects</h2>
//             <button
//               onClick={() => setShowForm(true)}
//               className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
//             >
//               <Plus className="w-4 h-4 mr-2" />
//               New Project
//             </button>
//           </div>

//           {showForm && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//               <div className="bg-white border border-gray-300 rounded-xl p-6 w-full max-w-md shadow-xl">
//                 <h3 className="text-lg font-semibold mb-4 text-center">Create New Project</h3>
//                 <input
//                   type="text"
//                   placeholder="Project Name"
//                   className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formData.projectname}
//                   onChange={(e) => setFormData({ ...formData, projectname: e.target.value })}
//                 />
//                 <textarea
//                   placeholder="Project Description"
//                   className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 ></textarea>
//                 <div className="flex justify-end gap-2">
//                   <button onClick={handleCreateProject} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create</button>
//                   <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Render projects */}
//           {workspaceProjects.length === 0 ? (
//             <div className="text-center py-8 sm:py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
//               <div className="max-w-sm mx-auto px-4">
//                 <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">No projects yet</h3>
//                 <p className="text-gray-600 mb-4 text-sm sm:text-base">
//                   Create your first project to start organizing tasks and collaborating with your team.
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
//               {workspaceProjects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 pr-2">{project.name}</h3>
//                     <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
//                       {project?.status}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project?.description}</p>
//                   <div className="mb-4">
//                     <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
//                       <span>Progress</span>
//                       <span>{project?.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${project?.progress}%` }}></div>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
//                     <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
//                     <span>{project?.members?.length} members</span>
//                   </div>
//                   <Link to={`/project/${project._id}`} className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
//                     View Project
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkspaceView;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Users, Calendar, MoreVertical, LayoutDashboard, Flag } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProject, GetSingleiProject } from '../feature/project/projectslice';
import { GetWorkspace } from '../feature/workspace/workspaceslice';

const WorkspaceView = () => {
  const { id } = useParams(); // workspaceId from URL

  const { singleiprojects = [] } = useSelector((state) => state.project || {});
  const { Workspaces = [] } = useSelector((state) => state.workspace || {});

  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ projectname: '', description: '' });

  // Find the current workspace
  const workspace = Workspaces.find(w => w._id === id);

  // Filter projects belonging to this workspace
  const projectsInWorkspace = singleiprojects.filter(p => p.workspaceId === id);

  const handleCreateProject = () => {
    dispatch(CreateProject({ formData, id }));
    setShowForm(false);
    setFormData({ projectname: '', description: '' });
    window.location.reload()
  };

  useEffect(() => {
    dispatch(GetSingleiProject(id));
    dispatch(GetWorkspace());
     window.scrollTo(0, 0)
  }, [dispatch, id]);

  // Loading state or Not found state for workspace
  if (!workspace) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-xl text-gray-700 font-semibold">Loading workspace or Workspace not found...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
        {/* Back to Dashboard Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200
                       text-sm font-medium px-3 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        {/* Workspace Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-grow">
              {/* Workspace Avatar/Initial */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 ${workspace.color || 'bg-indigo-500'} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
              >
                <span className="text-xl sm:text-2xl font-extrabold text-white">
                  {workspace.name ? workspace.name.charAt(0).toUpperCase() : 'W'}
                </span>
              </div>
              {/* Workspace Info */}
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 leading-tight">
                  {workspace.name}
                </h1>
                <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base pr-4 line-clamp-2">
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500">
                  {/* <div className="flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>{workspace.members || 0} members</span>
                  </div> */}
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>Created {new Date(workspace.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>Updated {new Date(workspace.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LayoutDashboard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>{projectsInWorkspace.length} Projects</span>
                  </div>
                </div>
              </div>
            </div>
            {/* More Options Button */}
            <button className="text-gray-400 hover:text-gray-600 self-start md:self-center p-2 rounded-full hover:bg-gray-100 transition-colors">
              <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Projects Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Projects in {workspace.name}</h2>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-colors text-base font-medium shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Project
          </button>
        </div>

        {/* Create Project Modal/Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-md shadow-2xl border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-5 text-center text-gray-900">Create New Project</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                  <input
                    id="projectName"
                    type="text"
                    placeholder="e.g., Website Redesign"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.projectname}
                    onChange={(e) => setFormData({ ...formData, projectname: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    id="projectDescription"
                    placeholder="Briefly describe the project goals..."
                    rows="4"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
                >
                  Create Project
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Render projects */}
        {projectsInWorkspace.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[300px]">
            <Flag className="w-16 h-16 text-gray-400 mb-5" />
            <div className="max-w-md mx-auto px-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No projects found in this workspace</h3>
              <p className="text-gray-600 mb-6 text-base">
                Start by creating your first project to organize tasks, track progress, and collaborate with your team.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-md"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create First Project
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projectsInWorkspace.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 pr-2">{project.projectname}</h3>
                  {project.status && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 flex-shrink-0">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>

                {/* Progress Bar (assuming 'progress' field exists) */}
                {project.progress !== undefined && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Meta info: Creation Date, Due Date, Members */}
                <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-500 mb-5 mt-auto">
                  {/* Added Creation Date */}
                  {project.createdAt && (
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" />
                      <span>Created: {new Date(project.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  )}
                  {project.dueDate && (
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" />
                      <span>Due: {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  )}
                  {project.members && project.members.length > 0 && (
                    <div className="flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1 text-gray-400" />
                      <span>{project.members.length} members</span>
                    </div>
                  )}
                </div>

                {/* View Project Button */}
                <Link
                  to={`/admin/project/${project._id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-400 text-gray-700 rounded-lg
                              transition-colors font-medium text-sm sm:text-base border border-gray-200"
                >
                  View Project
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspaceView;