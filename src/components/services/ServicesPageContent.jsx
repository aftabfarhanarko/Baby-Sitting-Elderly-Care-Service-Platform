"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
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
} from "lucide-react";

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

const ServicesPageContent = () => {
  const services = [
    {
      id: 1,
      name: "Baby Care",
      icon: Baby,
      description:
        "Professional babysitting for your little ones. Safe, fun, and educational activities included.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
      priceVal: 15,
      features: [
        "Certified Babysitters",
        "Educational Activities",
        "Meal Preparation",
        "Bedtime Routines",
      ],
    },
    {
      id: 2,
      name: "Elderly Care",
      icon: Users,
      description:
        "Compassionate companionship and assistance with daily activities for your seniors.",
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
      priceVal: 20,
      features: [
        "Medication Reminders",
        "Mobility Assistance",
        "Companionship",
        "Light Housekeeping",
      ],
    },
    {
      id: 3,
      name: "Sick Care",
      icon: Stethoscope,
      description:
        "Dedicated support for recovery and health monitoring by certified nurses.",
      color: "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400",
      priceVal: 25,
      features: [
        "Certified Nurses",
        "Vitals Monitoring",
        "Medication Administration",
        "Post-Op Care",
      ],
    },
    {
      id: 4,
      name: "Special Needs Care",
      icon: Accessibility,
      description:
        "Personalized care for individuals with special needs, ensuring safety and comfort.",
      color:
        "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
      priceVal: 30,
      features: [
        "Behavioral Support",
        "Therapy Assistance",
        "Daily Routine Management",
        "Mobility Support",
      ],
    },
    {
      id: 5,
      name: "Postpartum Care",
      icon: HeartHandshake,
      description:
        "Support and care for new mothers during postpartum recovery and newborn care.",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
      priceVal: 28,
      features: [
        "Newborn Care",
        "Mother’s Health Monitoring",
        "Feeding Assistance",
        "Emotional Support",
      ],
    },
    {
      id: 6,
      name: "Physical Therapy Assistance",
      icon: Activity,
      description:
        "Assisting patients with prescribed physical therapy exercises at home.",
      color:
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
      priceVal: 35,
      features: [
        "Exercise Supervision",
        "Mobility Improvement",
        "Pain Management",
        "Progress Tracking",
      ],
    },
    {
      id: 7,
      name: "Dementia Care",
      icon: Brain,
      description:
        "Specialized care for individuals with dementia to ensure safety and comfort.",
      color:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
      priceVal: 32,
      features: [
        "Memory Care",
        "Safety Supervision",
        "Companionship",
        "Cognitive Stimulation",
      ],
    },
    {
      id: 8,
      name: "Hospice Care",
      icon: Heart,
      description:
        "Compassionate end-of-life care focused on comfort and dignity.",
      color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
      priceVal: 40,
      features: [
        "Pain Management",
        "Emotional Support",
        "Family Assistance",
        "Comfort Care",
      ],
    },
    {
      id: 9,
      name: "Meal Preparation",
      icon: Utensils,
      description:
        "Healthy and nutritious meal preparation tailored to dietary needs.",
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
      priceVal: 18,
      features: [
        "Customized Menus",
        "Special Diets",
        "Fresh Ingredients",
        "Allergy Management",
      ],
    },
    {
      id: 10,
      name: "Mobility Assistance",
      icon: Accessibility,
      description:
        "Helping clients move safely within their homes and outdoors.",
      color: "bg-teal-100 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
      priceVal: 22,
      features: [
        "Transfer Assistance",
        "Walking Support",
        "Wheelchair Assistance",
        "Safety Monitoring",
      ],
    },
    {
      id: 11,
      name: "Medication Management",
      icon: Pill,
      description:
        "Ensuring timely and accurate medication administration and reminders.",
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
      priceVal: 20,
      features: [
        "Medication Reminders",
        "Dosage Monitoring",
        "Prescription Tracking",
        "Refill Coordination",
      ],
    },
    {
      id: 12,
      name: "Respite Care",
      icon: Pause,
      description:
        "Temporary relief care for primary caregivers to rest and recharge.",
      color: "bg-lime-100 text-lime-600 dark:bg-lime-900/20 dark:text-lime-400",
      priceVal: 25,
      features: [
        "Short-term Care",
        "Companionship",
        "Household Assistance",
        "Emergency Support",
      ],
    },
    {
      id: 13,
      name: "Child Development Support",
      icon: Puzzle,
      description:
        "Activities and guidance to support early childhood development milestones.",
      color:
        "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/20 dark:text-fuchsia-400",
      priceVal: 17,
      features: [
        "Learning Activities",
        "Speech Development",
        "Motor Skills Enhancement",
        "Social Interaction",
      ],
    },
    {
      id: 14,
      name: "Post-Surgery Care",
      icon: Bandage,
      description:
        "Assistance and monitoring during recovery after surgery at home.",
      color:
        "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
      priceVal: 30,
      features: [
        "Wound Care",
        "Medication Assistance",
        "Mobility Support",
        "Physical Therapy",
      ],
    },
    {
      id: 15,
      name: "Autism Support",
      icon: Infinity,
      description:
        "Specialized care and activities tailored for individuals on the autism spectrum.",
      color:
        "bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400",
      priceVal: 28,
      features: [
        "Behavioral Therapy",
        "Social Skills Training",
        "Routine Management",
        "Sensory Activities",
      ],
    },
    {
      id: 16,
      name: "Transportation Assistance",
      icon: Car,
      description:
        "Safe transport to medical appointments, errands, and social activities.",
      color: "bg-sky-100 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400",
      priceVal: 18,
      features: [
        "Door-to-door Service",
        "Wheelchair Accessible Vehicles",
        "Companion Assistance",
        "Flexible Scheduling",
      ],
    },
    {
      id: 17,
      name: "Household Assistance",
      icon: Home,
      description:
        "Light housekeeping and errands to maintain a clean and safe home environment.",
      color: "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400",
      priceVal: 15,
      features: ["Cleaning", "Laundry", "Grocery Shopping", "Pet Care"],
    },
    {
      id: 18,
      name: "Night Care",
      icon: Moon,
      description:
        "Overnight supervision and support for safety and comfort during the night.",
      color: "bg-blue-200 text-blue-700 dark:bg-blue-800/30 dark:text-blue-500",
      priceVal: 25,
      features: [
        "Medication Reminders",
        "Emergency Response",
        "Safety Monitoring",
        "Comfort Assistance",
      ],
    },
    {
      id: 19,
      name: "Mental Health Support",
      icon: BrainCircuit,
      description:
        "Emotional support and assistance with daily mental health management.",
      color: "bg-pink-200 text-pink-700 dark:bg-pink-800/30 dark:text-pink-500",
      priceVal: 30,
      features: [
        "Counseling Referrals",
        "Stress Reduction Techniques",
        "Crisis Support",
        "Daily Check-ins",
      ],
    },
    {
      id: 20,
      name: "Speech Therapy Assistance",
      icon: Mic,
      description:
        "Support in speech and communication exercises guided by therapists.",
      color:
        "bg-green-200 text-green-700 dark:bg-green-800/30 dark:text-green-500",
      priceVal: 33,
      features: [
        "Speech Exercises",
        "Communication Aids",
        "Progress Tracking",
        "Family Training",
      ],
    },
    {
      id: 21,
      name: "Learning Disability Support",
      icon: Book,
      description:
        "Tailored assistance for children and adults with learning disabilities.",
      color:
        "bg-yellow-200 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-500",
      priceVal: 28,
      features: [
        "Homework Help",
        "Skill Development",
        "Routine Planning",
        "Motivational Support",
      ],
    },
    {
      id: 22,
      name: "Diabetic Care",
      icon: Droplet,
      description:
        "Specialized care and monitoring for individuals with diabetes.",
      color: "bg-red-200 text-red-700 dark:bg-red-800/30 dark:text-red-500",
      priceVal: 35,
      features: [
        "Blood Sugar Monitoring",
        "Diet Management",
        "Medication Assistance",
        "Emergency Support",
      ],
    },
    {
      id: 23,
      name: "In-Home Therapy",
      icon: Armchair,
      description:
        "Professional therapeutic sessions conducted in the comfort of your home.",
      color:
        "bg-indigo-200 text-indigo-700 dark:bg-indigo-800/30 dark:text-indigo-500",
      priceVal: 45,
      features: [
        "Counseling",
        "Cognitive Behavioral Therapy",
        "Stress Management",
        "Family Therapy",
      ],
    },
    {
      id: 24,
      name: "Post-Stroke Care",
      icon: HeartPulse,
      description: "Support and rehabilitation for stroke survivors at home.",
      color: "bg-teal-200 text-teal-700 dark:bg-teal-800/30 dark:text-teal-500",
      priceVal: 38,
      features: [
        "Physical Therapy",
        "Speech Therapy",
        "Medication Management",
        "Daily Assistance",
      ],
    },
    {
      id: 25,
      name: "Wound Care",
      icon: Bandage,
      description:
        "Professional wound cleaning and dressing to promote healing.",
      color: "bg-cyan-200 text-cyan-700 dark:bg-cyan-800/30 dark:text-cyan-500",
      priceVal: 28,
      features: [
        "Wound Cleaning",
        "Dressing Changes",
        "Infection Prevention",
        "Pain Management",
      ],
    },
    {
      id: 26,
      name: "Child Transportation",
      icon: Bus,
      description:
        "Safe and reliable transport service for children to and from school or activities.",
      color: "bg-lime-200 text-lime-700 dark:bg-lime-800/30 dark:text-lime-500",
      priceVal: 20,
      features: [
        "Background Checked Drivers",
        "Safe Routes",
        "GPS Tracking",
        "On-Time Service",
      ],
    },
    {
      id: 27,
      name: "Daycare Support",
      icon: Building,
      description:
        "Additional assistance and supervision for daycare centers or group care.",
      color:
        "bg-fuchsia-200 text-fuchsia-700 dark:bg-fuchsia-800/30 dark:text-fuchsia-500",
      priceVal: 18,
      features: [
        "Activity Supervision",
        "Meal Assistance",
        "Naptime Support",
        "Group Engagement",
      ],
    },
    {
      id: 28,
      name: "Behavioral Therapy",
      icon: Waves,
      description:
        "Therapeutic services focusing on behavior modification and development.",
      color:
        "bg-amber-200 text-amber-700 dark:bg-amber-800/30 dark:text-amber-500",
      priceVal: 40,
      features: [
        "Behavior Analysis",
        "Individualized Plans",
        "Progress Tracking",
        "Family Support",
      ],
    },
    {
      id: 29,
      name: "Emergency Care",
      icon: Ambulance,
      description:
        "Immediate care and response for urgent health needs at home.",
      color: "bg-red-300 text-red-800 dark:bg-red-900/40 dark:text-red-600",
      priceVal: 50,
      features: [
        "Rapid Response",
        "First Aid",
        "Emergency Transport",
        "24/7 Availability",
      ],
    },
    {
      id: 30,
      name: "Pet Care",
      icon: PawPrint,
      description:
        "Compassionate care and supervision for your pets while you’re busy or away.",
      color:
        "bg-green-300 text-green-800 dark:bg-green-900/40 dark:text-green-600",
      priceVal: 12,
      features: ["Feeding", "Walking", "Grooming", "Medication Assistance"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect care plan for your family. All our services come
            with verified professionals and 24/7 support.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $
                  <CountUp end={service.priceVal} duration={2} separator="," />
                </span>
                <span className="text-gray-500 dark:text-gray-400">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Details
                </Link>
                <Link
                  href={`/booking/${service.id}`}
                  className="block w-full py-3 px-4 bg-rose-600 text-white rounded-xl font-semibold text-center hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200 dark:shadow-rose-900/30 flex items-center justify-center group-hover:gap-2"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 hidden group-hover:block transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do you vet your caregivers?",
                a: "All our caregivers undergo rigorous background checks, including criminal records, reference verification, and skill assessments.",
              },
              {
                q: "What if I need to cancel my booking?",
                a: "We offer free cancellation up to 24 hours before the scheduled service. Late cancellations may incur a small fee.",
              },
              {
                q: "Are your services insured?",
                a: "Yes, all our services are fully insured and bonded for your peace of mind and protection.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPageContent;
