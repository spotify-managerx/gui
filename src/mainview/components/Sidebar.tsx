import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Package, Grid3x3, Library, Download, Save, Settings, RefreshCw } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/home' },
    { id: 'plugins', icon: Package, label: 'Browse Plugins', path: '/plugins' },
    { id: 'apps', icon: Grid3x3, label: 'Apps', path: '/apps' },
    { id: 'library', icon: Library, label: 'My Library', path: '/library' },
    { id: 'updates', icon: Download, label: 'Updates', path: '/updates' },
    { id: 'backup', icon: Save, label: 'Backup', path: '/backup' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-black flex flex-col border-r border-[#282828]">
      {/* Navigation items */}
      <nav className="flex-1 px-3 pt-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-spotify-green text-black shadow-lg'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <Icon size={22} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-[#282828]">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 text-spotify-green hover:text-white text-sm font-semibold transition-colors">
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
