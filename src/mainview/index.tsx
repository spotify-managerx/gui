import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ThemesTab from './components/ThemesTab';
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
          <TopBar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/themes" element={<ThemesTab />} />
              <Route path="/backup" element={<BackupTab />} />
              <Route path="/settings" element={<SettingsTab />} />
              <Route path="/" element={<Navigate to="/themes" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}