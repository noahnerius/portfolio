import { motion, type MotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { type HTMLAttributes, forwardRef, type ReactNode } from 'react';

// Helper to extract only safe props for motion components
function getMotionProps(props: HTMLAttributes<HTMLDivElement>): MotionProps {
  const {
    onAnimationStart: _onAnimationStart,
    onAnimationEnd: _onAnimationEnd,
    onAnimationIteration: _onAnimationIteration,
    ...safeProps
  } = props;
  return safeProps as MotionProps;
}

// Shared easing from design system
const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeSpring = [0.34, 1.56, 0.64, 1] as const;

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  asChild?: boolean;
  children: ReactNode;
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: easeOutExpo,
    },
  }),
};

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, asChild = false, className = '', ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      );
    }

    const motionProps: MotionProps = {
      initial: 'hidden',
      animate: 'visible',
      variants: fadeInVariants,
      custom: delay,
      ...getMotionProps(props),
    };

    if (asChild) {
      return (
        <motion.div ref={ref} className={className} {...motionProps}>
          {children}
        </motion.div>
      );
    }

    return (
      <motion.div ref={ref} className={className} {...motionProps}>
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = 'FadeIn';

interface SlideUpProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  distance?: number;
  asChild?: boolean;
  children: ReactNode;
}

export const SlideUp = forwardRef<HTMLDivElement, SlideUpProps>(
  (
    { children, delay = 0, distance = 30, asChild: _asChild = false, className = '', ...props },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      );
    }

    const motionProps: MotionProps = {
      initial: 'hidden',
      animate: 'visible',
      variants: {
        hidden: { opacity: 0, y: distance, scale: 0.98 },
        visible: (customDelay: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: customDelay,
            ease: easeOutExpo,
          },
        }),
      },
      custom: delay,
      ...getMotionProps(props),
    };

    return (
      <motion.div ref={ref} className={className} {...motionProps}>
        {children}
      </motion.div>
    );
  }
);

SlideUp.displayName = 'SlideUp';

interface StaggerContainerProps extends HTMLAttributes<HTMLDivElement> {
  staggerDelay?: number;
  staggerDirection?: 'normal' | 'reverse';
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  (
    { children, staggerDelay = 0.1, staggerDirection = 'normal', className = '', ...props },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      );
    }

    const motionProps: MotionProps = {
      initial: 'hidden',
      animate: 'visible',
      variants: {
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: staggerDirection === 'reverse' ? -staggerDelay : staggerDelay,
          },
        },
      },
      ...getMotionProps(props),
    };

    return (
      <motion.div ref={ref} className={className} {...motionProps}>
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = 'StaggerContainer';

// Improved TiltCard using motion values for smoother animation
interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  scale?: number;
  maxTilt?: number;
}

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
  ({ children, scale = 1.03, maxTilt = 6, className = '', ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div
          ref={ref}
          className={`rounded-xl border border-border bg-surface transition-all duration-normal hover:border-border-strong hover:shadow-xl ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={`rounded-xl border border-border bg-surface ${className}`}
        style={{ transformStyle: 'preserve-3d', transformPerspective: 1000 }}
        whileHover={{
          scale,
          rotateX: 0,
          rotateY: 0,
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.4)',
          transition: { duration: 0.4, ease: easeOutExpo },
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          e.currentTarget.style.transform = `
            perspective(1000px)
            rotateX(${-y * maxTilt}deg)
            rotateY(${x * maxTilt}deg)
            scale(${scale})
            translateZ(20px)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
          e.currentTarget.style.transform =
            'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(20px)';
        }}
        {...getMotionProps(props)}
      >
        <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
      </motion.div>
    );
  }
);

TiltCard.displayName = 'TiltCard';

// New: Subtle hover lift for cards without 3D tilt
interface HoverLiftProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  lift?: number;
}

export const HoverLift = forwardRef<HTMLDivElement, HoverLiftProps>(
  ({ children, lift = 4, className = '', ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div
          ref={ref}
          className={`rounded-xl border border-border bg-surface transition-all duration-normal hover:-translate-y-1 hover:border-border-strong hover:shadow-xl ${className}`}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={`rounded-xl border border-border bg-surface ${className}`}
        whileHover={{
          y: -lift,
          boxShadow: '0 20px 40px -12px rgb(0 0 0 / 0.3)',
          transition: { duration: 0.3, ease: easeOutExpo },
        }}
        {...getMotionProps(props)}
      >
        {children}
      </motion.div>
    );
  }
);

HoverLift.displayName = 'HoverLift';

// New: Subtle scale on tap/click for buttons and interactive elements
interface PressScaleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  scale?: number;
}

export const PressScale = forwardRef<HTMLDivElement, PressScaleProps>(
  ({ children, scale = 0.98, className = '', ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={className}
        whileTap={{ scale, transition: { duration: 0.1, ease: easeSpring } }}
        {...getMotionProps(props)}
      >
        {children}
      </motion.div>
    );
  }
);

PressScale.displayName = 'PressScale';
