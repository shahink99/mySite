import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="mt-16 py-12"
      style={{ 
        borderTop: '1px solid var(--border-color)',
        backgroundColor: '#0a0c10'  /* مشکی مایل به آبی */
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-2">
          <span className="text-sm" style={{ color: '#9ca3af' }}>توسط شاهین کریمی</span>
          <Heart size={20} color="#ef4444" fill="#ef4444" className="animate-pulse" />
          <span className="text-sm" style={{ color: '#9ca3af' }}>ساخته شده با</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;