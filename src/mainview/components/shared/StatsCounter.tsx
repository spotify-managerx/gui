import { type ReactNode } from 'react';
import { TrendingUp } from 'lucide-react';

interface StatsCounterProps {
  icon?: ReactNode;
  value: number | string;
  label: string;
  variant?: 'green' | 'purple' | 'neutral';
}

export default function StatsCounter({ icon, value, label, variant = 'green' }: StatsCounterProps) {
  const variantStyles = {
    green: 'bg-spotify-green/10 border-spotify-green/30 text-spotify-green',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    neutral: 'bg-[#282828] border-[#333] text-white',
  };

  const labelStyles = {
    green: 'text-spotify-green/70',
    purple: 'text-purple-400/70',
    neutral: 'text-[#b3b3b3]',
  };

  const iconColor = {
    green: 'text-spotify-green',
    purple: 'text-purple-400',
    neutral: 'text-white/60',
  };

  return (
    <div className={`flex items-center gap-2.5 px-5 py-4 rounded-2xl border ${variantStyles[variant]}`}>
      {icon ? <div className={iconColor[variant]}>{icon}</div> : <TrendingUp size={20} className={iconColor[variant]} />}
      <div className="flex flex-col">
        <span className="font-black text-2xl leading-none">{value}</span>
        <span className={`text-[10px] font-semibold mt-1 ${labelStyles[variant]}`}>{label}</span>
      </div>
    </div>
  );
}
