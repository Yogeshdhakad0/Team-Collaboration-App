





// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Allmember = () => {
//   const { Alluser } = useSelector((state) => state.workspace);
// const member = Alluser.filter(item => item.isadmin ===false);

//   // Status badge color function
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active':
//         return 'bg-green-100 text-green-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'invited':
//         return 'bg-blue-100 text-blue-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };



//   return (
//     <div>
//       <h2 className="text-xl font-semibold text-gray-900 mb-6">Team Members</h2>
//       <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {member.map((member) => (
//           <li
//             key={member._id}
//             className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
//           >
//             <div className="flex items-center space-x-3 mb-4">
//               <img
//                 src={member?.avatar || "/placeholder.svg"}
//                 alt={member.name}
//                 className="h-12 w-12 rounded-full object-cover"
//               />
//               <div className="flex-1 min-w-0">
//                 <h3 className="text-lg font-semibold text-gray-900 truncate">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{member?.role || 'Member'}</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
//               <span className="truncate">{member?.email}</span>
//             </div>

//             <div className="mb-3">
//               <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(member?.status)}`}>
//                 {member?.status || 'active'}
//               </span>
//             </div>

//             <div>
//               {member.status === "invited" ? (
//                 <button
                 
//                   className="w-full text-white bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded"
//                 >
//                   Invite
//                 </button>
//               ) : member.status === "pending" ? (
//                 <button
//                   disabled
//                   className="w-full border border-amber-300 text-amber-700 text-sm px-4 py-2 rounded"
//                 >
//                   Invitation Sent
//                 </button>
//               ) : (
//                 <Link
                
//                to={`/workspaces/${member._id}`}
//                   className="w-full border border-green-300 text-green-700 text-sm px-4 py-2 rounded"
//                 >
//                   Active invite
//                 </Link>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Allmember;






import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Allmember = () => {
  const { Alluser } = useSelector((state) => state.workspace);
  const member = Alluser.filter(item => item.isadmin === false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'invited':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Team Members</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {member.map((member) => (
          <li
            key={member._id}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h3>
              <p className="text-sm text-gray-500">{member?.role || 'Member'}</p>
            </div>

            <div className="text-sm text-gray-600 mb-2 truncate">
              {member?.email}
            </div>

            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(member?.status)}`}>
                {member?.status || 'active'}
              </span>
            </div>

            <div>
              {member.status === "invited" ? (
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg"
                >
                  Invite
                </button>
              ) : member.status === "pending" ? (
                <button
                  disabled
                  className="w-full border border-yellow-400 text-yellow-700 bg-yellow-50 text-sm font-medium py-2 rounded-lg"
                >
                  Invitation Sent
                </button>
              ) : (
                <Link
                  to={`/admin/workspaces/${member._id}`}
                  className="w-full inline-block text-center   text-sm font-medium  bg-blue-500 hover:bg-blue-700 py-2 rounded-lg "
                >
                  Active Invite
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Allmember;
