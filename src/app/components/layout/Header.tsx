'use client';

import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200/10
  bg-white/5 dark:bg-background-dark/80 px-6 backdrop-blur-xl transition-all z-20 sticky top-0">
      
      {/* Search Bar */}
      <div className="flex w-full max-w-md items-center">
        <label className="relative flex w-full group">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            className="form-input w-full rounded-xl border border-white/10 bg-white/5 dark:bg-white/5
            py-2.5 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-500
          dark:placeholder:text-gray-400 focus:border-primary/50 focus:ring-4 focus:ring-primary/10
          focus:bg-white/10 transition-all duration-200" 
            placeholder="Search transactions, assets..." 
            type="search"
          />
        </label>
      </div>
      
      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* Notification Button */}
        <button className="relative flex size-10 items-center justify-center rounded-full bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white transition-all duration-200 border border-transparent hover:border-white/10">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background-dark animate-pulse"></span>
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 pl-2 border-l border-white/10">

            <div className="size-9 rounded-full bg-gradient-to-tr from-primary to-indigo-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background-dark">
                    <span className="text-xs font-bold text-white">JD</span> {/* Initials of the user */}
                </div>
            </div>
            
            {/* User Info */}
            <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-white leading-none">John Doe</p>
                <p className="text-xs text-gray-400 mt-1">Admin</p>
            </div>

            {/* Dropdown Icon */}
            <button className="hidden md:flex text-gray-400 hover:text-white transition-colors">
                <ChevronDown className="w-4 h-4" />
            </button>
        </div>

      </div>
    </header>
  );
};

export default Header;