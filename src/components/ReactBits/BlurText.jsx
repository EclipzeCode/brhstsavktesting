import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keyframes = [from];
  for (let i = 1; i <= steps; i++) {
    keyframes.push(from - (from / steps) * i);
  }
  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 0,
  animateBy = "words",
  direction = "top",
  threshold = 0.5,
  rootMargin = "0px",
  className = "",
  stepDuration = 0.35,
  onAnimationComplete = () => {},
  ...rest
}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  const getInitialY = () => {
    switch (direction) {
      case "top": return -50;
      case "bottom": return 50;
      default: return 0;
    }
  };

  const blurKeyframes = buildKeyframes(10, 5);
  const yKeyframes = buildKeyframes(getInitialY(), 5);

  return (
    <div ref={ref} className={`blur-text ${className}`} {...rest}>
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ 
            filter: `blur(${blurKeyframes[0]}px)`,
            y: yKeyframes[0],
            opacity: 0
          }}
          animate={isInView ? {
            filter: blurKeyframes.map(blur => `blur(${blur}px)`),
            y: yKeyframes,
            opacity: 1
          } : {}}
          transition={{
            duration: stepDuration * blurKeyframes.length,
            delay: delay + (index * 0.1),
            ease: "easeOut"
          }}
          onAnimationComplete={() => {
            if (index === segments.length - 1) {
              onAnimationComplete();
            }
          }}
          style={{ display: "inline-block", marginRight: animateBy === "words" ? "0.25em" : "0" }}
        >
          {segment}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
