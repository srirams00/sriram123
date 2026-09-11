import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../components/common/BrandIcons';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { siteConfig } from '../data/config';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    document.title = "Contact | Sriram Full Stack Developer";
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    fetch(siteConfig.contactFormEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: `Portfolio contact: ${formData.subject}`,
        _replyto: formData.email
      })
    })
      .then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) {
          throw new Error(result.message || 'Unable to send your message right now.');
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitError('Your message could not be sent. Please email me directly using the address on this page.');
      });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="page-wrapper contact-page">
      <div className="container section">
        <SectionTitle
          badge="Start a Conversation"
          title="Let's Build"
          highlight="Something Together"
          subtitle="Have a project, opportunity, or idea? Feel free to get in touch."
        />

        <div className="contact-layout">
          {/* Form Column */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="form-success-banner">
                <CheckCircle2 className="form-success-icon" size={24} />
                <div>
                  <h3 className="form-success-title">Message Sent Successfully!</h3>
                  <p className="form-success-desc">
                    Thank you for reaching out. I have received your message and will reply as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    style={{ marginTop: '1rem' }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Name <span className="form-label-required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error-msg">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email <span className="form-label-required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error-msg">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="form-label-required">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Full Stack Developer Internship / Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    required
                  />
                  {errors.subject && (
                    <span id="subject-error" className="form-error-msg">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="form-label-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your team, project timeline, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error-msg">{errors.message}</span>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="right"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'SEND MESSAGE'}
                </Button>
                {submitError && (
                  <p className="form-submit-error" role="alert">{submitError}</p>
                )}
              </form>
            )}
          </div>

          {/* Contact Details & Availability Column */}
          <div className="contact-info-col">
            {/* Availability Banner */}
            <div className="contact-availability-box">
              <div className="contact-avail-header">
                <span className="badge-dot" />
                <span>Current Status</span>
              </div>
              <p className="contact-avail-text">
                {siteConfig.availability}
              </p>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon-box">
                <Mail size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-info-title">// Email Address</div>
                <a
                  href={`mailto:${siteConfig.socialLinks.email}`}
                  className="contact-info-value"
                  style={{ wordBreak: 'break-all', display: 'block', marginBottom: '0.4rem' }}
                >
                  {siteConfig.socialLinks.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="social-copy-badge"
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={12} color="#F5C542" /> : <Copy size={12} />}
                  <span>{copiedEmail ? 'Copied to clipboard' : 'Click to copy'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-info-icon-box">
                <Linkedin size={22} />
              </div>
              <div>
                <div className="contact-info-title">// Professional Profile</div>
                <div className="contact-info-value">Connect on LinkedIn ↗</div>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  View endorsements & professional network
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-info-icon-box">
                <Github size={22} />
              </div>
              <div>
                <div className="contact-info-title">// Code Repository</div>
                <div className="contact-info-value">Explore GitHub ↗</div>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Inspect commits, repositories & open source
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="contact-info-card">
              <div className="contact-info-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-info-title">// Location</div>
                <div className="contact-info-value">India (IST)</div>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Available for remote work & local opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
