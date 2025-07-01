




// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft, Plus, Download } from 'lucide-react';

// import Sidebar from '../components/Sidebar';
// import CreateTaskModal from '../components/CreateTaskModal';

// import { useDispatch, useSelector } from 'react-redux';
// import { GetallTask, GetSingleTask } from '../feature/task/taskslice';
// import { GetProject } from '../feature/project/projectslice';
// import { Getallusers } from '../feature/workspace/workspaceslice';

// const ProjectView = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { projects = [] } = useSelector((state) => state.project || {});
//   const { tasks = [] } = useSelector((state) => state.task || {});
//   const [showCreateModal, setShowCreateModal] = useState(false);

//   // ✅ Fetch data when component mounts
//   useEffect(() => {
//     dispatch(GetProject());
//     dispatch(GetallTask());
//         dispatch(Getallusers());
//   }, [dispatch]);

//   // ✅ Find current project and its tasks
//   const project = projects.find((p) => p._id === id);
//   const tasksingle = tasks.filter((t) => t.projectId === id);

//   // ✅ Handle loading or missing data
//   if (!projects.length || !tasks.length) {
//     return <div className="p-8">Loading project data...</div>;
//   }

//   if (!project) {
//     return <div className="p-8">Project not found</div>;
//   }

//   // 📄 Export to PDF function
//   const exportToPDF = async () => {
//     const { jsPDF } = await import('jspdf');
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text(project?.name || 'Project Tasks', 20, 20);

//     let yPosition = 40;
//     tasksingle.forEach((task) => {
//       doc.setFontSize(12);
//       doc.text(`• ${task.taskname}`, 20, yPosition);
//       doc.setFontSize(10);
//       doc.text(`  Assignee: ${task.assignedTo || 'Unassigned'}`, 25, yPosition + 5);
//       doc.text(`  Due: ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}`, 25, yPosition + 10);
//       doc.text(`  Status: ${task.status}`, 25, yPosition + 15);
//       doc.text(`  Priority: ${task.priority}`, 25, yPosition + 20);
//       yPosition += 30;

//       if (yPosition > 270) {
//         doc.addPage();
//         yPosition = 20;
//       }
//     });

//     doc.save(`${project?.name || 'project'}-tasks.pdf`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar />

//       <div className="flex-1 lg:ml-64">
//         <div className="p-4 sm:p-6 lg:p-8">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
//             <div className="flex items-center bg-blue-600 px-1 py-2 rounded-xl text-white">
//               <Link
//                 to={`/workspace/${project.workspaceId}`}
//                 className="flex items-center hover:bg-blue-700 mr-4 text-sm sm:text-base"
//               >
//                 <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Back to Workspace
//               </Link>
//             </div>

//             <div className="flex flex-wrap items-center gap-2 sm:gap-3">
//               <button
//                 onClick={exportToPDF}
//                 className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
//               >
//                 <Download className="w-4 h-4 mr-1 sm:mr-2" />
//                 Export PDF
//               </button>
//             </div>
//           </div>

//           {/* Project Info */}
//           <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//               <div className="flex-1 min-w-0">
//                 <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{project.Projectname}pppp</h1>
//                 <p className="text-gray-600 mb-4 text-sm sm:text-base">{project?.description}</p>
//                 {/* <span className={`px-3 py-1 text-sm font-medium rounded-full ${
//                   project.status === 'active' ? 'bg-green-100 text-green-800' :
//                   project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
//                   'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {project?.status}
//                 </span> */}
//               </div>

//               <Link
//                 to="/allmembers"
//                 state={id}
//                 className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
//               >
//                 <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 Add Task
//               </Link>
//             </div>
//           </div>

//           {/* Tasks Section */}
//           <h1 className="mt-10 text-center font-bold text-xl">Project Task</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
//             {tasksingle.map((task) => (
//               <div key={task._id} className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">{task.taskname}</h2>

//                 <div className="mb-1 text-sm text-gray-600">
//                   <strong>Due:</strong> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}
//                 </div>

//                 <div className="mb-1 text-sm mt-3">
//                   <strong>Status:</strong>{' '}
//                   <span className={`px-2 py-1 rounded-sm ml-5 text-white text-xs ${
//                     task.status === 'todo' ? 'bg-gray-500' :
//                     task.status === 'in-progress' ? 'bg-yellow-500' :
//                     task.status === 'review' ? 'bg-blue-500' :
//                     'bg-green-500'
//                   }`}>
//                     {task.status}
//                   </span>
//                 </div>

