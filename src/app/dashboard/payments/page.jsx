"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, Clock, CheckCircle, Plus, Download } from 'lucide-react';

const PaymentsPage = () => {
  const transactions = [
    {
      id: 'TRX-123456',
      service: 'Weekend Babysitting',
      sitter: 'Sarah Wilson',
      date: '2024-03-15',
      amount: 120.00,
      status: 'completed',
      method: 'Visa ending in 4242'
    },
    {
      id: 'TRX-123457',
      service: 'Evening Care',
      sitter: 'Emily Davis',
      date: '2024-03-10',
      amount: 85.50,
      status: 'completed',
      method: 'Mastercard ending in 8899'
    },
    {
      id: 'TRX-123458',
      service: 'Full Day Care',
      sitter: 'Michael Brown',
      date: '2024-03-01',
      amount: 200.00,
      status: 'refunded',
      method: 'Visa ending in 4242'
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '8899',
      expiry: '09/24',
      isDefault: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payments & Billing</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your payment methods and view transaction history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
              <button className="flex items-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <CreditCard className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {method.type} ending in {method.last4}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Expires {method.expiry}</p>
                    </div>
                  </div>
                  {method.isDefault && (
                    <span className="px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/20 rounded-full">
                      Default
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Transaction History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transaction</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {transactions.map((trx) => (
                    <tr key={trx.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">{trx.service}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{trx.sitter}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {trx.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        ${trx.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          trx.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        }`}>
                          {trx.status.charAt(0).toUpperCase() + trx.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-rose-600 hover:text-rose-900 dark:text-rose-400 dark:hover:text-rose-300">
                          <Download className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-1">Total Spent</h3>
            <p className="text-rose-100 text-sm mb-4">This month</p>
            <div className="text-3xl font-bold mb-6">$205.50</div>
            <div className="flex items-center justify-between text-sm text-rose-100 bg-white/10 rounded-lg p-3">
              <span>Next payment due</span>
              <span className="font-medium text-white">Apr 1, 2024</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Successful Payments</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-yellow-600 dark:text-yellow-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Pending</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentsPage;
