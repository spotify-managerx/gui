import { useState } from 'react';
import { Search, Check, Palette, Package, Download, Code, Grid3x3, Star, TrendingUp } from 'lucide-react';

export default function PluginsTab() {
  const [activeTab, setActiveTab] = useState<'themes' | 'extensions' | 'snippets'>('themes');
  const [searchQuery, setSearchQuery] = useState('');

  const themes = [
    {
      id: 1,
      name: 'OLED Black',
      author: 'Modify',
      description: 'Pure black theme optimized for OLED displays',
      downloads: '12.5k',
      rating: 4.8,
      installed: true,
      preview: 'https://via.placeholder.com/300x200/000000/1ed760?text=OLED',
    },
    {
      id: 2,
      name: 'Nord Theme',
      author: 'Arctic',
      description: 'Arctic, north-bluish color palette',
      downloads: '8.2k',
      rating: 4.6,
      installed: false,
      preview: 'https://via.placeholder.com/300x200/2e3440/88c0d0?text=Nord',
    },
    {
      id: 3,
      name: 'Dracula',
      author: 'Community',
      description: 'Dark theme with vibrant colors',
      downloads: '15.1k',
      rating: 4.9,
      installed: false,
      preview: 'https://via.placeholder.com/300x200/282a36/ff79c6?text=Dracula',
    },
    {
      id: 4,
      name: 'Catppuccin',
      author: 'Community',
      description: 'Soothing pastel theme',
      downloads: '9.8k',
      rating: 4.7,
      installed: false,
      preview: 'https://via.placeholder.com/300x200/1e1e2e/cba6f7?text=Catppuccin',
    },
  ];

  const extensions = [
    {
      id: 1,
      name: 'Lyrics Plus',
      author: 'Community',
      description: 'Enhanced lyrics display with translations',
      downloads: '25.3k',
      rating: 4.8,
      installed: true,
      icon: 'https://via.placeholder.com/120/9333ea/ffffff?text=LP',
    },
    {
      id: 2,
      name: 'EQ Enhancement',
      author: 'AudioPro',
      description: 'Advanced equalizer controls',
      downloads: '18.7k',
      rating: 4.5,
      installed: false,
      icon: 'https://via.placeholder.com/120/3b82f6/ffffff?text=EQ',
    },
    {
      id: 3,
      name: 'Full App Display',
      author: 'Community',
      description: 'Enhanced now playing display',
      downloads: '22.1k',
      rating: 4.9,
      installed: false,
      icon: 'https://via.placeholder.com/120/22c55e/ffffff?text=FAD',
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
      color: 'purple',
    },
    {
      id: 2,
      name: 'Compact Queue',
      author: 'Community',
      description: 'Makes queue more compact',
      downloads: '5.7k',
      enabled: false,
      color: 'purple',
    },
    {
      id: 3,
      name: 'Rounded Covers',
      author: 'Community',
      description: 'Makes album covers rounded',
      downloads: '12.1k',
      enabled: false,
      color: 'purple',
    },
    {
      id: 4,
      name: 'Hide Ads',
      author: 'Community',
      description: 'Hides promotional content',
      downloads: '18.5k',
      enabled: true,
      color: 'purple',
    },
    {
      id: 5,
      name: 'Animated Covers',
      author: 'Visual',
      description: 'Add subtle animations to album art',
      downloads: '6.2k',
      enabled: false,
      color: 'purple',
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
      <div className="bg-gradient-to-br from-[#1a1a1a] via-spotify-black to-spotify-black px-8 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-5xl font-black text-white mb-3 tracking-tight">Plugins</h1>
            <p className="text-[#b3b3b3] text-base">Transform your Spotify with custom themes, extensions, and tweaks</p>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2.5 px-5 py-4 rounded-2xl border ${
              activeTab === 'snippets' 
                ? 'bg-purple-500/10 border-purple-500/30' 
                : 'bg-spotify-green/10 border-spotify-green/30'
            }`}>
              <Check size={20} className={activeTab === 'snippets' ? 'text-purple-400' : 'text-spotify-green'} strokeWidth={3} />
              <div className="flex flex-col">
                <span className={`font-black text-2xl leading-none ${activeTab === 'snippets' ? 'text-purple-400' : 'text-spotify-green'}`}>{installedCount}</span>
                <span className={`text-[10px] font-semibold mt-1 ${activeTab === 'snippets' ? 'text-purple-400/70' : 'text-spotify-green/70'}`}>
                  {activeTab === 'snippets' ? 'Enabled' : 'Installed'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-4 bg-[#282828] rounded-2xl border border-[#333]">
              <TrendingUp size={20} className="text-white/60" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">{activeData.length}</span>
                <span className="text-white/40 text-[10px] font-semibold mt-1">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Search Row */}
        <div className="flex items-center gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#181818] p-1.5 rounded-xl border border-[#282828]">
            <button
              onClick={() => setActiveTab('themes')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'themes'
                  ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <Palette size={16} />
              Themes
            </button>
            <button
              onClick={() => setActiveTab('extensions')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'extensions'
                  ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <Package size={16} />
              Extensions
            </button>
            <button
              onClick={() => setActiveTab('snippets')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'snippets'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                  : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              <Code size={16} />
              Snippets
            </button>
          </div>

          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b3b3b3]" size={20} />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#242424] border border-[#333] rounded-xl pl-12 pr-4 py-3.5 text-white text-sm placeholder:text-[#777] focus:bg-[#2a2a2a] focus:border-spotify-green/50 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">{/* Grid for themes (larger cards with previews) */}
        {activeTab === 'themes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className="group bg-[#181818] rounded-2xl overflow-hidden hover:bg-[#1e1e1e] border border-[#282828] hover:border-spotify-green/40 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-spotify-green/10"
              >
                {/* Theme Preview */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={theme.preview} 
                    alt={theme.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 px-2.5 py-1.5 bg-black/70 backdrop-blur-md rounded-lg">
                      <Star size={13} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-bold">{theme.rating}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/70 backdrop-blur-md rounded-lg">
                      <Download size={13} className="text-white" />
                      <span className="text-white text-xs font-bold">{theme.downloads}</span>
                    </div>
                  </div>
                  
                  {theme.installed && (
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-spotify-green rounded-lg flex items-center gap-1.5 shadow-lg shadow-spotify-green/40">
                      <Check size={14} className="text-black" strokeWidth={3} />
                      <span className="text-black text-xs font-bold">Installed</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-base mb-1 line-clamp-1 group-hover:text-spotify-green transition-colors">{theme.name}</h3>
                  <p className="text-[#b3b3b3] text-xs mb-3">by {theme.author}</p>
                  {!theme.installed ? (
                    <button className="w-full py-2.5 bg-spotify-green text-black rounded-xl text-sm font-bold hover:bg-[#1fdf64] hover:scale-[1.05] transition-all shadow-lg shadow-spotify-green/20 hover:shadow-spotify-green/40">
                      Apply Theme
                    </button>
                  ) : (
                    <button className="w-full py-2.5 bg-[#282828] text-[#b3b3b3] rounded-xl text-sm font-bold hover:bg-[#333] transition-all">
                      Active
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Grid for extensions */}
        {activeTab === 'extensions' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {extensions.map((ext) => (
              <div
                key={ext.id}
                className="group bg-[#181818] rounded-2xl overflow-hidden hover:bg-[#1e1e1e] border border-[#282828] hover:border-spotify-green/40 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-spotify-green/10"
              >
                {/* Extension Icon */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={ext.icon} 
                    alt={ext.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-spotify-green/0 to-spotify-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-md rounded-lg">
                      <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-bold">{ext.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-md rounded-lg">
                      <Download size={12} className="text-white" />
                      <span className="text-white text-xs font-bold">{ext.downloads}</span>
                    </div>
                  </div>

                  {ext.installed && (
                    <div className="absolute bottom-2 right-2 w-7 h-7 bg-spotify-green rounded-full flex items-center justify-center shadow-lg shadow-spotify-green/50">
                      <Check size={16} className="text-black" strokeWidth={3} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-1 group-hover:text-spotify-green transition-colors">{ext.name}</h3>
                  <p className="text-[#b3b3b3] text-xs mb-3 line-clamp-1">by {ext.author}</p>
                  {!ext.installed ? (
                    <button className="w-full py-2.5 bg-spotify-green text-black rounded-xl text-xs font-bold hover:bg-[#1fdf64] hover:scale-[1.05] transition-all shadow-lg shadow-spotify-green/20 hover:shadow-spotify-green/40">
                      Install
                    </button>
                  ) : (
                    <button className="w-full py-2.5 bg-[#282828] text-[#b3b3b3] rounded-xl text-xs font-bold">
                      Installed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List for snippets */}
        {activeTab === 'snippets' && (
          <div className="max-w-4xl">
            <div className="bg-[#181818] rounded-2xl border border-purple-500/20 overflow-hidden">
              {snippets.map((snippet, index) => (
                <div
                  key={snippet.id}
                  className={`group flex items-center justify-between p-5 hover:bg-[#1e1e1e] transition-all ${
                    index !== snippets.length - 1 ? 'border-b border-[#282828]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Code size={20} className="text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base mb-1 group-hover:text-purple-400 transition-colors truncate">{snippet.name}</h3>
                      <p className="text-[#b3b3b3] text-sm">
                        by {snippet.author} • {snippet.downloads} downloads
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className={`relative w-16 h-8 rounded-full transition-all ${
                        snippet.enabled 
                          ? 'bg-purple-500 shadow-lg shadow-purple-500/30' 
                          : 'bg-[#282828] hover:bg-[#333]'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${
                          snippet.enabled ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
