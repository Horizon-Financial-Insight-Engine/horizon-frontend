'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; 
import { 
  LayoutDashboard, 
  ReceiptText, 
  PieChart, 
  Wallet, 
  Settings, 
  TrendingUp 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Transactions', icon: ReceiptText, href: '/transactions' },
    { name: 'Analytics', icon: PieChart, href: '/analytics' },
    { name: 'Budgets', icon: Wallet, href: '/budgets' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200/10 bg-white/5
    dark:bg-background-dark/50 p-4 backdrop-blur-lg min-h-screen">
      <div className="flex flex-col gap-4">
        {/* Logo and App Name */}
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
             <TrendingUp className="text-primary w-6 h-6" strokeWidth={3} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-medium leading-normal">Horizon</h1>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-normal leading-normal">Financial Insight</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 group
                  ${isActive 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {/* Render Lucide Icon */}
                <item.icon 
                  className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-white'}`} 
                />
                <p className="text-sm font-medium leading-normal">{item.name}</p>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;