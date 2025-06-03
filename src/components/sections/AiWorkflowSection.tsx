import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Sparkles, BrainCircuit, FileText, Presentation as PresentationChart } from 'lucide-react';

export function AiWorkflowSection() {
  return (
    <section id="ai-workflow" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              <Sparkles size={16} className="mr-2" />
              AI-Powered Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
              Your Personal Startup Co-pilot, Available 24/7
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              FFoundarly's AI agents analyze market trends, generate business strategies, and help craft compelling pitches. They're trained on startup best practices to guide you at every step.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: BrainCircuit,
                  title: "Market Analysis",
                  description: "AI-powered competitive research and market sizing to validate your ideas."
                },
                {
                  icon: FileText,
                  title: "Content Generation",
                  description: "Create business plans, product specs, and marketing copy in seconds."
                },
                {
                  icon: PresentationChart,
                  title: "Pitch Perfection",
                  description: "Generate investor-ready pitch decks with compelling narratives."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                      <feature.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Background Blobs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/50 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-200/50 dark:bg-indigo-900/20 rounded-full filter blur-3xl"></div>
            
            {/* Main AI Chat Interface */}
            <Card className="relative z-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Foundarly AI Assistant</div>
                <div className="w-6"></div>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800 h-96 overflow-y-auto space-y-6">
                {/* AI Message */}
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 mr-3">
                    <BrainCircuit size={16} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm max-w-xs sm:max-w-md">
                    <p className="text-gray-700 dark:text-gray-200">
                      Hello! I'm your Foundarly AI assistant. How can I help with your startup today?
                    </p>
                  </div>
                </div>
                
                {/* User Message */}
                <div className="flex items-start justify-end">
                  <div className="bg-indigo-50 dark:bg-indigo-900/40 rounded-lg p-4 shadow-sm max-w-xs sm:max-w-md">
                    <p className="text-gray-700 dark:text-gray-200">
                      I have an idea for a sustainable delivery service. Can you help me create a business plan?
                    </p>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 mr-3">
                    <BrainCircuit size={16} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm max-w-xs sm:max-w-md space-y-3">
                    <p className="text-gray-700 dark:text-gray-200">
                      Absolutely! A sustainable delivery service is timely given current market trends. Here's what your business plan should include:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm space-y-1">
                      <li>Executive summary with your sustainability focus</li>
                      <li>Market analysis of current delivery landscape</li>
                      <li>Service model with eco-friendly differentiation</li>
                      <li>Marketing strategy targeting conscious consumers</li>
                      <li>Financial projections with sustainable cost structure</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      Would you like me to generate a draft plan or analyze the market opportunity first?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <input 
                    type="text" 
                    placeholder="Ask your AI assistant anything..." 
                    className="flex-1 bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-indigo-500 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200"
                  />
                  <button className="ml-2 p-2 rounded-lg bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}