import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { UserPlus, MessageSquare, Award, Heart } from 'lucide-react';

export function TeamMatchingSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Network Visualization */}
              <div className="w-full aspect-square relative">
                {/* Background Elements */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 400 400" className="w-full h-full opacity-20 dark:opacity-10">
                    <path d="M200,20 A180,180 0 0,1 200,380 A180,180 0 0,1 200,20" fill="none" stroke="#4f46e5" strokeWidth="1" />
                    <path d="M200,60 A140,140 0 0,1 200,340 A140,140 0 0,1 200,60" fill="none" stroke="#4f46e5" strokeWidth="1" />
                    <path d="M200,100 A100,100 0 0,1 200,300 A100,100 0 0,1 200,100" fill="none" stroke="#4f46e5" strokeWidth="1" />
                    <path d="M40,200 L360,200" stroke="#4f46e5" strokeWidth="1" strokeDasharray="5,5" />
                    <path d="M200,40 L200,360" stroke="#4f46e5" strokeWidth="1" strokeDasharray="5,5" />
                  </svg>
                </div>
                
                {/* Network Nodes */}
                {[
                  { x: 200, y: 100, size: 14, color: 'from-indigo-500 to-violet-600' },
                  { x: 280, y: 150, size: 12, color: 'from-emerald-500 to-teal-600' },
                  { x: 120, y: 150, size: 12, color: 'from-amber-500 to-orange-600' },
                  { x: 320, y: 220, size: 10, color: 'from-rose-500 to-pink-600' },
                  { x: 80, y: 220, size: 10, color: 'from-blue-500 to-indigo-600' },
                  { x: 200, y: 280, size: 12, color: 'from-purple-500 to-violet-600' },
                  { x: 140, y: 260, size: 8, color: 'from-green-500 to-teal-600' },
                  { x: 260, y: 260, size: 8, color: 'from-red-500 to-rose-600' },
                ].map((node, i) => (
                  <div 
                    key={i}
                    className={`absolute rounded-full bg-gradient-to-br ${node.color} shadow-lg transform transition-all duration-700 hover:scale-110 flex items-center justify-center`}
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      width: `${node.size * 2}px`,
                      height: `${node.size * 2}px`,
                      marginLeft: `-${node.size}px`,
                      marginTop: `-${node.size}px`,
                    }}
                  >
                    {node.size >= 12 && (
                      <div className="w-6 h-6 rounded-full bg-white/90 overflow-hidden">
                        <img 
                          src={`https://images.pexels.com/photos/${1000000 + i * 100000}/pexels-photo-${1000000 + i * 100000}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1`}
                          alt="Team Member"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1`;
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#312e81" floodOpacity="0.6" />
    </filter>
  </defs>

  <line x1="200" y1="100" x2="280" y2="150" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="200" y1="100" x2="120" y2="150" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="280" y1="150" x2="320" y2="220" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="120" y1="150" x2="80" y2="220" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="200" y1="280" x2="140" y2="260" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="200" y1="280" x2="260" y2="260" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="280" y1="150" x2="200" y2="280" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
  <line x1="120" y1="150" x2="200" y2="280" stroke="#312e81" strokeWidth="2" strokeDasharray="2,2" filter="url(#glow)" />
</svg>

                {/* Floating Profile Cards */}
                <div className="absolute left-10 top-1/3 w-60 transform -translate-x-1/4 z-10 hidden md:block">
                  <Card className="p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-900">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg" alt="Developer" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Alex Johnson</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Full-Stack Developer</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">React</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Node.js</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Infrastructure</span>
                    </div>
                  </Card>
                </div>
                
                <div className="absolute right-10 bottom-1/3 w-60 transform translate-x-1/4 z-10 hidden md:block">
                  <Card className="p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-900">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Designer" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Maya Williams</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Director</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Photography</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Screenplay</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Direction</span>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              <UserPlus size={16} className="mr-2" />
              Co-Founder Matching
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
              Find Your Perfect Match
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Connect with co-founders and team members who complement your skills and share your vision. Our intelligent matching algorithm finds the perfect fit for your startup journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "Skill-Based Matching",
                  description: "Find complementary teammates with the exact skills your startup needs."
                },
                {
                  icon: Heart,
                  title: "Values Alignment",
                  description: "Connect with founders who share your vision and work style."
                },
                {
                  icon: MessageSquare,
                  title: "Secure Communication",
                  description: "Built-in tools to coordinate with potential teammates."
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                        <feature.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}