import { useRef, useEffect } from "react";
import "./Squares.css";

const Squares = ({
  squareSize = 40,
  gap = 2,
  speed = 0.5,
  direction = "diagonal",
  borderColor = "#fff",
  hoverFillColor = "#8400ff",
  className = ""
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const squaresRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let time = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      generateSquares();
    };

    const generateSquares = () => {
      const cols = Math.ceil(canvas.width / (squareSize + gap));
      const rows = Math.ceil(canvas.height / (squareSize + gap));
      
      squaresRef.current = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          squaresRef.current.push({
            x: i * (squareSize + gap),
            y: j * (squareSize + gap),
            opacity: 0.1 + Math.random() * 0.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      squaresRef.current.forEach((square) => {
        let movement = 0;
        
        switch (direction) {
          case "up":
            movement = Math.sin(time * speed + square.phase) * 0.3;
            break;
          case "down":
            movement = Math.cos(time * speed + square.phase) * 0.3;
            break;
          case "left":
            movement = Math.sin(time * speed + square.x * 0.01) * 0.3;
            break;
          case "right":
            movement = Math.cos(time * speed + square.x * 0.01) * 0.3;
            break;
          case "diagonal":
          default:
            movement = Math.sin(time * speed + (square.x + square.y) * 0.01) * 0.3;
            break;
        }
        
        const opacity = square.opacity + movement;
        
        ctx.strokeStyle = borderColor;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, opacity));
        ctx.lineWidth = 1;
        ctx.strokeRect(square.x, square.y, squareSize, squareSize);
      });
      
      time += 0.016; // ~60fps
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      squaresRef.current.forEach((square) => {
        const distance = Math.sqrt(
          Math.pow(mouseX - (square.x + squareSize / 2), 2) +
          Math.pow(mouseY - (square.y + squareSize / 2), 2)
        );
        
        if (distance < 100) {
          ctx.fillStyle = hoverFillColor;
          ctx.globalAlpha = 1 - (distance / 100);
          ctx.fillRect(square.x, square.y, squareSize, squareSize);
        }
      });
    };

    resizeCanvas();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [squareSize, gap, speed, direction, borderColor, hoverFillColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`squares-canvas ${className}`}
    />
  );
};

export default Squares;
