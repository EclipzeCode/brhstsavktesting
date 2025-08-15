import { useRef, useCallback } from "react";

const ClickSpark = ({
  children,
  sparkColor = "#8400ff",
  sparkCount = 6,
  duration = 400
}) => {
  const containerRef = useRef(null);

  const createSpark = useCallback((e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      spark.style.position = 'absolute';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = '4px';
      spark.style.height = '4px';
      spark.style.backgroundColor = sparkColor;
      spark.style.borderRadius = '50%';
      spark.style.pointerEvents = 'none';
      spark.style.zIndex = '1000';

      const angle = (i / sparkCount) * Math.PI * 2;
      const distance = 30 + Math.random() * 20;
      const endX = x + Math.cos(angle) * distance;
      const endY = y + Math.sin(angle) * distance;

      containerRef.current.appendChild(spark);

      spark.animate([
        {
          transform: `translate(0, 0) scale(1)`,
          opacity: 1
        },
        {
          transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`,
          opacity: 0
        }
      ], {
        duration,
        easing: 'ease-out'
      }).onfinish = () => {
        if (spark.parentNode) {
          spark.parentNode.removeChild(spark);
        }
      };
    }
  }, [sparkColor, sparkCount, duration]);

  return (
    <div 
      ref={containerRef} 
      onClick={createSpark}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
    </div>
  );
};

export default ClickSpark;
