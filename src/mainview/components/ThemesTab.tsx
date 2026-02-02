import React from 'react';
import { Palette, Download } from 'lucide-react';

const ThemesTab: React.FC = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Themes</h1>
          <p className="text-white/50 text-sm">1 premium themes available</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-spotify-green/10 border border-spotify-green/20">
          <Download size={14} className="text-spotify-green" />
          <span className="text-spotify-green text-sm font-medium">1 Installed</span>
        </div>
      </div>

      {/* Theme Card */}
      <div className="max-w-sm">
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
          {/* Theme Preview */}
          <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
            <Palette size={64} className="text-white/20" />
          </div>

          {/* Theme Info */}
          <div className="p-6">
            <h3 className="text-white font-semibold text-lg mb-1">OLED Black</h3>
            <p className="text-spotify-green text-sm mb-4">by Modify</p>

            {/* Apply Button */}
            <button className="w-full px-4 py-2.5 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 rounded-lg text-white/50 text-sm font-medium transition-colors">
              Apply Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemesTab;
