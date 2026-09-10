import React from 'react';
import SkillCard from './SkillCard';
import '../../styles/skills.css';

export default function SkillCategory({ category }) {
  return (
    <section className="skills-category-wrapper" id={`skill-${category.id}`}>
      <div className="skills-category-header">
        <h3 className="skills-category-title">
          <span className="badge-dot" />
          <span>{category.title}</span>
        </h3>
        <span className="skills-category-desc">{category.description}</span>
      </div>

      <div className="skills-grid">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
