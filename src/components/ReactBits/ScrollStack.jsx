import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ScrollStack.css";

const ScrollStackItem = ({ item, index, totalItems, stackOffset, scaleStep, opacityStep, scrollYProgress }) => {
  const isLast = index === totalItems - 1;
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isLast ? 0 : -stackOffset * (totalItems - index - 1)]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLast ? 1 : 1 - scaleStep * (totalItems - index - 1)]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLast ? 1 : 1 - opacityStep * (totalItems - index - 1)]
  );

  return (
    <motion.div
      className="scroll-stack-item"
      style={{
        y,
        scale,
        opacity,
        zIndex: totalItems - index,
      }}
    >
      {item.content}
    </motion.div>
  );
};

const ScrollStack = ({
  items = [],
  className = "",
  stackOffset = 40,
  scaleStep = 0.05,
  opacityStep = 0.1,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className={`scroll-stack ${className}`}>
      {items.map((item, index) => (
        <ScrollStackItem
          key={index}
          item={item}
          index={index}
          totalItems={items.length}
          stackOffset={stackOffset}
          scaleStep={scaleStep}
          opacityStep={opacityStep}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default ScrollStack;
