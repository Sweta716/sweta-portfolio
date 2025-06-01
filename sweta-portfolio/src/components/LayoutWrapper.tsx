'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Header'; 
import '../styles/globals.css';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <>
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-full bg-brand-yellow text-black font-semibold hover:scale-105 transition"
        >
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <Header /> 
      {children}
    </>
  );
}
