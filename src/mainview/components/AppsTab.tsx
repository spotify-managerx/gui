import React from 'react';
import { FiGrid, FiExternalLink, FiSettings, FiTrash2 } from 'react-icons/fi';
import { mockApps } from '../../data/mockData';

const AppsTab: React.FC = () => {
  const installedApps = mockApps.filter((app: any) => app.installed !== false).slice(0, 2);
  const availableApps = mockApps;

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8 border-b border-[#282828]">
        <h1 className="text-4xl font-black text-white mb-2">Custom Apps</h1>
        <p className="text-[#b3b3b3]">Manage full-page applications for Spotify</p>
      </div>

      <div className="px-8 py-6 space-y-8">
        {/* Installed Apps */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Installed Apps ({installedApps.length})</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-xl border border-[#282828] p-6 hover:border-spotify-green/40 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiGrid size={32} className="text-spotify-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-spotify-green transition-colors">{app.name}</h3>
                    <p className="text-[#b3b3b3] text-xs mb-2">by {app.author} • {app.version}</p>
                    <p className="text-[#b3b3b3] text-sm">{app.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-spotify-green text-black rounded-lg font-bold hover:bg-[#1fdf64] transition-all">
                    <FiExternalLink size={16} />
                    Open App
                  </button>
                  <button className="px-4 py-2.5 bg-[#282828] hover:bg-[#333] text-white rounded-lg transition-all">
                    <FiSettings size={16} />
                  </button>
                  <button className="px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg transition-all">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Apps */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Available Apps</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {availableApps.map((app) => (
              <div
                key={app.id}
                className="group bg-[#181818] rounded-xl overflow-hidden hover:bg-[#1e1e1e] hover:border-spotify-green/40 border border-transparent transition-all duration-300 cursor-pointer"
              >
                {/* Preview */}
                <div className="relative aspect-square bg-gradient-to-br from-[#282828] to-[#1e1e1e] flex items-center justify-center overflow-hidden">
                  <FiGrid size={48} className="text-white/5 group-hover:text-spotify-green/20 transition-colors" />
                  {/* Download count overlay */}
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md">
                    <p className="text-white text-[9px] font-bold">{app.downloads}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className="text-white font-bold text-xs mb-0.5 line-clamp-1 group-hover:text-spotify-green transition-colors">{app.name}</h3>
                  <p className="text-[#b3b3b3] text-[10px] mb-2">by {app.author}</p>
                  <button className="w-full py-1.5 bg-spotify-green text-black rounded-lg text-[10px] font-bold hover:bg-[#1fdf64] hover:scale-[1.02] transition-all shadow-md hover:shadow-spotify-green/30">
                    Install
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
