import React from 'react';
import { Minus, Square, X } from 'lucide-react';

declare global {
  interface Window {
    __electrobun?: any;
  }
}

const TitleBar: React.FC = () => {
  const handleMinimize = async () => {
    try {
      await window.__electrobun?.rpc?.minimizeWindow();
    } catch (e) {
      console.log("Minimize not supported yet");
    }
  };

  const handleMaximize = async () => {
    try {
      await window.__electrobun?.rpc?.maximizeWindow();
    } catch (e) {
      console.log("Maximize not supported yet");
    }
  };

  const handleClose = async () => {
    try {
      await window.__electrobun?.rpc?.closeWindow();
    } catch (e) {
      console.error("Failed to close window", e);
    }
  };

  return (
    <div className="h-8 bg-black border-b border-[#282828] flex items-center justify-between px-4 select-none drag-region">
      <div className="text-white text-xs font-semibold">ManagerX</div>
      
      <div className="flex items-center gap-3">
        {/* Spotify Status */}
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-spotify-green shadow-sm shadow-spotify-green/50"></div>
          <span className="text-spotify-green text-[10px] font-semibold">Spotify Running</span>
        </div>
        
        {/* Window Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleMinimize}
            className="w-12 h-8 flex items-center justify-center hover:bg-[#282828] transition-colors no-drag"
          >
            <Minus size={14} className="text-white" />
          </button>
          <button
            onClick={handleMaximize}
            className="w-12 h-8 flex items-center justify-center hover:bg-[#282828] transition-colors no-drag"
          >
            <Square size={12} className="text-white" />
          </button>
          <button
            onClick={handleClose}
            className="w-12 h-8 flex items-center justify-center hover:bg-red-600 transition-colors no-drag"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
