'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Requires lucide-react

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stories', href: '#stories' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="text-brand-pink text-lg font-bold">Sweta Mishra</a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 font-semibold text-sm">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-brand-pink">{item.label}</a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-brand-pink">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-4 text-sm font-semibold">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
