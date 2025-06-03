import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Eye,
  Star,
  Filter,
  Search,
  ChevronDown,
  BarChart3,
  ArrowUpRight,
  Clock,
  ThumbsUp,
  Share2,
  Rocket,
  ArrowLeft
} from 'lucide-react';

const topIdeas = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description: 'Using GPT-4 to revolutionize content creation for marketing teams. Our platform automates content generation while maintaining brand voice and quality standards.',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      role: 'Product Designer',
      online: true
    },
    category: 'AI & ML',
    tags: ['AI', 'SaaS', 'Marketing', 'Content'],
    stats: {
      likes: 124,
      comments: 45,
      views: 1200,
      growth: '+25%',
      engagement: '8.5%'
    },
    matchScore: 95,
    traction: {
      users: '1.2K',
      revenue: '$10K MRR',
      growth: '+25%'
    },
    createdAt: '2024-03-10'
  },
  {
    id: 2,
    title: 'Sustainable Last-Mile Delivery',
    description: 'Electric vehicle fleet management platform for eco-friendly urban logistics. Optimizing routes and reducing carbon footprint while maintaining competitive delivery times.',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      role: 'Founder',
      online: false
    },
    category: 'Logistics',
    tags: ['Sustainability', 'Logistics', 'EV', 'Fleet Management'],
    stats: {
      likes: 98,
      comments: 32,
      views: 850,
      growth: '+18%',
      engagement: '7.2%'
    },
    matchScore: 88,
    traction: {
      users: '450',
      revenue: '$25K MRR',
      growth: '+18%'
    },
    createdAt: '2024-03-11'
  },
  {
    id: 3,
    title: 'HealthSync - AI Health Assistant',
    description: 'Personalized health monitoring and recommendations using AI. Integrating wearable data with medical knowledge for proactive healthcare management.',
    author: {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      role: 'Healthcare Tech',
      online: true
    },
    category: 'HealthTech',
    tags: ['Healthcare', 'AI', 'Wearables', 'Wellness'],
    stats: {
      likes: 156,
      comments: 67,
      views: 1500,
      growth: '+32%',
      engagement: '9.1%'
    },
    matchScore: 92,
    traction: {
      users: '2.5K',
      revenue: '$35K MRR',
      growth: '+32%'
    },
    createdAt: '2024-03-09'
  }
];

export function LaunchBoardPage() {
  const [timeRange, setTimeRange] = useState('week');
  const [sortBy, setSortBy] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard/launchpad');
  };

  return (
    <Container>
      <div className="py-8">
        {/* Back Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={handleBack}
          className="mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to LaunchPad
        </Button>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              LaunchBoard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Top trending ideas from the community this week
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <Button variant="primary" size="lg">
              <TrendingUp size={18} className="mr-2" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Ideas', value: '324', trend: '+12%', icon: Rocket },
            { label: 'Active Users', value: '1.2K', trend: '+8%', icon: Users },
            { label: 'Engagement Rate', value: '8.5%', trend: '+15%', icon: MessageSquare },
            { label: 'Avg. Match Score', value: '92%', trend: '+5%', icon: Star }
          ].map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                  <stat.icon size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-sm text-emerald-600 dark:text-emerald-400">{stat.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <div className="p-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-100 dark:bg-gray-800 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                  <option value="engagement">Most Engaged</option>
                </select>
                <Button variant="secondary" size="lg">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {topIdeas.map((idea) => (
            <Card
              key={idea.id}
              className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={idea.author.avatar}
                          alt={idea.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {idea.author.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {idea.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        by {idea.author.name} • {idea.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {idea.matchScore}%
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {idea.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Users</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400">
                        {idea.traction.growth}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {idea.traction.users}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400">
                        {idea.traction.growth}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {idea.traction.revenue}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Engagement</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400">
                        {idea.stats.growth}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {idea.stats.engagement}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      <ThumbsUp size={18} className="mr-1" />
                      <span>{idea.stats.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      <MessageSquare size={18} className="mr-1" />
                      <span>{idea.stats.comments}</span>
                    </button>
                    <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      <Eye size={18} className="mr-1" />
                      <span>{idea.stats.views}</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="secondary" size="sm">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                    <Button variant="primary" size="sm">
                      <Rocket size={16} className="mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}