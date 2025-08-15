import { useRef, useEffect } from "react";
import "./FluidGlass.css";

const FluidGlass = ({
  children,
  className = "",
  blurAmount = 10,
  opacity = 0.1,
  borderRadius = "20px",
  border = "1px solid rgba(255, 255, 255, 0.2)"
}) => {
  const glassRef = useRef(null);

  useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;

    const handleMouseMove = (e) => {
      const rect = glass.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      glass.style.setProperty('--mouse-x', `${x}%`);
      glass.style.setProperty('--mouse-y', `${y}%`);
    };

    glass.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      glass.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glassRef}
      className={`fluid-glass ${className}`}
      style={{
        '--blur-amount': `${blurAmount}px`,
        '--opacity': opacity,
        '--border-radius': borderRadius,
        '--border': border
      }}
    >
      {children}
    </div>
  );
};

export default FluidGlass;
