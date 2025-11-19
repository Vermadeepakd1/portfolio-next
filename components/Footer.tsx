"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
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
    <footer id="contact" className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 md:py-40 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full text-center space-y-24 sm:space-y-32 md:space-y-40 flex flex-col items-center"
        >
          {/* Main CTA */}
          <motion.div 
            variants={itemVariants} 
            className="w-full flex flex-col items-center space-y-12 sm:space-y-16 md:space-y-20"
          >
            <motion.h2 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-heading text-white tracking-tighter text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              Let's Build
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Something
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto px-4 leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to collaborate on your next big project? Let's connect and
              create something amazing together.
            </motion.p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-16 flex-wrap"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <MagneticButton
                href="https://linkedin.com/in/deepak-verma"
                variant="primary"
                className="text-xl sm:text-2xl px-16 py-8 sm:px-20 sm:py-10 md:px-24 md:py-12 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow w-full sm:w-auto flex items-center justify-center"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 mr-3 inline-block" />
                LinkedIn
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <MagneticButton
                href="https://github.com/deepak-verma"
                variant="secondary"
                className="text-xl sm:text-2xl px-16 py-8 sm:px-20 sm:py-10 md:px-24 md:py-12 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow w-full sm:w-auto flex items-center justify-center"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7 mr-3 inline-block" />
                GitHub
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <MagneticButton
                href="mailto:deepak@example.com"
                variant="outline"
                className="text-xl sm:text-2xl px-16 py-8 sm:px-20 sm:py-10 md:px-24 md:py-12 hover:border-cyan-400/50 transition-colors w-full sm:w-auto flex items-center justify-center"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 mr-3 inline-block" />
                Email
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-16 sm:pt-20 md:pt-24 border-t border-white/10 mt-16 sm:mt-20 md:mt-24 flex items-center justify-center"
          >
            <motion.p 
              className="text-white/50 text-base sm:text-lg text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              © {new Date().getFullYear()} Deepak Verma. Built with{" "}
              <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-purple-400">Framer Motion</span> &{" "}
              <span className="text-cyan-400">Tailwind CSS</span>.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 pointer-events-none -z-10" />
    </footer>
  );
}

