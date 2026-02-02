import React from 'react';

const HomeTab: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header - full width with border */}
      <div className="w-full border-b border-white/10 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Home</h1>
        <p className="text-white/60">Welcome to spotify-managerx</p>
      </div>

      {/* Status section - full width container */}
      <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between w-full mb-4">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Spotify Status</h2>
            <p className="text-white/60 text-sm">Your Spotify client is running</p>
          </div>
          <div className="w-3 h-3 bg-spotify-green rounded-full animate-pulse" />
        </div>
        
        {/* Full-width separator */}
        <div className="w-full h-px bg-white/10 my-4" />
        
        <div className="flex justify-end w-full">
          <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 font-semibold rounded-lg transition-colors">
            Close Spotify
          </button>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Actions</h3>
          <p className="text-white/60 text-sm mb-4">Common tasks at your fingertips</p>
          <button className="w-full px-4 py-2 bg-spotify-green hover:bg-spotify-light-green text-black font-semibold rounded-lg transition-colors">
            Open Themes
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Settings</h3>
          <p className="text-white/60 text-sm mb-4">Configure your experience</p>
          <button className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-colors">
            Open Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
