"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Trash2,
  CheckCircle,
  Briefcase,
  AlertCircle,
  Search,
} from "lucide-react";
import Swal from "sweetalert2";

const FavoritesContent = ({ data = [] }) => {
  const favorites = data && data.length > 0 ? data : [];

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48", // rose-600
      cancelButtonColor: "#6b7280", // gray-500
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete item:", id);
        // Add your delete logic here (API call)
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // Handle Confirm
  const handleConfirm = (id) => {
    Swal.fire({
      title: "Confirm Booking?",
      text: "Do you want to proceed with this booking?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10b981", // emerald-500
      cancelButtonColor: "#6b7280", // gray-500
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Confirm item:", id);
        // Add your confirm logic here (API call)
        Swal.fire("Confirmed!", "Booking has been confirmed.", "success");
      }
    });
  };

  if (!favorites || favorites.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Favorite Caregivers
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Your saved list of trusted professionals
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-200 dark:border-gray-700 border-dashed">
          <div className="w-20 h-20 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mb-6">
            <Search className="w-10 h-10 text-rose-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No Favorites Found
          </h3>
          <p className="text-center max-w-sm px-4">
            You haven't saved any caregivers yet. Browse our list to find the perfect match.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Favorite Caregivers
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Your saved list of trusted professionals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-sm font-bold">
            {favorites.length} Saved
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {favorites.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 flex flex-col"
          >
            {/* Card Header */}
            <div className="p-6 pb-4">
              <div className="flex justify-between items-start gap-4 mb-4">
                {/* Booker Info - Left Side */}
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-xl pr-4">
                  <img
                    src={item.bookerImages}
                    alt={item.bookerName}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-600"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Booked By
                    </h4>
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate max-w-[100px]" title={item.bookerName}>
                      {item.bookerName}
                    </p>
                  </div>
                </div>

                {/* Total Cost - Right Side */}
                <div className="text-right">
                  <span className="block text-2xl font-bold text-rose-600 dark:text-rose-400">
                    ${item.totalCost}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Total Amount
                  </span>
                </div>
              </div>

              {/* Caregiver Info */}
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <img
                    src={item.caregiverImage}
                    alt={item.caregiverName}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white dark:border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center ${
                      item.state === "confirmed"
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  >
                    {item.state === "confirmed" ? (
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">
                    {item.caregiverName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="text-sm font-medium">
                      {item.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body Details */}
            <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-700 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 text-rose-500" />
                  <span>Start Date</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.startDate}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span>Start Time</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.startTime}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Duration</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.days} Days ({item.hoursPerDay}h/day)
                </span>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 mt-auto">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
                <button
                  onClick={() => handleConfirm(item._id)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <CheckCircle className="w-4 h-4" />
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesContent;
