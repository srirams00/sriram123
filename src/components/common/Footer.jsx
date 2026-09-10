import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { siteConfig } from '../../data/config';
import '../../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Slogan */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo" aria-label="Sriram Homepage">
              <span className="brand-dot" />
              <span>SRIRAM</span>
              <span className="brand-tag">.DEV</span>
            </Link>
            <p className="footer-tagline">"Building. Learning. Creating."</p>
            <p className="footer-desc">
              Personal engineering workspace of Sriram — Full Stack Developer & BCA Student passionate about architecting practical, responsive digital tools.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="footer-heading">// Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/" className="footer-nav-link">Home</Link></li>
              <li><Link to="/about" className="footer-nav-link">About</Link></li>
              <li><Link to="/projects" className="footer-nav-link">Projects</Link></li>
              <li><Link to="/skills" className="footer-nav-link">Skills</Link></li>
              <li><Link to="/contact" className="footer-nav-link">Contact</Link></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="footer-heading">// Connect</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
              Available for internships, developer roles & freelance projects.
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="footer-meta">
            <Terminal size={14} color="#F5C542" />
            <span>Crafted with React & Vanilla CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
