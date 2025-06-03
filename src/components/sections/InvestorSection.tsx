import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Briefcase, DollarSign, TrendingUp, LineChart } from 'lucide-react';

export function InvestorSection() {
  return (
    <section id="investors" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
            <DollarSign size={16} className="mr-2" />
            Investor Connections
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900 dark:text-white">
            Build Something Fundable. Work on What Matters.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with investors who are looking for opportunities like yours, and manage your fundraising process with smart tools and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Investor Dashboard */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white font-serif">Investor Portal</h3>
            <Card className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <div className="border-b border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                      <Briefcase size={20} />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Investor Dashboard</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Investor" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sarah Chen</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Portfolio", value: "12 Companies", icon: Briefcase, color: "text-indigo-600 dark:text-indigo-400" },
                    { title: "Investments", value: "$2.4M", icon: DollarSign, color: "text-emerald-600 dark:text-emerald-400" },
                    { title: "Average Return", value: "24%", icon: TrendingUp, color: "text-amber-600 dark:text-amber-400" },
                    { title: "Deals Reviewed", value: "86 This Month", icon: LineChart, color: "text-violet-600 dark:text-violet-400" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-start">
                      <div className={`mr-3 ${stat.color}`}>
                        <stat.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Recommended Startups</h5>
                <div className="space-y-4">
                  {[
                    { 
                      name: "EcoDelivery",
                      description: "Sustainable last-mile delivery platform",
                      industry: "Logistics",
                      stage: "Seed",
                      seeking: "$500K",
                      match: "92%",
                      logo: "🚚"
                    },
                    { 
                      name: "HealthSync",
                      description: "AI-powered preventative healthcare",
                      industry: "HealthTech",
                      stage: "Pre-seed",
                      seeking: "$250K",
                      match: "87%",
                      logo: "🏥"
                    },
                    { 
                      name: "FinLearn",
                      description: "Financial literacy platform for teens",
                      industry: "EdTech",
                      stage: "Seed",
                      seeking: "$750K",
                      match: "83%",
                      logo: "📚"
                    }
                  ].map((startup, i) => (
                    <div key={i} className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl mr-3">
                          {startup.logo}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h6 className="font-semibold text-gray-900 dark:text-white">{startup.name}</h6>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{startup.description}</p>
                            </div>
                            <div className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-xs font-medium px-2 py-1 rounded-full">
                              {startup.match} Match
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">{startup.industry}</span>
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">{startup.stage}</span>
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Raising {startup.seeking}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Jobs Portal */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white font-serif">Startup Jobs Portal</h3>
            <Card className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <div className="border-b border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Startup Jobs</h4>
                  </div>
                  <button className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full">
                    Post a Job
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Featured Opportunities</h5>
                  <div className="flex space-x-2">
                    <button className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                      All Jobs
                    </button>
                    <button className="text-xs px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                      Remote
                    </button>
                    <button className="text-xs px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                      Technical
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      role: "Senior Full-Stack Developer",
                      company: "FinLearn",
                      location: "Remote",
                      salary: "$120K - $150K",
                      equity: "0.5-1.0%",
                      logo: "📚",
                      tags: ["React", "Node.js", "FinTech"]
                    },
                    { 
                      role: "Head of Growth Marketing",
                      company: "EcoDelivery",
                      location: "New York, NY",
                      salary: "$110K - $130K",
                      equity: "0.75-1.25%",
                      logo: "🚚",
                      tags: ["Marketing", "Sustainability", "Logistics"]
                    },
                    { 
                      role: "UI/UX Designer",
                      company: "HealthSync",
                      location: "Remote",
                      salary: "$90K - $120K",
                      equity: "0.25-0.75%",
                      logo: "🏥",
                      tags: ["Figma", "Product Design", "Healthcare"]
                    },
                    { 
                      role: "ML Engineer",
                      company: "DataSense",
                      location: "San Francisco, CA",
                      salary: "$130K - $160K",
                      equity: "0.5-1.0%",
                      logo: "📊",
                      tags: ["Python", "TensorFlow", "Computer Vision"]
                    }
                  ].map((job, i) => (
                    <div key={i} className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl mr-3">
                          {job.logo}
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-900 dark:text-white">{job.role}</h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{job.company} • {job.location}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag, j) => (
                            <span key={j} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">{tag}</span>
                          ))}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900 dark:text-gray-100">{job.salary}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">+{job.equity} equity</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}