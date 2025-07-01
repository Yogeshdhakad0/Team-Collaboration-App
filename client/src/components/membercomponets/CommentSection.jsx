




// CommentSection.jsx (No changes needed for this component)
import { useState } from 'react';
import CommentForm from './CommentForm';

const CommentSection = ({ taskId, comments, onAddComment, onEditComment, onDeleteComment }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingComment, setEditingComment] = useState(null);

  const handleAddComment = (commentData) => {
    onAddComment(taskId, commentData);
    setShowAddForm(false);
  };
console.log(comments)
  const handleEditComment = (commentData) => {
    onEditComment(editingComment._id, commentData); // Use _id from backend
    setEditingComment(null);
  };

  const handleDeleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      onDeleteComment(commentId);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <h4 className="font-medium text-gray-900 text-sm sm:text-base">Comments</h4>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm font-medium"
        >
          {showAddForm ? 'Cancel' : 'Add Comment'}
        </button>
      </div>

      {showAddForm && (
        <CommentForm
          onSubmit={handleAddComment}
          taskId={taskId}
          onCancel={() => setShowAddForm(false)}
          submitText="Add Comment"
        />
      )}

      {editingComment && (
        <CommentForm
          initialData={editingComment}
          onSubmit={handleEditComment}
          onCancel={() => setEditingComment(null)}
          submitText="Update Comment"
        />
      )}

      <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-xs sm:text-sm italic bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
            No comments yet. Be the first to add one!
          </p>
        ) : (
          comments.map((comment) => (
          
            <div key={comment._id} className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 space-y-2 sm:space-y-0">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    comment.status
                  )}`}
                >
                  {comment.status}
                </span>
                <div className="flex space-x-3">


                  {
                    
 comment?.membercommenttext
                  }
                  {/* <button
                    onClick={() => setEditingComment(comment)}
                    className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
                  >
                    Edit
                  </button> */}
                  {/* <button
                    onClick={() => handleDeleteComment(comment._id)} // Use _id from backend
                    className="text-red-600 hover:text-red-800 text-xs sm:text-sm font-medium"
                  >
                    Delete
                  </button> */}
                </div>
              </div>

              <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
                
                {comment.commenttext}
              </p>

              <div className="text-xs text-gray-600">
                <span className="font-medium">Created: {formatDate(comment.createdAt)}</span>
                {comment.updatedAt !== comment.createdAt && (
                  <span className="ml-3 sm:ml-4 font-medium">Updated: {formatDate(comment.updatedAt)}</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
