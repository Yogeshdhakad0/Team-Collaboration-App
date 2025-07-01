



// // TaskCard.jsx (No changes needed for this component, it will filter comments internally)
// import { useState } from 'react';
// import CommentSection from './CommentSection';

// const TaskCard = ({ task, comments, onAddComment, onEditComment, onDeleteComment }) => {
//   const [showComments, setShowComments] = useState(false);
// console.log(task)
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed':
//         return 'bg-green-100 text-green-800 border-green-200';
//       case 'In Progress':
//         return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//       case 'To Do':
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'High':
//         return 'bg-red-100 text-red-800 border-red-200';
//       case 'Medium':
//         return 'bg-orange-100 text-orange-800 border-orange-200';
//       case 'Low':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   // Filter comments for this specific task using taskId (now _id from backend)
//   console.log(comments)
//   const taskComments = comments.filter((comment) => comment.taskId === task._id);

//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
//       <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 space-y-2 sm:space-y-0">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pr-0 sm:pr-4">
//           {task?.
// taskname
//           }
        
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           <span
//             className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
//               task.status
//             )}`}
//           >
//             {task.status}
//           </span>
//           <span
//             className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
//               task.priority
//             )}`}
//           >
//             {task.priority}
//           </span>
//         </div>
//       </div>

//       <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
//         {task?.description}
//       </p>

//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
//         <span className="font-medium">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
//         <span className="font-medium">Created: {new Date(task.createdAt).toLocaleDateString()}</span>
//       </div>

//       <div className="border-t border-gray-200 pt-3 sm:pt-4">
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
//         >
//           <svg
//             className="w-4 h-4 sm:w-5 sm:h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//             />
//           </svg>
//           <span className="text-sm sm:text-base">Comments ({taskComments.length})</span>
//           <svg
//             className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
//               showComments ? 'rotate-180' : ''
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//         {showComments && (
//           <div className="mt-3 sm:mt-4">
//             <CommentSection
//               taskId={task._id} // Pass task._id
//               comments={taskComments}
//               onAddComment={onAddComment}
//               onEditComment={onEditComment}
//               onDeleteComment={onDeleteComment}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskCard;



// TaskCard.jsx
import { useState } from 'react';
import CommentSection from './CommentSection';

const TaskCard = ({ task, onAddComment, onEditComment, onDeleteComment }) => {
  const [showComments, setShowComments] = useState(false);

  // Helper function for status colors
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'todo': // Changed from 'To Do' to 'todo' based on your provided data
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Helper function for priority colors
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': // Changed from 'High' to 'high'
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': // Changed from 'Medium' to 'medium'
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': // Changed from 'Low' to 'low'
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Combine admin and member comments for this task
  const allTaskComments = [
    ...(task.admin || []),
    ...(task.member || []),
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 space-y-2 sm:space-y-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pr-0 sm:pr-4">
          {task.taskname}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
              task.status
            )}`}
          >
            {task.status}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
              task.priority
            )}`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
        {task.description}
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
        <span className="font-medium">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        <span className="font-medium">Created: {new Date(task.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="border-t border-gray-200 pt-3 sm:pt-4">
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-sm sm:text-base">Comments ({allTaskComments.length})</span>
          <svg
            className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
              showComments ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showComments && (
          <div className="mt-3 sm:mt-4">
            <CommentSection
              taskId={task._id} // Pass the task's _id
              comments={allTaskComments} // Pass combined comments for this task
              onAddComment={onAddComment}
              onEditComment={onEditComment}
              onDeleteComment={onDeleteComment}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;