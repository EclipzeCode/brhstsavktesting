import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";
import "./Carousel.css";

const DEFAULT_ITEMS = [
  { title: "Weekly Meeting", description: "Regular chapter meeting", id: 1, icon: FiCircle },
  { title: "Competition Prep", description: "State competition prep", id: 2, icon: FiCode },
  { title: "Project Workshop", description: "Hands-on workshop", id: 3, icon: FiFileText },
  { title: "Guest Speaker", description: "Industry professional", id: 4, icon: FiLayers },
  { title: "Awards Ceremony", description: "Recognition event", id: 5, icon: FiLayout }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 400,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
  round = false,
}) {
  const [draggedCard, setDraggedCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragX = useMotionValue(0);

  const onDragStart = () => setDraggedCard(0);
  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setDraggedCard(null);
    dragX.set(0);
  };

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => loop ? (prev + 1) % items.length : Math.min(prev + 1, items.length - 1));
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, loop, items.length]);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <motion.div className="carousel-track" style={{ x: dragX }}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`carousel-card ${round ? 'round' : ''}`}
            style={{ width: baseWidth }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            initial={false}
            animate={{
              x: (index - currentIndex) * (baseWidth + GAP),
              scale: index === currentIndex ? 1 : 0.9,
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            transition={SPRING_OPTIONS}
          >
            <div className="card-content">
              {item.icon && <item.icon className="card-icon" />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
