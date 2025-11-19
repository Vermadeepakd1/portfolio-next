"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "XGBoost Movie Recommender",
    description:
      "Research replication project implementing XGBoost for movie recommendations. Achieved RMSE of 0.9075 using advanced machine learning techniques.",
    tech: ["Python", "Scikit-learn", "Streamlit", "XGBoost"],
    color: "from-purple-500 to-pink-500",
    image: "/xgboost_project.png",
  },
  {
    title: "High-Concurrency Booking Backend",
    description:
      "Scalable backend system handling 1000+ concurrent requests with zero race conditions. Built with ACID transactions and optimized database queries.",
    tech: ["Node.js", "PostgreSQL", "Express", "Redis"],
    color: "from-cyan-500 to-blue-500",
    image: "/movie_ticket_booking.png",
  },
  {
    title: "Hostel Management Platform",
    description:
      "Full-stack platform serving 500+ users with 25+ RESTful APIs. Complete MERN stack implementation with robust authentication and authorization.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    color: "from-green-500 to-emerald-500",
    image: "/hostel_management_system.png",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Low-latency real-time messaging application with sub-200ms message delivery. Built with modern web technologies for optimal performance.",
    tech: ["React", "Firebase", "WebSockets", "TypeScript"],
    color: "from-orange-500 to-red-500",
    image: "/chit_chat_app.png",
  },
];

export default function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 md:py-40 mb-32 sm:mb-40 md:mb-48 mt-80 sm:mt-64 md:mt-80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-white tracking-tight text-center"
        >
          Projects
        </motion.h2>
      </div>

      <div ref={containerRef} className="relative">
        {projects.map((project, index) => {
          const start = index / projects.length;
          const end = (index + 1) / projects.length;
          
          const y = useTransform(
            scrollYProgress,
            [start, end],
            ["0%", "-50%"]
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0]
          );

          return (
            <div
              key={index}
              className="sticky top-0 h-screen flex items-center justify-center w-full"
            >
              <motion.div
                style={{ opacity }}
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start lg:items-center">
                  {/* Left: Project Info */}
                  <motion.div
                    style={{ y }}
                    className="space-y-5 sm:space-y-6 md:space-y-7 flex flex-col"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="text-sm text-white/60 mb-2 sm:mb-3">
                        Project {index + 1} / {projects.length}
                      </div>
                      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-3 sm:mb-4 md:mb-5 tracking-tight">
                        {project.title}
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg sm:text-xl text-white/70 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-wrap gap-2 sm:gap-3"
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-wrap gap-3 sm:gap-4"
                    >
                      <button className="flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </button>
                      <button className="flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* Right: Project Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative group"
                  >
                    <div
                      className={`relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl bg-gradient-to-br ${project.color} p-1 overflow-hidden`}
                    >
                      <div className="w-full h-full rounded-2xl bg-black/90 backdrop-blur-sm border border-white/10 overflow-hidden relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          priority={index === 0}
                        />
                        {/* Gradient overlay for better text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

