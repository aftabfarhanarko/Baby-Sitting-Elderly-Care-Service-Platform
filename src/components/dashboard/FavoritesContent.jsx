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
  CheckCheck,
} from "lucide-react";
import Swal from "sweetalert2";
import {
  deleteCaregivers,
  updateCaregivers,
} from "@/actions/serverData/dashbordApi";

const FavoritesContent = ({ data = [] }) => {
  const favorites = Array.isArray(data) && data.length > 0 ? data : [];

  const getStatusConfig = (state = "pending") => {
    const status = (state || "pending").toLowerCase().trim();

    switch (status) {
      case "confirmed":
        return {
          bg: "bg-emerald-500",
          light:
            "bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
          border: "border-emerald-200 dark:border-emerald-800/40",
          icon: CheckCircle,
          label: "Confirmed",
          dot: "bg-emerald-500",
        };

      case "completed":
        return {
          bg: "bg-blue-600",
          light:
            "bg-blue-50 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300",
          border: "border-blue-200 dark:border-blue-800/40",
          icon: CheckCheck,
          label: "Completed",
          dot: "bg-blue-600",
        };

      case "pending":
      default:
        return {
          bg: "bg-amber-500",
          light:
            "bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
          border: "border-amber-200 dark:border-amber-800/40",
          icon: Clock,
          label: "Pending",
          dot: "bg-amber-500",
        };
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "—";
    try {
      return new Date(`1970-01-01T${timeStr}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return timeStr;
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // TODO: API call to delete
        const result = await deleteCaregivers(id);
        if (result.success) {
          Swal.fire("Deleted!", "Booking has been removed.", "success");
        }
        console.log("Deleting booking:", result);
      }
    });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Confirm this booking?",
      text: "This will mark the booking as confirmed.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // TODO: API call to confirm
        const result = await updateCaregivers(id);

        if (result.success) {
          Swal.fire("Confirmed!", "Booking is now confirmed.", "success");
        }
        console.log("Confirming booking:", result);
      }
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Favorite Caregivers
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Your saved list of trusted professionals
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-20 text-gray-500 dark:text-gray-400">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-950/30">
            <Search className="h-10 w-10 text-rose-500" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            No Favorites Yet
          </h3>
          <p className="max-w-sm px-6 text-center">
            You haven't added any caregivers to your favorites. Start exploring
            to save your preferred professionals.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Favorite Caregivers
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Your saved list of trusted professionals
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
            {favorites.length} Saved
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {favorites.map((item, index) => {
          const rawState = item.status || item.state || "pending";
          const status = getStatusConfig(rawState);
          const StatusIcon = status.icon;
          const isPending = rawState === "pending";

          return (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:shadow-rose-100/40 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:shadow-rose-950/30"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="mb-5 flex items-start justify-between gap-4">
                  {/* Booker */}
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-2 dark:bg-gray-700/40">
                    <img
                      src={
                        item.bookerImage ||
                        item.bookerImages ||
                        "/default-avatar.png"
                      }
                      alt={item.bookerName || "Booker"}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-gray-700"
                      onError={(e) => (e.target.src = "/default-avatar.png")}
                    />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Booked by
                      </div>
                      <div
                        className="max-w-[140px] truncate text-sm font-bold text-gray-900 dark:text-white"
                        title={item.bookerName}
                      >
                        {item.bookerName || "Unknown"}
                      </div>
                    </div>
                  </div>

                  {/* Status + Price */}
                  <div className="flex flex-col items-end gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold shadow-sm ${status.light} ${status.border}`}
                    >
                      <StatusIcon className="h-4 w-4" />
                      {status.label}
                    </span>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                        ${Number(item.totalCost || 0).toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Total
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caregiver */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={item.caregiverImage || "/default-caregiver.jpg"}
                      alt={item.caregiverName || "Caregiver"}
                      className="h-16 w-16 rounded-2xl border-2 border-white object-cover shadow-md dark:border-gray-700 group-hover:scale-105 transition-transform"
                      onError={(e) => (e.target.src = "/default-avatar.png")}
                    />
                    <div
                      className={`absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white dark:border-gray-900 ${status.dot} shadow-md`}
                    >
                      <StatusIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="line-clamp-1 text-lg font-bold text-gray-900 dark:text-white">
                      {item.caregiverName || "Unnamed Caregiver"}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-1.5 text-sm text-rose-600 dark:text-rose-400">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{item.service || "Service"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-3 border-y border-gray-100 bg-gray-50/70 px-6 py-5 dark:border-gray-700 dark:bg-gray-800/40">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 text-rose-500" />
                    <span>Start Date</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {formatDate(item.startDate)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span>Start Time</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {formatTime(item.startTime)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    <span>Duration</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {item.days || "?"} days ({item.hoursPerDay || "?"} h/day)
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 active:scale-97 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>

                  {isPending && (
                    <button
                      type="button"
                      onClick={() => handleConfirm(item._id)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition hover:shadow-rose-500/40 hover:brightness-105 active:scale-97"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Confirm
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesContent;
