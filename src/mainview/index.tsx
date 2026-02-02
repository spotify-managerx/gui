import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import PluginsTab from './components/PluginsTab';
import AppsTab from './components/AppsTab';
import LibraryTab from './components/LibraryTab';
import UpdatesTab from './components/UpdatesTab';
import BackupTab from './components/BackupTab';
import SettingsTab from './components/SettingsTab';

const App = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-[#191414] overflow-hidden select-none font-sans">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/home" element={<HomeTab />} />
            <Route path="/plugins" element={<PluginsTab />} />
            <Route path="/apps" element={<AppsTab />} />
            <Route path="/library" element={<LibraryTab />} />
            <Route path="/updates" element={<UpdatesTab />} />
            <Route path="/backup" element={<BackupTab />} />
            <Route path="/settings" element={<SettingsTab />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}