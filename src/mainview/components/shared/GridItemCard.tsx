import { type ReactNode } from 'react';
import { Star, Download } from 'lucide-react';

interface GridItemCardProps {
  name: string;
  author: string;
  image: string;
  rating?: number;
  downloads?: string;
  installed?: boolean;
  color?: string;
  onAction: () => void;
  actionLabel?: string;
}

export default function GridItemCard({
  name,
  author,
  image,
  rating,
  downloads,
  installed = false,
  color,
  onAction,
  actionLabel = 'Install'
}: GridItemCardProps) {
  return (
    <div className="group bg-[#181818] rounded-2xl overflow-hidden hover:bg-[#1e1e1e] border border-[#282828] hover:border-spotify-green/40 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-spotify-green/10">
      {/* Image/Preview */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {color && (
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
        )}
        
        {/* Stats overlay */}
        {(rating || downloads) && (
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {rating && (
              <div className="flex items-center gap-1 px-2.5 py-1.5 bg-black/70 backdrop-blur-md rounded-lg">
                <Star size={13} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white text-xs font-bold">{rating}</span>
              </div>
            )}
            {downloads && (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/70 backdrop-blur-md rounded-lg">
                <Download size={13} className="text-white" />
                <span className="text-white text-xs font-bold">{downloads}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-sm mb-1 line-clamp-1 group-hover:text-spotify-green transition-colors">{name}</h3>
        <p className="text-[#b3b3b3] text-xs mb-3 line-clamp-1">by {author}</p>
        {!installed ? (
          <button 
            onClick={onAction}
            className="w-full py-2.5 bg-spotify-green text-black rounded-xl text-xs font-bold hover:bg-[#1fdf64] hover:scale-[1.05] transition-all shadow-lg shadow-spotify-green/20 hover:shadow-spotify-green/40"
          >
            {actionLabel}
          </button>
        ) : (
          <button className="w-full py-2.5 bg-[#282828] text-[#b3b3b3] rounded-xl text-xs font-bold">
            Installed
          </button>
        )}
      </div>
    </div>
  );
}
