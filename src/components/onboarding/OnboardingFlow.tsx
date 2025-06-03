import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  Sparkles,
  Code,
  Palette,
  Brain,
  TrendingUp,
  Rocket,
  ArrowRight,
  Check,
  Building2,
  Globe,
  Heart,
  Users,
  Target,
  ArrowLeft
} from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const industries = [
  { id: 'fintech', label: 'Fintech', icon: TrendingUp, description: 'Financial technology and services' },
  { id: 'healthtech', label: 'HealthTech', icon: Heart, description: 'Healthcare and medical solutions' },
  { id: 'edtech', label: 'EdTech', icon: Brain, description: 'Education and learning platforms' },
  { id: 'ai', label: 'AI & ML', icon: Sparkles, description: 'Artificial Intelligence and Machine Learning' },
  { id: 'saas', label: 'SaaS', icon: Globe, description: 'Software as a Service solutions' },
  { id: 'marketplace', label: 'Marketplace', icon: Building2, description: 'Online marketplaces and platforms' }
];

const roles = [
  { id: 'founder', label: 'Founder', icon: Target, description: 'Leading the vision and strategy' },
  { id: 'developer', label: 'Developer', icon: Code, description: 'Building the technical solution' },
  { id: 'designer', label: 'Designer', icon: Palette, description: 'Creating the user experience' },
  { id: 'product', label: 'Product', icon: Rocket, description: 'Managing the product lifecycle' }
];

const stages = [
  { id: 'ideation', label: 'Ideation', description: 'Exploring and validating ideas' },
  { id: 'mvp', label: 'MVP', description: 'Building minimum viable product' },
  { id: 'growth', label: 'Growth', description: 'Scaling the business' },
  { id: 'established', label: 'Established', description: 'Optimizing and expanding' }
];

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    industries: [] as string[],
    role: '',
    stage: '',
    lookingFor: [] as string[]
  });

  const totalSteps = 5;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 2:
        return data.industries.length > 0;
      case 3:
        return data.role !== '';
      case 4:
        return data.stage !== '';
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <Container>
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12 overflow-x-auto">
          <div className="relative flex justify-between min-w-[600px] md:min-w-0">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-indigo-600 -translate-y-1/2 transition-all duration-300"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />
            
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`
                  relative flex flex-col items-center
                  ${index < step ? 'text-indigo-600' : 'text-gray-400'}
                `}
              >
                <div className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 z-10
                  ${index < step 
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                  }
                `}>
                  {index + 1}
                </div>
                <span className="absolute top-12 text-xs md:text-sm font-medium whitespace-nowrap">
                  Step {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {step === 1 && (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center"
                  >
                    <Rocket size={40} className="text-white" />
                  </motion.div>
                  <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                    Welcome to Foundry
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    Let's personalize your experience and help you build something amazing
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    className="w-full md:w-auto px-8"
                  >
                    Get Started
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    What industries interest you?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                    Select the areas where you want to make an impact
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industries.map((industry, index) => (
                      <motion.button
                        key={industry.id}
                        onClick={() => {
                          const newIndustries = data.industries.includes(industry.id)
                            ? data.industries.filter(i => i !== industry.id)
                            : [...data.industries, industry.id];
                          setData({ ...data, industries: newIndustries });
                        }}
                        className={`
                          p-4 rounded-xl text-left transition-all duration-300
                          ${data.industries.includes(industry.id)
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700'
                          }
                        `}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <industry.icon size={24} className={`mb-3 ${
                          data.industries.includes(industry.id)
                            ? 'text-white'
                            : 'text-indigo-600 dark:text-indigo-400'
                        }`} />
                        <h3 className="text-lg font-bold mb-2">{industry.label}</h3>
                        <p className={`text-sm ${
                          data.industries.includes(industry.id)
                            ? 'text-indigo-100'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {industry.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    What's your role?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                    Tell us how you'll contribute to your startup
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roles.map((role, index) => (
                      <motion.button
                        key={role.id}
                        onClick={() => setData({ ...data, role: role.id })}
                        className={`
                          p-4 rounded-xl text-left transition-all duration-300
                          ${data.role === role.id
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700'
                          }
                        `}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <role.icon size={24} className={`mb-3 ${
                          data.role === role.id
                            ? 'text-white'
                            : 'text-indigo-600 dark:text-indigo-400'
                        }`} />
                        <h3 className="text-lg font-bold mb-2">{role.label}</h3>
                        <p className={`text-sm ${
                          data.role === role.id
                            ? 'text-indigo-100'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {role.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    What stage are you at?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                    Help us understand where you are in your journey
                  </p>
                  
                  <div className="space-y-4">
                    {stages.map((stage, index) => (
                      <motion.button
                        key={stage.id}
                        onClick={() => setData({ ...data, stage: stage.id })}
                        className={`
                          w-full p-4 rounded-xl text-left transition-all duration-300
                          ${data.stage === stage.id
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700'
                          }
                        `}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center">
                          <div className={`
                            w-10 h-10 rounded-full flex items-center justify-center mr-4
                            ${data.stage === stage.id
                              ? 'bg-white/20'
                              : 'bg-indigo-100 dark:bg-indigo-900/40'
                            }
                          `}>
                            <span className={`text-lg font-bold ${
                              data.stage === stage.id
                                ? 'text-white'
                                : 'text-indigo-600 dark:text-indigo-400'
                            }`}>
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{stage.label}</h3>
                            <p className={`text-sm ${
                              data.stage === stage.id
                                ? 'text-indigo-100'
                                : 'text-gray-600 dark:text-gray-400'
                            }`}>
                              {stage.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
                  >
                    <Check size={40} className="text-white" />
                  </motion.div>
                  
                  <h1 className="text-3xl font-bold mb-6">
                    You're all set!
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    We've personalized your experience based on your preferences
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onComplete}
                    className="w-full md:w-auto px-8"
                  >
                    Start Building
                    <Rocket size={20} className="ml-2" />
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step > 1 && step < totalSteps && (
            <div className="flex justify-between mt-12">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleBack}
                className="w-full md:w-auto"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full md:w-auto"
              >
                Continue
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}