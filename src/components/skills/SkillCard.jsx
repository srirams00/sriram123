import React from 'react';
import {
  Atom,
  FileCode2,
  Code,
  Palette,
  LayoutTemplate,
  Server,
  Layers,
  Terminal,
  Cpu,
  Network,
  Database,
  Cloud,
  HardDrive,
  Table2,
  Braces,
  FileCode,
  Binary,
  GitBranch,
  Laptop,
  Globe,
  Radio,
  ShieldCheck,
  Workflow,
  Boxes,
  GitFork,
  Code2
} from 'lucide-react';
import { Github, Figma } from '../common/BrandIcons';

const iconMap = {
  Atom,
  FileCode2,
  Code,
  Palette,
  LayoutTemplate,
  Server,
  Layers,
  Terminal,
  Cpu,
  Network,
  Database,
  Cloud,
  HardDrive,
  Table2,
  Braces,
  FileCode,
  Binary,
  GitBranch,
  Laptop,
  Globe,
  Radio,
  ShieldCheck,
  Workflow,
  Boxes,
  GitFork,
  Github,
  Figma,
  Code2
};

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.icon] || Code2;

  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon-box" aria-hidden="true">
          <IconComponent size={20} />
        </div>
        {skill.level && (
          <span className="skill-level-badge">{skill.level}</span>
        )}
      </div>

      <div>
        <h4 className="skill-name">{skill.name}</h4>
        <p className="skill-desc">{skill.description}</p>
      </div>
    </div>
  );
}
