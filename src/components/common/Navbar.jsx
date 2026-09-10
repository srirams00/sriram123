import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Terminal } from 'lucide-react';
import Button from './Button';
import ResumeModal from './ResumeModal';
import { siteConfig } from '../../data/config';
import '../../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="Sriram Homepage">
            <span className="brand-dot" />
            <span>SRIRAM</span>
            <span className="brand-tag">.DEV</span>
            
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Resume CTA */}
          <div className="nav-resume-btn">
            <Button
              variant="outline"
              size="sm"
              icon={FileText}
              iconPosition="left"
              onClick={() => setIsResumeModalOpen(true)}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-drawer-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden={!isMobileOpen}
      />
      <aside className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <Link to="/" className="brand-logo" onClick={() => setIsMobileOpen(false)}>
            <span className="brand-dot" />
            <span>SRI RAM</span>
            <span className="brand-tag">.DEV</span>
          </Link>
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-drawer-nav">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <Button
            variant="primary"
            size="md"
            icon={FileText}
            iconPosition="left"
            onClick={() => {
              setIsMobileOpen(false);
              setIsResumeModalOpen(true);
            }}
          >
            Download Resume
          </Button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            <Terminal size={14} color="#F5C542" />
            <span>status: ready to build</span>
          </div>
        </div>
      </aside>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
