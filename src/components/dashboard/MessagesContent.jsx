"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMessagesData } from "@/actions/serverData/getData";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Calendar,
  Loader2,
  Search,
  MoreVertical,
  Trash2,
  Star,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MessagesContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6;

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1); // Reset to page 1 on search
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data, isLoading } = useQuery({
    queryKey: ["messages", page, debouncedSearch],
    queryFn: () => getMessagesData(page, limit, debouncedSearch),
    keepPreviousData: true,
  });

  const messages = data?.messages || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);

  if (isLoading) {
    return (
      <div className="min-h-screen  dark:bg-gray-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-rose-950 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-rose-600 dark:border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <div className="p-3 bg-rose-100 dark:bg-rose-900/30 rounded-2xl">
              <MessageSquare className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            Messages
            <span className="px-3 py-1 text-sm font-medium text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400 rounded-full border border-rose-100 dark:border-rose-800">
              {messages?.length || 0} New
            </span>
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage your inquiries and support requests efficiently.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <AnimatePresence mode="popLayout">
        {messages?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No messages found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              Try adjusting your search to find what you're looking for.
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {messages?.map((msg, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                key={msg._id}
                className="group relative bg-white dark:bg-gray-800 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:shadow-rose-500/5 border border-gray-100 dark:border-gray-700/50 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 dark:from-rose-900/40 dark:to-orange-900/40 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-lg shadow-inner">
                        {msg.firstName[0]}
                        {msg.lastName[0]}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-rose-600 transition-colors">
                        {msg.firstName} {msg.lastName}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {msg.createdAt
                          ? new Date(msg.createdAt).toLocaleDateString(
                              undefined,
                              {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )
                          : "Just now"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        msg.serviceType === "Babysitting"
                          ? "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800"
                          : "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800"
                      }`}
                    >
                      {msg.serviceType}
                    </span>
                  </div>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <a
                    href={`mailto:${msg.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 hover:bg-rose-50 dark:hover:bg-rose-900/20 group/item transition-colors"
                  >
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-gray-400 group-hover/item:text-rose-500 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                      {msg.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${msg.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 hover:bg-rose-50 dark:hover:bg-rose-900/20 group/item transition-colors"
                  >
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-gray-400 group-hover/item:text-rose-500 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {msg.phone}
                    </span>
                  </a>

                  {(msg.district || msg.area) && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {msg.district} {msg.area && `• ${msg.area}`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Message Content */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 to-transparent dark:from-rose-800" />
                  <p className="pl-8 text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed line-clamp-4">
                    "{msg.message}"
                  </p>
                </div>

                {/* Footer Actions */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between gap-4">
                  {msg.date && (
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      {msg.date}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      className="p-2 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg text-gray-400 hover:text-rose-600 transition-colors"
                      title="Mark as Important"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-8">
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((old) => Math.min(old + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MessagesContent;
