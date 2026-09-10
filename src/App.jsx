import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Button from './components/common/Button';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <div className="badge" style={{ marginBottom: '1rem' }}>
        <span className="badge-dot" />
        <span>404 // Page Not Found</span>
      </div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Destination Not Found</h1>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
        The route you requested could not be located in this command center. Return to the main workstation.
      </p>
      <Button to="/" variant="primary" size="md">
        Return to Home
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
