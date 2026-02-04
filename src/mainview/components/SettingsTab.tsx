import { useState } from 'react';
import { Music, Info, Settings as SettingsIcon, Shield, Sparkles, HardDrive, Bell, Zap } from 'lucide-react';
import { PageHeader, SettingItem } from './shared';

export default function SettingsTab() {
  const [autoBackup, setAutoBackup] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [devMode, setDevMode] = useState(false);
  const [backupOnExit, setBackupOnExit] = useState(false);
  const [checkUpdatesStartup, setCheckUpdatesStartup] = useState(true);

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      <PageHeader
        title="Settings"
        description="Customize your ManagerX experience"
      />

      <div className="px-8 py-8 space-y-6 max-w-6xl">
        {/* General Settings */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#181818] rounded-2xl p-7 border border-[#282828] hover:border-[#333] transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
              <SettingsIcon size={26} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-black text-2xl mb-1.5">General</h2>
              <p className="text-[#b3b3b3] text-sm">Basic application preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <SettingItem
              icon={<HardDrive size={18} />}
              iconBg="bg-spotify-green/10"
              iconColor="text-spotify-green"
              title="Auto Backup"
              description="Automatically backup before installing plugins"
              enabled={autoBackup}
              onToggle={() => setAutoBackup(!autoBackup)}
            />

            <SettingItem
              icon={<Sparkles size={18} />}
              iconBg="bg-purple-500/10"
              iconColor="text-purple-400"
              title="Auto Update"
              description="Automatically update plugins when available"
              enabled={autoUpdate}
              onToggle={() => setAutoUpdate(!autoUpdate)}
            />

            <SettingItem
              icon={<Bell size={18} />}
              iconBg="bg-yellow-500/10"
              iconColor="text-yellow-400"
              title="Notifications"
              description="Show notifications for updates and changes"
              enabled={notifications}
              onToggle={() => setNotifications(!notifications)}
            />

            <SettingItem
              icon={<Zap size={18} />}
              iconBg="bg-orange-500/10"
              iconColor="text-orange-400"
              title="Check Updates on Startup"
              description="Automatically check for updates when launching"
              enabled={checkUpdatesStartup}
              onToggle={() => setCheckUpdatesStartup(!checkUpdatesStartup)}
            />

            <SettingItem
              icon={<HardDrive size={18} />}
              iconBg="bg-cyan-500/10"
              iconColor="text-cyan-400"
              title="Backup on Exit"
              description="Create automatic backup when closing ManagerX"
              enabled={backupOnExit}
              onToggle={() => setBackupOnExit(!backupOnExit)}
            />
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#181818] rounded-2xl p-7 border border-red-500/20 hover:border-red-500/30 transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
              <Shield size={26} className="text-red-400" />
            </div>
            <div>
              <h2 className="text-white font-black text-2xl mb-1.5">Advanced</h2>
              <p className="text-red-400/80 text-sm">Use these settings with caution</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 px-4 bg-[#101010] rounded-xl hover:bg-[#151515] transition-all border border-red-500/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Zap size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Developer Mode</p>
                  <p className="text-[#b3b3b3] text-xs mt-0.5">Enable developer tools and experimental features</p>
                </div>
              </div>
              <button
                onClick={() => setDevMode(!devMode)}
                className={`relative w-14 h-7 rounded-full transition-all ${
                  devMode ? 'bg-spotify-green shadow-lg shadow-spotify-green/30' : 'bg-[#282828]'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all shadow-md ${
                    devMode ? 'right-0.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="bg-[#101010] rounded-xl p-4 border border-[#282828]">
              <h3 className="text-white font-bold text-sm mb-3">Storage Locations</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-2">
                  <span className="text-[#b3b3b3]">Config Path</span>
                  <span className="text-white font-mono">~/.managerx/config</span>
                </div>
                <div className="h-px bg-[#282828]"></div>
                <div className="flex justify-between py-2">
                  <span className="text-[#b3b3b3]">Backups Path</span>
                  <span className="text-white font-mono">~/.managerx/backups</span>
                </div>
                <div className="h-px bg-[#282828]"></div>
                <div className="flex justify-between py-2">
                  <span className="text-[#b3b3b3]">Logs Path</span>
                  <span className="text-white font-mono">~/.managerx/logs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify Info */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#181818] rounded-2xl p-7 border border-spotify-green/30 hover:border-spotify-green/40 transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-spotify-green flex items-center justify-center flex-shrink-0 shadow-xl shadow-spotify-green/30">
              <Music size={26} className="text-black" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-white font-black text-2xl mb-1.5">Spotify Installation</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-spotify-green animate-pulse shadow-lg shadow-spotify-green/50"></div>
                <span className="text-spotify-green text-base font-bold">Running</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-[#101010] rounded-xl p-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-[#b3b3b3] text-sm">Installation Path</span>
                <span className="text-white text-sm font-mono">C:\Users\storm\AppData\Roaming\Spotify</span>
              </div>
              <div className="h-px bg-[#282828] my-3"></div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#b3b3b3] text-sm">Version</span>
                <span className="text-white text-sm font-bold">v1.2.25.1011</span>
              </div>
              <div className="h-px bg-[#282828] my-3"></div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#b3b3b3] text-sm">Spicetify Status</span>
                <span className="text-spotify-green text-sm font-bold">Installed & Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#181818] rounded-2xl p-7 border border-[#282828] hover:border-[#333] transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
              <Info size={26} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-white font-black text-2xl mb-1.5">About ManagerX</h2>
              <p className="text-[#b3b3b3] text-sm">Version & system information</p>
            </div>
          </div>

          <div className="bg-[#101010] rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Version</span>
              <span className="text-white text-sm font-bold">v0.0.1 Alpha</span>
            </div>
            <div className="h-px bg-[#282828]"></div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Framework</span>
              <span className="text-white text-sm">Electrobun 0.8.0</span>
            </div>
            <div className="h-px bg-[#282828]"></div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Runtime</span>
              <span className="text-white text-sm">Bun 1.3.8</span>
            </div>
            <div className="h-px bg-[#282828]"></div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#b3b3b3] text-sm">Platform</span>
              <span className="text-white text-sm">Windows x64</span>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <button className="flex-1 py-3 bg-[#282828] hover:bg-[#333] text-white rounded-xl font-bold transition-all">
              Check for Updates
            </button>
            <button className="flex-1 py-3 bg-spotify-green/10 hover:bg-spotify-green/20 border border-spotify-green/30 text-spotify-green rounded-xl font-bold transition-all">
              View Changelog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
