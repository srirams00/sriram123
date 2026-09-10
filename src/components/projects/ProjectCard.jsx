import React from 'react';
import { ExternalLink, ArrowRight, Eye, Code2 } from 'lucide-react';
import { Github } from '../common/BrandIcons';
import Button from '../common/Button';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <article className="project-card" id={`project-${project.id}`}>
      {/* Banner */}
      <div className="project-card-banner">
        <div className="banner-grid-overlay" />
        <span className="banner-badge">{project.badge || project.category}</span>
        <span className="banner-number">{project.numericId}</span>
        <div className="banner-icon-cluster">
          <div className="banner-icon-pill">
            <Code2 size={24} />
          </div>
          <h4>{project.title}</h4>
        </div>
      </div>

      {/* Body */}
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card-actions">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onSelectProject(project)}
            icon={ArrowRight}
            iconPosition="right"
          >
            View Details
          </Button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ width: '36px', height: '36px' }}
              title="GitHub Repository"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={16} />
            </a>
          )}

          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ width: '36px', height: '36px' }}
              title="Live Demo"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          ) : (
            <button
              type="button"
              className="social-icon-btn"
              style={{ width: '36px', height: '36px', opacity: 0.5, cursor: 'not-allowed' }}
              title="Deployment placeholder - update in src/data/projects.js"
              disabled
              aria-label="Live demo coming soon"
            >
              <ExternalLink size={16} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
