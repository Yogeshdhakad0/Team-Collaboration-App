



import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';
import { useLocation } from 'react-router-dom';

const Membercard = ({ user}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const location=useLocation()
const formdatahandel=()=>{
 setShowCreateModal(true)
}


if(!user|| null||user.length===0){
  return (<div> .....Loading</div>)
}


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 rounded-2xl p-4 border border-gray-200 w-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center break-words">
          <User className="w-5 h-5 mr-2 text-blue-500" />
          {user?.name}
        </h3>

        {user?.isadmin && (
          <span className="flex items-center text-xs sm:text-sm text-green-700 font-semibold bg-green-100 px-3 py-1 rounded-full whitespace-nowrap">
            <ShieldCheck className="w-4 h-4 mr-1" /> Admin
          </span>
        )}
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center break-words">
          <Mail className="w-4 h-4 mr-2 text-gray-500" />
          {user?.email}
        </div>
        <div className="flex items-center break-words">
          <Phone className="w-4 h-4 mr-2 text-gray-500" />
          {user?.phone}
        </div>
      </div>

      {/* Add To Project Button */}
      <button
        onClick={() => formdatahandel(user._id)}
        className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        ➕ Add to Project
      </button>

  {showCreateModal && (
        <CreateTaskModal 
         memberid={user._id}
         user={user}
  projectid={location.state}
          onClose={() => setShowCreateModal(false)} 
        />
      )}


    </motion.div>
  );
};

export default Membercard;
