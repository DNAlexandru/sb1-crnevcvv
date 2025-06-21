import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up';
  delay?: number;
  className?: string;
}

const variants = {
  'fade-in': { initial: { opacity: 0 }, animate: { opacity: 1 } },
  'slide-up': { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
};

const ScrollAnimation = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px' });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants[animation]}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
