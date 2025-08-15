import { useEffect, useRef } from 'react';
import './ShinyText.css';

const ShinyText = ({ text, speed = 4, className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    element.style.setProperty('--animation-speed', `${speed}s`);
  }, [speed]);

  return (
    <span ref={textRef} className={`shiny-text ${className}`}>
      {text}
    </span>
  );
};

export default ShinyText;
