import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between whitespace-nowrap border-b border-gray-200/10 bg-white/5 dark:bg-background-dark/50 px-6 backdrop-blur-lg">
      {/* Search Bar */}
      <label className="relative flex w-full max-w-sm">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
        <input 
          className="form-input w-full rounded-lg border-transparent bg-gray-700/50 py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary" 
          placeholder="Search transactions..." 
          type="search"
        />
      </label>
      
      {/* Notifications and User Avatar */}
      <div className="flex items-center gap-4">
        <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-white">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        {/* Avatar Placeholder */}
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
          style={{ backgroundImage: 'url("/assets/avatar-placeholder.jpg")' }} 
          data-alt="User avatar"
        ></div>
      </div>
    </header>
  );
};

export default Header;