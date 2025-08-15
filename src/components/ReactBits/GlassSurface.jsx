import { useEffect, useRef, useId } from "react";
import "./GlassSurface.css";

const GlassSurface = ({
  children,
  className = "",
  style = {},
  blurAmount = 20,
  opacity = 0.1,
  borderRadius = "20px",
  border = "1px solid rgba(255, 255, 255, 0.2)",
  mixBlendMode = "normal"
}) => {
  const surfaceRef = useRef(null);
  const filterId = useId();

  useEffect(() => {
    const surface = surfaceRef.current;
    if (!surface) return;

    // Add mouse move effect for subtle interactions
    const handleMouseMove = (e) => {
      const rect = surface.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      surface.style.setProperty('--mouse-x', `${x}%`);
      surface.style.setProperty('--mouse-y', `${y}%`);
    };

    surface.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      surface.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              baseFrequency="0.002 0.003"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feDisplacementMap
              in="SourceGraphic"
              scale="2"
            />
          </filter>
        </defs>
      </svg>
      
      <div
        ref={surfaceRef}
        className={`glass-surface ${className}`}
        style={{
          '--blur-amount': `${blurAmount}px`,
          '--opacity': opacity,
          '--border-radius': borderRadius,
          '--border': border,
          '--mix-blend-mode': mixBlendMode,
          '--filter-id': `url(#${filterId})`,
          ...style
        }}
      >
        {children}
      </div>
    </>
  );
};

export default GlassSurface;
