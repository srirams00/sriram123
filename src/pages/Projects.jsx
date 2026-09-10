import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import SectionTitle from '../components/common/SectionTitle';
import '../styles/projects.css';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Projects | Sriram Full Stack Developer";
  }, []);

  // Check if URL query contains a project id to open modal immediately
  useEffect(() => {
    const projectId = searchParams.get('id');
    if (projectId) {
      const match = projects.find((p) => p.id === projectId);
      if (match) setSelectedProject(match);
    }
  }, [searchParams]);

  const categories = ['All', 'Full Stack', 'Backend', 'Frontend', 'Tools'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setSearchParams({ id: project.id });
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSearchParams({});
  };

  return (
    <div className="page-wrapper projects-page">
      <div className="container section">
        <SectionTitle
          badge="Engineering Portfolio"
          title="My"
          highlight="Projects"
          subtitle="Projects I've built to learn, experiment, and solve real-world problems."
        />

        {/* Category Filters */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
            >
              {cat} {cat === 'All' ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={handleSelectProject}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
