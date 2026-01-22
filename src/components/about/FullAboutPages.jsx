"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Shield,
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Baby,
  Smile,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function FullAboutPages() {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { number: "15K+", label: "Happy Families", icon: Smile },
    { number: "4.9", label: "Average Rating", icon: Star },
    { number: "100%", label: "Verified Sitters", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const values = [
    {
      title: "Safety First",
      description:
        "Every caregiver undergoes our rigorous 7-step background check and safety training.",
      icon: Shield,
      color: "from-blue-400 to-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Loving Care",
      description:
        "We don't just watch kids; we engage, teach, and nurture them with genuine affection.",
      icon: Heart,
      color: "from-rose-400 to-rose-600",
      bg: "bg-rose-50 dark:bg-rose-900/20",
    },
    {
      title: "Reliability",
      description:
        "Count on us when you need us. Real-time updates and guaranteed backup support.",
      icon: CheckCircle,
      color: "from-emerald-400 to-emerald-600",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
  ];

  const services = [
    {
      title: "Occasional Sitting",
      desc: "Perfect for date nights, appointments, or running errands.",
      icon: Star,
    },
    {
      title: "Regular Nanny",
      desc: "Consistent care schedule tailored to your family's routine.",
      icon: Users,
    },
    {
      title: "Newborn Care",
      desc: "Specialized support for infants and new parents.",
      icon: Baby,
    },
    {
      title: "Event Care",
      desc: "Professional supervision for weddings and parties.",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/50 via-transparent to-transparent dark:from-rose-900/20" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-10 w-64 h-64 bg-rose-300 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 font-medium text-sm mb-6"
              >
                <Sparkles size={16} />
                <span>#1 Trusted Babysitting Platform</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Premium Care for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                  Little Miracles
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Experience peace of mind with our elite network of vetted
                professionals. We connect families with exceptional caregivers
                who turn ordinary days into magical adventures.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-rose-200 dark:shadow-rose-900/20 hover:shadow-xl flex items-center justify-center gap-2 group">
                  Find a Sitter
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-rose-200 dark:hover:border-rose-800 rounded-full font-semibold transition-all hover:bg-rose-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  See Who's Online
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center lg:justify-start gap-4"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 20}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Trusted by 10,000+ parents
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy baby with caregiver"
                  className="w-full h-[600px] object-cover"
                />

                {/* Floating Card 1 */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-10 left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs"
                >
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      100% Verified
                    </p>
                    <p className="text-xs text-gray-500">Background Checked</p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-rose-600 dark:bg-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3 text-rose-200">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-1">{stat.number}</h3>
                <p className="text-rose-100 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              More Than Just Babysitting
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We're building a community of trust, where parents can breathe
              easy and children can thrive in a safe, engaging environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl ${value.bg} border border-transparent hover:border-rose-100 dark:hover:border-rose-900 transition-all duration-300 group`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Tailored Care for Every Family
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Every family is unique. That's why we offer flexible care
                options designed to fit your specific needs and schedule.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${activeTab === index ? "bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500" : "hover:bg-gray-50 dark:hover:bg-gray-900"}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div
                      className={`p-2 rounded-lg ${activeTab === index ? "bg-rose-500 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-500"}`}
                    >
                      <service.icon size={20} />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${activeTab === index ? "text-rose-900 dark:text-rose-100" : "text-gray-700 dark:text-gray-300"}`}
                      >
                        {service.title}
                      </h4>
                      {activeTab === index && (
                        <p className="text-sm text-rose-700 dark:text-rose-300 mt-1">
                          {service.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
                >
                  <img
                    src={services[activeTab].image}
                    alt={services[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {services[activeTab].title}
                      </h3>
                      <p className="text-gray-200">
                        {services[activeTab].desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative dots */}
              <div className="absolute -z-10 top-10 -right-10 grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-rose-200 dark:bg-rose-800"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
