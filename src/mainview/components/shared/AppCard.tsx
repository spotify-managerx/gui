import { type ReactNode } from 'react';
import { ExternalLink, Settings, Trash2 } from 'lucide-react';

interface AppCardProps {
  name: string;
  author: string;
  version: string;
  description: string;
  icon: string;
  color: string;
  onLaunch: () => void;
  onSettings: () => void;
  onDelete: () => void;
}

export default function AppCard({ 
  name, 
  author, 
  version, 
  description, 
  icon, 
  color,
  onLaunch,
  onSettings,
  onDelete
}: AppCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#1e1e1e] to-[#181818] rounded-2xl border border-[#282828] overflow-hidden hover:border-spotify-green/50 hover:shadow-2xl hover:shadow-spotify-green/10 transition-all duration-300">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`}></div>
      
      <div className="p-6">
        <div className="flex items-start gap-5 mb-5">
          <div className="relative flex-shrink-0">
            <img 
              src={icon} 
              alt={name}
              className="w-20 h-20 rounded-2xl border-2 border-[#282828] group-hover:border-spotify-green/30 transition-all"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-spotify-green rounded-full flex items-center justify-center shadow-lg shadow-spotify-green/50">
              <ExternalLink size={12} className="text-black" strokeWidth={3} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-black text-xl mb-1.5 group-hover:text-spotify-green transition-colors truncate">{name}</h3>
            <p className="text-[#b3b3b3] text-xs mb-2.5">by {author} • {version}</p>
            <p className="text-[#999] text-sm leading-relaxed line-clamp-2">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button 
            onClick={onLaunch}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-spotify-green text-black rounded-xl font-bold hover:bg-[#1fdf64] hover:scale-[1.02] transition-all shadow-md hover:shadow-spotify-green/30"
          >
            <ExternalLink size={16} />
            Launch App
          </button>
          <button 
            onClick={onSettings}
            className="px-4 py-3 bg-[#282828] hover:bg-[#333] text-white rounded-xl transition-all"
          >
            <Settings size={16} />
          </button>
          <button 
            onClick={onDelete}
            className="px-4 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl hover:scale-105 transition-all"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
