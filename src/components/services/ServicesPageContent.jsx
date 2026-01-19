"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "@/actions/serverData/getData";
import {
  Baby,
  Users,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  HeartHandshake,
  Activity,
  Brain,
  Heart,
  Utensils,
  Accessibility,
  Pill,
  Pause,
  Puzzle,
  Bandage,
  Infinity,
  Car,
  Home,
  Moon,
  BrainCircuit,
  Mic,
  Book,
  Droplet,
  Armchair,
  HeartPulse,
  Bus,
  Building,
  Waves,
  Ambulance,
  PawPrint,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
  SlidersHorizontal,
} from "lucide-react";

const iconMap = {
  Baby,
  Users,
  Stethoscope,
  HeartHandshake,
  Activity,
  Brain,
  Heart,
  Utensils,
  Accessibility,
  Pill,
  Pause,
  Puzzle,
  Bandage,
  Infinity,
  Car,
  Home,
  Moon,
  BrainCircuit,
  Mic,
  Book,
  Droplet,
  Armchair,
  HeartPulse,
  Bus,
  Building,
  Waves,
  Ambulance,
  PawPrint,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesPageContent() {
  // Fetch All Data
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services-all"],
    queryFn: getAllServices,
  });

  // State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjusted to match grid layout (3x3)
  const [scrollY, setScrollY] = useState(0);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Extract unique categories (using icon or explicit category if available)
  const categories = useMemo(() => {
    if (!Array.isArray(services)) return ["All"];
    // Fallback: Use 'category' field if exists, else 'General' or map from Name
    const cats = new Set(
      services.map((item) => item.category || "General").filter(Boolean),
    );
    return ["All", ...Array.from(cats)];
  }, [services]);

  // Max price for slider
  const maxPrice = useMemo(() => {
    if (!Array.isArray(services) || services.length === 0) return 1000;
    return Math.max(...services.map((item) => item.priceVal || 0), 1000);
  }, [services]);

  // Update price range when maxPrice changes
  useEffect(() => {
    if (maxPrice > 0 && priceRange[1] === 1000) {
      setPriceRange([0, maxPrice]);
    }
  }, [maxPrice, priceRange]);

  // Filter and Sort Logic
  const filteredData = useMemo(() => {
    if (!Array.isArray(services)) return [];
    let result = [...services];

    // Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(lowerTerm) ||
          item.description?.toLowerCase().includes(lowerTerm),
      );
    }

    // Category
    if (selectedCategory !== "All") {
      result = result.filter(
        (item) => (item.category || "General") === selectedCategory,
      );
    }

    // Price
    result = result.filter(
      (item) =>
        (item.priceVal || 0) >= priceRange[0] &&
        (item.priceVal || 0) <= priceRange[1],
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => (a.priceVal || 0) - (b.priceVal || 0));
        break;
      case "price-high":
        result.sort((a, b) => (b.priceVal || 0) - (a.priceVal || 0));
        break;
      case "rating":
        // Assuming customerReviews exists and has rating
        result.sort((a, b) => {
          const getRating = (item) => {
            if (!item.customerReviews?.length) return 0;
            return (
              item.customerReviews.reduce((acc, r) => acc + r.rating, 0) /
              item.customerReviews.length
            );
          };
          return getRating(b) - getRating(a);
        });
        break;
      default: // featured or default
        break;
    }

    return result;
  }, [services, searchTerm, selectedCategory, priceRange, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header / Hero Section (Optional, keeping it simple) */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Find the perfect care solution for your loved ones with our
            professional services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Sidebar Filters */}
          <aside
            className={`lg:w-1/4 space-y-8 ${
              isFilterOpen ? "block" : "hidden"
            } lg:block bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-fit md:sticky top-24`}
          >
            <div className="flex justify-between items-center lg:hidden mb-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Filters
              </h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Search className="w-4 h-4" /> Search
              </h3>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat
                        ? "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </h3>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$0</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Top Bar: Sort & Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Showing{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {filteredData.length}
                </span>{" "}
                results
              </p>

              <div className="flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Content Grid */}
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm h-96 animate-pulse"
                  >
                    <div className="h-14 w-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-6"></div>
                  </div>
                ))}
              </div>
            ) : paginatedData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No services found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setPriceRange([0, maxPrice]);
                    setSortBy("featured");
                  }}
                  className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-2  gap-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <AnimatePresence mode="popLayout">
                  {paginatedData.map((service) => {
                    const IconComponent = iconMap[service.icon] || Baby;
                    return (
                      <motion.div
                        key={service._id || service.id}
                        layout
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group flex flex-col"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div
                            className={`w-14 h-14 ${
                              service.color || "bg-blue-100 text-blue-600"
                            } rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-8 h-8" />
                          </div>
                          {service.priceVal && (
                            <div className="text-right">
                              <span className="block text-2xl font-bold text-rose-600 dark:text-rose-400">
                                ${service.priceVal}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                /hour
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm line-clamp-3 flex-grow">
                          {service.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          {service.features?.slice(0, 3).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-auto">
                          <Link
                            href={`/services/${service._id || service.id}`}
                            className="py-2.5 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                          >
                            Details
                          </Link>
                          <Link
                            href={`/booking/${service._id || service.id}`}
                            className="py-2.5 px-4 bg-rose-600 text-white rounded-lg font-semibold text-center hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 dark:shadow-rose-900/30 flex items-center justify-center gap-2 text-sm group-hover:gap-3"
                          >
                            Book
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                        currentPage === page
                          ? "bg-rose-600 text-white"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
