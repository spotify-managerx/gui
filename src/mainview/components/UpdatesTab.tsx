import React from 'react';
import { RefreshCw, CheckCircle } from 'lucide-react';

const UpdatesTab: React.FC = () => {
  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8 border-b border-[#282828]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Updates</h1>
            <p className="text-[#b3b3b3]">Check for plugin updates</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-spotify-green text-black rounded-lg font-bold hover:bg-[#1fdf64] transition-all shadow-lg shadow-spotify-green/20">
            <RefreshCw size={18} />
            Check for Updates
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-6">
        <div className="bg-[#181818] rounded-xl border border-[#282828] p-8 text-center">
          <div className="w-16 h-16 bg-spotify-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-spotify-green" />
          </div>
          <h2 className="text-white font-bold text-xl mb-2">All plugins up to date</h2>
          <p className="text-[#b3b3b3] text-sm mb-6">You're running the latest versions</p>
          <button className="px-6 py-2.5 bg-[#282828] text-white rounded-lg font-bold hover:bg-[#333] transition-all">
            Last checked: Just now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatesTab;
