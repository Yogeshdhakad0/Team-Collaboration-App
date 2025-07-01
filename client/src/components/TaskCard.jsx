import React from 'react';
import { Calendar, User, MessageSquare, MoreVertical } from 'lucide-react';
import { format } from 'date-fns';

const TaskCard = ({ task }) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'done';

  return (
    <div className={`task-card bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-md cursor-grab active:cursor-grabbing ${
      task.priority === 'high' ? 'priority-high' :
      task.priority === 'medium' ? 'priority-medium' :
      'priority-low'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-900 text-sm leading-tight pr-2 line-clamp-2">{task.title}</h4>
        <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {task.description && (
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{task.description}</p>
      )}

      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        {isOverdue && (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Overdue
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <div className="flex items-center space-x-1 min-w-0 flex-1">
          <User className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{task.assignee}</span>
        </div>
        <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
          <Calendar className="w-3 h-3" />
          <span>{format(new Date(task.dueDate), 'MMM d')}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-gray-400">
          <MessageSquare className="w-3 h-3" />
          <span className="text-xs">0</span>
        </div>
        <div className="flex -space-x-1">
          <img
            src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop`}
            alt={task.assignee}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;