import React, { ReactNode } from 'react';
import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-[#191414] overflow-hidden select-none font-sans">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
