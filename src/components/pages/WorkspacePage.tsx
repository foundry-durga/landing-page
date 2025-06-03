import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import {
  FolderKanban,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  CheckSquare,
  MessageSquare,
  Users,
  FileText,
  Clock,
  ArrowRight,
  Star,
  Trash2
} from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'EcoDelivery App',
    description: 'Sustainable last-mile delivery platform',
    progress: 75,
    members: [
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    ],
    tasks: {
      total: 24,
      completed: 18
    },
    dueDate: '2024-03-15',
    status: 'In Progress'
  },
  {
    id: 2,
    name: 'HealthSync Platform',
    description: 'AI-powered healthcare management system',
    progress: 40,
    members: [
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    ],
    tasks: {
      total: 32,
      completed: 12
    },
    dueDate: '2024-04-01',
    status: 'Planning'
  },
  // Add more projects...
];

const tasks = [
  {
    id: 1,
    title: 'Design System Updates',
    project: 'EcoDelivery App',
    assignee: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    dueDate: '2024-03-10',
    priority: 'High',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'API Integration',
    project: 'HealthSync Platform',
    assignee: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    dueDate: '2024-03-15',
    priority: 'Medium',
    status: 'Todo'
  },
  // Add more tasks...
];

const activities = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    action: 'completed',
    target: 'User Authentication Flow',
    project: 'EcoDelivery App',
    time: '2 hours ago'
  },
  {
    id: 2,
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    action: 'commented on',
    target: 'Dashboard Wireframes',
    project: 'HealthSync Platform',
    time: '4 hours ago'
  },
  // Add more activities...
];

export function WorkspacePage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Workspace
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your projects and collaborate with your team
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="primary" size="lg">
              <Plus size={18} className="mr-2" />
              New Project
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <div className="p-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-gray-100 dark:bg-gray-800 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">
                  <option>All Projects</option>
                  <option>Active</option>
                  <option>Completed</option>
                  <option>Archived</option>
                </select>
                <Button variant="secondary" size="lg">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className={`
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer
                    ${selectedProject === project.id ? 'ring-2 ring-indigo-500' : ''}
                  `}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <MoreVertical size={20} />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Progress
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <CheckSquare size={16} className="text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {project.tasks.completed}/{project.tasks.total} Tasks
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Due {new Date(project.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Team Members */}
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {project.members.map((member, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden"
                            >
                              <img
                                src={member}
                                alt={`Team member ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                            <Plus size={14} className="text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-medium
                          ${project.status === 'In Progress'
                            ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }
                        `}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Tasks */}
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    My Tasks
                  </h3>
                  <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {task.project} • Due {new Date(task.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img
                            src={task.assignee}
                            alt="Assignee"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className={`
                          ml-2 px-2 py-1 rounded-full text-xs font-medium
                          ${task.priority === 'High'
                            ? 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400'
                            : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400'
                          }
                        `}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Recent Activity
                </h3>
                
                <div className="space-y-6">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                        <img
                          src={activity.user.avatar}
                          alt={activity.user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">
                          <span className="font-medium">{activity.user.name}</span>
                          {' '}{activity.action}{' '}
                          <span className="text-indigo-600 dark:text-indigo-400">
                            {activity.target}
                          </span>
                          {' '}in{' '}
                          <span className="text-gray-700 dark:text-gray-300">
                            {activity.project}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}