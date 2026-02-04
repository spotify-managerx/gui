import { type ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  rightContent?: ReactNode;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  children?: ReactNode;
}

export default function PageHeader({ 
  title, 
  description, 
  rightContent,
  searchQuery,
  onSearchChange,
  searchPlaceholder = 'Search...',
  children
}: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] via-spotify-black to-spotify-black px-8 pt-8 pb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-5xl font-black text-white mb-3 tracking-tight">{title}</h1>
          <p className="text-[#b3b3b3] text-base">{description}</p>
        </div>
        {rightContent && rightContent}
      </div>
      
      {/* Children (e.g., tabs) or Search Bar */}
      {children ? (
        <div className="flex items-center gap-4">
          {children}
          {onSearchChange && (
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b3b3b3]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#242424] border border-[#333] rounded-xl pl-12 pr-4 py-3.5 text-white text-sm placeholder:text-[#777] focus:bg-[#2a2a2a] focus:border-spotify-green/50 focus:outline-none transition-all"
              />
            </div>
          )}
        </div>
      ) : onSearchChange ? (
        <div className="relative max-w-2xl">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b3b3b3]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#242424] border border-[#333] rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-[#777] focus:bg-[#2a2a2a] focus:border-spotify-green/50 focus:outline-none transition-all"
          />
        </div>
      ) : null}
    </div>
  );
}
