import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import {
  Briefcase,
  Search,
  Filter,
  MapPin,
  Building2,
  DollarSign,
  Clock,
  Star,
  Share2,
  BookmarkPlus,
  ChevronDown,
  Plus,
  Code,
  Palette,
  Brain,
  TrendingUp
} from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120K - $180K',
    equity: '0.5% - 1.0%',
    posted: '2 days ago',
    description: 'We\'re looking for a senior full-stack developer to join our growing team...',
    requirements: [
      'React, Node.js, TypeScript expertise',
      '5+ years of experience',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong system design skills'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    logo: '🚀'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignLabs',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90K - $140K',
    equity: '0.25% - 0.75%',
    posted: '1 week ago',
    description: 'Join our design team to create beautiful and intuitive user experiences...',
    requirements: [
      'Strong portfolio of web/mobile designs',
      '3+ years of product design experience',
      'Proficiency in Figma',
      'Experience with design systems'
    ],
    tags: ['UI/UX', 'Figma', 'Design Systems'],
    logo: '🎨'
  },
  // Add more job listings...
];

const filters = {
  jobType: ['Full-time', 'Part-time', 'Contract', 'Remote'],
  experience: ['Entry Level', 'Mid Level', 'Senior', 'Lead'],
  salary: ['$0-$50K', '$50K-$100K', '$100K-$150K', '$150K+'],
  equity: ['0-0.25%', '0.25-0.5%', '0.5-1%', '1%+']
};

export function JobPortalPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [view, setView] = useState<'list' | 'board'>('list');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Startup Job Board
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Find your next role at a fast-growing startup
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="primary" size="lg">
              <Plus size={18} className="mr-2" />
              Post a Job
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
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-gray-100 dark:bg-gray-800 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">
                  <option>All Locations</option>
                  <option>Remote Only</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>
                <Button variant="secondary" size="lg">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedFilters).map(([category, values]) =>
                values.map((value) => (
                  <span
                    key={`${category}-${value}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm"
                  >
                    {value}
                    <button
                      onClick={() => {
                        const newFilters = { ...selectedFilters };
                        newFilters[category] = newFilters[category].filter(v => v !== value);
                        setSelectedFilters(newFilters);
                      }}
                      className="ml-2 text-indigo-400 hover:text-indigo-600"
                    >
                      ×
                    </button>
                  </span>
                ))
              )}
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className={`
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer
                    ${selectedJob === job.id ? 'ring-2 ring-indigo-500' : ''}
                  `}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl mr-4">
                        {job.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {job.company} • {job.location}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                              <BookmarkPlus size={20} />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                              <Share2 size={20} />
                            </button>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Briefcase size={16} className="mr-2" />
                            {job.type}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <DollarSign size={16} className="mr-2" />
                            {job.salary}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Star size={16} className="mr-2" />
                            {job.equity}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Clock size={16} className="mr-2" />
                            {job.posted}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedJob ? (
                <Card>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl mr-4">
                          🚀
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Senior Full Stack Developer
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">TechCorp</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <BookmarkPlus size={20} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">About the Role</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          We're looking for a senior full-stack developer to join our growing team...
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Requirements</h4>
                        <ul className="space-y-2">
                          {[
                            'React, Node.js, TypeScript expertise',
                            '5+ years of experience',
                            'Experience with cloud platforms (AWS/GCP)',
                            'Strong system design skills'
                          ].map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
                              <span className="text-gray-600 dark:text-gray-400">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Company Info</h4>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Building2 size={16} className="mr-2" />
                            Series B Startup
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            San Francisco, CA
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Users size={16} className="mr-2" />
                            50-100 employees
                          </div>
                        </div>
                      </div>

                      <Button variant="primary" size="lg" className="w-full">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  Select a job to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}