//                 <div className="mb-2 text-sm mt-2">
//                   <strong>Priority:</strong>{' '}
//                   <span className={`px-2 py-1 ml-3 rounded-sm text-white text-xs ${
//                     task.priority === 'low' ? 'bg-green-400' :
//                     task.priority === 'medium' ? 'bg-yellow-500' :
//                     'bg-red-500'
//                   }`}>
//                     {task.priority}
//                   </span>
//                 </div>

//                 <button className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
//                   View Task
//                 </button>
                
//                 <Link
//                 to={`/project/task/commnet/${task._id}`}
//                 className="mt-2 px-4 py-2 rounded-lg ml-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
//                   add  comment
//                 </Link>
//               </div>
//             ))}

//             {/* No Task UI */}
//             {tasksingle.length === 0 && (
//               <div className="text-center py-8 sm:py-12 bg-white rounded-xl border-2 border-dashed border-gray-300 col-span-full">
//                 <div className="max-w-sm mx-auto px-4">
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">No Task yet</h3>
//                   <p className="text-gray-600 mb-4 text-sm sm:text-base">
//                     Create your first task to start organizing tasks and collaborating with your team.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showCreateModal && (
//         <CreateTaskModal id={id} onClose={() => setShowCreateModal(false)} />
//       )}
//     </div>
//   );
// };

// export default ProjectView;




import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Download, Calendar, Users, SquareCheckBig } from 'lucide-react'; // Added icons for styling

import Sidebar from '../components/Sidebar';
import CreateTaskModal from '../components/CreateTaskModal';

import { useDispatch, useSelector } from 'react-redux';
import { GetallTask } from '../feature/task/taskslice';
import { GetProject } from '../feature/project/projectslice';
import { Getallusers } from '../feature/workspace/workspaceslice';

