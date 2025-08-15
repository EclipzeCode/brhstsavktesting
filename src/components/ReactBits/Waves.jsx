import { useRef, useEffect } from "react";
import './Waves.css';

// Simple noise function
const noise = (x, y) => {
  const n = Math.sin(x) * Math.cos(y);
  return (n + 1) / 2;
};

const Waves = ({
  className = "",
  amplitude = 0.8,
  frequency = 0.02,
  speed = 0.5,
  yGap = 36
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const lines = Math.floor(canvas.height / yGap);
      
      for (let i = 0; i < lines; i++) {
        const y = i * yGap + yGap / 2;
        ctx.beginPath();
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const noiseValue = noise(x * frequency, (y + time) * frequency);
          const waveY = y + noiseValue * amplitude * 20;
          
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        
        ctx.strokeStyle = `rgba(132, 0, 255, ${0.3 + (i / lines) * 0.4})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      time += speed;
      animationId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [amplitude, frequency, speed, yGap]);

  return (
    <div className={`waves-container ${className}`}>
      <canvas ref={canvasRef} className="waves-canvas" />
    </div>
  );
};

export default Waves;
   