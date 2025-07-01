


// // MemberDetail.jsx (Renamed to ProjectDetail for clarity, but keeping original name as per request)
// import { useSelector } from 'react-redux';
// import TaskCard from './TaskCard';



// const MemberDetail = ({

//   selectedProject, // Renamed prop from member to selectedProject
//   allTasks, // Changed from tasks to allTasks
//   allComments, // Changed from comments to allComments
//   onAddComment,
//   onEditComment,
//   onDeleteComment,
//   onBack,
// }) => {
//   // Filter tasks belonging to the selected project
//   const { memberproject = [] } = useSelector((state) => state.member || {});
//   const projectTasks = memberproject.filter((task) => task.projectId._id === selectedProject._id);
// console.log(projectTasks)


//   // console.log(memberproject)

//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
//       <div className="flex items-center justify-between mb-4 sm:mb-6">
//         <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
//           <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
//             {selectedProject.projectname.charAt(0)} {/* Display first letter of project name */}
//           </div>
//           <div className="min-w-0 flex-1">
//             <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
//               {selectedProject.projectname}
              
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base truncate">
//               {selectedProject.description}
//             </p>
//             {/* Removed member.email and member.role as we are showing project details now */}
//           </div>
//         </div>
//         <div className="text-right flex-shrink-0 ml-4">
//           <div className="text-2xl sm:text-3xl font-bold text-blue-600">
//             {projectTasks.length}
//           </div>
//           <div className="text-xs sm:text-sm text-gray-500">Total Tasks</div>
//         </div>
//       </div>

//       <div className="mb-4 sm:mb-6">
//         <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
//           Tasks for this Project
//         </h3>
//         {projectTasks.length === 0 ? (
//           <div className="text-center py-8 sm:py-12">
//             <svg
//               className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//               />
//             </svg>
//             <p className="text-gray-500 text-sm sm:text-base">
//               No tasks assigned to this project yet.
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-4 sm:space-y-6">
//             {projectTasks.map((task) => (
//               <TaskCard
//                 key={task._id} // Use _id from backend
//                 task={task}
//                 comments={allComments} // Pass all comments
//                 onAddComment={onAddComment}
//                 onEditComment={onEditComment}
//                 onDeleteComment={onDeleteComment}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MemberDetail;




// MemberDetail.jsx
import TaskCard from './TaskCard';

const MemberDetail = ({
  selectedProject,
  memberprojectData, // Now receiving the full memberproject array
  onAddComment,
  onEditComment,
  onDeleteComment,
  onBack,
}) => {
  // Filter tasks that belong to the selected project directly from memberprojectData
  const projectTasks = memberprojectData.filter((item) => item.projectId?._id === selectedProject._id);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
            {selectedProject.projectname.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
              {selectedProject.projectname}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base truncate">
              {selectedProject.description}
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          <div className="text-2xl sm:text-3xl font-bold text-blue-600">
            {projectTasks.length}
          </div>
          <div className="text-xs sm:text-sm text-gray-500">Total Tasks</div>
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
          Tasks for this Project
        </h3>
        {projectTasks.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <p className="text-gray-500 text-sm sm:text-base">
              No tasks assigned to this project yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {projectTasks.map((taskItem) => ( // Renamed to taskItem to avoid conflict with task.taskId.taskname
              <TaskCard
                key={taskItem._id} // Use the _id of the taskItem (the main record)
                task={taskItem} // Pass the entire taskItem object
                onAddComment={onAddComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberDetail;