import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./InfiniteScroll.css";

gsap.registerPlugin();

export default function InfiniteScroll({
  items = [
    "React Components",
    "Modern UI Design", 
    "Smooth Animations",
    "TypeScript Support",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP Integration",
    "Responsive Design"
  ],
  direction = "vertical",
  speed = 2,
  pauseOnHover = false,
  className = ""
}) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const isVertical = direction === "vertical";
    const property = isVertical ? "y" : "x";
    const dimension = isVertical ? "height" : "width";
    
    // Clone items for seamless loop
    const originalItems = Array.from(wrapper.children);
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      wrapper.appendChild(clone);
    });

    const itemSize = originalItems[0][`offset${dimension.charAt(0).toUpperCase() + dimension.slice(1)}`];
    const totalSize = itemSize * originalItems.length;

    let animation = gsap.to(wrapper, {
      [property]: -totalSize,
      duration: totalSize / (speed * 50),
      ease: "none",
      repeat: -1,
    });

    if (pauseOnHover) {
      const handleMouseEnter = () => animation.pause();
      const handleMouseLeave = () => animation.resume();
      
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        animation.kill();
      };
    }

    return () => {
      animation.kill();
    };
  }, [items, direction, speed, pauseOnHover]);

  return (
    <div 
      ref={containerRef} 
      className={`infinite-scroll ${direction} ${className}`}
    >
      <div ref={wrapperRef} className="infinite-scroll-wrapper">
        {items.map((item, index) => (
          <div key={index} className="infinite-scroll-item">
            {typeof item === 'string' ? <span>{item}</span> : item}
          </div>
        ))}
      </div>
    </div>
  );
}

