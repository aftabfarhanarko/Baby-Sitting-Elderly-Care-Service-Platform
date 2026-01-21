"use client";
import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Heart,
  Users,
} from "lucide-react";

const FullAboutPages = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-semibold rounded-full text-sm mb-2">
                  Trusted Childcare Services
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  We Provide The Best <br />
                  <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    Care For Your Little Ones
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  At BabySit Pro, we understand that your children are your
                  world. We connect you with experienced, vetted, and loving
                  babysitters who ensure your child is safe, happy, and learning
                  while you're away.
                </p>
              </div>

              <ul className="space-y-5">
                {[
                  "100% Verified & Background Checked Sitters",
                  "Certified in CPR & First Aid",
                  "Creative Play & Educational Activities",
                  "Flexible Hourly & Overnight Care",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 text-lg font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center"
                >
                  Find a Sitter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-lg border border-gray-200 dark:border-gray-700 hover:border-rose-500 dark:hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-rose-100 to-purple-100 dark:from-rose-900/20 dark:to-purple-900/20 rounded-3xl -z-10 transform translate-x-4 translate-y-4"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
                <img
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy child with babysitter"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden"
                        >
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 20}`}
                            alt="User"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        2k+ Families
                      </p>
                      <p className="text-xs text-rose-500 font-medium">
                        Trust our sitters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5k+", label: "Happy Families", icon: Users },
              { number: "2k+", label: "Expert Sitters", icon: Heart },
              { number: "98%", label: "Satisfaction Rate", icon: CheckCircle },
              { number: "24/7", label: "Support Available", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Parents Trust Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We go above and beyond to ensure your peace of mind and your
              child's happiness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description:
                  "Every sitter undergoes a rigorous 7-point background check including criminal records and reference checks.",
                icon: Shield,
              },
              {
                title: "Reliable Service",
                description:
                  "Our smart matching system ensures you always have backup care available when you need it most.",
                icon: Clock,
              },
              {
                title: "Qualified Care",
                description:
                  "From CPR certification to early childhood education, our sitters are qualified professionals.",
                icon: Heart,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-rose-200 dark:hover:border-rose-800 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullAboutPages;
