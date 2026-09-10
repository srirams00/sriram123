import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import '../../styles/projects.css';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Take the 3 featured projects

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section featured-projects-section" aria-label="My Projects">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--space-2xl)' }}>
          <SectionTitle
            badge="Selected Works"
            title="My"
            highlight="Projects"
            subtitle="Key systems built to eliminate manual friction, integrate clinical data, and explore computational concepts."
            style={{ marginBottom: 0 }}
          />

          <Button
            to="/projects"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </div>

        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
          <Button
            to="/projects"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore Complete Project Catalog
          </Button>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
