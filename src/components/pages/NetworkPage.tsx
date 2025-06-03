import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import {
  Users,
  Search,
  Filter,
  UserPlus,
  MessageSquare,
  Star,
  Code,
  Palette,
  Brain,
  TrendingUp,
  Building2,
  MapPin,
  Link as LinkIcon,
  Clock,
  ChevronDown,
  Plus,
  Settings,
  Bell,
  Share2
} from 'lucide-react';

const connections = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    mutualConnections: 12,
    skills: ['React', 'Node.js', 'TypeScript'],
    status: 'connected'
  },
  {
    id: 2,
    name: 'Emma Davis',
    role: 'UI/UX Designer',
    company: 'DesignStudio',
    location: 'New York, NY',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    mutualConnections: 8,
    skills: ['Figma', 'UI Design', 'User Research'],
    status: 'pending'
  }
];

const suggestedConnections = [
  {
    id: 3,
    name: 'Michael Zhang',
    role: 'Product Manager',
    company: 'StartupX',
    location: 'Seattle, WA',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    mutualConnections: 5,
    skills: ['Product Strategy', 'Agile', 'Growth'],
    matchScore: 92
  }
];

export function NetworkPage() {
  const [activeTab, setActiveTab] = useState('connections');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              My Network
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with other founders, developers, and industry experts
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <Button variant="secondary" size="lg">
              <Bell size={18} className="mr-2" />
              Notifications
            </Button>
            <Button variant="primary" size="lg">
              <UserPlus size={18} className="mr-2" />
              Find Connections
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
                  placeholder="Search connections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-gray-100 dark:bg-gray-800 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">
                  <option>All Connections</option>
                  <option>Recent</option>
                  <option>Pending</option>
                </select>
                <Button variant="secondary" size="lg">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto">
          {[
            { id: 'connections', label: 'Connections', icon: Users },
            { id: 'suggestions', label: 'Suggestions', icon: UserPlus },
            { id: 'pending', label: 'Pending', icon: Clock }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center whitespace-nowrap px-6 py-3 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }
              `}
            >
              <tab.icon size={18} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Connection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map((connection) => (
            <Card
              key={connection.id}
              className="p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={connection.avatar}
                      alt={connection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {connection.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {connection.role}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <Star size={18} />
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Building2 size={16} className="mr-2" />
                  {connection.company}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  {connection.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users size={16} className="mr-2" />
                  {connection.mutualConnections} mutual connections
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {connection.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                {connection.status === 'connected' ? (
                  <Button variant="secondary\" size="sm">
                    <MessageSquare size={16} className="mr-2" />
                    Message
                  </Button>
                ) : (
                  <Button variant="primary" size="sm">
                    <UserPlus size={16} className="mr-2" />
                    Accept
                  </Button>
                )}
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <Share2 size={18} />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Suggested Connections */}
        {activeTab === 'suggestions' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Suggested Connections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedConnections.map((suggestion) => (
                <Card
                  key={suggestion.id}
                  className="p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute top-4 right-4 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {suggestion.matchScore}% Match
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={suggestion.avatar}
                        alt={suggestion.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {suggestion.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {suggestion.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Building2 size={16} className="mr-2" />
                      {suggestion.company}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {suggestion.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users size={16} className="mr-2" />
                      {suggestion.mutualConnections} mutual connections
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {suggestion.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button variant="primary" size="sm" className="w-full">
                    <UserPlus size={16} className="mr-2" />
                    Connect
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}