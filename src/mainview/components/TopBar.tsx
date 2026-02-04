import React from 'react';
import { Power } from 'lucide-react';
import Button from './shared/Button';

const TopBar: React.FC = () => {
  return (
    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
      {/* Spotify Status */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-spotify-green rounded-full" />
        <span className="text-white/80 text-sm">Spotify Running</span>
      </div>

      {/* Close Button */}
      <Button variant="danger" size="sm" icon={<Power size={16} />}>
        Close Spotify
      </Button>
    </div>
  );
};

export default TopBar;
