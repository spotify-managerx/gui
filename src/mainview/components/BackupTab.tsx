import React from 'react';
import { Save, RotateCcw, AlertCircle } from 'lucide-react';

const BackupTab: React.FC = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Backup & Restore</h1>
        <p className="text-white/50 text-sm">Protect your Spotify installation</p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* Create Backup Card */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-spotify-green/10 border border-spotify-green/20 flex items-center justify-center flex-shrink-0">
              <Save size={24} className="text-spotify-green" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white mb-2">Create Backup</h2>
              <p className="text-white/60 text-sm">
                Create a backup of your current Spotify installation before applying themes. This allows you to restore if anything goes wrong.
              </p>
            </div>
          </div>

          {/* Info Alert */}
          <div className="bg-spotify-green/5 border border-spotify-green/20 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle size={20} className="text-spotify-green flex-shrink-0 mt-0.5" />
            <p className="text-spotify-green text-sm">Recommended before first theme application</p>
          </div>

          {/* Action Button */}
          <button className="w-full px-6 py-3 bg-spotify-green hover:bg-spotify-light-green text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
            <Save size={18} />
            Create Backup
          </button>
        </div>

        {/* Restore Original Card */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <RotateCcw size={24} className="text-red-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white mb-2">Restore Original</h2>
              <p className="text-white/60 text-sm">
                Restore Spotify to its original state. This will remove all modifications and revert to the vanilla experience.
              </p>
            </div>
          </div>

          {/* Warning Alert */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-400 text-sm">Close Spotify before restoring</p>
          </div>

          {/* Action Button */}
          <button className="w-full px-6 py-3 bg-[#1a1a1a] hover:bg-[#222] border border-red-500/20 text-red-400 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
            <RotateCcw size={18} />
            Restore Original
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackupTab;
