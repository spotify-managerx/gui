import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-white text-5xl text-center mb-2 drop-shadow-lg">
        spotify-managerx
      </h1>
      <p className="text-white/90 text-xl text-center mb-10 drop-shadow">
        Frontend GUI
      </p>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center shadow-2xl">
        <p className="text-white text-lg">React + Tailwind ready. Backend coming soon.</p>
      </div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}