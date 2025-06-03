import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { AiWorkflowSection } from './components/sections/AiWorkflowSection';
import { CollaborationSection } from './components/sections/CollaborationSection';
import { TeamMatchingSection } from './components/sections/TeamMatchingSection';
import { InvestorSection } from './components/sections/InvestorSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { CtaSection } from './components/sections/CtaSection';
import { WaitlistPage } from './components/pages/WaitlistPage';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <AiWorkflowSection />
        <CollaborationSection />
        <TeamMatchingSection />
        <InvestorSection />
    
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          {/* Redirect all other routes to waitlist */}
          <Route path="/login" element={<Navigate to="/waitlist\" replace />} />
          <Route path="/signup" element={<Navigate to="/waitlist\" replace />} />
          <Route path="/dashboard/*" element={<Navigate to="/waitlist\" replace />} />
          <Route path="/onboarding" element={<Navigate to="/waitlist\" replace />} />
          <Route path="/ideas/*" element={<Navigate to="/waitlist\" replace />} />
          <Route path="/launchboard" element={<Navigate to="/waitlist\" replace />} />
          <Route path="*" element={<Navigate to="/waitlist\" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;