import React from 'react';
import { Palette, Save, Settings, RefreshCw } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'themes', icon: Palette, label: 'Themes' },
    { id: 'backup', icon: Save, label: 'Backup & Restore' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-14 h-screen bg-[#0a0a0a] flex flex-col items-center py-4 border-r border-white/5">
      {/* Logo */}
      <div className="w-10 h-10 rounded-lg bg-spotify-green flex items-center justify-center mb-8">
        <span className="text-black font-bold text-xl">M</span>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-spotify-green text-black'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </nav>

      {/* Refresh button */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-lg text-spotify-green hover:bg-white/5 transition-all duration-200"
        title="Refresh"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
};

export default Sidebar;
