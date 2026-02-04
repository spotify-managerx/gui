import React, { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  value: string | number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  iconBgColor, 
  iconColor, 
  value, 
  label 
}) => {
  return (
    <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828]">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
      </div>
      <p className="text-white font-black text-3xl mb-1">{value}</p>
      <p className="text-[#b3b3b3] text-sm">{label}</p>
    </div>
  );
};

export default StatCard;
