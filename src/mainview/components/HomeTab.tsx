import React from 'react';
import { FiTrendingUp, FiZap, FiUsers, FiDownload } from 'react-icons/fi';
import StatCard from './shared/StatCard';

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
          <StatCard
            icon={<FiDownload size={24} />}
            iconBgColor="bg-spotify-green/20"
            iconColor="text-spotify-green"
            value="2"
            label="Installed Plugins"
          />
          <StatCard
            icon={<FiTrendingUp size={24} />}
            iconBgColor="bg-blue-500/20"
            iconColor="text-blue-400"
            value="5"
            label="Available Plugins"
          />
          <StatCard
            icon={<FiZap size={24} />}
            iconBgColor="bg-purple-500/20"
            iconColor="text-purple-400"
            value="1.2.25"
            label="Spotify Version"
          />
          <StatCard
            icon={<FiUsers size={24} />}
            iconBgColor="bg-orange-500/20"
            iconColor="text-orange-400"
            value="Active"
            label="Spotify Status"
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828] hover:border-spotify-green/40 transition-all text-left group">
              <div className="w-12 h-12 bg-spotify-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-spotify-green/30 transition-all">
                <FiDownload size={24} className="text-spotify-green" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Browse Plugins</h3>
              <p className="text-[#b3b3b3] text-sm">Discover themes and extensions</p>
            </button>

            <button className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] p-6 rounded-xl border border-[#282828] hover:border-blue-500/40 transition-all text-left group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all">
                <FiTrendingUp size={24} className="text-blue-400" />
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
