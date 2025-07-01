import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, UserPlus, FileText } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'task_completed',
      user: 'John Doe',
      action: 'completed task',
      target: 'Design Homepage',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Jane Smith',
      action: 'commented on',
      target: 'Mobile App Project',
      time: '4 hours ago',
      icon: MessageSquare,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'member_added',
      user: 'Mike Johnson',
      action: 'joined workspace',
      target: 'Marketing Team',
      time: '1 day ago',
      icon: UserPlus,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'project_created',
      user: 'Sarah Wilson',
      action: 'created project',
      target: 'Q2 Campaign',
      time: '2 days ago',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Recent Activity</h3>
      
      <div className="space-y-3 sm:space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`mt-1 ${activity.color} flex-shrink-0`}>
              <activity.icon className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span>{' '}
                {activity.action}{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 px-4 py-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Activity
      </button>
    </div>
  );
};

export default RecentActivity;