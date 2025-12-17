// src/app/(dashboard)/page.tsx
'use client';

import React from 'react';
import Sidebar from '@/app/components/layout/Sidebar';
import Header from '@/app/components/layout/Header';
// import { useAppSelector } from '@/store/hook';
import { useRouter } from 'next/navigation';

const TransactionsTable: React.FC = () => (
    <div className="mt-8">
        <h2 className="text-xl font-semibold leading-tight tracking-tight text-white">Recent Transactions</h2>
        <div className="mt-4 flow-root">
            <div className="-mx-6 -my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
                        {/* Table Content */}
                        <table className="min-w-full divide-y divide-white/10">
                            <thead className="bg-black/10">
                                <tr>
                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300 sm:pl-6" scope="col">Date</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300" scope="col">Description</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300" scope="col">Category</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300" scope="col">Amount</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 26, 2023</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Starbucks Coffee</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Food</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$5.75</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">Completed</span></td></tr>
                                <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 25, 2023</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Monthly Salary</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Income</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-emerald-500">+$2,500.00</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">Completed</span></td></tr>
                                <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 24, 2023</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Netflix Subscription</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Entertainment</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$15.49</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400"><span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400">Pending</span></td></tr>
                                <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 23, 2023</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Gasoline</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Transport</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$45.20</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">Completed</span></td></tr>
                                <tr><td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 22, 2023</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Grocery Shopping</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Food</td><td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$112.80</td><td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">Completed</span></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const DashboardContent: React.FC = () => (
    <main className="flex-1 overflow-y-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                <p className="text-base font-medium text-gray-400">Total Balance</p>
                <p className="text-3xl font-bold tracking-tight text-white">$12,345.67</p>
                <p className="text-sm font-medium text-emerald-500">+1.2% vs last month</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                <p className="text-base font-medium text-gray-400">Total Income</p>
                <p className="text-3xl font-bold tracking-tight text-white">$4,500.00</p>
                <p className="text-sm font-medium text-emerald-500">+5.8% vs last month</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                <p className="text-base font-medium text-gray-400">Total Expenses</p>
                <p className="text-3xl font-bold tracking-tight text-white">$2,150.75</p>
                <p className="text-sm font-medium text-red-500">-3.1% vs last month</p>
            </div>
        </div>

        {/* Charts */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-white">Spending Trends</p>
                <p className="text-sm text-gray-400">Last 6 Months</p>
                <div className="mt-4 flex min-h-[250px] flex-1 flex-col gap-8 py-4">

                    <svg fill="none" height="100%" preserveaspectratio="none" viewbox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_chart)"></path>
                        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#1152d4" stroke-linecap="round" stroke-width="3"></path>
                        <defs>
                            <lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                                <stop stop-color="#1152d4" stop-opacity="0.4"></stop>
                                <stop offset="1" stop-color="#1152d4" stop-opacity="0"></stop>
                            </lineargradient>
                        </defs>
                    </svg>

                    <div className="flex justify-around">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">May</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">June</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">July</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Aug</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Sept</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Oct</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Transactions Table */}
        <TransactionsTable />
    </main>
);

const DashboardPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <DashboardContent />
            </div>
        </div>
    );
};

export default DashboardPage;