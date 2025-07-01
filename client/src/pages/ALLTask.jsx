// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { DeleteTask, edittask, GetallTask } from '../feature/task/taskslice';
// import CreateTaskModal from '../components/CreateTaskModal';
// import Fromtask from '../components/Fromtask';

// const ALLTask = () => {
// const { tasks = [] } = useSelector((state) => state.task || {})

// const navigate=useNavigate()
// const dispatch=useDispatch()
//         const [showCreateModal, setShowCreateModal] = useState(false);
//         const updatedata=(data)=>{
//    setShowCreateModal(true)
//    dispatch(edittask(data))

//  }

// const handleDelete=(id)=>{
// dispatch(DeleteTask(id))
// }

// useEffect(()=>{
// dispatch(GetallTask())
// },[dispatch])

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         ← Back to Home
//       </button>

//       <h2 className="text-2xl font-bold mb-6 text-center">All Tasks</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tasks.map(task => (
//           <motion.div
//             key={task._id}
//             className="bg-white p-5 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">{task?.taskname}</h3>
//             <p className="text-sm text-gray-600">Priority: {task.priority}</p>
//             <p className="text-sm text-gray-600">Status: {task.status}</p>
//             <p className="text-sm text-gray-600">
//               Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}
//             </p>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={() =>  updatedata(task)}
//                 className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
//               >
//               Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(task?._id)}
//                 className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>

//   {showCreateModal && (
//         <Fromtask
//   id={task?._id}
  
//           onClose={() => setShowCreateModal(false)} 
//         />
//       )}



//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ALLTask; 



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { DeleteTask, edittask, GetallTask } from '../feature/task/taskslice';
// import Fromtask from '../components/Fromtask'; // Assuming Fromtask is your edit/create modal
// import { ArrowLeft, CalendarDays, Users, Pencil, Trash2 } from 'lucide-react'; // Added icons

// const ALLTask = () => {
//   const { tasks = [] } = useSelector((state) => state.task || {});
//   const { Alluser = [] } = useSelector((state) => state.workspace || {}); // Assuming Alluser is available for assignee names

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [showCreateModal, setShowCreateModal] = useState(false);

//   // Function to get user name from ID
//   const getUserNameById = (userId) => {
//     const user = Alluser.find(user => user._id === userId);
//     return user ? user.name || user.email?.split('@')[0] || 'Unassigned' : 'Unassigned';
//   };

//   const updatedata = (data) => {
//     setShowCreateModal(true);
//     dispatch(edittask(data)); // Dispatch action to set task data for editing
//   };

//   const handleDelete = (id) => {
//     dispatch(DeleteTask(id));
//   };

//   useEffect(() => {
//     dispatch(GetallTask());
//     // You might also need to dispatch Getallusers here if Alluser is not consistently available
//     // dispatch(Getallusers()); // Uncomment if Alluser isn't loaded elsewhere
//   }, [dispatch]);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8">
//         <button
//           onClick={() => navigate('/dashboard')}
//           className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Home
//         </button>
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center flex-grow">All Tasks</h2>
//         {/* Optional: Add a "Create New Task" button here */}
//         {/* <button
//           onClick={() => { setShowCreateModal(true); dispatch(edittask(null)); }} // Clear edit data when opening for create
//           className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Create Task
//         </button> */}
//       </div>

//       {/* Task Grid */}
//       {tasks.length === 0 ? (
//         <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-300 shadow-lg flex flex-col items-center justify-center">
//           <img src="https://via.placeholder.com/100x100?text=No+Tasks" alt="No tasks" className="mb-6 opacity-60" />
//           <div className="max-w-md mx-auto px-4">
//             <h3 className="text-xl font-bold text-gray-900 mb-3">No tasks found!</h3>
//             <p className="text-gray-600 mb-6 text-base">
//               It looks like you haven't created any tasks yet.
//             </p>
//             {/* You can add a button to open the CreateTaskModal if you have one */}
//             {/* <button
//               onClick={() => { setShowCreateModal(true); dispatch(edittask(null)); }}
//               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-md"
//             >
//               <Plus className="w-5 h-5 mr-2" />
//               Create Your First Task
//             </button> */}
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//           {tasks.map((task) => (
//             <motion.div
//               key={task._id}
//               className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-200"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{task?.taskname || 'Unnamed Task'}</h3>
//               {/* <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{task?.description || 'No description provided.'}</p>  */}

//               {/* Task Details with Icons */}
//               <div className="space-y-2 text-gray-700 text-sm mb-5">
//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">Status:</span>
//                   <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${
//                     task.status === 'todo' ? 'bg-gray-500' :
//                     task.status === 'in-progress' ? 'bg-yellow-500' :
//                     task.status === 'review' ? 'bg-blue-500' :
//                     'bg-green-500' // completed
//                   }`}>
//                     {task.status?.replace(/-/g, ' ') || 'N/A'}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">Priority:</span>
//                   <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${
//                     task.priority === 'low' ? 'bg-green-400' :
//                     task.priority === 'medium' ? 'bg-orange-500' :
//                     'bg-red-600' // high
//                   }`}>
//                     {task.priority || 'N/A'}
//                   </span>
//                 </div>

