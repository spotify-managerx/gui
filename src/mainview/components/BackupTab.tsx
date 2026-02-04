import React from 'react';
import { FiSave, FiRotateCcw, FiClock, FiTrash2 } from 'react-icons/fi';
import Button from './shared/Button';
import { mockBackups } from '../../data/mockData';

const BackupTab: React.FC = () => {
  const backups = mockBackups;

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-spotify-black px-8 pt-6 pb-8 border-b border-[#282828]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Backups</h1>
            <p className="text-[#b3b3b3]">Manage your Spotify backups</p>
          </div>
          <Button variant="primary" icon={<FiSave size={18} />}>
            Create New Backup
          </Button>
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Restore Original */}
        <div className="bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-xl border border-red-500/30 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center">
                <FiRotateCcw size={26} className="text-red-400" />
              </div>
              <div>
                <h2 className="text-white font-bold text-xl mb-1">Restore to Vanilla</h2>
                <p className="text-[#b3b3b3] text-sm">Remove all themes and extensions</p>
              </div>
            </div>
            <button className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg font-bold transition-all">
             Button variant="danger">
              Restore Original
            </B>
        </div>

        {/* Backup List */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Saved Backups ({backups.length})</h2>
          <div className="space-y-3">
            {backups.map((backup) => (
              <div
                key={backup.id}
                className="bg-[#181818] rounded-xl border border-[#282828] p-4 flex items-center justify-between hover:border-spotify-green/40 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#282828] to-[#1e1e1e] rounded-lg flex items-center justify-center">
                    <FiClock size={24} className="text-spotify-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm group-hover:text-spotify-green transition-colors">{backup.name}</h3>
                    <p className="text-[#b3b3b3] text-xs mt-1">
                      {backup.date} at {backup.time} • {backup.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="primary" size="sm">
                    Restore
                  </Button>
                  <Button variant="danger" size="sm" icon={<FiTrash2 size={16} />}>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupTab;
