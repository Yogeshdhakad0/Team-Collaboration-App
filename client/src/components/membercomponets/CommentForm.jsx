

// // CommentForm.jsx (No changes needed for this component)
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { MemberCreateComment, MemberProjectGet } from '../../feature/member/memberslice';

// const CommentForm = ({ initialData = null, onSubmit, onCancel, submitText ,taskId}) => {
//   const [text, setText] = useState(initialData?.text || '');
//   const [status, setStatus] = useState(initialData?.status || 'active');
//   const dispatch=useDispatch()
// console.log(taskId)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (text.trim()) {
//     //   const commentData = {
//     //     text: text.trim(),
//     //     status,
//     //     createdAt: initialData?.createdAt || new Date().toISOString(),
//     //     updatedAt: new Date().toISOString(),
//     //   };
//     //   onSubmit(commentData);
//     //   setText('');
//     //   setStatus('active');
//     // }u
// dispatch(MemberCreateComment({membercommenttext:text,status,id:taskId}))
//   dispatch(MemberProjectGet());
//    setText('');
//       setStatus('active');
//       window.reload()
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200"
//     >
//       <div className="mb-3 sm:mb-4">
//         <label htmlFor="comment-text" className="block text-sm font-medium text-gray-900 mb-2">
//           Comment
//         </label>
//         <textarea
//           id="comment-text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           rows={3}
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
//           placeholder="Enter your comment..."
//           required
//         />
//       </div>

//       <div className="mb-3 sm:mb-4">
//         <label htmlFor="comment-status" className="block text-sm font-medium text-gray-900 mb-2">
//           Status
//         </label>
//         <select
//           id="comment-status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
//         >
//           <option value="active">Active</option>
//           <option value="resolved">Resolved</option>
//         </select>
//       </div>

//       <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
//         >
//           {submitText}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CommentForm;



// CommentForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MemberCreateComment, MemberProjectGet } from '../../feature/member/memberslice';

const CommentForm = ({ initialData = null, onSubmit, onCancel, submitText, taskId }) => {
  const [text, setText] = useState(initialData?.text || '');
  // Assuming comment status could be 'active' or 'resolved' based on previous data
  const [status, setStatus] = useState(initialData?.status || 'active');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Dispatch action to create comment
      await dispatch(MemberCreateComment({ membercommenttext: text.trim(), status, id: taskId }));

      // After successful creation, re-fetch the projects to update the UI
      dispatch(MemberProjectGet());

      // Clear the form
      setText('');
      setStatus('active');

      // Optionally, call onSubmit to handle any parent component logic
      // onSubmit is now less critical for data refresh if Redux handles it
      if (onSubmit) {
        onSubmit({ text: text.trim(), status });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200"
    >
      <div className="mb-3 sm:mb-4">
        <label htmlFor="comment-text" className="block text-sm font-medium text-gray-900 mb-2">
          Comment
        </label>
        <textarea
          id="comment-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
          placeholder="Enter your comment..."
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label htmlFor="comment-status" className="block text-sm font-medium text-gray-900 mb-2">
          Status
        </label>
        <select
          id="comment-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
        >
          <option value="active">Active</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;