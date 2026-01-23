"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Trash2,
  CheckCircle,
  Search,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  deleteMyBooking,
  updateMyBooking,
} from "@/actions/serverData/dashbordApi";

const BookingsContent = ({ allBookig = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const bookings =
    Array.isArray(allBookig) && allBookig.length > 0 ? allBookig : [];

  const getStatusConfig = (status = "pending") => {
    const s = status.toLowerCase().trim();
    switch (s) {
      case "confirmed":
        return {
          bg: "bg-emerald-500",
          light:
            "bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
          border: "border-emerald-200 dark:border-emerald-800/50",
          icon: CheckCircle,
          label: "Confirmed",
          dot: "bg-emerald-500",
        };
      case "pending":
        return {
          bg: "bg-amber-500",
          light:
            "bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
          border: "border-amber-200 dark:border-amber-800/50",
          icon: Clock,
          label: "Pending",
          dot: "bg-amber-500",
        };
      default:
        return {
          bg: "bg-gray-500",
          light:
            "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
          border: "border-gray-200 dark:border-gray-600",
          icon: AlertCircle,
          label: status.charAt(0).toUpperCase() + status.slice(1),
          dot: "bg-gray-500",
        };
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      (booking.serviceName || "").toLowerCase().includes(searchLower) ||
      (booking.user?.name || "").toLowerCase().includes(searchLower);

    const matchesFilter =
      filterStatus === "all" ||
      booking.status?.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete booking?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteMyBooking(id);
        console.log("Deleting booking:", result);
        if (result.success === true) {
          Swal.fire("Deleted!", "Booking removed.", "success");
        }
      }
    });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Confirmed  booking?",
      text: "This will mark the booking as confirmed.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Hit APis
        const result = await updateMyBooking(id);
        console.log("Confirming booking:", result);
        // TODO: call confirm API here
        if (result.success === true) {
          Swal.fire("Confirmed!", "Booking is now confirmed.", "success");
        }
      }
    });
  };

  return (
    <div className="space-y-8 p-4 sm:p-6">
      {/* Header + Controls */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            My Bookings
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Manage your upcoming and past bookings
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[220px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search service or provider..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      {filteredBookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 rounded-full bg-rose-50 p-6 dark:bg-rose-950/30">
            <Search className="h-10 w-10 text-rose-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            No bookings found
          </h3>
          <p className="max-w-md text-gray-500 dark:text-gray-400">
            {searchTerm || filterStatus !== "all"
              ? "Try changing your search or filter"
              : "You don't have any bookings yet."}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBookings.map((booking, index) => {
            const status = getStatusConfig(booking.status);
            const StatusIcon = status.icon;
            const isPending =
              (booking.status || "").toLowerCase() === "pending";

            return (
              <motion.div
                key={booking._id || index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md hover:shadow-rose-100/40 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:shadow-rose-950/20"
              >
                {/* Card Header */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 text-xl font-bold text-rose-600 dark:from-rose-900/30 dark:to-purple-900/30 dark:text-rose-400">
                        {(booking.serviceName || "?")[0]}
                      </div>
                      <div>
                        <h3 className="line-clamp-1 font-semibold text-gray-900 dark:text-white">
                          {booking.serviceName || "Service"}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          ${booking.servicePricePerHour || 0}/hr
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-bold shadow-sm ${status.light} ${status.border}`}
                    >
                      <StatusIcon className="h-3.5 w-3.5" />
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Provider */}
                <div className="px-5 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    {booking.user?.image ? (
                      <img
                        src={booking.user.image}
                        alt={booking.user.name}
                        className="h-10 w-10 rounded-full border border-gray-200 object-cover dark:border-gray-700"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {(booking.user?.name || "?")[0]}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.user?.name || "Provider"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {booking.user?.email || "—"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-3 px-5 py-5 bg-gray-50/60 dark:bg-gray-800/40">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="rounded-full bg-rose-50 p-2 text-rose-600 dark:bg-rose-900/30">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {booking.bookingDetails?.dutyTime || "—"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="rounded-full bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/30">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {booking.bookingDetails?.duration || "?"} Hours
                    </span>
                  </div>

                  {(booking.bookingDetails?.location?.address ||
                    booking.bookingDetails?.address) && (
                    <div className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 rounded-full bg-purple-50 p-2 text-purple-600 dark:bg-purple-900/30">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span
                        className="font-medium text-gray-700 dark:text-gray-200 line-clamp-2"
                        title={
                          booking.bookingDetails?.location?.address ||
                          booking.bookingDetails?.address
                        }
                      >
                        {booking.bookingDetails?.location?.address ||
                          booking.bookingDetails?.address}
                      </span>
                    </div>
                  )}

                  <div className=" ">
                    <span className="block text-2xl font-bold text-rose-600 dark:text-rose-400">
                      ${(booking.financials?.totalCost || 0).toFixed(2)}
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Total Amount
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 p-6 pt-2 bg-gray-50/50 dark:bg-gray-800/50">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Trash2 className="inline h-4 w-4 sm:mr-1.5" />
                    <span className="hidden sm:inline">Delete</span>
                  </button>

                  {isPending && (
                    <button
                      onClick={() => handleConfirm(booking._id)}
                      className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:brightness-105 hover:shadow-lg transition-all"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Confirmed
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookingsContent;
