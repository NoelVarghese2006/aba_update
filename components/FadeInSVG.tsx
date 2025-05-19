import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type FadeInSVGProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  className?: string;
};

const FadeInSVG: React.FC<FadeInSVGProps> = ({
  children,
  width,
  height,
  viewBox,
  className,
}) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' });

  return (
    <motion.svg
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: .1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </motion.svg>
  );
};

export default FadeInSVG;
