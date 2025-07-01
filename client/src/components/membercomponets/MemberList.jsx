


// // MemberList.jsx (Renamed to ProjectList for clarity, but keeping original name as per request)
// import { useState } from 'react';

// const MemberList = ({ uniqueProjects, allTasks, onSelectProject }) => {
//   // Renamed props and state variables for clarity
//   const [selectedProjectId, setSelectedProjectId] = useState(null);

//   const getTaskCount = (projectId) => {
//     return allTasks.filter((task) => task.projectId === projectId).length;
//   };

//   const getTaskStatusCount = (projectId, status) => {
//     return allTasks.filter((task) => task.projectId === projectId && task.status === status).length;
//   };

//   const handleProjectClick = (project) => {
//     setSelectedProjectId(project._id); // Use project._id
//     onSelectProject(project);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
//       <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Projects</h2>
//       <div className="space-y-3 sm:space-y-4">
//         {uniqueProjects.map((project) => {
//           const totalTasks = getTaskCount(project._id);
//           const completedTasks = getTaskStatusCount(project._id, 'Completed');
//           const inProgressTasks = getTaskStatusCount(project._id, 'In Progress');
//           const todoTasks = getTaskStatusCount(project._id, 'To Do');

//           return (
//             <div
//               key={project._id} // Use project._id
//               onClick={() => handleProjectClick(project)}
//               className={`p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
//                 selectedProjectId === project._id
//                   ? 'border-blue-500 bg-blue-50'
//                   : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
//                       {project.projectname}
//                     </h3>
//                     <p className="text-gray-600 text-xs sm:text-sm truncate">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-right flex-shrink-0 ml-4">
//                   <div className="text-xl sm:text-2xl font-bold text-blue-600">{totalTasks}</div>
//                   <div className="text-xs text-gray-500">Total Tasks</div>
//                 </div>
//               </div>

//               {totalTasks > 0 && (
//                 <div className="mt-3 grid grid-cols-3 gap-2 sm:flex sm:justify-between text-xs sm:text-sm">
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
//                     <span className="text-gray-700 font-medium">Completed: {completedTasks}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
//                     <span className="text-gray-700 font-medium">
//                       In Progress: {inProgressTasks}
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
//                     <span className="text-gray-700 font-medium">To Do: {todoTasks}</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MemberList;
   



// MemberList.jsx
import { useState } from 'react';

const MemberList = ({ uniqueProjects, allTasks, onSelectProject }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const getTaskCount = (projectId) => {
    // Filter allTasks which now correctly has projectId at the top level
    return allTasks.filter((task) => task.projectId === projectId).length;
  };

  const getTaskStatusCount = (projectId, status) => {
    // Filter allTasks based on projectId and status
    return allTasks.filter((task) => task.projectId === projectId && task.status === status).length;
  };

  const handleProjectClick = (project) => {
    setSelectedProjectId(project._id);
    onSelectProject(project);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Projects</h2>
      <div className="space-y-3 sm:space-y-4">
        {uniqueProjects.length === 0 ? (
          <div className="text-center py-8 sm:py-12 text-gray-500">
            <p>No projects found. Start by assigning tasks to projects!</p>
          </div>
        ) : (
          uniqueProjects.map((project) => {
            const totalTasks = getTaskCount(project._id);
            const completedTasks = getTaskStatusCount(project._id, 'Completed');
            const inProgressTasks = getTaskStatusCount(project._id, 'In Progress');
            const todoTasks = getTaskStatusCount(project._id, 'todo'); // Use 'todo' as per your data

            return (
              <div
                key={project._id}
                onClick={() => handleProjectClick(project)}
                className={`p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedProjectId === project._id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {project.projectname}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm truncate">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{totalTasks}</div>
                    <div className="text-xs text-gray-500">Total Tasks</div>
                  </div>
                </div>

                {totalTasks > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:flex sm:justify-between text-xs sm:text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Completed: {completedTasks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">
                        In Progress: {inProgressTasks}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">To Do: {todoTasks}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MemberList;