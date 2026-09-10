import React from 'react';
import { Layers, Code2, Wrench, Users } from 'lucide-react';
import { quickOverviewCards } from '../../data/skills';
import SectionTitle from '../common/SectionTitle';

export default function QuickOverview() {
  const iconMap = {
    Layers: Layers,
    Code2: Code2,
    Wrench: Wrench,
    Users: Users
  };

  return (
    <section className="section overview-section" aria-label="Quick Technical Overview">
      <div className="container">
        <SectionTitle
          badge="Core Competencies"
          title="Engineering"
          highlight="Snapshot"
          subtitle="A high-level view of my primary full-stack technical competencies and practical disciplines."
        />

        <div className="overview-grid">
          {quickOverviewCards.map((card) => {
            const Icon = iconMap[card.icon] || Layers;
            return (
              <div key={card.title} className="overview-card">
                <div className="overview-card-header">
                  <div className="overview-icon-box">
                    <Icon size={18} />
                  </div>
                  <h3 className="overview-title">{card.title}</h3>
                </div>
                <div className="overview-skills-tag">{card.skills}</div>
                <p className="overview-desc">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
