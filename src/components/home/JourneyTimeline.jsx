import React from 'react';
import { developerJourney } from '../../data/timeline';
import SectionTitle from '../common/SectionTitle';

export default function JourneyTimeline() {
  return (
    <section className="section journey-timeline-section" aria-label="Developer Journey">
      <div className="container">
        <SectionTitle
          badge="Progression"
          title="My Developer"
          highlight="Journey"
          subtitle="From academic foundations in computer science to leading full-stack engineering sprints."
          align="center"
        />

        <div className="timeline-track">
          {developerJourney.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-year">{item.year}</span>
                  {item.highlight && (
                    <span className="timeline-highlight-badge">{item.highlight}</span>
                  )}
                </div>
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
