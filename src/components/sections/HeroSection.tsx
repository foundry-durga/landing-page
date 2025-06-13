import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Rocket, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-800/20 rounded-full filter blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 font-serif">
            Ideas Find People.People Build Startups.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Connect with co-founders, build your team, and transform your vision into reality. Join the community where innovative ideas meet exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="min-w-40"
              onClick={() => navigate('/waitlist')}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Join Waitlist
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="min-w-40"
              onClick={() => {
                const element = document.getElementById('how-it-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-2 transform transition-all duration-500 hover:scale-[1.01]">
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden">
              <div className="w-full h-full p-8 flex flex-col">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="flex-1 grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-3">
                    <div className="h-6 w-24 bg-indigo-100 dark:bg-indigo-900/40 rounded mb-3"></div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map(item => (
                        <div key={item} className="h-8 bg-gray-100 dark:bg-gray-800 rounded"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-9 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
                    <div className="h-8 w-48 bg-indigo-100 dark:bg-indigo-900/40 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map(item => (
                        <div key={item} className="h-24 bg-gray-100 dark:bg-gray-800 rounded p-3">
                          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 rotate-3 border border-gray-100 dark:border-gray-700">
            <div className="h-4 w-20 bg-indigo-100 dark:bg-indigo-900/40 rounded mb-2"></div>
            <div className="h-4 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 -rotate-6 border border-gray-100 dark:border-gray-700">
            <div className="h-4 w-24 bg-indigo-100 dark:bg-indigo-900/40 rounded mb-2"></div>
            <div className="h-4 w-20 bg-gray-100 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}