//                 {task.createdAt && (
//                   <div className="flex items-center">
//                     <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>Created On: {new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                   </div>
//                 )}
                
//                 <div className="flex items-center">
//                   <Users className="w-4 h-4 mr-2 text-gray-500" />
//                   <span>Assigned To: {getUserNameById(task.assignedTo)}</span>
//                 </div>

//                 {task.dueDate && (
//                   <div className="flex items-center">
//                     <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>Due Date: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                   </div>
//                 )}
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-auto pt-4 border-t border-gray-100 flex  justify-between gap-3">
//                 <button
//                   onClick={() => updatedata(task)}
//                   className="inline-flex items-center px-4 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 shadow-sm"
//                 >
//                   <Pencil className="w-4 h-4 mr-1" /> Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(task?._id)}
//                   className="inline-flex items-center px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
//                 >
//                   <Trash2 className="w-4 h-4 mr-1" /> Delete
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* Task Modal (for Edit) */}
//       {showCreateModal && (
//         <Fromtask
//           id={tasks.find(t => t._id === useSelector(state => state.task.editTaskData?._id))?._id} // Pass the ID of the task being edited
//           onClose={() => setShowCreateModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ALLTask;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// // axios import removed as it's not directly used in component logic
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { DeleteTask, edittask, GetallTask } from '../feature/task/taskslice';
// // CreateTaskModal import removed as Fromtask is used for the modal
// import Fromtask from '../components/Fromtask'; // Assuming this is your modal for editing/creating tasks
// import { ArrowLeft, CalendarDays, Users, Pencil, Trash2, Plus } from 'lucide-react'; // Added icons

// const ALLTask = () => {
//   const { tasks = [] } = useSelector((state) => state.task || {});
//   // Assuming Alluser is available for assignee names, if not, you'll need to fetch it
//   const { Alluser = [] } = useSelector((state) => state.workspace || {}); 

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [showCreateModal, setShowCreateModal] = useState(false);

//   // Helper function to get user name from ID
//   const getUserNameById = (userId) => {
//     const user = Alluser.find(user => user._id === userId);
//     return user ? user.name || user.email?.split('@')[0] || 'Unassigned' : 'Unassigned';
//   };

//   // Function to handle updating (editing) a task
//   const updatedata = (data) => {
//     setShowCreateModal(true);
//     dispatch(edittask(data)); // This dispatches the task data to Redux for the modal to use
//   };

//   // Function to handle deleting a task
//   const handleDelete = (id) => {
//     dispatch(DeleteTask(id));
//   };

//   // Fetch all tasks on component mount
//   useEffect(() => {
//     dispatch(GetallTask());
//     // If 'Alluser' is not loaded globally or in a parent component, uncomment this:
//     // dispatch(Getallusers()); 
//   }, [dispatch]);

//   // Helper function for status badge styling
//   const getStatusBadgeClass = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'todo':
//         return 'bg-gray-500';
//       case 'in-progress':
//         return 'bg-yellow-500';
//       case 'review':
//         return 'bg-blue-500';
//       case 'completed':
//         return 'bg-green-500';
//       default:
//         return 'bg-gray-400'; // Default color for unknown status
//     }
//   };

//   // Helper function for priority badge styling
//   const getPriorityBadgeClass = (priority) => {
//     switch (priority?.toLowerCase()) {
//       case 'low':
//         return 'bg-green-400';
//       case 'medium':
//         return 'bg-orange-500';
//       case 'high':
//         return 'bg-red-600';
//       default:
//         return 'bg-gray-400'; // Default color for unknown priority
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       {/* Header and Back Button */}
//       <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
//         <button
//           onClick={() => navigate('/dashboard')}
//           className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Home
//         </button>
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center flex-grow">All Tasks</h2>
//         {/* You could add a "Create New Task" button here */}
//         {/* <button
//           onClick={() => { setShowCreateModal(true); dispatch(edittask(null)); }} // Clear edit data when opening for create
//           className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Create Task
//         </button> */}
//       </div>

//       {/* Conditional Rendering for Tasks */}
//       {tasks.length === 0 ? (
//         <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-300 shadow-lg flex flex-col items-center justify-center">
//           <img src="https://via.placeholder.com/100x100?text=No+Tasks" alt="No tasks" className="mb-6 opacity-60" />
//           <div className="max-w-md mx-auto px-4">
//             <h3 className="text-xl font-bold text-gray-900 mb-3">No tasks found!</h3>
//             <p className="text-gray-600 mb-6 text-base">
//               It looks like you haven't created any tasks yet.
//             </p>
//             {/* Optional: Add a button to open the CreateTaskModal */}
//             {/* <button
//               onClick={() => { setShowCreateModal(true); dispatch(edittask(null)); }}
//               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-md"
//             >
//               <Plus className="w-5 h-5 mr-2" />
//               Create Your First Task
//             </button> */}
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//           {tasks.map((task) => (
//             <motion.div
//               key={task._id}
//               className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-200"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{task?.taskname || 'Unnamed Task'}</h3>
//               {/* Assuming tasks have a description field */}
//               <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{task?.description || 'No description provided.'}</p> 

