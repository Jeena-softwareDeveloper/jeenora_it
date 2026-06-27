import type { Variants, Transition } from "framer-motion";

// Premium easing curve (ease-out-expo-ish) used across the site for a smooth, high-end feel.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.6,
};

// Viewport config so scroll-reveals trigger a little before the element is fully visible.
export const viewportOnce = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

// Use on a parent <motion.div> to stagger the entrance of children that use `fadeUp`.
export const staggerContainer = (stagger = 0.1, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Reusable hover lift for cards — subtle, springy, GPU-friendly.
export const hoverLift = {
  y: -6,
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
};
