import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ThemesTab from './components/ThemesTab';
import BackupTab from './components/BackupTab';
import SettingsTab from './components/SettingsTab';

const App = () => {
  const [activeTab, setActiveTab] = useState('themes');

  const renderContent = () => {
    switch (activeTab) {
      case 'themes':
        return <ThemesTab />;
      case 'backup':
        return <BackupTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <ThemesTab />;
    }
  };

  return (
    <div className="flex h-screen bg-black overflow-hidden select-none">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}