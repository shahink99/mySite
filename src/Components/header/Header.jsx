import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
   { name: 'نمونه کارها', path: '/projects' },
    { name: 'رزومه', path: '/resume' },
    
     { name: 'درباره من', path: '/' },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* لوگو - SK با آیکون */}
          <Link to="/" className="flex items-center gap-2 group">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:rotate-6"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Code size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              SK
            </span>
          </Link>

          {/* منوی دسکتاپ - با راست‌چین */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-medium transition-colors hover:translate-y-[-1px]"
                style={{ color: 'var(--text-secondary)', hover: { color: 'var(--accent)', },fontWeight:900 }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* دکمه تم و منوی موبایل */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* دکمه منوی موبایل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 rounded-xl" style={{ borderTop: `1px solid var(--border-color)` }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 px-2 text-base font-medium transition-colors hover:translate-x-1"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;