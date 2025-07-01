

// // Member.jsx
// import React, { useEffect, useState } from 'react';
// import MemberList from '../components/membercomponets/MemberList';
// import MemberDetail from '../components/membercomponets/MemberDetail';
// // Removed dummy data imports
// import { useAuth0 } from '@auth0/auth0-react';
// import { getLoginOut } from '../feature/auth/authslice';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { MemberProjectGet } from '../feature/member/memberslice';

// const Member = () => {
//   const [selectedProject, setSelectedProject] = useState(null); // Renamed to selectedProject
//   // Removed local state for members, tasks, and comments as they will come from Redux

//   const handleSelectProject = (project) => setSelectedProject(project); // Renamed handler
//   const handleBackToMembers = () => setSelectedProject(null);

//   const { isAuthenticated, isLoading, logout } = useAuth0();
//   const navgeti = useNavigate();
//   const dispatch = useDispatch();

//   const user = JSON.parse(localStorage.getItem('user'));
//   const { memberproject = [] } = useSelector((state) => state.member || {});

//   // This logic now correctly extracts unique projects from memberproject
//   const uniqueProjects = [];
//   const seenProjectIds = new Set();

//   memberproject.forEach((item) => {
//     const pid = item.projectId._id;
//     if (!seenProjectIds.has(pid)) {
//       seenProjectIds.add(pid);
//       uniqueProjects.push(item.projectId); // Store the entire project object
//     }
//   });

//   const allTasks = memberproject.map(item => ({
//     ...item.taskId,
//     projectId: item?.projectId?._id, // Add projectId to task for filtering
//     memberId: item?.memberId?._id // Add memberId to task for filtering
//   }));

//   const allComments = memberproject.flatMap(item =>
//     item.commentsId ? item.commentsId.map(comment => ({
//       ...comment,
//       taskId: item.taskId._id // Add taskId to comment for filtering
//     })) : []
//   );

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       setSelectedProject(null);
//       dispatch(getLoginOut());
//       logout({ logoutParams: { returnTo: window.location.origin } });
//       navgeti('/');
//     }
//   };

//   useEffect(() => {
//     dispatch(MemberProjectGet());
//   }, [dispatch]);

//   const handleAddComment = (taskId, commentData) => {
//     // This part would ideally interact with your backend to add a comment
//     // For now, we'll simulate an update by refetching data or updating local state
//     // For a real application, you'd dispatch an action to add the comment to the backend.
//     console.log('Add comment for task:', taskId, commentData);
//     // As we are removing local comments state, you might want to re-dispatch MemberProjectGet
//     // or handle comment addition via a Redux action that updates the state from the backend.
//   };

//   const handleEditComment = (commentId, commentData) => {
//     // This would interact with your backend to edit a comment
//     console.log('Edit comment:', commentId, commentData);
//   };

//   const handleDeleteComment = (commentId) => {
//     // This would interact with your backend to delete a comment
//     console.log('Delete comment:', commentId);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 overflow-x-auto">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-between items-start sm:items-center py-4 sm:py-6 gap-4">
//             {/* Logo and title */}
//             <div className="flex items-center gap-3 min-w-0">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <svg
//                   className="w-4 h-4 sm:w-6 sm:h-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Project Planner</h1>
//                 <p className="text-sm sm:text-base text-gray-600">Task management and collaboration tool</p>
//               </div>
//             </div>

//             {/* Stats & Profile */}
//             <div className="flex items-center flex-wrap gap-4">
//               {/* Stats */}
//               <div className="hidden sm:flex items-center gap-3 text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
//                 <span className="font-medium">{uniqueProjects.length} Projects</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="font-medium">{allTasks.length} Tasks</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="font-medium">{allComments.length} Comments</span>
//               </div>

//               {/* Profile */}
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
//                     {user?.avatar}
//                   </div>
//                   <div className="hidden sm:block">
//                     <p className="text-sm font-medium text-gray-900">{user?.name}</p>
//                     <p className="text-xs text-gray-500">{user?.email}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                     />
//                   </svg>
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Stats */}
//             <div className="sm:hidden w-full">
//               <div className="flex flex-wrap items-center gap-2 text-xs text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
//                 <span className="font-medium">{uniqueProjects.length} Projects</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="font-medium">{allTasks.length} Tasks</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="font-medium">{allComments.length} Comments</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Breadcrumb Navigation */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto">
//           <button
//             onClick={handleBackToMembers}
//             className={`hover:text-gray-900 transition-colors ${
//               !selectedProject ? 'text-blue-600 font-medium' : ''
//             }`}
//           >
//             Projects
//           </button>
//           {selectedProject && (
//             <>
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//               <span className="text-blue-600 font-medium">
//                 {selectedProject.projectname}{' '}
//               </span>
//             </>
//           )}
//         </div>
//       </nav>

//       {/* Main Section */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 overflow-x-auto">
//         {selectedProject ? (
//           <MemberDetail
//             selectedProject={selectedProject} // Pass selectedProject
//             allTasks={allTasks}
//             allComments={allComments}
//             onAddComment={handleAddComment}
//             onEditComment={handleEditComment}
//             onDeleteComment={handleDeleteComment}
//             onBack={handleBackToMembers}
//           />
//         ) : (
//           <MemberList
//             uniqueProjects={uniqueProjects} // Pass uniqueProjects
//             allTasks={allTasks}
//             onSelectProject={handleSelectProject} // Renamed prop
//           />
//         )}
//       </main>
//     </div>
//   );
// };

// export default Member;




