import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/config';

export default function TerminalWidget({ className = '' }) {
  const [activeTab, setActiveTab] = useState('whoami');
  const [copied, setCopied] = useState(false);

  const commandData = {
    whoami: {
      cmd: 'whoami',
      output: [
        'name: "Sriram"',
        'role: "Full Stack Developer"',
        'education: "BCA @ St. Joseph\'s College (2024–2027)"',
        'internship: "FrontierWox // Team Leader"'
      ]
    },
    stack: {
      cmd: 'cat skills.json',
      output: [
        'frontend: ["React.js", "JavaScript", "HTML5", "CSS3"]',
        'backend: ["Node.js", "Express.js", "Python", "Flask"]',
        'databases: ["MongoDB", "MongoDB Atlas", "SQLite"]',
        'tooling: ["Git", "GitHub", "VS Code", "Figma"]'
      ]
    },
    status: {
      cmd: 'git status',
      output: [
        'On branch main',
        'Your branch is up to date with \'origin/main\'.',
        'Status: Open to Full Stack Developer Opportunities',
        'Current focus: Building scalable web applications & MERN systems'
      ]
    }
  };

  const handleCopy = () => {
    const text = commandData[activeTab].output.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`dev-terminal ${className}`}>
      {/* Terminal Titlebar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <Terminal size={13} color="#F5C542" />
          <span>sriram@command-center: ~</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="terminal-copy-btn"
          title="Copy command output"
          aria-label="Copy output"
        >
          {copied ? <Check size={13} color="#F5C542" /> : <Copy size={13} />}
        </button>
      </div>

      {/* Interactive Command Tabs */}
      <div className="terminal-tabs">
        <button
          type="button"
          className={`terminal-tab ${activeTab === 'whoami' ? 'active' : ''}`}
          onClick={() => setActiveTab('whoami')}
        >
          $ whoami
        </button>
        <button
          type="button"
          className={`terminal-tab ${activeTab === 'stack' ? 'active' : ''}`}
          onClick={() => setActiveTab('stack')}
        >
          $ cat skills.json
        </button>
        <button
          type="button"
          className={`terminal-tab ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          $ git status
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <div className="terminal-prompt-line">
          <span className="prompt-symbol">$</span>
          <span className="prompt-cmd">{commandData[activeTab].cmd}</span>
        </div>
        <div className="terminal-output">
          {commandData[activeTab].output.map((line, idx) => (
            <div key={idx} className="output-line">
              <span className="output-bullet">›</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
        <div className="terminal-cursor-line">
          <span className="prompt-symbol">$</span>
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
}
