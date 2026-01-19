"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
    Calendar, 
    CheckCircle, 
    Clock, 
    Star, 
    TrendingUp,
    DollarSign,
    Briefcase
} from 'lucide-react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDashboard } from './DashboardLayoutContent';

const OverviewContent = () => {
    const { userRole } = useDashboard();

    // Regular User Data
    const userStats = [
        { title: 'Total Bookings', value: '12', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' },
        { title: 'Upcoming', value: '3', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/20' },
        { title: 'Completed', value: '8', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
        { title: 'Reviews Given', value: '5', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20' },
    ];

    // Provider Data
    const providerStats = [
        { title: 'Total Earnings', value: '$2,450', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
        { title: 'Active Jobs', value: '4', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' },
        { title: 'Pending Requests', value: '2', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/20' },
        { title: 'Rating', value: '4.9', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20' },
    ];

    const stats = userRole === 'user' ? userStats : providerStats;

    const monthlyData = [
        { name: 'Jan', bookings: 4, completed: 3 },
        { name: 'Feb', bookings: 7, completed: 5 },
        { name: 'Mar', bookings: 12, completed: 8 },
        { name: 'Apr', bookings: 9, completed: 7 },
        { name: 'May', bookings: 15, completed: 12 },
        { name: 'Jun', bookings: 11, completed: 10 },
    ];

    const providerMonthlyData = [
        { name: 'Jan', earnings: 400, jobs: 5 },
        { name: 'Feb', earnings: 700, jobs: 8 },
        { name: 'Mar', earnings: 1200, jobs: 14 },
        { name: 'Apr', earnings: 900, jobs: 10 },
        { name: 'May', earnings: 1500, jobs: 16 },
        { name: 'Jun', earnings: 1100, jobs: 12 },
    ];

    const chartData = userRole === 'user' ? monthlyData : providerMonthlyData;


    const serviceData = [
        { name: 'Babysitting', value: 45 },
        { name: 'Nanny Service', value: 25 },
        { name: 'Pet Sitting', value: 20 },
        { name: 'Housekeeping', value: 10 },
    ];

    const COLORS = ['#e11d48', '#2563eb', '#d97706', '#059669'];

    const upcomingBookings = [
        { id: 1, sitter: 'Sarah Johnson', service: 'Babysitting', date: '2024-03-20', time: '18:00 - 22:00', status: 'Confirmed', price: '$60' },
        { id: 2, sitter: 'Emily Davis', service: 'Nanny Service', date: '2024-03-22', time: '09:00 - 17:00', status: 'Pending', price: '$120' },
        { id: 3, sitter: 'Michael Brown', service: 'Pet Sitting', date: '2024-03-25', time: '10:00 - 14:00', status: 'Confirmed', price: '$45' },
    ];
    
    const upcomingJobs = [
        { id: 1, client: 'John Doe', service: 'Babysitting', date: '2024-03-21', time: '19:00 - 23:00', status: 'Confirmed', price: '$80' },
        { id: 2, client: 'Jane Smith', service: 'Pet Sitting', date: '2024-03-23', time: '10:00 - 12:00', status: 'Pending', price: '$30' },
    ];

    const listData = userRole === 'user' ? upcomingBookings : upcomingJobs;

    const recentActivity = [
        { id: 1, action: 'Booking confirmed', description: 'Your booking with Sarah Johnson was confirmed', time: '2 hours ago' },
        { id: 2, action: 'New message', description: 'You received a message from Emily Davis', time: '5 hours ago' },
        { id: 3, action: 'Payment successful', description: 'Payment for booking #1234 was successful', time: '1 day ago' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {userRole === 'user' ? 'Dashboard Overview' : 'Provider Dashboard'}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
                                </div>
                                <div className={`p-3 rounded-lg ${stat.bg}`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Monthly Activity Bar Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                        {userRole === 'user' ? 'Monthly Activity' : 'Monthly Earnings'}
                    </h3>
                    <div className="w-full overflow-hidden flex justify-center">
                        <BarChart
                            height={320}
                            series={userRole === 'user' ? [
                                { data: chartData.map(d => d.bookings), label: 'Bookings', color: '#e11d48' },
                                { data: chartData.map(d => d.completed), label: 'Completed', color: '#2563eb' }
                            ] : [
                                { data: chartData.map(d => d.earnings), label: 'Earnings ($)', color: '#10b981' },
                                { data: chartData.map(d => d.jobs), label: 'Jobs', color: '#3b82f6' }
                            ]}
                            xAxis={[{ data: chartData.map(d => d.name), scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                            slotProps={{
                                legend: {
                                    direction: 'row',
                                    position: { vertical: 'bottom', horizontal: 'middle' },
                                    padding: 0,
                                },
                            }}
                        />
                    </div>
                </div>

                {/* Service Distribution Pie Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                        {userRole === 'user' ? 'Service Distribution' : 'Top Services'}
                    </h3>
                    <div className="w-full overflow-hidden flex justify-center">
                        <PieChart
                            series={[
                                {
                                    data: serviceData.map((item, index) => ({
                                        id: index,
                                        value: item.value,
                                        label: item.name,
                                        color: COLORS[index % COLORS.length]
                                    })),
                                    innerRadius: 60,
                                    outerRadius: 100,
                                    paddingAngle: 5,
                                    cornerRadius: 5,
                                },
                            ]}
                            height={320}
                            margin={{ top: 10, bottom: 70, left: 10, right: 10 }}
                            slotProps={{
                                legend: {
                                    direction: 'row',
                                    position: { vertical: 'bottom', horizontal: 'middle' },
                                    padding: 0,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming Bookings/Jobs */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {userRole === 'user' ? 'Upcoming Bookings' : 'Upcoming Jobs'}
                        </h2>
                        <button className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium">View All</button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 dark:bg-gray-700/50">
                                    <tr>
                                        <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">
                                            {userRole === 'user' ? 'Sitter' : 'Client'}
                                        </th>
                                        <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Service</th>
                                        <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Date & Time</th>
                                        <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                                        <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {listData.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                {userRole === 'user' ? item.sitter : item.client}
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{item.service}</td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                                <div className="flex flex-col">
                                                    <span>{item.date}</span>
                                                    <span className="text-xs text-gray-400">{item.time}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                                    item.status === 'Confirmed' 
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                                                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Recent Activity */}
                <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <div className="space-y-6">
                            {recentActivity.map((activity, index) => (
                                <div key={activity.id} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-rose-500"></div>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white text-sm">{activity.action}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{activity.description}</p>
                                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewContent;
