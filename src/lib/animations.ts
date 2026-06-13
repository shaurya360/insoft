export const spring = {
  type: "spring",
  stiffness: 120,
  damping: 14,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: "easeOut", delay },
  }),
};

export const stagger = (staggerChildren = 0.08) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren },
  },
});

export const hoverPop = {
  scale: 1.03,
  y: -6,
  transition: { type: "spring", stiffness: 260, damping: 20 },
};
