import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BlurText = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const defaultFrom = direction === 'top' ? -50 : 50;

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', margin: 0 }}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)', opacity: 0, y: defaultFrom }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: defaultFrom }
          }
          transition={{
            duration: 0.8,
            delay: index * (delay / 1000),
            ease: [0.11, 0, 0.5, 0],
          }}
          style={{ 
            display: 'inline-block', 
            marginRight: animateBy === 'words' ? '0.25em' : '0',
            whiteSpace: 'pre'
          }}
        >
          {element}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
