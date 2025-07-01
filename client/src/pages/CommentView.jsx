


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateComment, GetAmdinComment } from "../feature/comment/commentslice";
import { GetallTask } from "../feature/task/taskslice";

const CommentView = () => {
  const { id } = useParams(); // Task ID from URL
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");

  // Redux state selectors
  const { comments: allComments = {} } = useSelector((state) => state.comment);
  const { tasks: allTasks = [] } = useSelector((state) => state.task);

  // Find the specific task based on the ID
  const task = allTasks.find((t) => t._id === id);

  // Extract admin and member comments for display
  const adminComments = allComments?.adminComments || [];
  const memberComments = allComments?.memberComments || [];

  // Function to format date (reusable)
  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Effect to fetch tasks and comments when component mounts or ID changes
  useEffect(() => {
    dispatch(GetallTask());
    dispatch(GetAmdinComment(id)); // Fetch comments specific to this task ID
  }, [dispatch, id]);

 
  const handleCreateComment = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!newCommentText.trim()) return; // Don't submit empty comments

    dispatch(CreateComment({ commenttext: newCommentText, id })); // Dispatch create action
    setNewCommentText(""); // Clear input
    setShowCommentForm(false); // Hide form
    window.location.reload();
  };

  // Handler for Back to Dashboard button
  const handleBackToDashboard = () => {
     navigate(-1) // Navigate to the dashboard route
  };
 
  // Display a loading/not found message if task data isn't available yet
  if (!task) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
        <p className="text-xl text-gray-600 font-semibold text-center">Loading task or task not found...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex justify-center items-start">
      <div className="max-w-7xl w-full bg-white shadow-2xl rounded-xl p-6 sm:p-8 transform transition-all duration-300 hover:shadow-3xl">
        {/* --- Header Section --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Task Comments</h2>
            <p className="text-base sm:text-lg text-gray-700">
              For: <span className="font-semibold text-blue-700">{task.taskname}</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Status: <span className="font-medium">{task.status}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
            {/* Back to Dashboard Button */}
            <button
              onClick={handleBackToDashboard}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            >
              ← Back to Dashboard
            </button>
            {/* Add New Comment Button */}
            <button
              onClick={() => setShowCommentForm(!showCommentForm)}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            >
              {showCommentForm ? "Hide Comment Form" : "Add New Comment"}
            </button>
          </div>
        </div>

        {/* --- Comment Form Section (with AnimatePresence for smooth unmount) --- */}
        <AnimatePresence>
          {showCommentForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-6 sm:mb-8 bg-blue-50 p-4 sm:p-6 rounded-lg shadow-inner border border-blue-200"
            >
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 sm:mb-4">Leave a Comment</h3>
              <textarea
                rows={4}
                placeholder="Type your insightful comment here..."
                className="w-full p-3 sm:p-4 border border-blue-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y transition duration-200 ease-in-out text-sm sm:text-base"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
              />
              <button
                onClick={handleCreateComment}
                className="mt-3 sm:mt-4 px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-sm"
              >
                Submit Comment
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Comment List Section --- */}
        <div className="grid gap-4 sm:gap-6">
          {adminComments.length === 0 && memberComments.length === 0 ? (
            <div className="text-center py-8 sm:py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-base sm:text-xl text-gray-500 font-medium">No comments yet. Be the first to add one!</p>
            </div>
          ) : (
            <>
              {/* Admin Comments */}
              {adminComments.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-300">Admin Replies</h3>
                  <div className="grid gap-4">
                    {adminComments.map((comment) => (
                      <motion.div
                        key={comment._id}
                        className="bg-blue-100 p-4 sm:p-5 rounded-lg shadow-sm border border-blue-200 flex flex-col hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 ease-in-out"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="text-base sm:text-lg text-gray-900 leading-relaxed mb-2">{comment.commenttext}</p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-600 border-t border-blue-200 pt-2 mt-auto">
                          <span className="font-medium text-blue-700">By Admin ({comment?.userId || "Unknown"})</span>
                          <span className="text-xs text-gray-500 mt-1 sm:mt-0">
                            {comment.createdAt ? `Created: ${formatDate(comment.createdAt)}` : 'No date'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Member Comments */}
              {memberComments.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 pb-2 border-b-2 border-green-300">Member Comments</h3>
                  <div className="grid gap-4">
                    {memberComments.map((comment) => (
                      <motion.div
                        key={comment._id}
                        className="bg-green-100 p-4 sm:p-5 rounded-lg shadow-sm border border-green-200 flex flex-col hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 ease-in-out"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                      >
                        <p className="text-base sm:text-lg text-gray-900 leading-relaxed mb-2">{comment.membercommenttext}</p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-600 border-t border-green-200 pt-2 mt-auto">
                          <span className="font-medium text-green-700 flex items-center">
                            By Member ({comment?.memberId || "Unknown"})
                            <span
                              className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                                comment.status === "completed"
                                  ? "bg-green-200 text-green-800"
                                  : "bg-yellow-200 text-yellow-800"
                              }`}
                            >
                              {comment.status.toUpperCase()}
                            </span>
                          </span>
                          <span className="text-xs text-gray-500 mt-1 sm:mt-0">
                            {comment.createdAt ? `Created: ${formatDate(comment.createdAt)}` : 'No date'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentView;