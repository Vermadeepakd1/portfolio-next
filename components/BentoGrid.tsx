"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Circle } from "lucide-react";

const techStack = [
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Firebase",
  "TensorFlow",
  "Scikit-learn",
  "Next.js",
];

export default function BentoGrid() {
  const isAvailable = true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32 md:py-40 mt-32 sm:mt-40 md:mt-48 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading mb-10 sm:mb-12 md:mb-16 text-white tracking-tight text-center"
        >
          About
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 auto-rows-fr"
        >
          {/* Bio - Large */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 p-8 sm:p-10 md:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col text-center"
          >
            <h3 className="text-2xl font-bold font-heading mb-3 sm:mb-4 text-white">
              Deepak Verma
            </h3>
            <p className="text-white/70 leading-relaxed mb-3 sm:mb-4">
              B.Tech CSE Student at IIITDM Kurnool (2027)
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              Architecting Scalable Systems & Intelligent Algorithms. Passionate
              about building high-performance applications and solving complex
              problems through code. Specializing in full-stack development,
              machine learning, and competitive programming.
            </p>
          </motion.div>

          {/* Tech Stack Marquee - Medium */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col text-center"
          >
            <h3 className="text-xl font-bold font-heading mb-4 sm:mb-5 text-white">
              Tech Stack
            </h3>
            <div className="relative">
              <div className="flex animate-scroll gap-8">
                {[...techStack, ...techStack].map((tech, index) => (
                  <span
                    key={index}
                    className="text-white/60 whitespace-nowrap text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* University - Small */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-3 sm:gap-4 text-center"
          >
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
            <div>
              <div className="text-sm text-white/60 mb-1">University</div>
              <div className="text-base font-semibold text-white">
                IIITDM Kurnool
              </div>
            </div>
          </motion.div>

          {/* Location - Small */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-3 sm:gap-4 text-center"
          >
            <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
            <div>
              <div className="text-sm text-white/60 mb-1">Location</div>
              <div className="text-base font-semibold text-white">India</div>
            </div>
          </motion.div>

          {/* Availability - Medium */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col text-center items-center"
          >
            <h3 className="text-xl font-bold font-heading mb-3 sm:mb-4 text-white">
              Availability
            </h3>
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Circle
                  className={`w-4 h-4 ${isAvailable ? "text-green-400 fill-green-400" : "text-gray-400"}`}
                />
              </motion.div>
              <div className="text-white/80">
                Open to Summer 2026 Internships
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

