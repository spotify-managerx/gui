import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { PageHeader, StatsCounter, AppCard, GridItemCard } from './shared';
import { mockApps } from '../../data/mockData';

export default function AppsTab() {
  const [searchQuery, setSearchQuery] = useState('');

  const installedApps = mockApps.filter(app => app.installed);
  const availableApps = mockApps.filter(app => !app.installed);

  const filteredInstalledApps = installedApps.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAvailableApps = availableApps.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full bg-spotify-black overflow-y-auto">
      <PageHeader
        title="Custom Apps"
        description="Full-page applications to enhance your Spotify experience"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search custom apps..."
        rightContent={
          <div className="flex items-center gap-4">
            <StatsCounter
              variant="green"
              value={installedApps.length}
              label="Installed"
            />
            <StatsCounter
              variant="neutral"
              value={availableApps.length}
              label="Available"
            />
          </div>
        }
      />

      <div className="px-8 py-8 space-y-10">
        {/* Installed Apps */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-white font-black text-2xl">Your Apps</h2>
            <div className="bg-spotify-green/20 text-spotify-green px-3 py-1 rounded-full text-xs font-bold">
              {filteredInstalledApps.length}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredInstalledApps.map((app) => (
              <AppCard
                key={app.id}
                name={app.name}
                author={app.author}
                version={app.version || ''}
                description={app.description || ''}
                icon={app.image}
                color={app.color || ''}
                onLaunch={() => console.log('Launch', app.name)}
                onSettings={() => console.log('Settings', app.name)}
                onDelete={() => console.log('Delete', app.name)}
              />
            ))}
          </div>
        </div>

        {/* Available Apps */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-white font-black text-2xl">Discover Apps</h2>
              <TrendingUp size={20} className="text-spotify-green" />
            </div>
            <button className="text-[#b3b3b3] hover:text-white text-sm font-semibold transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {filteredAvailableApps.map((app) => (
              <GridItemCard
                key={app.id}
                name={app.name}
                author={app.author}
                image={app.image}
                rating={app.rating}
                downloads={app.downloads}
                color={app.color}
                onAction={() => console.log('Install', app.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
