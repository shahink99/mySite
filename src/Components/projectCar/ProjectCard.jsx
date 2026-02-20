import React, { useState } from 'react';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  const getTechIcon = (tech) => {
    const icons = {
      'React': '⚛️',
      'HTML': '🌐',
      'CSS': '🎨',
      'JavaScript': '⚡',
      'TypeScript': '📘',
      'Next.js': '▲',
      'Redux': '🔄',
      'TailwindCSS': '🎨'
    };
    return icons[tech] || '•';
  };

  const defaultImage = '/projectImg.png';

  return (
    <div 
      className="rounded-2xl overflow-hidden flex flex-col h-[440px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ 
        backgroundColor: 'var(--bg-secondary)',
        border: `1px solid var(--border-color)`,
        boxShadow: 'var(--shadow)'
      }}
    >
      {/* تصویر پروژه */}
      <div 
        className="h-40 flex-shrink-0 overflow-hidden bg-[#0d1117] relative group"
        style={{ borderBottom: `1px solid var(--border-color)` }}
      >
        <img 
          src={!imgError ? (project.pic || defaultImage) : defaultImage}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        
        {/* برچسب دسته‌بندی */}
        <div className="absolute top-3 right-3">
          <span 
            className="text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-md"
            style={{ 
              backgroundColor: project.category === 'React' ? 'var(--accent)' : 'var(--bg-secondary)',
              color: project.category === 'React' ? 'white' : 'var(--text-primary)',
              border: `1px solid var(--border-color)`
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* محتوای کارت */}
      <div className="p-5 flex-1 flex flex-col">
        {/* عنوان و سال */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-lg truncate" style={{ color: 'var(--text-primary)' }}>
            {project.name}
          </h3>
          <span 
            className="text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
            style={{ 
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)'
            }}
          >
            {project.year}
          </span>
        </div>

        {/* توضیحات */}
        <div className="mb-4 h-[65px] overflow-hidden">
          <p className="text-sm leading-relaxed line-clamp-3 font-medium" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>
        </div>

        {/* تکنولوژی‌ها */}
        <div className="flex flex-wrap gap-1.5 mb-4 min-h-[52px] max-h-[52px] overflow-hidden">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 font-medium shadow-sm"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}
              title={tech}
            >
              <span className="text-sm">{getTechIcon(tech)}</span>
              <span>{tech}</span>
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span 
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* لینک‌ها */}
        <div className="flex items-center gap-3 pt-4 mt-auto" style={{ borderTop: `2px solid var(--border-color)` }}>
          <a 
            href={project.liveAddress}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-all flex-1 justify-center py-2.5 rounded-xl hover:-translate-y-0.5 hover:shadow-md"
            style={{ 
              color: 'white',
              backgroundColor: 'var(--accent)',
            }}
          >
            <ExternalLink size={16} />
            <span>دمو</span>
          </a>
          <a 
            href={project.gitAddress}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-all flex-1 justify-center py-2.5 rounded-xl hover:-translate-y-0.5 hover:shadow-md"
            style={{ 
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-tertiary)',
              border: `1px solid var(--border-color)`
            }}
          >
            <Github size={16} />
            <span>کد</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;