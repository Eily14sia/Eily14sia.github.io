export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
