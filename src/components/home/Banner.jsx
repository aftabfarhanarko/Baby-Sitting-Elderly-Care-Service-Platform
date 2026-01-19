"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Banner = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-50 dark:opacity-20"></div>
        <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-rose-200 dark:bg-rose-900/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg shadow-rose-100/50 dark:shadow-none border border-rose-100 dark:border-gray-700 text-rose-600 text-sm font-bold mb-8 hover:scale-105 transition-transform cursor-default"
          >
            <Star className="w-4 h-4 mr-2 fill-current" />
            #1 Rated Care Service in 2024
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight"
          >
            Professional Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 animate-gradient-x">
              For Your Loved Ones
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light"
          >
            Experience peace of mind with our certified professional caregivers.
            From baby sitting to elderly care, we are here to support your
            family every step of the way.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto px-10 py-5 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center group"
            >
              Find a Caregiver
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/register"
              className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold hover:border-rose-200 hover:bg-rose-50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12 text-gray-500 text-sm font-bold tracking-wide uppercase"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span>Background Checked</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <span>Insured & Bonded</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;
