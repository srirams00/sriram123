import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 * @param {string} to - React Router Link destination
 * @param {string} href - External URL destination
 * @param {boolean} download - For file download links
 * @param {React.ReactNode} icon - Optional Lucide icon
 * @param {'left' | 'right'} iconPosition
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  download,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  className = '',
  disabled = false,
  ariaLabel,
  target,
  rel
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-icon left" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon right" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        download={download}
        onClick={onClick}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
