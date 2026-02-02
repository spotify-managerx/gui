import React, { useState } from 'react';
import { Music, Info, Settings as SettingsIcon } from 'lucide-react';

const SettingsTab: React.FC = () => {
  const [autoBackup, setAutoBackup] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8 border-b border-[#282828]">
        <h1 className="text-4xl font-black text-white mb-2">Settings</h1>
        <p className="text-[#b3b3b3]">Configure ManagerX</p>
      </div>

      <div className="px-8 py-8 space-y-6">
        {/* Preferences */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-[#282828]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <SettingsIcon size={26} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-1">Preferences</h2>
              <p className="text-[#b3b3b3] text-sm">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Auto Backup Toggle */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-white font-semibold text-sm">Auto Backup</p>
                <p className="text-[#b3b3b3] text-xs mt-1">Automatically backup before installing plugins</p>
              </div>
              <button
                onClick={() => setAutoBackup(!autoBackup)}
                className={`relative w-12 h-6 rounded-full transition-all ${
                  autoBackup ? 'bg-spotify-green' : 'bg-[#282828]'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-black rounded-full transition-all ${
                    autoBackup ? 'right-0.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="h-px bg-[#282828]"></div>

            {/* Auto Update Toggle */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-white font-semibold text-sm">Auto Update</p>
                <p className="text-[#b3b3b3] text-xs mt-1">Automatically update plugins when available</p>
              </div>
              <button
                onClick={() => setAutoUpdate(!autoUpdate)}
                className={`relative w-12 h-6 rounded-full transition-all ${
                  autoUpdate ? 'bg-spotify-green' : 'bg-[#282828]'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-black rounded-full transition-all ${
                    autoUpdate ? 'right-0.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Spotify Info */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-spotify-green/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-spotify-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-spotify-green/20">
              <Music size={26} className="text-black" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-1">Spotify Installation</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-spotify-green shadow-sm shadow-spotify-green/50"></div>
                <span className="text-spotify-green text-sm font-semibold">Running</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Path</span>
              <span className="text-white text-sm font-mono">C:\Users\storm\AppData\Roaming\Spotify</span>
            </div>
            <div className="h-px bg-[#282828]"></div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Version</span>
              <span className="text-white text-sm font-semibold">v1.2.25.1011</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-[#282828]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#282828] flex items-center justify-center flex-shrink-0">
              <Info size={26} className="text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-1">About ManagerX</h2>
              <p className="text-[#b3b3b3] text-sm">v0.0.1 Alpha</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Framework</span>
              <span className="text-white text-sm">Electrobun 0.8.0</span>
            </div>
            <div className="h-px bg-[#282828]"></div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Runtime</span>
              <span className="text-white text-sm">Bun 1.3.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
