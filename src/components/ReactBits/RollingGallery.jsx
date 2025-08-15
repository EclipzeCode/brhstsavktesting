import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./RollingGallery.css";

const IMGS = [
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=400",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400", 
  "https://images.unsplash.com/photo-1518709268805-4e9042af2a88?q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
  "https://images.unsplash.com/photo-1494790108755-2616b612b665?q=80&w=400"
];

const RollingGallery = ({ 
  autoplay = false, 
  pauseOnHover = false, 
  images = IMGS,
  speed = 50
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const dragX = useMotionValue(0);
  const controls = useAnimation();

  const onDragEnd = () => {
    const x = dragX.get();
    
    if (x <= -100) {
      setImgIndex((prev) => (prev + 1) % images.length);
    } else if (x >= 100) {
      setImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, speed * 100);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, speed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay) {
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="rolling-gallery"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        onDragEnd={onDragEnd}
        className="rolling-gallery-track"
      >
        {images.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              className="rolling-gallery-item"
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
            >
              <img
                src={imgSrc}
                alt={`Gallery image ${idx + 1}`}
                draggable={false}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <div className="rolling-gallery-dots">
        {images.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`rolling-gallery-dot ${idx === imgIndex ? "active" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RollingGallery;
