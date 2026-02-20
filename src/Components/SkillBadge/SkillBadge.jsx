import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <div className="group relative bg-gradient-to-br from-primary/10 to-accent/10 
      rounded-xl p-5 border border-primary/20 hover:border-primary/50 
      transition-all duration-300 hover:shadow-xl hover:shadow-primary/10
      hover:-translate-y-1 cursor-pointer">
      
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{skill.icon}</span>
        <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
      </div>
      
      <div className="flex items-center gap-2 text-secondary">
        <span className="text-2xl">⏳</span>
        <span className="font-medium">{skill.years} سال تجربه</span>
      </div>
      
      {/* نوار پیشرفت مخفی - حذف شد */}
    </div>
  );
};

export default SkillBadge;