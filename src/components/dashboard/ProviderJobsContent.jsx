"use client";
import React, { useState } from 'react';
import { Calendar, Search, Filter, MoreHorizontal, CheckCircle, XCircle, Clock } from 'lucide-react';

const ProviderJobsContent = () => {
    const [filter, setFilter] = useState('All');

    const jobs = [
        { id: 1, parent: 'John Smith', service: 'Babysitting', date: '2024-03-22', time: '18:00 - 22:00', location: 'Downtown', status: 'Pending', price: '$80' },
        { id: 2, parent: 'Alice Williams', service: 'Nanny Service', date: '2024-03-24', time: '09:00 - 17:00', location: 'Westside', status: 'Confirmed', price: '$120' },
        { id: 3, parent: 'David Miller', service: 'Pet Sitting', date: '2024-03-25', time: '10:00 - 14:00', location: 'North Hills', status: 'Completed', price: '$45' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Jobs</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage incoming requests and scheduled jobs.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Export Schedule
                    </button>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search jobs by client name..." 
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {['All', 'Pending', 'Confirmed', 'Completed'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                                filter === status 
                                    ? 'bg-rose-600 text-white' 
                                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Jobs List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Client</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Service</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Date & Time</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Location</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {jobs.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{job.parent}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{job.service}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                        <div className="flex flex-col">
                                            <span>{job.date}</span>
                                            <span className="text-xs text-gray-400">{job.time}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{job.location}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                            job.status === 'Confirmed' 
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                                : job.status === 'Pending'
                                                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                        }`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {job.status === 'Pending' && (
                                                <>
                                                    <button className="p-1 text-green-600 hover:bg-green-50 rounded" title="Accept">
                                                        <CheckCircle className="w-5 h-5" />
                                                    </button>
                                                    <button className="p-1 text-red-600 hover:bg-red-50 rounded" title="Decline">
                                                        <XCircle className="w-5 h-5" />
                                                    </button>
                                                </>
                                            )}
                                            <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </div>
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

export default ProviderJobsContent;
