import React from 'react';
import { TrendingUp, Zap, Users, Download } from 'lucide-react';

const HomeTab: React.FC = () => {
  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8 border-b border-[#282828]">
        <h1 className="text-4xl font-black text-white mb-2">Welcome to ManagerX</h1>
        <p className="text-[#b3b3b3]">Your Spotify customization hub</p>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-spotify-green/20 rounded-xl flex items-center justify-center">
                <Download size={24} className="text-spotify-green" />
              </div>
            </div>
            <p className="text-white font-black text-3xl mb-1">2</p>
            <p className="text-[#b3b3b3] text-sm">Installed Plugins</p>
          </div>

          <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} className="text-blue-400" />
              </div>
            </div>
            <p className="text-white font-black text-3xl mb-1">5</p>
            <p className="text-[#b3b3b3] text-sm">Available Plugins</p>
          </div>

          <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Zap size={24} className="text-purple-400" />
              </div>
            </div>
            <p className="text-white font-black text-3xl mb-1">1.2.25</p>
            <p className="text-[#b3b3b3] text-sm">Spotify Version</p>
          </div>

          <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Users size={24} className="text-orange-400" />
              </div>
            </div>
            <p className="text-white font-black text-3xl mb-1">Active</p>
            <p className="text-[#b3b3b3] text-sm">Spotify Status</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828] hover:border-spotify-green/40 transition-all text-left group">
              <div className="w-12 h-12 bg-spotify-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-spotify-green/30 transition-all">
                <Download size={24} className="text-spotify-green" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Browse Plugins</h3>
              <p className="text-[#b3b3b3] text-sm">Discover themes and extensions</p>
            </button>

            <button className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828] hover:border-blue-500/40 transition-all text-left group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                <TrendingUp size={24} className="text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Check Updates</h3>
              <p className="text-[#b3b3b3] text-sm">Update your installed plugins</p>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Recent Activity</h2>
          <div className="bg-[#181818] rounded-xl border border-[#282828] divide-y divide-[#282828]">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">OLED Black theme installed</p>
                <p className="text-[#b3b3b3] text-xs mt-1">2 hours ago</p>
              </div>
              <div className="w-2 h-2 bg-spotify-green rounded-full"></div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">Lyrics Plus extension installed</p>
                <p className="text-[#b3b3b3] text-xs mt-1">1 day ago</p>
              </div>
              <div className="w-2 h-2 bg-spotify-green rounded-full"></div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">Backup created successfully</p>
                <p className="text-[#b3b3b3] text-xs mt-1">3 days ago</p>
              </div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
