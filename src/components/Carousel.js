import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

const DEFAULT_ITEMS = [
  {
    title: "Weekly Meeting",
    description: "Regular chapter meeting with updates and planning",
    id: 1,
    icon: "📅",
  },
  {
    title: "State Competition",
    description: "Annual New Jersey TSA State Conference",
    id: 2,
    icon: "🏆",
  },
  {
    title: "Project Workshop",
    description: "Hands-on workshop for competition prep",
    id: 3,
    icon: "🔧",
  },
];

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, pauseOnHover]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{ width: `${baseWidth}px` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-content">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0.3,
              scale: index === currentIndex ? 1 : 0.8 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="carousel-item-header">
              <span className="carousel-icon">{item.icon}</span>
            </div>
            <div className="carousel-item-content">
              <h3 className="carousel-item-title">{item.title}</h3>
              <p className="carousel-item-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
