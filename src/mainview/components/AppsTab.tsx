import React, { useState } from 'react';
import { Grid3x3, ExternalLink, Settings, Trash2, Star, Download, Search, TrendingUp } from 'lucide-react';

const AppsTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const installedApps = [
    {
      id: 1,
      name: 'Lyrics Plus',
      author: 'Community',
      description: 'Enhanced lyrics viewer with translations and sync',
      version: 'v2.1.0',
      installed: true,
      color: 'from-purple-500 to-pink-500',
      icon: 'https://via.placeholder.com/120/9333ea/ffffff?text=LP',
    },
    {
      id: 2,
      name: 'Stats',
      author: 'Community',
      description: 'View your detailed listening statistics',
      version: 'v1.5.2',
      installed: true,
      color: 'from-blue-500 to-cyan-500',
      icon: 'https://via.placeholder.com/120/3b82f6/ffffff?text=ST',
    },
  ];

  const availableApps = [
    {
      id: 3,
      name: 'Marketplace',
      author: 'Spicetify',
      description: 'Browse and install themes, extensions, and apps',
      downloads: '50.2k',
      rating: 4.8,
      installed: false,
      color: 'from-green-500 to-emerald-600',
      icon: 'https://via.placeholder.com/120/22c55e/ffffff?text=MP',
    },
    {
      id: 4,
      name: 'Reddit',
      author: 'Community',
      description: 'Browse music subreddits within Spotify',
      downloads: '12.8k',
      rating: 4.5,
      installed: false,
      color: 'from-orange-500 to-red-500',
      icon: 'https://via.placeholder.com/120/f97316/ffffff?text=RD',
    },
    {
      id: 5,
      name: 'Podcast Manager',
      author: 'AudioTeam',
      description: 'Advanced podcast management and discovery',
      downloads: '8.3k',
      rating: 4.3,
      installed: false,
      color: 'from-indigo-500 to-purple-600',
      icon: 'https://via.placeholder.com/120/6366f1/ffffff?text=PM',
    },
    {
      id: 6,
      name: 'Concert Finder',
      author: 'LiveMusic',
      description: 'Find concerts near you based on your listening',
      downloads: '15.7k',
      rating: 4.7,
      installed: false,
      color: 'from-yellow-500 to-orange-500',
      icon: 'https://via.placeholder.com/120/eab308/ffffff?text=CF',
    },
  ];

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a1a1a] via-spotify-black to-spotify-black px-8 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-5xl font-black text-white mb-3 tracking-tight">Custom Apps</h1>
            <p className="text-[#b3b3b3] text-base">Full-page applications to enhance your Spotify experience</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-2xl px-6 py-4 text-center">
              <div className="text-3xl font-black text-spotify-green mb-1">{installedApps.length}</div>
              <div className="text-spotify-green/70 text-xs font-semibold">Installed</div>
            </div>
            <div className="bg-[#282828] border border-[#333] rounded-2xl px-6 py-4 text-center">
              <div className="text-3xl font-black text-white mb-1">{availableApps.length}</div>
              <div className="text-[#b3b3b3] text-xs font-semibold">Available</div>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b3b3b3]" size={20} />
          <input
            type="text"
            placeholder="Search custom apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#242424] border border-[#333] rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-[#777] focus:bg-[#2a2a2a] focus:border-spotify-green/50 focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="px-8 py-8 space-y-10">
        {/* Installed Apps */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-white font-black text-2xl">Your Apps</h2>
            <div className="bg-spotify-green/20 text-spotify-green px-3 py-1 rounded-full text-xs font-bold">
              {installedApps.length}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="group relative bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-2xl border border-[#282828] overflow-hidden hover:border-spotify-green/50 hover:shadow-2xl hover:shadow-spotify-green/10 transition-all duration-300"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={app.icon} 
                        alt={app.name}
                        className="w-20 h-20 rounded-2xl border-2 border-[#282828] group-hover:border-spotify-green/30 transition-all"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center shadow-lg shadow-spotify-green/50">
                        <ExternalLink size={12} className="text-black" strokeWidth={3} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-black text-xl mb-1.5 group-hover:text-spotify-green transition-colors truncate">{app.name}</h3>
                      <p className="text-[#b3b3b3] text-xs mb-2.5">by {app.author} • {app.version}</p>
                      <p className="text-[#999] text-sm leading-relaxed line-clamp-2">{app.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-spotify-green text-black rounded-xl font-bold hover:bg-[#1fdf64] hover:scale-[1.02] transition-all shadow-md hover:shadow-spotify-green/30">
                      <ExternalLink size={16} />
                      Launch App
                    </button>
                    <button className="px-4 py-3 bg-[#282828] hover:bg-[#333] text-white rounded-xl transition-all">
                      <Settings size={16} />
                    </button>
                    <button className="px-4 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl hover:scale-105 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Apps */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-white font-black text-2xl">Discover Apps</h2>
              <TrendingUp size={20} className="text-spotify-green" />
            </div>
            <button className="text-[#b3b3b3] hover:text-white text-sm font-semibold transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {availableApps.map((app) => (
              <div
                key={app.id}
                className="group bg-[#181818] rounded-2xl overflow-hidden hover:bg-[#1e1e1e] border border-[#282828] hover:border-spotify-green/40 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-spotify-green/10"
              >
                {/* App Icon/Preview */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={app.icon} 
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-md rounded-lg">
                      <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-bold">{app.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-md rounded-lg">
                      <Download size={12} className="text-white" />
                      <span className="text-white text-xs font-bold">{app.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-1 group-hover:text-spotify-green transition-colors">{app.name}</h3>
                  <p className="text-[#b3b3b3] text-xs mb-3 line-clamp-1">by {app.author}</p>
                  <button className="w-full py-2.5 bg-spotify-green text-black rounded-xl text-xs font-bold hover:bg-[#1fdf64] hover:scale-[1.05] transition-all shadow-lg shadow-spotify-green/20 hover:shadow-spotify-green/40">
                    Install App
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsTab;
