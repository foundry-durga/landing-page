import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Foundry helped me find the perfect technical co-founder in just two weeks. We've since raised our seed round and launched our beta.",
    author: "Jessica Lee",
    title: "Founder, HealthSync",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    quote: "The AI copilot feels like having a startup expert by my side 24/7. It's generated market insights I would have missed and saved me countless hours.",
    author: "Michael Rodriguez",
    title: "CEO, GreenTech Solutions",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    quote: "As an investor, Foundry's platform gives me early access to well-structured startups with clear vision and execution plans. The quality is consistently high.",
    author: "Sarah Chen",
    title: "Partner, Horizon Ventures",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  }
];

const partners = [
  { name: "TechStars", logo: "🚀" },
  { name: "Y Combinator", logo: "🔥" },
  { name: "Sequoia", logo: "🌲" },
  { name: "Andreessen Horowitz", logo: "🔮" },
  { name: "Accel", logo: "⚡" },
  { name: "First Round", logo: "🥇" }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900 dark:text-white">
            Trusted by Founders & Investors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join the community of innovators who are building the next generation of startups with Foundry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute top-4 left-4 text-indigo-500 dark:text-indigo-400 opacity-20">
                <Quote size={40} />
              </div>
              <div className="pt-8 pb-4 px-2">
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-8">Backed by Leading Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-3xl mb-2">
                  {partner.logo}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}