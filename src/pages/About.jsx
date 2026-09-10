import React, { useEffect } from 'react';
import { GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { siteConfig } from '../data/config';
import '../styles/about.css';

export default function About() {
  useEffect(() => {
    document.title = "About Sriram | Full Stack Developer";
  }, []);

  return (
    <div className="page-wrapper about-page">
      <div className="container section">
        {/* Page Header */}
        <SectionTitle
          badge="Background & Profile"
          title="About"
          highlight="Me"
          subtitle="A passionate developer driven by curiosity, real-world utility, and clean software craftsmanship."
        />

        {/* Narrative & Bio Section */}
        <div className="about-narrative-card">
          <div className="about-bio-text">
            <p>
              Hi, I'm <strong>Sriram</strong>, a <strong>BCA student</strong> and aspiring <strong>Full Stack Developer</strong>. I enjoy building practical web applications and continuously improving my programming and development skills.
            </p>
            <p>
              My development journey is centered around the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and <strong>Python</strong>. Rather than following boilerplate tutorials, I focus on building software that solves concrete operational bottlenecks — such as multi-tier approval systems, clinical medicine search engines, and custom vector utilities.
            </p>
            <p>
              Beyond solo engineering, I have served as a <strong>Team Leader</strong> during my internship at FrontierWox, coordinating agile sprints, establishing database models, and ensuring our codebases are modular, readable, and production-ready.
            </p>
          </div>

          <div className="about-highlights-box">
            <h4 style={{ fontSize: '1rem', color: 'var(--color-primary-yellow)', fontFamily: 'var(--font-mono)' }}>
              // Core Focus Areas
            </h4>
            <div className="about-highlight-item">
              <CheckCircle className="about-highlight-icon" size={18} />
              <span>BCA Student @ St. Joseph's College</span>
            </div>
            <div className="about-highlight-item">
              <CheckCircle className="about-highlight-icon" size={18} />
              <span>Full Stack Development (MERN Stack)</span>
            </div>
            <div className="about-highlight-item">
              <CheckCircle className="about-highlight-icon" size={18} />
              <span>Python Scripting & Flask Microservices</span>
            </div>
            <div className="about-highlight-item">
              <CheckCircle className="about-highlight-icon" size={18} />
              <span>Engineering Leadership & Team Coordination</span>
            </div>
            <div className="about-highlight-item">
              <CheckCircle className="about-highlight-icon" size={18} />
              <span>Passionate about Clean & Scalable Code</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <SectionTitle
            badge="Industry Track Record"
            title="Professional"
            highlight="Experience"
            subtitle="Hands-on development experience and engineering leadership in live projects."
          />

          <div className="timeline-card-large">
            <div className="timeline-card-large-top">
              <div>
                <span className="role-badge">Internship & Team Leadership</span>
                <h3 className="institution-title" style={{ marginTop: '0.5rem' }}>
                  FrontierWox
                </h3>
                <p className="institution-sub">Full Stack Developer Intern • Role: Team Leader</p>
              </div>
              <span className="institution-period">2026</span>
            </div>

            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Led the engineering sprint for the <strong>Hall Booking Management System</strong>. Transitioned the venue requisition process from a manual, paper-dependent bottleneck into an automated, digital reservation pipeline.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              fontSize: '0.9rem',
              color: 'var(--color-text-secondary)'
            }}>
              <span style={{ color: 'var(--color-primary-yellow)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                Key Leadership Contributions:
              </span>
              <span>• Guided sprint planning, task estimation, and daily stand-ups with developer peers.</span>
              <span>• Architected MongoDB schemas with index optimization for high-concurrency reservation slots.</span>
              <span>• Implemented multi-stage approval workflows (Staff requisition → Admin/Father approval).</span>
              <span>• Conducted pull request reviews and enforced consistent coding standards.</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <SectionTitle
            badge="Academic Background"
            title="Formal"
            highlight="Education"
            subtitle="Foundational computer science study and software engineering principles."
          />

          <div className="timeline-card-large">
            <div className="timeline-card-large-top">
              <div>
                <span className="role-badge">Degree Program</span>
                <h3 className="institution-title" style={{ marginTop: '0.5rem' }}>
                  St. Joseph's College
                </h3>
                <p className="institution-sub">Bachelor of Computer Applications (BCA)</p>
              </div>
              <span className="institution-period">2024 – 2027</span>
            </div>

            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Acquiring deep foundations in data structures, algorithms, object-oriented programming with C, database management systems (relational and non-relational), software testing paradigms, and modern network communications.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center', padding: 'var(--space-2xl)', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>Interested in collaborating or hiring?</h3>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
            I am actively seeking internship opportunities, junior developer roles, and freelance engineering projects.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/projects" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              Explore Projects
            </Button>
            <Button to="/contact" variant="outline" size="md">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
