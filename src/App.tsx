import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CitiesSection from './components/CitiesSection';
import ToolsSection from './components/ToolsSection';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <CitiesSection />
      <ToolsSection />
      <TeamSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}

export default App;