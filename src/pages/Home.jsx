import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import QuickOverview from '../components/home/QuickOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TerminalWidget from '../components/common/TerminalWidget';

export default function Home() {
  useEffect(() => {
    document.title = "Sriram | Full Stack Developer";
  }, []);

  return (
    <div className="page-wrapper home-page">
      {/* Hero Section */}
      <Hero />

      {/* Developer Command Center Snippet */}
      <section className="container" aria-label="Terminal Environment">
        <TerminalWidget />
      </section>

      {/* Quick Overview */}
      <QuickOverview />

      {/* My Projects */}
      <FeaturedProjects />
    </div>
  );
}
