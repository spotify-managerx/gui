import React from 'react';
import { Check, Package, Droplet, Trash2 } from 'lucide-react';
import { mockThemes, mockExtensions } from '../../data/mockData';

const LibraryTab: React.FC = () => {
  const installedThemes = mockThemes.filter(t => t.installed);
  const installedExtensions = mockExtensions.filter(e => e.installed);

  const allInstalled = [...installedThemes, ...installedExtensions];

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8 border-b border-[#282828]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">My Library</h1>
            <p className="text-[#b3b3b3]">Manage your installed plugins</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-spotify-green/20 rounded-xl border border-spotify-green/30">
            <Check size={18} className="text-spotify-green" />
            <div className="flex flex-col">
              <span className="text-spotify-green font-black text-base leading-none">{allInstalled.length}</span>
              <span className="text-spotify-green/70 text-[10px] font-medium">Installed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Themes */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Themes ({installedThemes.length})</h2>
          <div className="space-y-3">
            {installedThemes.map((theme) => (
              <div
                key={theme.id}
                className="bg-[#181818] rounded-xl border border-[#282828] p-4 flex items-center justify-between hover:border-spotify-green/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#282828] to-[#1e1e1e] rounded-lg flex items-center justify-center">
                    <Droplet size={24} className="text-spotify-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{theme.name}</h3>
                    <p className="text-[#b3b3b3] text-sm">by {theme.author}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-sm font-bold transition-all">
                  <Trash2 size={16} className="inline mr-2" />
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Extensions */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Extensions ({installedExtensions.length})</h2>
          <div className="space-y-3">
            {installedExtensions.map((ext) => (
              <div
                key={ext.id}
                className="bg-[#181818] rounded-xl border border-[#282828] p-4 flex items-center justify-between hover:border-spotify-green/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#282828] to-[#1e1e1e] rounded-lg flex items-center justify-center">
                    <Package size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{ext.name}</h3>
                    <p className="text-[#b3b3b3] text-sm">by {ext.author}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-sm font-bold transition-all">
                  <Trash2 size={16} className="inline mr-2" />
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTab;
