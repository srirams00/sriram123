import React from 'react';

/**
 * SectionTitle - standard heading with badge, title and description
 */
export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className="badge">
          <span className="badge-dot" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="highlight">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
