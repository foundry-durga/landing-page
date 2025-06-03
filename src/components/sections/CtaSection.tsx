import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Calendar, Sparkles, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';

export function CtaSection() {
   const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
    setIsVisible(true);
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 10 : 20);
    };
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 20 + 20,
  }));

  const stats = [
    { icon: Users, label: "Early Adopters", value: "2,500" },
    { icon: Star, label: "Rating", value: "4.9/5" },
    { icon: CheckCircle, label: "Success Rate", value: "94%" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 "
            style={{
              left: `${particle.left}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

     
      
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 " />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Hero icon with animation */}
          <div className="relative mb-8">
            <div className="absolute inset-0 breakounded-full blur-xl opacity-20 animate-pulse" />
            <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
              <Rocket size={40} className="text-white animate-bounce" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-spin" />
          </div>

          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="bg-gradient-to-r from-slate-800 via-emerald-700 to-blue-700 bg-clip-text text-white">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Vision?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of innovators who are already building the future. 
            <span className="text-emerald-600 font-semibold"> Be part of something extraordinary.</span>
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-emerald-200/50 hover:bg-white/90 hover:border-emerald-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-8">
            <button className="group relative bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-4 px-8 md:px-10 rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"  onClick={() => navigate('/waitlist')}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button className="group bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 hover:text-slate-800 font-semibold py-4 px-8 md:px-10 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/20">
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Social proof */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-200/50 max-w-md mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              "This platform will exceeded all our expectations. The results will be incredible!"
            </p>
          </div>

          {/* Urgency message */}
          <div className="mt-8 inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 backdrop-blur-md rounded-full px-6 py-3 border border-orange-200">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-3" />
            <span className="text-orange-700 text-sm font-medium">
              Only 1000 spots left in our exclusive beta program
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}