import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Sparkles, Brain, Target, Globe, BarChart as ChartBar, FileText, ArrowRight, ArrowLeft, Send, Rocket, Check } from 'lucide-react';

interface IdeaSubmissionFlowProps {
  onComplete: () => void;
}

const steps = [
  {
    id: 'description',
    title: 'Describe Your Idea',
    subtitle: 'Share your vision and let our AI help refine it',
    icon: Sparkles,
    color: 'from-indigo-500 to-violet-600'
  },
  {
    id: 'analysis',
    title: 'Market Analysis',
    subtitle: 'Understanding your target market and competition',
    icon: Globe,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'refinement',
    title: 'Idea Refinement',
    subtitle: 'Fine-tune your concept with AI insights',
    icon: Target,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    subtitle: 'Generate comprehensive documentation',
    icon: FileText,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'launch',
    title: 'Ready to Launch',
    subtitle: 'Share your idea with the community',
    icon: Rocket,
    color: 'from-emerald-500 to-teal-600'
  }
];

export function IdeaSubmissionFlow({ onComplete }: IdeaSubmissionFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [ideaData, setIdeaData] = useState({
    description: '',
    market: '',
    refinements: [] as string[],
    documentation: null
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDescriptionSubmit = async () => {
    setIsProcessing(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAiSuggestions([
      'Consider focusing on mobile-first approach',
      'Add sustainability metrics',
      'Include AI-powered personalization'
    ]);
    setIsProcessing(false);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return ideaData.description.trim().length > 0 && aiSuggestions.length > 0;
      case 1:
      case 2:
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center"
              >
                <Sparkles size={32} className="text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Share Your Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Describe your idea in detail. Our AI will help refine and structure it.
              </p>
            </div>

            <div className="space-y-6">
              <textarea
                value={ideaData.description}
                onChange={(e) => setIdeaData({ ...ideaData, description: e.target.value })}
                placeholder="Describe your idea... What problem does it solve? Who is it for?"
                className="w-full h-48 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleDescriptionSubmit}
                disabled={!ideaData.description.trim() || isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <Brain className="animate-pulse mr-2\" size={20} />
                    Analyzing your idea...
                  </div>
                ) : (
                  <>
                    <Brain size={20} className="mr-2" />
                    Analyze with AI
                  </>
                )}
              </Button>

              {aiSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    AI Suggestions
                  </h3>
                  <div className="space-y-3">
                    {aiSuggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-lg"
                      >
                        <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                        <span className="text-gray-800 dark:text-gray-200">{suggestion}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
              >
                <Globe size={32} className="text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Market Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Let's analyze your target market and competition
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Market Size
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">TAM</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$5.2B</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">SAM</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$1.8B</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">SOM</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$450M</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Competition
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Direct</span>
                      <span className="font-semibold text-gray-900 dark:text-white">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Indirect</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Key Differentiators
                </h3>
                <ul className="space-y-3">
                  {[
                    'AI-powered personalization',
                    'Sustainable approach',
                    'Mobile-first design'
                  ].map((diff, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-emerald-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"
              >
                <Target size={32} className="text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Refine Your Idea
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Let's optimize your concept based on market insights
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  AI Recommendations
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Target Audience',
                      description: 'Focus on urban professionals aged 25-40'
                    },
                    {
                      title: 'Feature Priority',
                      description: 'Implement AI personalization in MVP phase'
                    },
                    {
                      title: 'Go-to-Market',
                      description: 'Start with B2B partnerships in key markets'
                    }
                  ].map((rec, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {rec.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {rec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"
              >
                <FileText size={32} className="text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Documentation
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Generate comprehensive documentation for your idea
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Executive Summary',
                  icon: ChartBar,
                  status: 'Generated',
                  type: 'pdf'
                },
                {
                  title: 'Technical Specification',
                  icon: FileText,
                  status: 'Generated',
                  type: 'md'
                },
                {
                  title: 'Market Analysis Report',
                  icon: Globe,
                  status: 'Generated',
                  type: 'pdf'
                }
              ].map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-4">
                      <doc.icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {doc.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {doc.status} • {doc.type.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"
            >
              <Check size={40} className="text-white" />
            </motion.div>

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Launch!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Your idea has been refined and documented. Time to share it with the world!
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={onComplete}
              className="px-8"
            >
              <Rocket size={20} className="mr-2" />
              Launch Idea
            </Button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Container>
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative flex justify-between">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-indigo-600 -translate-y-1/2 transition-all duration-300"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  relative flex flex-col items-center
                  ${index <= currentStep ? 'text-indigo-600' : 'text-gray-400'}
                `}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 z-10
                  ${index <= currentStep 
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                  }
                `}>
                  {index + 1}
                </div>
                <span className="absolute top-12 text-sm font-medium whitespace-nowrap">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {/* Navigation */}
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <div className="flex justify-between mt-12 max-w-2xl mx-auto">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleBack}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              Continue
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}