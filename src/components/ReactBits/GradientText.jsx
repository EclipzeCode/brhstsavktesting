import { useEffect, useRef } from "react";
import "./GradientText.css";

const GradientText = ({
  children,
  colors = ["#8400ff", "#00c1ff"],
  animationSpeed = 8,
  className = "",
  showBorder = false
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const gradientString = colors.join(", ");

    element.style.setProperty("--gradient-colors", gradientString);
    element.style.setProperty("--animation-duration", `${animationSpeed}s`);
  }, [colors, animationSpeed]);

  return (
    <span
      ref={textRef}
      className={`gradient-text ${
        showBorder ? "gradient-border" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
