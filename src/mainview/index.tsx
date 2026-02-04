import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import MainLayout from '../layouts/MainLayout';
import HomeTab from './components/HomeTab';
import PluginsTab from './components/PluginsTab';
import AppsTab from './components/AppsTab';
import LibraryTab from './components/LibraryTab';
import UpdatesTab from './components/UpdatesTab';
import BackupTab from './components/BackupTab';
import SettingsTab from './components/SettingsTab';
import { ROUTES } from '../constants';

const App = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.home} element={<HomeTab />} />
          <Route path={ROUTES.plugins} element={<PluginsTab />} />
          <Route path={ROUTES.apps} element={<AppsTab />} />
          <Route path={ROUTES.library} element={<LibraryTab />} />
          <Route path={ROUTES.updates} element={<UpdatesTab />} />
          <Route path={ROUTES.backup} element={<BackupTab />} />
          <Route path={ROUTES.settings} element={<SettingsTab />} />
          <Route path="/" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}