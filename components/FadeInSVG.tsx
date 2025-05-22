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
      style={{translateX: window.innerWidth > 768 ? 200 : 0}}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      width={window.innerWidth > 768 ? width : window.innerWidth + 50}
      height={height}
      viewBox={viewBox}
      className={`text-amber-100 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </motion.svg>
  );
};

export default FadeInSVG;
