'use client';
import { useState } from 'react';

const sidebarItems = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Trending', icon: TrendingIcon },
  { title: 'Shorts', icon: ShortsIcon },
  { title: 'Subscriptions', icon: SubscriptionsIcon },
  { title: 'Library', icon: LibraryIcon },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <div className="bg-gray-950 text-white w-48 h-screen p-2 hidden md:block">
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.title}
          title={item.title}
          icon={<item.icon />}
          active={activeItem === item.title}
          onClick={() => setActiveItem(item.title)}
        />
      ))}
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ icon, title, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-2 m-2 rounded-xl cursor-pointer transition-all ${
        active ? 'bg-gray-700' : 'hover:bg-gray-800'
      }`}
    >
      <div className="mr-3 w-6 h-6 text-white">{icon}</div>
      <span>{title}</span>
    </div>
  );
};

// Icons — simple SVGs for demonstration, you can replace with Lucide or Heroicons
function HomeIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z" />
    </svg>
  );
}
function TrendingIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function ShortsIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 15l5-3-5-3v6z" />
    </svg>
  );
}
function SubscriptionsIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm4 4v8l6-4-6-4z" />
    </svg>
  );
}
function LibraryIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  );
}
