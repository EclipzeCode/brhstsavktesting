import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import "./Counter.css";

function Number({ mv, number, height }) {
  const y = useTransform(mv, (latest) => {
    const offset = (10 + number) * height;
    return offset - (latest % 10) * height;
  });

  return (
    <motion.span style={{ y }} className="counter-number">
      {number}
    </motion.span>
  );
}

function Digit({ place, value, height, digitStyle }) {
  const mv = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    mv.set(value);
  }, [mv, value]);

  return (
    <div className="counter-digit" style={{ height, ...digitStyle }}>
      <div className="counter-digit-wrapper">
        {[...Array(10)].map((_, i) => (
          <Number key={i} mv={mv} number={i} height={height} />
        ))}
      </div>
    </div>
  );
}

export default function Counter({
  value = 0,
  height = 80,
  fontSize = 60,
  fontWeight = 900,
  color = "#8400ff",
  className = ""
}) {
  const digits = value.toString().padStart(3, '0').split('').reverse();

  const digitStyle = {
    fontSize,
    fontWeight,
    color,
  };

  return (
    <div className={`counter ${className}`}>
      {digits.map((digit, i) => (
        <Digit
          key={i}
          place={i}
          value={parseInt(digit)}
          height={height}
          digitStyle={digitStyle}
        />
      )).reverse()}
    </div>
  );
}
