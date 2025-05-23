'use client';

import { useState } from 'react';
import { Menu, Home, Compass, Clock } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (fixed top-left) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
      >
        <Menu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 p-4`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mb-6 text-white"
        >
          ✕ Close
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          <NavItem icon={<Home size={24} />} label="Home" />
          <NavItem icon={<Compass size={24} />} label="Explore" />
          <NavItem icon={<Clock size={24} />} label="History" />
        </nav>
      </div>
    </>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4 hover:bg-gray-800 p-2 rounded cursor-pointer">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
