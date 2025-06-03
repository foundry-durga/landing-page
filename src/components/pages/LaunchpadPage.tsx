import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Filter,
  ThumbsUp,
  Share2,
  MessageSquare,
  Plus,
  Rocket,
  Star,
  TrendingUp,
  Users,
  Brain,
  Target,
  Briefcase,
  Globe,
  Zap,
  ChevronDown,
  BarChart3,
  Clock,
  Tag,
  Bookmark,
  Eye,
  ArrowRight,
  FileText,
  GitBranch,
  DollarSign,
  Award,
  Sparkles,
  Link as LinkIcon,
  Settings,
  MoreVertical,
  CheckSquare,
  Heart
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useIdeaStore } from '../../store/useIdeaStore';
import { useCollaborationStore } from '../../store/useCollaborationStore';
import { CollaborationButton } from '../collaboration/CollaborationButton';

const topIdeas = [
  {
    id: 1,
    title: "AI-Powered Personal Health Assistant",
    description: "A revolutionary health tracking app that uses AI to provide personalized health insights and recommendations based on user data and lifestyle patterns.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      online: true
    },
    matchScore: 95,
    tags: ["Healthcare", "AI/ML", "Mobile App"],
    stats: {
      likes: 342,
      comments: 56,
      views: 1205
    },
    traction: {
      growth: "+45% MoM"
    }
  },
  {
    id: 2,
    title: "Sustainable Smart Home Platform",
    description: "An integrated IoT platform that helps homeowners reduce their carbon footprint through smart energy management and sustainable living recommendations.",
    author: {
      name: "Marcus Rodriguez",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      online: false
    },
    matchScore: 92,
    tags: ["IoT", "Sustainability", "Smart Home"],
    stats: {
      likes: 289,
      comments: 43,
      views: 987
    },
    traction: {
      growth: "+38% MoM"
    }
  },
  {
    id: 3,
    title: "Decentralized Education Marketplace",
    description: "A blockchain-based platform connecting students with expert educators worldwide, offering personalized learning experiences and verifiable credentials.",
    author: {
      name: "Aisha Patel",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      online: true
    },
    matchScore: 88,
    tags: ["EdTech", "Blockchain", "Marketplace"],
    stats: {
      likes: 256,
      comments: 38,
      views: 842
    },
    traction: {
      growth: "+32% MoM"
    }
  }
];

export function LaunchpadPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedIdea, setSelectedIdea] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const { ideas, likeIdea, incrementViews } = useIdeaStore();
  const { sendRequest } = useCollaborationStore();

  const handleNewIdea = () => {
    navigate('/ideas/new');
  };

  const handleLike = (ideaId: number) => {
    likeIdea(ideaId.toString());
  };

  const handleShare = async (idea: any) => {
    try {
      await navigator.share({
        title: idea.title,
        text: idea.description,
        url: window.location.href
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleViewDetails = (ideaId: number) => {
    incrementViews(ideaId.toString());
    setSelectedIdea(ideaId);
  };

  const handleBookmark = (ideaId: number) => {
    // Implementation for bookmarking
    console.log('Bookmarked idea:', ideaId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="py-8">
          {/* Top Ideas This Week */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                🔥 Top Ideas This Week
              </h2>
              <Button variant="secondary" size="lg" onClick={() => navigate('/launchboard')}>
                <TrendingUp size={18} className="mr-2" />
                View All Trending
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topIdeas.slice(0, 3).map((idea) => (
                <Card
                  key={idea.id}
                  className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
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
                            by {idea.author.name}
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

                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <button 
                          className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400"
                          onClick={() => handleLike(idea.id)}
                        >
                          <ThumbsUp size={14} className="mr-1" />
                          {idea.stats.likes}
                        </button>
                        <button 
                          className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400"
                          onClick={() => handleViewDetails(idea.id)}
                        >
                          <MessageSquare size={14} className="mr-1" />
                          {idea.stats.comments}
                        </button>
                        <button 
                          className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400"
                          onClick={() => handleViewDetails(idea.id)}
                        >
                          <Eye size={14} className="mr-1" />
                          {idea.stats.views}
                        </button>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {idea.traction.growth}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleShare(idea)}
                      >
                        <Share2 size={16} className="mr-2" />
                        Share
                      </Button>
                      <CollaborationButton
                        ideaId={idea.id.toString()}
                        ideaTitle={idea.title}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Rest of the existing content... */}
        </div>
      </Container>
    </div>
  );
}