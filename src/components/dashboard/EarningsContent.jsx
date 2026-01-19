"use client";
import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Download } from 'lucide-react';
import { BarChart } from '@mui/x-charts/BarChart';

const EarningsContent = () => {
    const monthlyEarnings = [
        { month: 'Jan', amount: 450 },
        { month: 'Feb', amount: 620 },
        { month: 'Mar', amount: 890 },
        { month: 'Apr', amount: 750 },
        { month: 'May', amount: 1200 },
        { month: 'Jun', amount: 980 },
    ];

    const transactions = [
        { id: 1, client: 'Sarah Johnson', date: '2024-03-20', amount: '$60.00', status: 'Paid', service: 'Babysitting' },
        { id: 2, client: 'Michael Brown', date: '2024-03-18', amount: '$45.00', status: 'Processing', service: 'Pet Sitting' },
        { id: 3, client: 'Emily Davis', date: '2024-03-15', amount: '$120.00', status: 'Paid', service: 'Nanny Service' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Earnings</h1>
                    <p className="text-gray-500 dark:text-gray-400">Track your revenue and payment history.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500 dark:text-gray-400">Total Revenue</span>
                        <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                            <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$4,890.00</h3>
                    <span className="text-sm text-green-600 flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3" />
                        +12.5% from last month
                    </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500 dark:text-gray-400">Pending</span>
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                            <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$145.00</h3>
                    <span className="text-sm text-gray-500 mt-1">
                        3 pending payments
                    </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500 dark:text-gray-400">Average/Job</span>
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$55.00</h3>
                    <span className="text-sm text-gray-500 mt-1">
                        Based on last 30 jobs
                    </span>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Revenue Growth</h3>
                <div className="w-full overflow-hidden flex justify-center">
                    <BarChart
                        height={320}
                        series={[
                            { data: monthlyEarnings.map(d => d.amount), label: 'Revenue', color: '#10b981' }
                        ]}
                        xAxis={[{ data: monthlyEarnings.map(d => d.month), scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Client</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Service</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {transactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{tx.client}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{tx.service}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{tx.date}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{tx.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                            tx.status === 'Paid' 
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Simple Clock icon component since it was missing in imports
const Clock = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default EarningsContent;
