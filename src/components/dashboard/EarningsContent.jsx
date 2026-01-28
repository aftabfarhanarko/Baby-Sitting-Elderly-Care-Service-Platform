"use client";
import React from "react";
import { DollarSign, TrendingUp, CreditCard, Download } from "lucide-react";
import { BarChart } from "@mui/x-charts/BarChart";

const EarningsContent = ({
  serviceChartData = [],
  caregiverChartData = [],
  recentServices = [],
  recentCaregivers = [],
}) => {
  // Calculate Totals
  const totalServiceEarnings = serviceChartData.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );
  const totalCaregiverEarnings = caregiverChartData.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );
  const totalRevenue = totalServiceEarnings + totalCaregiverEarnings;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Earnings
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Track your revenue from Services and Caregivers.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download Report</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 dark:text-gray-400">
              Total Revenue
            </span>
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            ${totalRevenue.toFixed(2)}
          </h3>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 dark:text-gray-400">
              Services Earnings
            </span>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            ${totalServiceEarnings.toFixed(2)}
          </h3>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 dark:text-gray-400">
              Caregiver Earnings
            </span>
            <div className="p-2 bg-rose-100 dark:bg-rose-900/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            ${totalCaregiverEarnings.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Services Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Services Earnings
          </h3>
          <div className="w-full overflow-hidden flex justify-center">
            <BarChart
              height={300}
              series={[
                {
                  data: serviceChartData.map((d) => d.amount),
                  label: "Revenue",
                  color: "#3b82f6", // Blue
                },
              ]}
              xAxis={[
                {
                  data: serviceChartData.map((d) => d.month),
                  scaleType: "band",
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </div>

        {/* Caregiver Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Caregiver Earnings
          </h3>
          <div className="w-full overflow-hidden flex justify-center">
            <BarChart
              height={300}
              series={[
                {
                  data: caregiverChartData.map((d) => d.amount),
                  label: "Revenue",
                  color: "#f43f5e", // Rose
                },
              ]}
              xAxis={[
                {
                  data: caregiverChartData.map((d) => d.month),
                  scaleType: "band",
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Recent Caregiver Bookings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Caregiver Bookings
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Booker
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Caregiver
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Amount
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {recentCaregivers.length > 0 ? (
                  recentCaregivers.map((tx, i) => (
                    <tr
                      key={tx._id || i}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                        {tx.bookerName || tx.bookerEmail}
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        {tx.caregiverName}
                      </td>
                      <td className="px-4 py-3 font-medium text-rose-600 dark:text-rose-400">
                        ${tx.totalCost}
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        {new Date(tx.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No recent caregiver bookings found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Recent Services Bookings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Services Bookings
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Booker
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Service
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Amount
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500 dark:text-gray-400">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {recentServices.length > 0 ? (
                  recentServices.map((tx, i) => (
                    <tr
                      key={tx._id || i}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                        {tx.user?.name || tx.user?.email}
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        {tx.serviceName}
                      </td>
                      <td className="px-4 py-3 font-medium text-blue-600 dark:text-blue-400">
                        ${tx.financials?.totalCost}
                      </td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        {new Date(tx.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No recent service bookings found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsContent;
