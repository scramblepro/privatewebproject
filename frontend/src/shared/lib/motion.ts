import { useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

export const MOTION_EASE = [0.25, 0.1, 0.25, 1] as const;

export const motionTransition: Transition = {
  duration: 0.45,
  ease: MOTION_EASE,
};

export const motionTransitionFast: Transition = {
  duration: 0.3,
  ease: MOTION_EASE,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const staticVariants: Variants = {
  hidden: {},
  visible: {},
};

export const viewportOnce = {
  once: true,
  margin: "-60px" as const,
};

export const useMotionSafe = () => {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion: Boolean(prefersReducedMotion),
    fadeInUp: prefersReducedMotion ? staticVariants : fadeInUp,
    fadeIn: prefersReducedMotion ? staticVariants : fadeIn,
    staggerContainer: prefersReducedMotion ? staticVariants : staggerContainer,
    staggerGrid: prefersReducedMotion ? staticVariants : staggerGrid,
    transition: prefersReducedMotion ? { duration: 0 } : motionTransition,
    transitionFast: prefersReducedMotion ? { duration: 0 } : motionTransitionFast,
  };
};
