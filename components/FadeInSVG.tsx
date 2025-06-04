import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, useState, useEffect } from 'react';

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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.svg
      ref={ref}
      style={{translateX: windowWidth > 768 ? 200 : 0}}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      width={windowWidth > 768 ? width : windowWidth + 50}
      height={height}
      viewBox={viewBox}
      className={`text-orange-100 dark:text-cyan-900 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </motion.svg>
  );
};

export default FadeInSVG;
