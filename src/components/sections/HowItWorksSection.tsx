import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { LightbulbIcon, Users, Code, PiggyBank, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Idea Validation',
    description: 'Transform your concept into a validated business model with AI-powered market analysis.',
    icon: LightbulbIcon,
    color: 'from-amber-400 to-orange-500',
    features: ['Market Analysis', 'Competitor Research', 'Business Model Canvas']
  },
  {
    id: 2,
    title: 'Team Building',
    description: 'Connect with co-founders and talent who share your vision and complement your skills.',
    icon: Users,
    color: 'from-blue-400 to-indigo-500',
    features: ['Skill Matching', 'Value Alignment', 'Team Chemistry']
  },
  {
    id: 3,
    title: 'Product Development',
    description: 'Build your MVP faster with collaborative tools and AI assistance at every step.',
    icon: Code,
    color: 'from-emerald-400 to-teal-500',
    features: ['AI Development', 'Smart Workspaces', 'Progress Tracking']
  },
  {
    id: 4,
    title: 'Investment Ready',
    description: 'Connect with investors, prepare compelling pitch materials, and secure funding.',
    icon: PiggyBank,
    color: 'from-violet-400 to-purple-500',
    features: ['Pitch Deck AI', 'Investor Network', 'Funding Strategy']
  }
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom - window.innerHeight) / rect.height));
        setScrollProgress(progress);
        
        // Update active step based on scroll position
        const stepIndex = Math.floor(progress * 4);
        if (stepIndex >= 0 && stepIndex < 4) {
          setActiveStep(stepIndex + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 min-h-screen relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
            <LightbulbIcon size={16} className="mr-2" />
            The Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Your Path to Startup Success
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From the first spark of an idea to securing funding, we provide the structure, tools, and support you need at every step.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 to-violet-600"
              style={{ height: `${scrollProgress * 100}%`, transition: 'height 0.3s ease-out' }}
            />
          </div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`
                  relative pl-12 transform transition-all duration-700
                  ${activeStep >= step.id ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-50'}
                `}
              >
                {/* Timeline Node */}
                <div 
                  className={`
                    absolute left-0 w-3 h-3 rounded-full -translate-x-[5px]
                    transition-all duration-500
                    ${activeStep >= step.id 
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-600 scale-150' 
                      : 'bg-gray-300 dark:bg-gray-600'
                    }
                  `}
                />

                <div className="relative">
                  {/* Step Content */}
                  <div 
                    className={`
                      relative bg-white dark:bg-gray-800 rounded-2xl p-8
                      transform transition-all duration-500 group
                      hover:scale-[1.02] hover:-rotate-1
                      ${activeStep === step.id ? 'shadow-2xl' : 'shadow-lg'}
                    `}
                  >
                    {/* Background Gradient */}
                    <div 
                      className={`
                        absolute inset-0 rounded-2xl opacity-10 dark:opacity-20
                        bg-gradient-to-br ${step.color}
                      `}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div 
                        className={`
                          w-16 h-16 rounded-xl bg-gradient-to-br ${step.color}
                          flex items-center justify-center mb-6
                          transform transition-all duration-500
                          group-hover:scale-110 group-hover:rotate-6
                        `}
                      >
                        <step.icon size={32} className="text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 font-serif text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {step.features.map((feature, i) => (
                          <div 
                            key={i}
                            className={`
                              p-3 rounded-lg  
                             transform transition-all duration-300
                              hover:scale-105 hover:-rotate-1
                              opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]
                            `}
                            style={{ animationDelay: `${i * 100}ms` ,  borderColor: `${step.color}`}}
                          >
                            <li className="text-gray-900 dark:text-white font-medium">
                              {feature}
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connection Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2">
                        <ArrowRight 
                          size={24} 
                          className={`
                            text-gray-400 dark:text-gray-500
                            transform transition-all duration-500 rotate-90
                            ${activeStep > step.id ? 'text-indigo-500' : ''}
                          `}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}