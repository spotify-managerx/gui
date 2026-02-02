import React from 'react';
import { Music, Info } from 'lucide-react';

const SettingsTab: React.FC = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-white/50 text-sm">System configuration and information</p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* Spotify Installation Card */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-spotify-green/10 border border-spotify-green/20 flex items-center justify-center flex-shrink-0">
              <Music size={24} className="text-spotify-green" />
            </div>
            <h2 className="text-xl font-semibold text-white">Spotify Installation</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Installation Path</p>
              <p className="text-white/80 text-sm font-mono bg-black/30 px-3 py-2 rounded border border-white/5">
                C:\Users\storm\AppData\Roaming\Spotify
              </p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Version</p>
              <p className="text-white/80 text-sm font-mono bg-black/30 px-3 py-2 rounded border border-white/5">
                Unknown
              </p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Status</p>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded border border-white/5">
                <div className="w-2 h-2 bg-spotify-green rounded-full" />
                <span className="text-spotify-green text-sm font-medium">RUNNING</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Modify Card */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-spotify-green/10 border border-spotify-green/20 flex items-center justify-center flex-shrink-0">
              <Info size={24} className="text-spotify-green" />
            </div>
            <h2 className="text-xl font-semibold text-white">About Modify</h2>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Version</p>
              <p className="text-white/80 text-sm">0.0.1 Alpha</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Platform</p>
              <p className="text-white/80 text-sm">Electron + React</p>
            </div>
          </div>

          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Description</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional Spotify customization platform with premium themes, backup management, and seamless integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
