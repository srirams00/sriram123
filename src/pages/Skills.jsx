import React, { useState, useEffect } from 'react';
import { skillCategories } from '../data/skills';
import SkillCategory from '../components/skills/SkillCategory';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { ArrowRight, Layers, Terminal } from 'lucide-react';
import '../styles/skills.css';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = "Technical Skills | Sriram Full Stack Developer";
  }, []);

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <div className="page-wrapper skills-page">
      <div className="container section">
        <SectionTitle
          badge="Technical Inventory"
          title="Technical"
          highlight="Skills"
          subtitle="Real-world technologies, toolchains, and software engineering concepts I apply across web development."
        />

        {/* Category Navigation Pills */}
        <div className="projects-filter-bar" style={{ marginBottom: '2.5rem' }}>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Categories Display */}
        <div>
          {displayedCategories.map((cat) => (
            <SkillCategory key={cat.id} category={cat} />
          ))}
        </div>

        {/* Software Philosophy & Practices Card */}
        <div style={{
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-2xl)',
          marginTop: 'var(--space-3xl)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <div>
            <div className="badge" style={{ marginBottom: '0.75rem' }}>
              <span className="badge-dot" />
              <span>Engineering Philosophy</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              No Artificial Percentages, Just Practical Implementation
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Instead of arbitrary metrics like "React 95%", my technical proficiency is demonstrated through functional systems: atomic components, robust state handling, clean REST endpoints, and schema integrity verified in live code.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Terminal size={20} color="#F5C542" />
              <div style={{ fontSize: '0.88rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>Continuous Modernization</div>
                <div style={{ color: 'var(--color-text-secondary)' }}>Constantly exploring emerging libraries and best practices.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Button to="/projects" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                View Applied In Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
