import React, { useState } from 'react';
import { FiSearch, FiDownload, FiCheck, FiDroplet } from 'react-icons/fi';
import { mockThemes } from '../../data/mockData';

const ThemesTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const themes = mockThemes;

  return (
    <div className="h-full bg-spotify-black overflow-hidden">
      {/* Top bar with stats */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Themes</h1>
            <p className="text-[#b3b3b3]">Customize your Spotify</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-spotify-green/20 rounded-full border border-spotify-green/30">
            <FiCheck size={18} className="text-spotify-green" />
            <span className="text-spotify-green font-bold text-sm">{themes.filter(t => t.installed).length} Installed</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b3b3b3]" size={20} />
          <input
            type="text"
            placeholder="Search themes"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="w-full max-w-md bg-[#242424] border border-[#333] rounded-full pl-12 pr-4 py-3 text-white text-sm placeholder:text-[#777] focus:bg-[#2a2a2a] focus:border-spotify-green/50 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Themes grid */}
      <div className="px-8 pb-8 overflow-y-auto" style={{ height: 'calc(100% - 220px)' }}>
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="group bg-[#181818] rounded-lg overflow-hidden hover:bg-[#282828] transition-all duration-300 cursor-pointer"
            >
              {/* Theme preview */}
              <div className="relative aspect-square bg-[#282828] flex items-center justify-center overflow-hidden">
                <FiDroplet size={48} className="text-white/5 group-hover:text-white/10 transition-colors" />
                {theme.installed && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center shadow-lg">
                    <FiCheck size={14} className="text-black" strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* Theme info */}
              <div className="p-3">
                <h3 className="text-white font-bold text-xs mb-1 line-clamp-1">{theme.name}</h3>
                <p className="text-[#b3b3b3] text-[10px] mb-2">{theme.downloads}</p>

                {!theme.installed && (
                  <button className="w-full py-1.5 bg-spotify-green text-black rounded-full text-[10px] font-bold hover:bg-[#1fdf64] hover:scale-105 transition-all">
                    Install
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemesTab;
