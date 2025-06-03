import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { User, Mail, MapPin, Link as LinkIcon, Github as GitHub, Linkedin, Twitter, Edit2, Plus, Code, Palette, Brain, TrendingUp, Award, Briefcase, Calendar, Save, X, Globe, FileText, Users, Star, MessageSquare, Server, FileCode, Database, Cloud, Box, Rocket, GitBranch } from 'lucide-react';

const skills = [
  { name: 'React', category: 'Frontend', level: 'Expert', icon: Code },
  { name: 'Node.js', category: 'Backend', level: 'Advanced', icon: Server },
  { name: 'TypeScript', category: 'Language', level: 'Expert', icon: FileCode },
  { name: 'GraphQL', category: 'API', level: 'Intermediate', icon: Database },
  { name: 'AWS', category: 'Cloud', level: 'Advanced', icon: Cloud },
  { name: 'Docker', category: 'DevOps', level: 'Intermediate', icon: Box }
];

const achievements = [
  {
    title: 'Startup Weekend Winner',
    date: 'March 2024',
    description: 'First place at Startup Weekend San Francisco',
    icon: Award
  },
  {
    title: 'Tech Conference Speaker',
    date: 'January 2024',
    description: 'Keynote speaker at ReactConf 2024',
    icon: Users
  },
  {
    title: 'Open Source Contributor',
    date: '2023',
    description: 'Major contributor to popular React libraries',
    icon: GitHub
  }
];

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp',
    period: '2022 - Present',
    description: 'Leading the frontend development team, implementing modern React practices',
    icon: Code
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupX',
    period: '2020 - 2022',
    description: 'Built scalable web applications using React and Node.js',
    icon: Globe
  }
];

const projects = [
  {
    name: 'AI Content Generator',
    description: 'An AI-powered platform for generating marketing content',
    tech: ['React', 'Node.js', 'OpenAI'],
    stars: 245,
    forks: 45
  },
  {
    name: 'DevCollab',
    description: 'Real-time collaboration platform for developers',
    tech: ['TypeScript', 'Socket.io', 'MongoDB'],
    stars: 189,
    forks: 32
  }
];

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sarah Chen',
    role: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'sarah@example.com',
    bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. Focused on creating intuitive user experiences and scalable architectures.',
    website: 'https://sarahchen.dev',
    github: 'sarahchen',
    linkedin: 'sarahchen',
    twitter: '@sarahchen'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8 relative overflow-hidden">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="px-8 pb-8">
            {/* Profile Image */}
            <div className="relative -mt-20 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {!isEditing && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-0 right-0"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit2 size={16} className="mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                  className="text-3xl font-bold w-full bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-0"
                />
                <input
                  type="text"
                  value={profileData.role}
                  onChange={(e) => setProfileData(prev => ({ ...prev, role: e.target.value }))}
                  className="text-lg text-gray-600 dark:text-gray-400 w-full bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-0"
                />
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:border-indigo-500 focus:ring-0"
                  rows={4}
                />
                <div className="flex justify-end space-x-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsEditing(false)}
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSave}
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {profileData.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {profileData.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
                  {profileData.bio}
                </p>
              </>
            )}

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="mr-2" />
                {profileData.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={18} className="mr-2" />
                {profileData.email}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <LinkIcon size={18} className="mr-2" />
                <a href={profileData.website} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {profileData.website}
                </a>
              </div>
            </div>

            <div className="flex items-center mt-6 space-x-4">
              <a
                href={`https://github.com/${profileData.github}`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <GitHub size={24} />
              </a>
              <a
                href={`https://linkedin.com/in/${profileData.linkedin}`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`https://twitter.com/${profileData.twitter}`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Skills
                </h2>
                <Button variant="secondary" size="sm">
                  <Plus size={16} className="mr-2" />
                  Add Skill
                </Button>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon size={18} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                      </div>
                      <span className="text-sm text-indigo-600 dark:text-indigo-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.category}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Achievements
                </h2>
                <Button variant="secondary" size="sm">
                  <Plus size={16} className="mr-2" />
                  Add Achievement
                </Button>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-start">
                      <achievement.icon className="text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {achievement.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Experience
                </h2>
                <Button variant="secondary" size="sm">
                  <Plus size={16} className="mr-2" />
                  Add Experience
                </Button>
              </div>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-8 last:pb-0"
                  >
                    {/* Timeline line */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-3 top-3 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                    )}
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 border-2 border-indigo-500 dark:border-indigo-400" />
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        {job.role}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <job.icon size={16} className="mr-2" />
                        {job.company}
                        <span className="mx-2">•</span>
                        <Calendar size={16} className="mr-2" />
                        {job.period}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {job.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Projects
                </h2>
                <Button variant="secondary" size="sm">
                  <Plus size={16} className="mr-2" />
                  Add Project
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Star size={16} className="mr-1" />
                        {project.stars}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <GitBranch size={16} className="mr-1" />
                        {project.forks}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Activity Feed */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h2>
              <div className="space-y-6">
                {[
                  {
                    action: 'Started a new project',
                    target: 'AI-Powered Content Generator',
                    time: '2 hours ago',
                    icon: Rocket
                  },
                  {
                    action: 'Added a new skill',
                    target: 'GraphQL',
                    time: '1 day ago',
                    icon: Plus
                  },
                  {
                    action: 'Connected with',
                    target: 'Alex Johnson',
                    time: '2 days ago',
                    icon: Users
                  }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-4">
                      <activity.icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">
                        {activity.action}{' '}
                        <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          {activity.target}
                        </a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}