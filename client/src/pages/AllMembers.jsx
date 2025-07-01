import React, { useEffect } from 'react'
import Membercard from '../components/Membercard'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Getallusers } from '../feature/workspace/workspaceslice';

const AllMembers = ({id}) => {
  const navigate = useNavigate();
        const { Alluser, isLoading } = useSelector((state) => state.workspace);
     const nonAdminUsers = Alluser.filter(user => user.isadmin === false);
const dispatch=useDispatch()
  useEffect(() => {
 
    dispatch(Getallusers());
  }, [dispatch]);

     if(isLoading){
      return (
        <div className=' w-full  h-screen flex text-center justify-center font-bold text-3xl'>
          ...loading
        </div>
      )
     }

  return (
    // <div className="p-6 bg-gray-100 min-h-screen">
    //      <div className="flex items-center bg-blue-600 px-1 py-2 rounded-xl text-white">
    //           <button
    //          onClick={() => navigate(-1)}
    //             className="flex items-center hover:bg-blue-700 mr-4 text-sm sm:text-base"
    //           >
    //             <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
    //             Back to Workspace
    //           </button>
    //         </div>
    //   <h2 className="text-2xl font-bold text-gray-800 mb-6">All Users</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {Alluser.map(user => (
    //       <Membercard key={user._id} user={user} state={id} />
    //     ))}
    //   </div>
    // </div>


        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-all text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Workspace
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        All Users
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {nonAdminUsers.length > 0 ? (
          nonAdminUsers.map(user => (
            <Membercard key={user._id} user={user} state={id} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No users found.
          </div>
        )}
      </div>
    </div>


  )
}

export default AllMembers
