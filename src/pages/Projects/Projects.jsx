import React from 'react';
import { Folder, Github, Calendar, Code } from 'lucide-react';
import projects from '../../data/skills'; // مطمئن شو مسیر درسته
import ProjectCard from '../../Components/projectCar/ProjectCard';

const Projects = () => {
  // آمار پروژه‌ها
  const stats = {
    total: projects.length,
    categories: [...new Set(projects.map(p => p.category))].length,
    technologies: [...new Set(projects.flatMap(p => p.technologies))].length,
    lastYear: Math.max(...projects.map(p => p.year))
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* عنوان صفحه */}
        <div className="mb-6 " style={{textAlign:"right"}}>
          <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            نمونه کارها
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            پروژه‌هایی که کار کرده‌ام
          </p>
        </div>

        {/* آمار سریع */}
        <div 
          className="rounded-xl p-4 mb-8 flex flex-wrap gap-6"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            border: `1px solid var(--border-color)`,
            justifyContent:'right'
          }}
        >
          <div className="flex items-center gap-2">
            <Folder size={16} style={{ color: 'var(--text-secondary)' }} />
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
              {stats.total} پروژه
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Code size={16} style={{ color: 'var(--text-secondary)' }} />
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
              {stats.technologies} تکنولوژی
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} style={{ color: 'var(--text-secondary)' }} />
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
              آخرین به‌روزرسانی: {stats.lastYear}
            </span>
          </div>
        </div>

        {/* گرید پروژه‌ها - استفاده از ProjectCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* لینک گیت‌هاب */}
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/shahink99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-colors"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              border: `1px solid var(--border-color)`,
              color: 'var(--text-primary)'
            }}
          >
            <Github size={16} />
            <span>مشاهده همه پروژه‌ها در گیت‌هاب</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;