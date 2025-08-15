import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./TiltedCard.css";

const springValues = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export default function TiltedCard({
  imageSrc = "https://images.unsplash.com/photo-1518709268805-4e9042af2a88?q=80&w=300&auto=format&fit=crop",
  altText = "Card Image",
  captionText = "Caption",
  containerHeight = "300px",
  containerWidth = "250px",
  imageHeight = "200px",
  imageWidth = "230px",
  rotateAmplitude = 15,
  scaleOnHover = 1.05,
  showMobileWarning = true,
  showTooltip = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, springValues);
  const mouseYSpring = useSpring(y, springValues);

  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);

    rotateX.set(yPct * rotateAmplitude);
    rotateY.set(xPct * -rotateAmplitude);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        width: containerWidth,
        height: containerHeight,
      }}
      whileHover={{ scale: scaleOnHover }}
      className="tilted-card"
    >
      <motion.img
        src={imageSrc}
        alt={altText}
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
        className="tilted-card-image"
      />
      <div className="tilted-card-caption">{captionText}</div>
    </motion.div>
  );
}
  );
}
