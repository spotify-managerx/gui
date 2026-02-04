import { useState } from 'react';
import { Check, Palette, Package, Code, Grid3x3 } from 'lucide-react';
import { PageHeader, StatsCounter, GridItemCard } from './shared';
import { mockThemes, mockExtensions, mockSnippets } from '../../data/mockData';

export default function PluginsTab() {
  const [activeTab, setActiveTab] = useState<'themes' | 'extensions' | 'snippets'>('themes');
  const [searchQuery, setSearchQuery] = useState('');

  const getActiveData = () => {
    switch (activeTab) {
      case 'themes': return mockThemes;
      case 'extensions': return mockExtensions;
      case 'snippets': return mockSnippets;
    }
  };

  const activeData = getActiveData();
  const installedCount = activeTab === 'snippets' 
    ? mockSnippets.filter(s => s.enabled).length
    : activeData.filter((item: any) => item.installed).length;

  const filteredData = activeData.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full bg-spotify-black overflow-hidden flex flex-col">
      <PageHeader
        title="Plugins"
        description="Transform your Spotify with custom themes, extensions, and tweaks"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder={`Search ${activeTab}...`}
        rightContent={
          <div className="flex items-center gap-3">
            <StatsCounter
              variant={activeTab === 'snippets' ? 'purple' : 'green'}
              value={installedCount}
              label={activeTab === 'snippets' ? 'Enabled' : 'Installed'}
              icon={<Check size={20} strokeWidth={3} />}
            />
            <StatsCounter
              variant="neutral"
              value={activeData.length}
              label="Available"
            />
          </div>
        }
      >
        {/* Tabs */}
        <div className="flex items-center gap-2 bg-[#181818] p-1.5 rounded-xl border border-[#282828]">
          <button
            onClick={() => setActiveTab('themes')}
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'themes'
                ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <Palette size={16} />
            Themes
          </button>
          <button
            onClick={() => setActiveTab('extensions')}
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'extensions'
                ? 'bg-spotify-green text-black shadow-lg shadow-spotify-green/20'
                : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <Package size={16} />
            Extensions
          </button>
          <button
            onClick={() => setActiveTab('snippets')}
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'snippets'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                : 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <Code size={16} />
            Snippets
          </button>
        </div>
      </PageHeader>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Grid for themes (larger cards with previews) */}
        {activeTab === 'themes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredData.map((theme: any) => (
              <GridItemCard
                key={theme.id}
                name={theme.name}
                author={theme.author}
                image={theme.image}
                rating={theme.rating}
                downloads={theme.downloads}
                installed={theme.installed}
                onAction={() => console.log(theme.installed ? 'Active' : 'Apply', theme.name)}
              />
            ))}
          </div>
        )}

        {/* Grid for extensions */}
        {activeTab === 'extensions' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {filteredData.map((ext: any) => (
              <GridItemCard
                key={ext.id}
                name={ext.name}
                author={ext.author}
                image={ext.image}
                rating={ext.rating}
                downloads={ext.downloads}
                installed={ext.installed}
                onAction={() => console.log('Install', ext.name)}
              />
            ))}
          </div>
        )}

        {/* List for snippets */}
        {activeTab === 'snippets' && (
          <div className="max-w-4xl">
            <div className="bg-[#181818] rounded-2xl border border-purple-500/20 overflow-hidden">
              {filteredData.map((snippet: any, index: number) => (
                <div
                  key={snippet.id}
                  className={`group flex items-center justify-between p-5 hover:bg-[#1e1e1e] transition-all ${
                    index !== filteredData.length - 1 ? 'border-b border-[#282828]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Code size={20} className="text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base mb-1 group-hover:text-purple-400 transition-colors truncate">{snippet.name}</h3>
                      <p className="text-[#b3b3b3] text-sm">
                        by {snippet.author} • {snippet.downloads} downloads
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className={`relative w-16 h-8 rounded-full transition-all ${
                        snippet.enabled 
                          ? 'bg-purple-500 shadow-lg shadow-purple-500/30' 
                          : 'bg-[#282828] hover:bg-[#333]'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${
                          snippet.enabled ? 'right-1' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
