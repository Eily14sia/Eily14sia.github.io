"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import Typewriter from "@/components/sections/Typewriter";
import { fadeInUp } from "@/components/ui/animations";
import { useTheme } from "@/components/layout/ThemeProvider";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function HeroText() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="order-2 md:order-1"
    >
      <motion.p variants={fadeInUp} className="font-headline-md text-headline-md text-primary mb-2">
        Hi There! 👋
      </motion.p>

      <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-primary mb-4 leading-tight">
        I&apos;M{" "}
        <span className="text-primary uppercase">{profile.name}</span>
      </motion.h1>

      <motion.div variants={fadeInUp} className="h-12 flex items-center mb-8">
        <Typewriter />
      </motion.div>

      <motion.div variants={fadeInUp} className="flex gap-4">
        <a href="#projects" className="btn btn-primary px-8 py-3 rounded-lg font-bold">
          Explore Projects
        </a>
        <a
          href="#contact"
          className="btn btn-outline px-8 py-3 rounded-lg font-bold border-primary text-primary hover:bg-glow-amber"
        >
          Let&apos;s Talk
        </a>
      </motion.div>
    </motion.div>
  );
}

function HeroImage() {
  const { theme } = useTheme();
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const src = theme === "celestial-terminal-light" ? `${prefix}/home_light.png` : `${prefix}/home_dark.png`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative order-1 md:order-2"
    >
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
      <img
        src={src}
        alt="Developer illustration"
        className="relative z-10 w-full max-w-md mx-auto"
      />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-gutter max-w-container-max-width mx-auto pt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
