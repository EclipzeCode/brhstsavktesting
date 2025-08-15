import { useRef, useEffect } from "react";
import "./LightRays.css";

const DEFAULT_COLOR = "#ffffff";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ] : [1, 1, 1];
};

const LightRays = ({
  className = "",
  raysColor = DEFAULT_COLOR,
  raysSpeed = 0.5,
  lightSpread = 0.3,
  rayLength = 0.8,
  pulsating = 0.2
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const [r, g, b] = hexToRgb(raysColor);
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.max(width, height);

      // Create multiple light rays
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + time * raysSpeed;
        const rayIntensity = 0.5 + Math.sin(time * 2 + i) * pulsating;
        
        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(angle) * maxRadius * rayLength,
          centerY + Math.sin(angle) * maxRadius * rayLength
        );

        gradient.addColorStop(0, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${rayIntensity * lightSpread})`);
        gradient.addColorStop(0.5, `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${rayIntensity * lightSpread * 0.5})`);
        gradient.addColorStop(1, `rgba(${r * 255}, ${g * 255}, ${b * 255}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * rayLength, angle - 0.1, angle + 0.1);
        ctx.lineTo(centerX, centerY);
        ctx.fill();
      }

      time += 0.016;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [raysColor, raysSpeed, lightSpread, rayLength, pulsating]);

  return <canvas ref={canvasRef} className={`light-rays ${className}`} />;
};

export default LightRays;
