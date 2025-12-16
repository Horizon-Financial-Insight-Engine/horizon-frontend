import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', href: '/', isActive: true },
    { name: 'Transactions', icon: 'receipt_long', href: '/transactions', isActive: false },
    { name: 'Analytics', icon: 'pie_chart', href: '/analytics', isActive: false },
    { name: 'Budgets', icon: 'account_balance_wallet', href: '/budgets', isActive: false },
    { name: 'Settings', icon: 'settings', href: '/settings', isActive: false },
  ];

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200/10 bg-white/5 dark:bg-background-dark/50 p-4 backdrop-blur-lg">
      <div className="flex flex-col gap-4">
        {/* Logo and App Name */}
        <div className="flex items-center gap-3 px-3 py-2">
          {/* Logo Placeholder */}
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("/assets/logo-placeholder.jpg")' }} data-alt="Horizon company logo"></div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-medium leading-normal">Horizon</h1>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-normal leading-normal">Financial Insight Engine</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 
                ${item.isActive 
                  ? 'bg-primary/20 text-primary' 
                  : 'text-gray-400 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className={`material-symbols-outlined ${item.isActive ? 'fill' : ''}`}>
                {item.icon}
              </span>
              <p className="text-sm font-medium leading-normal">{item.name}</p>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;