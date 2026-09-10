import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { siteConfig } from '../../data/config';

export default function SocialLinks({ showEmailCopy = false, className = '' }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`social-links-wrapper ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      <a
        href={siteConfig.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="social-icon-btn"
        title="GitHub"
      >
        <Github size={19} />
      </a>
      <a
        href={siteConfig.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="social-icon-btn"
        title="LinkedIn"
      >
        <Linkedin size={19} />
      </a>
      <a
        href={`mailto:${siteConfig.socialLinks.email}`}
        aria-label="Send Email"
        className="social-icon-btn"
        title="Send Email"
      >
        <Mail size={19} />
      </a>

      {showEmailCopy && (
        <button
          type="button"
          onClick={copyEmail}
          className="social-copy-badge"
          title="Copy Email Address"
          aria-label="Copy Email Address"
        >
          {copied ? <Check size={14} color="#F5C542" /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : siteConfig.socialLinks.email}</span>
        </button>
      )}
    </div>
  );
}
