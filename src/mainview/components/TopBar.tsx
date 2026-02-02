import React from 'react';
import { Power } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
      {/* Spotify Status */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-spotify-green rounded-full" />
        <span className="text-white/80 text-sm">Spotify Running</span>
      </div>

      {/* Close Button */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-sm font-medium transition-colors">
        <Power size={16} />
        Close Spotify
      </button>
    </div>
  );
};

export default TopBar;
