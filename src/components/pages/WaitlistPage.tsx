import React, { useState } from 'react';
import { Container } from '../ui/Container'; // Assuming this provides basic container functionalities
import { Card } from '../ui/Card'; // Assuming this is a basic card structure we can style heavily
import { Button } from '../ui/Button'; // Assuming this is a basic button we can style
import {
  Rocket,
  Check,
  Star,
  Users,
  Brain,
//   Building2, // Not used in the original provided code, commented out
  Code,
  Palette,
  Heart,
  Globe,
  Sparkles,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa6";


const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const interestAreas = [
  { id: 'tech', label: 'Technology', icon: Code, description: 'Software, Apps, and Digital Products' },
  { id: 'creative', label: 'Creative & Design', icon: Palette, description: 'Art, Design, and Media' },
  { id: 'social', label: 'Social Impact', icon: Heart, description: 'Non-profit and Social Enterprises' },
  { id: 'commerce', label: 'Commerce', icon: Globe, description: 'E-commerce and Retail' },
  { id: 'ai', label: 'AI & Innovation', icon: Brain, description: 'AI, ML, and Emerging Tech' },
  { id: 'community', label: 'Community', icon: Users, description: 'Platforms and Networks' }
];

const roles = [
  'Founder/Entrepreneur',
  'Developer',
  'Designer',
  'Product Manager',
  'Business Professional',
  'Creative Professional',
  'Student',
  'Other'
];

export function WaitlistPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: '',
    company: '',
    interestAreas: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.name || !formData.role) {
        setError('Please fill in all required fields.');
        setIsSubmitting(false);
        return;
    }
    if (formData.interestAreas.length === 0) {
        setError('Please select at least one area of interest.');
        setIsSubmitting(false);
        return;
    }


    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: formData.email,
            name: formData.name,
            role: formData.role,
            company: formData.company || null,
            interest_areas: formData.interestAreas
          }
        ]);

      if (error) throw error;
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-800 flex items-center justify-center py-20 px-4">
        <Container>
          {/* Card styling: Glassmorphism effect, more rounded corners, refined shadow */}
          <Card className="max-w-lg mx-auto text-center p-8 sm:p-10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/30 dark:border-slate-700/50">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-300 dark:to-teal-400">
              You're In!
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Thanks for joining our exclusive waitlist! We're thrilled to have you. We'll notify you with early access benefits as soon as we launch.
            </p>
            <div className="space-y-5">
              <Link to="/">
                {/* Button styling: Consistent with main form button, gradient, rounded */}
                <Button variant="primary" size="lg" className="w-full rounded-xl bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 py-3 mb-5">
                  <Rocket className="w-5 h-5 mr-2.5" />
                  Back to Homepage
                </Button>
              </Link>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
  {/* Twitter/X */}
  <a
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "🚀 Just joined the waitlist for a game-changing startup platform! If you're building something big, this is where you start. Check it out! https://foundarly.netlify.app/ #StartupRevolution #NextBigThing"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <Button
      variant="secondary"
      size="lg"
      className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-black text-black hover:bg-black hover:text-white shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-105 py-3"
    >
      <FaXTwitter className="text-xl" />
       X
    </Button>
  </a>

  {/* LinkedIn */}
  <a
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      "https://foundarly.netlify.app/"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <Button
      variant="secondary"
      size="lg"
      className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-105 py-3"
    >
      <FaLinkedin className="text-xl" />
     LinkedIn
    </Button>
  </a>

  {/* WhatsApp */}
  <a
    href={`https://wa.me/?text=${encodeURIComponent(
      "🔥 Just found the ultimate startup launchpad! Join me and get early access: https://foundarly.netlify.app/"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <Button
      variant="secondary"
      size="lg"
      className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-105 py-3"
    >
      <FaWhatsapp className="text-xl" />
      WhatsApp
    </Button>
  </a>
</div>
            </div>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    // Enhanced background gradient for a more "wow" effect
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-50 to-indigo-100 dark:from-slate-900 dark:via-black dark:to-slate-800 py-12 sm:py-16 px-4">
      <Container>
        <Link to="/" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-10 sm:mb-12 transition-colors duration-300 group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium">Back to Homepage</span>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            {/* Enhanced badge styling */}
            <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg text-sm sm:text-base font-semibold mb-8">
              <Zap className="w-5 h-5 mr-2.5" />
              Limited Early Access Program
            </div>
            {/* Title: Larger, more vibrant gradient, more spacing */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 dark:from-indigo-300 dark:via-purple-300 dark:to-fuchsia-300">
                Join the Forefront
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-700 dark:text-gray-300">
                of Innovation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience a revolutionary platform designed for founders, creators, and innovators. Secure your spot and help shape the future.
            </p>
          </div>

          {/* Form Card: Glassmorphism, softer shadows, more rounded */}
          <Card className="p-8 sm:p-10 mb-16 sm:mb-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/30 dark:border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    // Input styling: More rounded, refined focus, subtle bg
                    className="w-full px-5 py-3.5 rounded-xl text-gray-200 border dark:text-white border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 outline-none transition-all duration-300 bg-white/70 dark:bg-slate-700/50 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g., Ada Lovelace"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 dark:text-white rounded-xl border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 outline-none transition-all duration-300 bg-white/70 dark:bg-slate-700/50 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2.5">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-5 py-3.5  dark:text-white rounded-xl border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 outline-none transition-all duration-300 bg-white/70 dark:bg-slate-700/50"
                >
                  <option value="" disabled>Select your primary role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2.5">
                  Company/Organization (Optional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-3.5 dark:text-white  rounded-xl border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 outline-none transition-all duration-300 bg-white/70 dark:bg-slate-700/50 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="e.g., InnovateX Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-5">
                  What excites you most? <span className="text-red-500">*</span> (Select all that apply)
                </label>
                {/* Interest Area buttons: Enhanced styling for selected/unselected, hover effects, icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {interestAreas.map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => {
                        const newAreas = formData.interestAreas.includes(area.id)
                          ? formData.interestAreas.filter(id => id !== area.id)
                          : [...formData.interestAreas, area.id];
                        setFormData({ ...formData, interestAreas: newAreas });
                      }}
                      className={`
                        p-5 rounded-2xl text-left transform transition-all duration-300 ease-out
                        ${formData.interestAreas.includes(area.id)
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 dark:text-white shadow-xl scale-105 ring-2 ring-white/50'
                          : 'bg-indigo-50 dark:bg-slate-700/60 hover:bg-indigo-100 dark:hover:bg-slate-600/80 shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-purple-500/20 hover:scale-102'
                        }
                      `}
                    >
                      <area.icon
                        className={`
                          w-7 h-7 mb-3
                          ${formData.interestAreas.includes(area.id)
                            ? 'text-white'
                            : 'text-indigo-600 dark:text-indigo-300'
                          } transition-colors duration-300
                        `}
                      />
                      <h3 className="font-semibold text-lg mb-1.5">{area.label}</h3>
                      <p className={`text-sm ${formData.interestAreas.includes(area.id) ? 'text-indigo-100/90' : 'text-gray-600 dark:text-gray-400'}`}>
                        {area.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="text-red-600 dark:text-red-400 text-sm font-medium bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border border-red-300 dark:border-red-500/50">
                  {error}
                </div>
              )}

              {/* Submit Button: Gradient, larger, more interactive, rounded */}
              <Button
                type="submit"
                variant="primary" // Ensure your Button component can take this to apply base styles
                size="lg" // Ensure your Button component can take this
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-700 hover:from-indigo-700 hover:via-purple-700 hover:to-fuchsia-800 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transform transition-all text-white duration-300 hover:scale-102 focus:outline-none focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-6 h-6 mr-2.5" />
                    Claim Your Spot
                  </div>
                )}
              </Button>
            </form>
          </Card>

          {/* Feature Highlights: Enhanced individual card styling, icons, hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Priority Access',
                description: 'Be the very first to explore our groundbreaking platform and influence its development with your feedback.'
              },
              {
                icon: Zap, // Changed from Zap to Sparkles for variety if desired, or keep Zap. Using Zap as per original.
                title: 'Exclusive Perks',
                description: 'Unlock special benefits, insider content, and resources available only to our pioneering waitlist members.'
              },
              {
                icon: Users,
                title: 'Innovator\'s Network',
                description: 'Connect with a curated community of forward-thinking entrepreneurs, creators, and builders.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 border border-white/20 dark:border-slate-700/30">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div> 
  );
}