// Member.jsx
import React, { useEffect, useState } from 'react';
import MemberList from '../components/membercomponets/MemberList';
import MemberDetail from '../components/membercomponets/MemberDetail';
import { useAuth0 } from '@auth0/auth0-react';
import { getLoginOut } from '../feature/auth/authslice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MemberProjectGet } from '../feature/member/memberslice';

const Member = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleSelectProject = (project) => setSelectedProject(project);
  const handleBackToMembers = () => setSelectedProject(null);

  const { isAuthenticated, isLoading, logout } = useAuth0();
  const navgeti = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'));
  // Ensure memberproject is always an array
  const { memberproject = [] } = useSelector((state) => state.member || {});

  // This logic now correctly extracts unique projects from memberproject
  const uniqueProjects = [];
  const seenProjectIds = new Set();

  memberproject.forEach((item) => {
    // Check if projectId exists and has an _id
    if (item.projectId && item.projectId._id) {
      const pid = item.projectId._id;
      if (!seenProjectIds.has(pid)) {
        seenProjectIds.add(pid);
        uniqueProjects.push(item.projectId); // Store the entire project object
      }
    }
  });

  // Extract all tasks, ensuring they have a projectId for filtering
  const allTasks = memberproject.map(item => ({
    ...item.taskId, // Spread task details
    _id: item?._id, // Ensure _id is at the top level of the task object
    projectId: item.projectId?._id, // Add projectId for filtering in MemberList
    assignedTo: item.assignedTo, // Keep assignedTo
    createdBy: item.createdBy, // Keep createdBy
    dueDate: item.dueDate, // Keep dueDate
    priority: item.priority, // Keep priority
    status: item.status, // Keep status
    createdAt: item.createdAt, // Keep createdAt
    updatedAt: item.updatedAt, // Keep updatedAt
    admin: item.admin || [], // Add admin comments
    member: item.member || [], // Add member comments
  }));

  // No longer flat-mapping comments globally as each task carries its own comments now.
  // allComments is not strictly needed as comments are accessed via task.admin and task.member
  // However, if you need a global list for header stats, you can combine them here.
  const allComments = memberproject.flatMap(item => {
    const adminComments = item.admin ? item.admin.map(comment => ({
      ...comment,
      taskId: item?._id,
      type: 'admin'
    })) : [];
    const memberComments = item.member ? item.member.map(comment => ({
      ...comment,
      taskId: item?._id,
      type: 'member'
    })) : [];
    return [...adminComments, ...memberComments];
  });


  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setSelectedProject(null);
      dispatch(getLoginOut());
      logout({ logoutParams: { returnTo: window.location.origin } });
      // navgeti('/');
    }
  };

  useEffect(() => {
    dispatch(MemberProjectGet());
  }, [dispatch]);

  const handleAddComment = (taskId, commentData) => {
    console.log('Add comment for task:', taskId, commentData);
    // This will be handled by the CommentForm directly via Redux
    // After adding comment, you might want to re-dispatch MemberProjectGet
    // to refresh data or update Redux state directly if your backend returns the updated task.
  };

  const handleEditComment = (commentId, commentData) => {
    console.log('Edit comment:', commentId, commentData);
    // Implement your edit logic here (e.g., dispatch an action to backend)
  };

  const handleDeleteComment = (commentId) => {
    console.log('Delete comment:', commentId);
    // Implement your delete logic here (e.g., dispatch an action to backend)
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700">Loading user profile...</div>;
  }

  if (!isAuthenticated && !user) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700">Please log in to view this page.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-start sm:items-center py-4 sm:py-6 gap-4">
            {/* Logo and title */}
            <Link to={'/'} className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Project Planner</h1>
                <p className="text-sm sm:text-base text-gray-600">Task management and collaboration tool</p>
              </div>
            </Link>

            {/* Stats & Profile */}
            <div className="flex items-center flex-wrap gap-4">
              {/* Stats */}
              <div className="hidden sm:flex items-center gap-3 text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                <span className="font-medium">{uniqueProjects.length} Projects</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium">{allTasks.length} Tasks</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium">{allComments.length} Comments</span>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.avatar ? <img src={user.avatar} alt="User Avatar" className="rounded-full w-full h-full object-cover" /> : (user?.name?.charAt(0) || 'U')}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="sm:hidden w-full">
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                <span className="font-medium">{uniqueProjects.length} Projects</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium">{allTasks.length} Tasks</span>
                <span className="text-gray-400">•</span>
                <span className="font-medium">{allComments.length} Comments</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto">
          <button
            onClick={handleBackToMembers}
            className={`hover:text-gray-900 transition-colors ${
              !selectedProject ? 'text-blue-600 font-medium' : ''
            }`}
          >
            Projects
          </button>
          {selectedProject && (
            <>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-blue-600 font-medium">
                {selectedProject.projectname}{' '}
              </span>
            </>
          )}
        </div>
      </nav>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 overflow-x-auto">
        {selectedProject ? (
          <MemberDetail
            selectedProject={selectedProject}
            // Pass the original memberproject data for the detail view to filter
            memberprojectData={memberproject}
            onAddComment={handleAddComment}
            onEditComment={handleEditComment}
            onDeleteComment={handleDeleteComment}
            onBack={handleBackToMembers}
          />
        ) : (
          <MemberList
            uniqueProjects={uniqueProjects}
            allTasks={allTasks} // Pass allTasks to MemberList for counts
            onSelectProject={handleSelectProject}
          />
        )}
      </main>
    </div>
  );
};

export default Member;