//               {/* Task Details with Icons and Enhanced Styling */}
//               <div className="space-y-2 text-gray-700 text-sm mb-5">
//                 {/* Status */}
//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">Status:</span>
//                   <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${getStatusBadgeClass(task.status)}`}>
//                     {task.status?.replace(/-/g, ' ') || 'N/A'}
//                   </span>
//                 </div>

//                 {/* Priority */}
//                 <div className="flex items-center justify-between">
//                   <span className="font-medium">Priority:</span>
//                   <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${getPriorityBadgeClass(task.priority)}`}>
//                     {task.priority || 'N/A'}
//                   </span>
//                 </div>

//                 {/* Created On */}
//                 {task.createdAt && (
//                   <div className="flex items-center">
//                     <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>Created On: {new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                   </div>
//                 )}
                
//                 {/* Assigned To */}
//                 <div className="flex items-center">
//                   <Users className="w-4 h-4 mr-2 text-gray-500" />
//                   <span>Assigned To: {getUserNameById(task.assignedTo)}</span>
//                 </div>

//                 {/* Due Date */}
//                 {task.dueDate && (
//                   <div className="flex items-center">
//                     <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>Due Date: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                   </div>
//                 )}
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-auto pt-4 border-t border-gray-100 flex justify-end gap-3">
//                 <button
//                   onClick={() => updatedata(task)}
//                   className="inline-flex items-center px-4 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 shadow-sm"
//                 >
//                   <Pencil className="w-4 h-4 mr-1" /> Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(task?._id)}
//                   className="inline-flex items-center px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
//                 >
//                   <Trash2 className="w-4 h-4 mr-1" /> Delete
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* Task Modal (for Edit) */}
//       {showCreateModal && (
//             <Fromtask
//           id={tasks.find(t => t._id === useSelector(state => state.task.editTaskData?._id))?._id} // Pass the ID of the task being edited
//           onClose={() => setShowCreateModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ALLTask;



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTask, edittask, GetallTask } from '../feature/task/taskslice';
import Fromtask from '../components/Fromtask';
import { ArrowLeft, CalendarDays, Users, Pencil, Trash2, Plus } from 'lucide-react';

const ALLTask = () => {
  const { tasks = [] } = useSelector((state) => state.task || {});
  const { Alluser = [] } = useSelector((state) => state.workspace || {});
  // FIX: Call useSelector unconditionally at the top level
  const editTaskData = useSelector((state) => state.task.editTaskData); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showCreateModal, setShowCreateModal] = useState(false);

  const getUserNameById = (userId) => {
    const user = Alluser.find(user => user._id === userId);
    return user ? user.name || user.email?.split('@')[0] || 'Unassigned' : 'Unassigned';
  };

  const updatedata = (data) => {
    setShowCreateModal(true);
    dispatch(edittask(data));
  };

  const handleDelete = (id) => {
    dispatch(DeleteTask(id));
  };

  useEffect(() => {
    dispatch(GetallTask());
    window.scrollTo(0, 0)
  }, [dispatch]);


  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'todo':
        return 'bg-gray-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'review':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'low':
        return 'bg-green-400';
      case 'medium':
        return 'bg-orange-500';
      case 'high':
        return 'bg-red-600';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center flex-grow">All Tasks</h2>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-300 shadow-lg flex flex-col items-center justify-center">
          <img src="https://via.placeholder.com/100x100?text=No+Tasks" alt="No tasks" className="mb-6 opacity-60" />
          <div className="max-w-md mx-auto px-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">No tasks found!</h3>
            <p className="text-gray-600 mb-6 text-base">
              It looks like you haven't created any tasks yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {tasks.map((task) => (
            <motion.div
              key={task._id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{task?.taskname || 'Unnamed Task'}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{task?.description || 'No description provided.'}</p>

              <div className="space-y-2 text-gray-700 text-sm mb-5">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Status:</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${getStatusBadgeClass(task.status)}`}>
                    {task.status?.replace(/-/g, ' ') || 'N/A'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium">Priority:</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ${getPriorityBadgeClass(task.priority)}`}>
                    {task.priority || 'N/A'}
                  </span>
                </div>

                {task.createdAt && (
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Created On: {new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}

                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
                  <span>Assigned To: {getUserNameById(task.assignedTo)}</span>
                </div>

                {task.dueDate && (
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Due Date: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-end  ">
                <button
                  onClick={() => updatedata(task)}
                  className="inline-flex items-center px-4 py-2 text-sm bg-yellow-500 text-white      rounded-l-lg hover:bg-yellow-600 transition-colors duration-200 shadow-sm"
                >
                  <Pencil className="w-4 h-4 mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(task?._id)}
                  className="inline-flex items-center px-4 py-2 text-sm bg-red-600 text-white  rounded-r-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {showCreateModal && (
        <Fromtask
          // Pass the ID from the unconditionally called useSelector
          id={editTaskData?._id}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
};

export default ALLTask;