import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./RotatingText.css";

const RotatingText = forwardRef((props, ref) => {
  const {
    texts = [],
    mainClassName = "",
    staggerFrom = "first",
    initial = { y: "100%" },
    animate = { y: 0 },
    exit = { y: "-100%" },
    staggerDuration = 0.025,
    transition = { type: "spring", damping: 30, stiffness: 400 },
    rotationInterval = 3000,
    ...rest
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  if (texts.length === 0) return null;

  const currentText = texts[currentIndex];
  const characters = currentText.split("");

  return (
    <div ref={ref} className={`rotating-text ${mainClassName}`} {...rest}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ...transition,
                delay: staggerFrom === "last" 
                  ? (characters.length - 1 - i) * staggerDuration
                  : i * staggerDuration,
              }}
              className="character"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;
