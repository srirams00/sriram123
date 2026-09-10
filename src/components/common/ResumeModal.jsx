import React from 'react';
import { X, FileText, Download, Mail, ExternalLink } from 'lucide-react';
import { Linkedin } from './BrandIcons';
import Button from './Button';
import { siteConfig } from '../../data/config';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume Options">
      <div className="modal-content resume-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-yellow-muted)',
              border: '1px solid var(--color-yellow-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-yellow)'
            }}>
              <FileText size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>Sriram's Resume</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Full Stack Developer • BCA 2024–2027</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          You can download Sriram's official resume directly or get in touch for developer opportunities, internships, and project collaborations.
        </p>

        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text-secondary)'
        }}>
          <div style={{ color: 'var(--color-primary-yellow)', fontWeight: '600', marginBottom: '0.25rem' }}>
            // File Location
          </div>
          <div>Path: {siteConfig.resumeUrl}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Button
            href={siteConfig.resumeUrl}
            download="Sriram_Resume.pdf"
            variant="primary"
            size="md"
            icon={Download}
            iconPosition="left"
            onClick={onClose}
          >
            Download PDF Resume
          </Button>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
            <Button
              href={siteConfig.socialLinks.linkedin}
              variant="secondary"
              size="md"
              icon={Linkedin}
              iconPosition="left"
              style={{ flex: 1 }}
              onClick={onClose}
            >
              LinkedIn
            </Button>
            <Button
              href={`mailto:${siteConfig.socialLinks.email}`}
              variant="secondary"
              size="md"
              icon={Mail}
              iconPosition="left"
              style={{ flex: 1 }}
              onClick={onClose}
            >
              Email Directly
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
