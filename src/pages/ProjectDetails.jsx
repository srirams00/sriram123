import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Sparkles, UserCheck, BookOpen, Layers } from 'lucide-react';
import { Github } from '../components/common/BrandIcons';
import { projects } from '../data/projects';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import '../styles/projects.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Sriram Projects`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h2>Project Not Found</h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: '1rem 0 2rem 0' }}>
          The project you requested does not exist or has been relocated.
        </p>
        <Button to="/projects" variant="primary">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="page-wrapper project-details-page">
      <div className="container section" style={{ maxWidth: '900px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Button
            to="/projects"
            variant="ghost"
            size="sm"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to All Projects
          </Button>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="badge" style={{ marginBottom: '0.75rem' }}>
            <span className="badge-dot" />
            <span>Project {project.numericId} • {project.badge || project.category}</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
            {project.subtitle}
          </p>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag" style={{ borderColor: 'var(--color-yellow-border)', color: 'var(--color-primary-yellow)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Problem & Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="dev-card">
            <h4 className="modal-section-title">
              <AlertCircle size={16} /> The Problem
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {project.problem}
            </p>
          </div>

          <div className="dev-card">
            <h4 className="modal-section-title">
              <Sparkles size={16} /> The Solution
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="dev-card" style={{ marginBottom: '2rem' }}>
          <h4 className="modal-section-title">
            <CheckCircle2 size={16} /> Key Features & Capabilities
          </h4>
          <ul className="modal-features-list" style={{ marginTop: '1rem' }}>
            {project.features.map((feat, idx) => (
              <li key={idx} className="modal-feature-item">
                <span className="modal-feature-bullet">▸</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role & Leadership */}
        <div className="dev-card" style={{ marginBottom: '2rem' }}>
          <h4 className="modal-section-title">
            <UserCheck size={16} /> Engineering Role & Responsibilities
          </h4>
          <p style={{ fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
            {project.role}
          </p>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            {project.roleContribution}
          </p>
        </div>

        {/* Challenges & Takeaways */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div className="dev-card">
            <h4 className="modal-section-title">
              <AlertCircle size={16} /> Challenges Faced
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {project.challenges}
            </p>
          </div>

          <div className="dev-card">
            <h4 className="modal-section-title">
              <BookOpen size={16} /> What I Learned
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {project.whatILearned}
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
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
              Live Demo (Pending Deployment)
            </Button>
          )}

          <Button
            to="/projects"
            variant="ghost"
            size="md"
            style={{ marginLeft: 'auto' }}
          >
            All Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
