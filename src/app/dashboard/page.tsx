'use client';

import React from 'react';
import Sidebar from '@/app/components/layout/Sidebar';
import Header from '@/app/components/layout/Header';
import { 
    Wallet, 
    TrendingUp, 
    TrendingDown, 
    Activity, 
    CheckCircle2, 
    Clock, 
    MoreHorizontal 
} from 'lucide-react';

const TransactionsTable: React.FC = () => (
    <div className="mt-8">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold leading-tight tracking-tight text-white">Recent Transactions</h2>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-5 h-5" />
            </button>
        </div>
        
        <div className="mt-4 flow-root">
            <div className="-mx-6 -my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
                        <table className="min-w-full divide-y divide-white/10">
                            <thead className="bg-black/10">
                                <tr>
                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300 sm:pl-6">Date</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Description</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Category</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Amount</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {/* Row 1 */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 26, 2023</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Starbucks Coffee</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Food</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$5.75</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Completed
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 25, 2023</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Monthly Salary</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Income</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-emerald-500">+$2,500.00</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Completed
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 24, 2023</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Netflix Subscription</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Entertainment</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$15.49</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400 border border-yellow-500/20">
                                            <Clock className="w-3.5 h-3.5" />
                                            Pending
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 23, 2023</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Gasoline</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Transport</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$45.20</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Completed
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 5 */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-400 sm:pl-6">Oct 22, 2023</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-white">Grocery Shopping</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">Food</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-red-500">-$112.80</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                                        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Completed
                                        </div>
                                    </td>
                                </tr>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Balance Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg
             hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-400">Total Balance</p>
                        <p className="text-3xl font-bold tracking-tight text-white mt-1">$12,345.67</p>
                    </div>
                    <div className="p-3 bg-primary/20 rounded-xl text-primary border border-primary/20">
                        <Wallet className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +1.2%
                    </div>
                    <span className="text-gray-500">vs last month</span>
                </div>
            </div>

            {/* Income Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg
             hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-400">Total Income</p>
                        <p className="text-3xl font-bold tracking-tight text-white mt-1">$4,500.00</p>
                    </div>
                    <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-500 border border-emerald-500/20">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +5.8%
                    </div>
                    <span className="text-gray-500">vs last month</span>
                </div>
            </div>

            {/* Expenses Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg
             hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-400">Total Expenses</p>
                        <p className="text-3xl font-bold tracking-tight text-white mt-1">$2,150.75</p>
                    </div>
                    <div className="p-3 bg-red-500/20 rounded-xl text-red-500 border border-red-500/20">
                        <TrendingDown className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        -3.1%
                    </div>
                    <span className="text-gray-500">vs last month</span>
                </div>
            </div>
        </div>

        {/* Charts */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                        <Activity className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-white">Spending Trends</p>
                        <p className="text-xs text-gray-400">Last 6 Months</p>
                    </div>
                </div>
                
                <div className="mt-4 flex min-h-[250px] flex-1 flex-col gap-8 py-4">
                    <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_chart)"></path>
                        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#1152d4" strokeLinecap="round" strokeWidth="3"></path>
                        <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                                <stop stopColor="#1152d4" stopOpacity="0.4"></stop>
                                <stop offset="1" stopColor="#1152d4" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="flex justify-around">
                        {['May', 'June', 'July', 'Aug', 'Sept', 'Oct'].map((month) => (
                            <p key={month} className="text-xs font-bold uppercase tracking-wider text-gray-500">{month}</p>
                        ))}
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