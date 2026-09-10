import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, UserCheck, BookOpen } from 'lucide-react';
import { Github } from '../common/BrandIcons';
import Button from '../common/Button';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="badge" style={{ marginBottom: '0.5rem' }}>
              <span className="badge-dot" />
              <span>Project {project.numericId} • {project.badge || project.category}</span>
            </div>
            <h2 id="modal-project-title" style={{ fontSize: '1.65rem', color: 'var(--color-text-primary)' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
              {project.subtitle}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tech Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag" style={{ borderColor: 'var(--color-yellow-border)', color: 'var(--color-primary-yellow)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Problem & Solution Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
          <div className="modal-section-box">
            <h4 className="modal-section-title">
              <AlertCircle size={15} /> The Problem
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {project.problem}
            </p>
          </div>

          <div className="modal-section-box">
            <h4 className="modal-section-title">
              <Sparkles size={15} /> The Engineered Solution
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="modal-section-box">
          <h4 className="modal-section-title">
            <CheckCircle2 size={15} /> Key Architectural Features
          </h4>
          <ul className="modal-features-list">
            {project.features.map((feat, idx) => (
              <li key={idx} className="modal-feature-item">
                <span className="modal-feature-bullet">▸</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* My Role & Contribution */}
        <div className="modal-section-box">
          <h4 className="modal-section-title">
            <UserCheck size={15} /> My Role & Leadership
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '0.35rem' }}>
            {project.role}
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            {project.roleContribution || 'Architected the core system modules, designed REST API contracts, and spearheaded iterative testing.'}
          </p>
        </div>

        {/* Challenges & What I Learned */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="modal-section-box">
            <h4 className="modal-section-title">
              <AlertCircle size={15} /> Engineering Challenges
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {project.challenges}
            </p>
          </div>

          <div className="modal-section-box">
            <h4 className="modal-section-title">
              <BookOpen size={15} /> Key Takeaways
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {project.whatILearned}
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
          {project.github && (
            <Button
              href={project.github}
              variant="primary"
              size="md"
              icon={Github}
              iconPosition="left"
            >
              View on GitHub
            </Button>
          )}

          {project.liveDemo ? (
            <Button
              href={project.liveDemo}
              variant="outline"
              size="md"
              icon={ExternalLink}
              iconPosition="right"
            >
              Live Demo
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="md"
              disabled
              icon={ExternalLink}
              iconPosition="right"
            >
              Live Demo (In Staging)
            </Button>
          )}

          <Button
            variant="ghost"
            size="md"
            onClick={onClose}
            style={{ marginLeft: 'auto' }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
