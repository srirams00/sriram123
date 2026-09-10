import React, { useState } from 'react';
import { ArrowRight, FileText, Sparkles, Code2 } from 'lucide-react';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import ResumeModal from '../common/ResumeModal';
import { siteConfig } from '../../data/config';
import '../../styles/home.css';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(siteConfig.profileImage);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Fallback to SVG if profile.jpg is not found
  const handleImageError = () => {
    setImgSrc(siteConfig.profileFallback);
  };

  return (
    <>
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Introduction & CTAs */}
            <div className="hero-content">
              <div className="badge">
                <span className="badge-dot" />
                <span>{siteConfig.statusBadge}</span>
              </div>

              <h1 className="hero-title">
                Building Digital Experiences That <span className="hero-title-highlight">Solve Real Problems.</span>
              </h1>

              <p className="hero-lead">
                {siteConfig.bio}
              </p>

              <div className="hero-actions">
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  View My Projects
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  icon={FileText}
                  iconPosition="left"
                  onClick={() => setIsResumeModalOpen(true)}
                >
                  Download Resume
                </Button>
              </div>

              <div className="hero-social-block">
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                  Connect:
                </span>
                <SocialLinks showEmailCopy={false} />
              </div>
            </div>

            {/* Right Column: Visual Container & Floating Badge */}
            <div className="hero-media-col">
              <div className="hero-photo-wrapper">
                <div className="hero-photo-glow" />
                <div className="hero-photo-card">
                  <img
                    src={imgSrc}
                    alt="Sriram - Full Stack Developer"
                    className="hero-photo-img"
                    onError={handleImageError}
                  />
                </div>

                {/* Floating Developer Status Card */}
                <div className="floating-dev-badge">
                  <span className="floating-dot" />
                  <div>
                    <div className="floating-text-sub">Open to Opportunities</div>
                    <div className="floating-text-main">MERN & Full Stack Roles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
