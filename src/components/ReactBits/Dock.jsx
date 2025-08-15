import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "./Dock.css";

function DockItem({ item, mouseX, panelHeight, baseItemSize, magnification, distance }) {
  const ref = useRef(null);
  const itemDistance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(itemDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={item.onClick}
      className="dock-item"
    >
      <motion.div
        className="dock-icon"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {typeof item.icon === 'string' ? (
          <span className="dock-emoji">{item.icon}</span>
        ) : (
          item.icon
        )}
      </motion.div>
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="dock-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Dock({
  items = [],
  panelHeight = 68,
  baseItemSize = 50,
  magnification = 70,
  distance = 200,
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className="dock-container"
      style={{ height: panelHeight }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="dock-panel">
        {items.map((item, index) => (
          <DockItem
            key={index}
            item={item}
            mouseX={mouseX}
            panelHeight={panelHeight}
            baseItemSize={baseItemSize}
            magnification={magnification}
            distance={distance}
          />
        ))}
      </div>
    </motion.div>
  );
}