const ProjectView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { projects = [] } = useSelector((state) => state.project || {});
  const { tasks = [] } = useSelector((state) => state.task || {});
  const { Alluser = [] } = useSelector((state) => state.workspace || {}); // To get user names for assignees

  const [showCreateModal, setShowCreateModal] = useState(false);

  // Fetch data when component mounts - (No change in useEffect logic)
  useEffect(() => {
    dispatch(GetProject());
    dispatch(GetallTask());
    dispatch(Getallusers());
  }, [dispatch]);

  // Find current project and its tasks - (No change in project/task filtering logic)
  const project = projects.find((p) => p._id === id);
  const tasksingle = tasks.filter((t) => t.projectId === id);

  // Handle loading or missing data - (No change in loading/error state logic)
  if (!projects.length || !tasks.length) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-50"><p className="text-xl text-gray-700 font-semibold">Loading project data...</p></div>;
  }

  if (!project) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-50"><p className="text-xl text-red-600 font-semibold">Project not found.</p></div>;
  }

  // Helper to get user name from ID (Added for display in task card)
  const getUserNameById = (userId) => {
    const user = Alluser.find(user => user._id === userId);
    return user ? user.name || user.email?.split('@')[0] || 'Unknown User' : 'Unassigned';
  };

  // Export to PDF function - (No change in PDF export logic)
  const exportToPDF = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(project?.projectname || 'Project Tasks', 20, 20); // Used project?.projectname here for consistency

    let yPosition = 40;
    tasksingle.forEach((task) => {
      doc.setFontSize(12);
      doc.text(`• ${task.taskname}`, 20, yPosition);
      doc.setFontSize(10);
      doc.text(`  Assignee: ${getUserNameById(task.assignedTo)}`, 25, yPosition + 5); // Using helper
      doc.text(`  Due: ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}`, 25, yPosition + 10);
      doc.text(`  Status: ${task.status}`, 25, yPosition + 15);
      doc.text(`  Priority: ${task.priority}`, 25, yPosition + 20);
      yPosition += 30;

      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
    });

    doc.save(`${project?.projectname || 'project'}-tasks.pdf`); // Used project?.projectname here for consistency
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="flex items-center bg-blue-600 px-1 py-2 rounded-xl text-white">
            <Link
              to={`/admin/workspace/${project.workspaceId}`}
              className="flex items-center hover:bg-blue-700 mr-4 text-sm sm:text-base px-3 py-1.5 rounded-md" // Added padding & border-radius
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Back to Workspace
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={exportToPDF}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base shadow-md" // Added shadow
            >
              <Download className="w-4 h-4 mr-1 sm:mr-2" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Project Info - ENHANCED STYLING HERE */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-100"> {/* Increased padding, added border */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight"> {/* Larger, bolder text */}
                {project.projectname} {/* Corrected from Projectname to projectname */}
              </h1>
              <p className="text-gray-600 mb-4 text-base sm:text-lg pr-4">{project?.description || 'No description provided.'}</p> {/* Larger text, fallback for description */}

              {/* Added Project Creation Date, Update Date, and Total Tasks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-sm text-gray-600 mt-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Created: {new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                {project.updatedAt && ( // Only show if updatedAt exists
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Updated: {new Date(project.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <SquareCheckBig className="w-4 h-4 text-gray-500" />
                  <span>Total Tasks: {tasksingle.length}</span> {/* Display total tasks */}
                </div>
              </div>
            </div>

            {/* Original "Add Task" button - functionality remains the same */}
            <Link
              to="/admin/allmembers"
              state={id}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base shadow-md"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Add Task
            </Link>
          </div>
        </div>

        {/* Tasks Section Header */}
        <h2 className="mt-10 text-center font-bold text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8">Project Tasks</h2> {/* Larger, bolder heading */}

        {/* Tasks List - ENHANCED STYLING HERE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"> {/* Adjusted grid for more columns on larger screens, increased gap */}
          {tasksingle.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300 col-span-full flex flex-col items-center justify-center min-h-[250px]">
              <SquareCheckBig className="w-16 h-16 text-gray-400 mb-5" />
              <div className="max-w-md mx-auto px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No tasks found for this project</h3>
                <p className="text-gray-600 mb-6 text-base">
                  Create your first task to start organizing tasks and collaborating with your team.
                </p>
                {/* No functional change, keeps original behavior if you click "Add Task" from this empty state */}
                <Link
                  to="/allmembers"
                  state={id}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-md"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create First Task
                </Link>
              </div>
            </div>
          ) : (
            tasksingle.map((task) => (
              <motion.div
                key={task._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{task.taskname}</h3> {/* Larger, bolder task name */}

                <div className="space-y-2 text-gray-700 text-sm mb-4 flex-grow"> {/* Added flex-grow to push buttons down */}
                  {/* Task Status */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Status:</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${ // Styled badge
                      task.status === 'todo' ? 'bg-gray-500' :
                      task.status === 'in-progress' ? 'bg-yellow-500' :
                      task.status === 'review' ? 'bg-blue-500' :
                      'bg-green-500'
                    }`}>
                      {task.status?.replace(/-/g, ' ') || 'N/A'} {/* Replaced hyphens for cleaner display */}
                    </span>
                  </div>

                  {/* Task Creation Date */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Created On:</span>
                    <span className="text-gray-600">{task.createdAt ? new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}</span>
                  </div>

                  {/* Assigned Member's Name */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Assigned To:</span>
                    <span className="text-gray-600">{getUserNameById(task.assignedTo)}</span>
                  </div>
                  
                  {/* Task Priority (kept original logic, just styled) */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Priority:</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${
                      task.priority === 'low' ? 'bg-green-500' :
                      task.priority === 'medium' ? 'bg-orange-500' :
                      'bg-red-600'
                    }`}>
                      {task.priority || 'N/A'}
                    </span>
                  </div>

                  {/* Due Date (kept original logic, just styled) */}
                  {task.dueDate && (
                     <div className="flex items-center justify-between">
                       <span className="font-medium">Due Date:</span>
                       <span className="text-gray-600">{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                     </div>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between gap-3"> {/* Pushes buttons to bottom, adds top border */}
                 
                  <Link
                    to={`/admin/project/task/commnet/${task._id}`}
                    className="flex-1 text-center px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-md"
                  >
                    Add Comment
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Modal - (No change in modal logic) */}
      {showCreateModal && (
        <CreateTaskModal id={id} onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default ProjectView;