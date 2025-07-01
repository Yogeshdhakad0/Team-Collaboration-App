// Dummy data for the member planner application
export const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@company.com",
    avatar: "JD",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    avatar: "SW",
    role: "Backend Developer"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@company.com",
    avatar: "MJ",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.davis@company.com",
    avatar: "ED",
    role: "Project Manager"
  },
  {
    id: 5,
    name: "Alex Chen",
    email: "alex.chen@company.com",
    avatar: "AC",
    role: "DevOps Engineer"
  }
];

export const tasks = [
  {
    id: 1,
    memberId: 1,
    title: "Implement user authentication",
    description: "Create login/signup forms with validation",
    status: "In Progress",
    priority: "High",
    dueDate: "2025-01-25",
    createdAt: "2025-01-10"
  },
  {
    id: 2,
    memberId: 1,
    title: "Design responsive navigation",
    description: "Create mobile-friendly navigation component",
    status: "Completed",
    priority: "Medium",
    dueDate: "2025-01-20",
    createdAt: "2025-01-08"
  },
  {
    id: 3,
    memberId: 1,
    title: "Optimize page loading speed",
    description: "Implement lazy loading and code splitting",
    status: "To Do",
    priority: "Low",
    dueDate: "2025-01-30",
    createdAt: "2025-01-12"
  },
  {
    id: 4,
    memberId: 2,
    title: "Set up database schema",
    description: "Design and implement user and task tables",
    status: "Completed",
    priority: "High",
    dueDate: "2025-01-18",
    createdAt: "2025-01-05"
  },
  {
    id: 5,
    memberId: 2,
    title: "Create REST API endpoints",
    description: "Implement CRUD operations for tasks",
    status: "In Progress",
    priority: "High",
    dueDate: "2025-01-24",
    createdAt: "2025-01-09"
  },
  {
    id: 6,
    memberId: 3,
    title: "Create design system",
    description: "Establish colors, typography, and component styles",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2025-01-22",
    createdAt: "2025-01-07"
  },
  {
    id: 7,
    memberId: 3,
    title: "Design user dashboard mockups",
    description: "Create wireframes and high-fidelity designs",
    status: "To Do",
    priority: "Medium",
    dueDate: "2025-01-28",
    createdAt: "2025-01-11"
  },
  {
    id: 8,
    memberId: 4,
    title: "Plan sprint schedule",
    description: "Organize tasks and set development timeline",
    status: "Completed",
    priority: "High",
    dueDate: "2025-01-15",
    createdAt: "2025-01-03"
  },
  {
    id: 9,
    memberId: 4,
    title: "Conduct team standup meetings",
    description: "Daily progress tracking and issue resolution",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2025-01-31",
    createdAt: "2025-01-06"
  },
  {
    id: 10,
    memberId: 5,
    title: "Configure CI/CD pipeline",
    description: "Set up automated testing and deployment",
    status: "In Progress",
    priority: "High",
    dueDate: "2025-01-26",
    createdAt: "2025-01-08"
  }
];

export const comments = [
  {
    id: 1,
    taskId: 1,
    text: "Started working on the authentication flow. Need to review security best practices.",
    status: "active",
    createdAt: "2025-01-15T10:30:00Z",
    updatedAt: "2025-01-15T10:30:00Z"
  },
  {
    id: 2,
    taskId: 1,
    text: "Added JWT token implementation. Ready for review.",
    status: "active",
    createdAt: "2025-01-16T14:20:00Z",
    updatedAt: "2025-01-16T14:20:00Z"
  },
  {
    id: 3,
    taskId: 2,
    text: "Navigation component completed and tested on mobile devices.",
    status: "resolved",
    createdAt: "2025-01-19T09:15:00Z",
    updatedAt: "2025-01-19T09:15:00Z"
  },
  {
    id: 4,
    taskId: 4,
    text: "Database schema has been finalized and deployed to staging.",
    status: "resolved",
    createdAt: "2025-01-17T16:45:00Z",
    updatedAt: "2025-01-17T16:45:00Z"
  },
  {
    id: 5,
    taskId: 5,
    text: "Working on user endpoints. Authentication middleware needs integration.",
    status: "active",
    createdAt: "2025-01-14T11:30:00Z",
    updatedAt: "2025-01-14T11:30:00Z"
  },
  {
    id: 6,
    taskId: 6,
    text: "Color palette and typography guidelines are complete.",
    status: "active",
    createdAt: "2025-01-13T13:20:00Z",
    updatedAt: "2025-01-13T13:20:00Z"
  },
  {
    id: 7,
    taskId: 8,
    text: "Sprint planning completed. All tasks assigned and prioritized.",
    status: "resolved",
    createdAt: "2025-01-14T08:00:00Z",
    updatedAt: "2025-01-14T08:00:00Z"
  },
  {
    id: 8,
    taskId: 10,
    text: "Pipeline configuration in progress. Testing automated deployments.",
    status: "active",
    createdAt: "2025-01-12T15:30:00Z",
    updatedAt: "2025-01-12T15:30:00Z"
  }
];