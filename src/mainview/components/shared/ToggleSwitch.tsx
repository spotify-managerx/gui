import React from 'react';

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
  variant?: 'green' | 'purple';
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  enabled, 
  onToggle, 
  variant = 'green' 
}) => {
  const colorClass = variant === 'purple' ? 'bg-purple-500' : 'bg-spotify-green';
  
  return (
    <button
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full transition-all ${
        enabled ? colorClass : 'bg-[#282828]'
      }`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-black rounded-full transition-all ${
          enabled ? 'right-0.5' : 'left-0.5'
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
