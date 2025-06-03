import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import {ChatUI} from './ChatUI';
import { Users, LayoutGrid, MessageSquare, FileText, CheckSquare, Plus, Search, Send, Paperclip, BrainCircuit } from 'lucide-react';

type TabType = 'overview' | 'tasks' | 'documents' | 'chat';

export function CollaborationSection() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tasks':
        return (
          <div className="space-y-4 animate-scale-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <button className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus size={18} className="mr-2" />
                Add Task
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {['To Do', 'In Progress', 'Done'].map((column, columnIndex) => (
                <div key={column} className="space-y-3">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">{column}</h4>
                  {[1, 2, 3].map((task) => (
                    <Card 
                      key={task} 
                      className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    >
                      <div className="flex items-start">
                        <CheckSquare size={18} className="mt-1 mr-3 text-gray-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-1 truncate">
                            {column === 'To Do' && 'Research market competitors'}
                            {column === 'In Progress' && 'Design user interface'}
                            {column === 'Done' && 'Setup development environment'}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Due in 3 days</p>
                          <div className="flex items-center mt-3 flex-wrap gap-2">
                            <div className="flex -space-x-2">
                              {[1, 2].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                                  <img
                                    src={`https://images.pexels.com/photos/${760000 + i}/pexels-photo-${760000 + i}.jpeg`}
                                    alt={`User ${i}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">2 attachments</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-6 animate-scale-in">
            <div className="flex justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus size={18} className="mr-2" />
                New Document
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Project Overview', type: 'doc', updated: '2 hours ago' },
                { title: 'Technical Specifications', type: 'doc', updated: '1 day ago' },
                { title: 'Market Research', type: 'sheet', updated: '3 days ago' },
                { title: 'Design Assets', type: 'folder', updated: '1 week ago' },
                { title: 'Meeting Notes', type: 'doc', updated: '2 weeks ago' },
                { title: 'Financial Projections', type: 'sheet', updated: '1 month ago' },
              ].map((doc, i) => (
                <Card 
                  key={i} 
                  className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  style={{ 
                    animationDelay: `${i * 100}ms`,
                    animation: 'slideIn 0.5s ease-out forwards'
                  }}
                >
                  <div className="flex items-start">
                    <FileText size={18} className="mt-1 mr-3 text-indigo-500" />
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">{doc.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Updated {doc.updated}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'chat':
        return (
          <ChatUI/>
        );

      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in">
            <Card className="col-span-2 h-full">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Project Overview</h4>
                <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FileText size={16} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                    <h5 className="font-medium text-gray-900 dark:text-white">Executive Summary</h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    EcoDelivery is a sustainable last-mile delivery service using electric vehicles and optimized routes to reduce carbon footprint while maintaining competitive delivery times.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">Progress</h5>
                  <div className="space-y-3">
                    {[
                      { name: "Market Research", progress: 100 },
                      { name: "Business Plan", progress: 75 },
                      { name: "MVP Development", progress: 45 },
                      { name: "Investor Pitch", progress: 20 }
                    ].map((task, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{task.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{task.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-violet-600 h-2 rounded-full transition-all duration-1000" 
                            style={{width: `${task.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="h-full">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Recent Activity</h4>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    user: "Sophie Chen", 
                    action: "updated the market analysis document.",
                    time: "2h ago",
                    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  },
                  { 
                    user: "James Wilson", 
                    action: "added comments to the financial projections.",
                    time: "4h ago",
                    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                  },
                  { 
                    user: "AI Assistant", 
                    action: "generated a competitive analysis report.",
                    time: "Yesterday",
                    avatar: null,
                    isAI: true
                  }
                ].map((activity, i) => (
                  <div 
                    key={i} 
                    className="flex items-start"
                    style={{ 
                      animationDelay: `${i * 100}ms`,
                      animation: 'slideIn 0.5s ease-out forwards'
                    }}
                  >
                    {activity.isAI ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 mr-3">
                        <BrainCircuit size={16} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mr-3">
                        <img src={activity.avatar} alt={activity.user} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );
    }
  };

  return (
    <section id="collaboration" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
            <Users size={16} className="mr-2" />
            Team Collaboration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900 dark:text-white">
            One Workspace to Manage Everything
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From vision to launch, our collaboration tools keep your team aligned, productive, and moving forward together.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-800/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="border-b border-gray-100 dark:border-gray-800 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0">
                    <LayoutGrid size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Project Workspace</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sustainable Delivery Service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
                      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
                      'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg'
                    ].map((avatar, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                        <img src={avatar} alt={`Team member ${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <button className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2 md:pb-0">
                {[
                  { id: 'overview', label: 'Overview', icon: LayoutGrid },
                  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
                  { id: 'documents', label: 'Documents', icon: FileText },
                  // { id: 'chat', label: 'Chat', icon: MessageSquare }
      
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`
                      flex items-center px-4 py-2 font-medium transition-all duration-300 whitespace-nowrap
                      ${activeTab === tab.id
                        ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }
                    `}
                    onClick={() => setActiveTab(tab.id as TabType)}
                  >
                    <tab.icon size={18} className="mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-4 md:p-6 overflow-x-hidden">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}