import { useEffect, useRef, useId } from "react";
import "./GlassSurface.css";

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  brightness = 50,
  opacity = 0.93,
  className = "",
  style = {},
}) => {
  const containerRef = useRef(null);

  const containerStyle = {
    ...style,
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
  };

  return (
    <div
      ref={containerRef}
      className={`glass-surface ${className}`}
      style={containerStyle}
    >
      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
