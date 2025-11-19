"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const name = "DEEPAK VERMA";
const subtext = "Full Stack. AI Engineer. Problem Solver.";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Name with Reveal Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter text-white"
              style={{
                textShadow: "0 0 40px rgba(0, 217, 255, 0.3)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light tracking-wide">
            {subtext}
          </p>
        </motion.div>

        {/* LeetCode Knight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" as const }}
          className="flex justify-center md:justify-end items-center"
        >
          <motion.div
            className="relative group"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/20 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left px-2 sm:px-3">
                  <div className="text-sm sm:text-base text-white/60 mb-1">LeetCode</div>
                  <div className="text-2xl sm:text-3xl font-bold font-heading bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Knight
                  </div>
                  <div className="text-lg sm:text-xl text-cyan-400 font-semibold mt-2 sm:mt-3 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                    Rating: 1861
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full"
        >
          {[
            { label: "Problems Solved", value: "500+" },
            { label: "Major Projects", value: "4" },
            { label: "LeetCode Rating", value: "1861" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className="text-center p-6 sm:p-8 md:p-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

