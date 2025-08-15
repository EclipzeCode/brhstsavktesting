import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './AnimatedList.css';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      onMouseEnter={() => onMouseEnter?.(index)}
      onClick={() => onClick?.(children, index)}
      className="animated-list-item"
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [],
  onItemSelect = () => {},
  showGradients = false,
  enableArrowNavigation = false,
  displayScrollbar = false,
  className = "",
  initialSelectedIndex = -1,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    if (!enableArrowNavigation) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        onItemSelect(items[selectedIndex], selectedIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableArrowNavigation, items, selectedIndex, onItemSelect]);

  return (
    <div className={`animated-list ${className} ${displayScrollbar ? 'show-scrollbar' : ''}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`list-item-wrapper ${
            selectedIndex === index ? 'selected' : ''
          } ${hoveredIndex === index ? 'hovered' : ''} ${
            showGradients ? 'gradient-bg' : ''
          }`}
        >
          <AnimatedItem
            delay={index * 0.1}
            index={index}
            onMouseEnter={setHoveredIndex}
            onClick={onItemSelect}
          >
            {item}
          </AnimatedItem>
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;
