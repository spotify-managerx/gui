import { type ReactNode } from 'react';
import ToggleSwitch from './ToggleSwitch';

interface SettingItemProps {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

export default function SettingItem({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  enabled,
  onToggle
}: SettingItemProps) {
  return (
    <div className="flex items-center justify-between py-4 px-4 bg-[#101010] rounded-xl hover:bg-[#151515] transition-all">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        <div>
          <p className="text-white font-bold text-base">{title}</p>
          <p className="text-[#b3b3b3] text-xs mt-0.5">{description}</p>
        </div>
      </div>
      <ToggleSwitch enabled={enabled} onToggle={onToggle} />
    </div>
  );
}
