import React, { useState } from 'react';
import { FiSearch, FiCheck, FiDroplet, FiPackage, FiDownload, FiCode, FiGrid } from 'react-icons/fi';

const PluginsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'themes' | 'extensions' | 'snippets'>('themes');
  const [searchQuery, setSearchQuery] = useState('');

  const themes = [
    {
      id: 1,
      name: 'OLED Black',
      author: 'Modify',
      description: 'Pure black theme optimized for OLED displays',
      downloads: '12.5k',
      installed: true,
    },
    {
      id: 2,
      name: 'Nord Theme',
      author: 'Arctic',
      description: 'Arctic, north-bluish color palette',
      downloads: '8.2k',
      installed: false,
    },
    {
      id: 3,
      name: 'Dracula',
      author: 'Community',
      description: 'Dark theme with vibrant colors',
      downloads: '15.1k',
      installed: false,
    },
  ];

  const extensions = [
    {
      id: 1,
      name: 'Lyrics Plus',
      author: 'Community',
      description: 'Enhanced lyrics display with translations',
      downloads: '25.3k',
      installed: true,
    },
    {
      id: 2,
      name: 'EQ Enhancement',
      author: 'AudioPro',
      description: 'Advanced equalizer controls',
      downloads: '18.7k',
      installed: false,
    },
  ];

  const snippets = [
    {
      id: 1,
      name: 'Hide Podcasts',
      author: 'Community',
      description: 'Hides the podcast section from sidebar',
      downloads: '8.3k',
      enabled: true,
    },
    {
      id: 2,
      name: 'Compact Queue',
      author: 'Community',
      description: 'Makes queue more compact',
      downloads: '5.7k',
      enabled: false,
    },
    {
      id: 3,
      name: 'Rounded Covers',
      author: 'Community',
      description: 'Makes album covers rounded',
      downloads: '12.1k',
      enabled: false,
    },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'themes': return themes;
      case 'extensions': return extensions;
      case 'snippets': return snippets;
    }
  };

  const activeData = getActiveData();
  const installedCount = activeTab === 'snippets' 
    ? snippets.filter(s => s.enabled).length
    : activeData.filter((item: any) => item.installed).length;

  return (
    <div className="h-full bg-spotify-black overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-6 border-b border-[#282828]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Plugins</h1>
            <p className="text-[#b3b3b3]">Customize your Spotify experience</p>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-spotify-green/20 rounded-xl border border-spotify-green/30">
              <FiCheck size={18} className="text-spotify-green" />
              <div className="flex flex-col">
                <span className="text-spotify-green font-black text-base leading-none">{installedCount}</span>
                <span className="text-spotify-green/70 text-[10px] font-medium">Installed</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#282828] rounded-xl border border-[#333]">
              <FiDownload size={18} className="text-white/60" />
              <div className="flex flex-col">
                <span className="text-white font-black text-base leading-none">{activeData.length}</span>
                <span className="text-white/40 text-[10px] font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and FiSearch Row */}
        <div className="flex items-center gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('themes')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'themes'
                  ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              Themes
            </button>
            <button
              onClick={() => setActiveTab('extensions')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'extensions'
                  ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              Extensions
            </button>
            <button
              onClick={() => setActiveTab('snippets')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'snippets'
                  ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              Snippets
            </button>
          </div>

          {/* FiSearch */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b3b3b3]" size={20} />
            <input
              type="text"
              placeholder={`FiSearch ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#242424] border border-[#333] rounded-lg pl-12 pr-4 py-2.5 text-white text-sm placeholder:text-[#777] focus:bg-[#2a2a2a] focus:border-spotify-green/50 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Grid for all types */}
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {activeData.map((item: any) => (
            <div
              key={item.id}
              className="group bg-[#181818] rounded-xl overflow-hidden hover:bg-[#1e1e1e] hover:border-spotify-green/40 border border-transparent transition-all duration-300 cursor-pointer"
            >
              {/* Preview */}
              <div className="relative aspect-square bg-gradient-to-br from-[#282828] to-[#1e1e1e] flex items-center justify-center overflow-hidden">
                {activeTab === 'themes' ? (
                  <FiDroplet size={48} className="text-white/5 group-hover:text-spotify-green/20 transition-colors" />
                ) : activeTab === 'snippets' ? (
                  <FiCode size={48} className="text-white/5 group-hover:text-purple-400/20 transition-colors" />
                ) : (
                  <FiPackage size={48} className="text-white/5 group-hover:text-spotify-green/20 transition-colors" />
                )}
                {(item.installed || item.enabled) && (
                  <div className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-lg ${
                    activeTab === 'snippets' ? 'bg-purple-500 shadow-purple-500/40' : 'bg-spotify-green shadow-spotify-green/40'
                  }`}>
                    <FiCheck size={16} className="text-black" strokeWidth={3} />
                  </div>
                )}
                {/* FiDownload count overlay */}
                {item.downloads && (
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md">
                    <p className="text-white text-[9px] font-bold">{item.downloads}</p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className={`font-bold text-xs mb-0.5 line-clamp-1 transition-colors ${
                  activeTab === 'snippets' 
                    ? 'text-white group-hover:text-purple-400' 
                    : 'text-white group-hover:text-spotify-green'
                }`}>{item.name}</h3>
                <p className="text-[#b3b3b3] text-[10px] mb-2">by {item.author}</p>

                {activeTab === 'snippets' ? (
                  /* Toggle for snippets */
                  <div className="flex items-center justify-center">
                    <button
                      className={`relative w-full h-7 rounded-lg transition-all ${
                        item.enabled ? 'bg-purple-500' : 'bg-[#282828]'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-5 h-5 bg-black rounded-md transition-all ${
                          item.enabled ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  /* Install buttons for themes/extensions/apps */
                  <>
                    {!item.installed && (
                      <button className="w-full py-1.5 bg-spotify-green text-black rounded-lg text-[10px] font-bold hover:bg-[#1fdf64] hover:scale-[1.02] transition-all shadow-md hover:shadow-spotify-green/30">
                        Install
                      </button>
                    )}
                    {item.installed && (
                      <div className="w-full py-1.5 bg-[#282828] text-[#b3b3b3] rounded-lg text-[10px] font-bold text-center">
                        Installed
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PluginsTab;
