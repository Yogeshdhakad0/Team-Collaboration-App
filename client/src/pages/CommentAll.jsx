

import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllComment } from '../feature/comment/commentslice';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CommentAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate hook
  const { commetall, isLoading, isError } = useSelector((state) => state.comment);

  // Memoize the merging and sorting of comments for performance
  const commentsToDisplay = useMemo(() => {
    // Ensure commetall is an object before proceeding
    if (!commetall || typeof commetall !== 'object') {
      return [];
    }

    // Safely get admin and member comment arrays
    const adminComments = Array.isArray(commetall.admin) ? commetall.admin : [];
    const memberComments = Array.isArray(commetall.member) ? commetall.member : [];

    // Merge comments and add a 'type' property for distinction
    const mergedComments = [
      ...adminComments.map(comment => ({ ...comment, type: 'admin' })),
      ...memberComments.map(comment => ({ ...comment, type: 'member' }))
    ];

    // Sort comments by creation date in descending order (newest first)
    return mergedComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [commetall]); // Re-calculate only when commetall changes

  // Fetch all comments on component mount
  useEffect(() => {
    dispatch(GetAllComment());
      window.scrollTo(0, 0)
  }, [dispatch]);


  // Handle navigation back to dashboard
  const handleBackToDashboard = () => {
    navigate('/admin/dashboard'); // Adjust this path to your actual dashboard route
  };

  // --- Render Loading, Error, or Comments ---

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700 font-semibold">Loading comments...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
        <p className="text-xl text-red-600 font-semibold mb-4">Error loading comments. Please try again later.</p>
        <button
          onClick={handleBackToDashboard}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">

          <button
          onClick={handleBackToDashboard}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          Back to Dashboard
        </button>
        <h2 className="text-3xl font-extrabold text-gray-800">All Comments</h2>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commentsToDisplay.length === 0 ? (
          <p className="text-center text-gray-500 text-lg col-span-full">No comments found.</p>
        ) : (
          commentsToDisplay.map((comment, index) => (
            <motion.div
              key={comment?._id || index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xl font-bold text-gray-900 break-words pr-4">
                    {comment?.commenttext || comment?.membercommenttext || "No Comment Text"}
                  </p>
                  <span
                    className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                      comment?.type === 'admin' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {comment?.type}
                  </span>
                </div>
                <p className="text-md mt-2 text-gray-700">
                  <span className="font-semibold">Status:</span>{" "}
                  <span className={`font-medium ${comment?.status === 'active' ? 'text-green-600' : 'text-orange-600'}`}>
                    {comment?.status || "N/A"}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Comment ID:</span> <span className="font-mono break-all">{comment?._id}</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Task ID:</span> <span className="font-mono break-all">{comment?.taskId}</span>
                </p>
                {comment?.userId && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">User ID:</span> <span className="font-mono break-all">{comment?.userId}</span>
                  </p>
                )}
                {comment?.memberId && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">Member ID:</span> <span className="font-mono break-all">{comment?.memberId}</span>
                  </p>
                )}
                {comment?.createdBy?.name && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">By:</span> {comment?.createdBy?.name}
                  </p>
                )}
              </div>
              {comment?.createdAt && (
                <p className="text-xs text-gray-500 mt-4 self-end">
                  <span className="font-semibold">Created At:</span> {new Date(comment?.createdAt).toLocaleString()}
                </p>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentAll;