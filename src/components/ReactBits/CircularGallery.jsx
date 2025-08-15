import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./CircularGallery.css";

const CircularGallery = ({
  items = [],
  radius = 200,
  autoRotate = true,
  speed = 0.5,
  className = ""
}) => {
  const containerRef = useRef(null);

  const defaultItems = [
    { image: "https://images.unsplash.com/photo-1518709268805-4e9042af2a88?q=80&w=300", title: "Events" },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300", title: "Projects" },
    { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300", title: "Innovation" },
    { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300", title: "Learning" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300", title: "Leadership" },
    { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300", title: "Community" },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div ref={containerRef} className={`circular-gallery ${className}`}>
      <motion.div
        className="circular-gallery-track"
        animate={autoRotate ? { rotate: 360 } : {}}
        transition={{
          duration: 20 / speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {displayItems.map((item, index) => {
          const angle = (360 / displayItems.length) * index;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={index}
              className="circular-gallery-item"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularGallery;
