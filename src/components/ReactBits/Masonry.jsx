import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./Masonry.css";

const Masonry = ({
  items = [],
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 1.05,
  blurToFocus = false,
  colorShiftOnHover = false,
  className = "",
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const arrangeItems = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = container.querySelectorAll('.masonry-item');
    const gap = 20;
    const columnWidth = 300;
    const containerWidth = container.offsetWidth;
    const numColumns = Math.floor(containerWidth / (columnWidth + gap));
    const columnHeights = new Array(numColumns).fill(0);

    items.forEach((item, index) => {
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const x = shortestColumnIndex * (columnWidth + gap);
      const y = columnHeights[shortestColumnIndex];

      gsap.set(item, {
        position: 'absolute',
        left: x,
        top: y,
        width: columnWidth,
      });

      columnHeights[shortestColumnIndex] += item.offsetHeight + gap;
    });

    const maxHeight = Math.max(...columnHeights);
    gsap.set(container, { height: maxHeight });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      arrangeItems();
      
      const items = containerRef.current?.querySelectorAll('.masonry-item');
      if (items) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: animateFrom === 'bottom' ? 50 : animateFrom === 'top' ? -50 : 0,
            x: animateFrom === 'left' ? -50 : animateFrom === 'right' ? 50 : 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration,
            ease,
            stagger,
          }
        );
      }
    }
  }, [isVisible, arrangeItems, animateFrom, duration, ease, stagger]);

  const handleMouseEnter = (e) => {
    if (scaleOnHover) {
      gsap.to(e.currentTarget, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (blurToFocus) {
      gsap.to(e.currentTarget.querySelector('img'), {
        filter: "blur(0px)",
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (e) => {
    if (scaleOnHover) {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (blurToFocus) {
      gsap.to(e.currentTarget.querySelector('img'), {
        filter: "blur(2px)",
        duration: 0.3,
      });
    }
  };

  return (
    <div ref={containerRef} className={`masonry-container ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="masonry-item"
          style={{ height: item.height || 'auto' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={colorShiftOnHover ? { filter: "hue-rotate(15deg)" } : {}}
        >
          <div className="masonry-item-content">
            <img src={item.img} alt={item.title} className="masonry-image" />
            <div className="masonry-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Masonry;
           