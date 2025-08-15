// ElasticSlider.jsx
import { useState, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import "./ElasticSlider.css";

function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

export default function ElasticSlider({
  min = 0,
  max = 100,
  defaultValue = 50,
  label = "Value",
  leftIcon = "MIN",
  rightIcon = "MAX",
  className = "",
  onChange,              // optional callback(newValue)
}) {
  const [value, setValue] = useState(() => clamp(defaultValue, min, max));
  const trackRef = useRef(null);
  const handleRef = useRef(null);

  // Track and handle sizes
  const sizesRef = useRef({ track: 0, handle: 0 });
  useLayoutEffect(() => {
    const update = () => {
      sizesRef.current.track = trackRef.current?.clientWidth || 0;
      sizesRef.current.handle = handleRef.current?.clientWidth || 0;
    };
    update();
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  // Motion value for percentage [0..1]
  const pct = useMotionValue((value - min) / (max - min));
  const x = useTransform(pct, (p) => {
    const { track, handle } = sizesRef.current;
    const maxX = Math.max(0, track - handle);
    return p * maxX;
  });

  // Animate fill on value changes (keyboard/click)
  const setValueAndAnimate = (nextVal) => {
    const clamped = clamp(nextVal, min, max);
    setValue(clamped);
    if (onChange) onChange(clamped);
    const nextPct = (clamped - min) / (max - min);
    animate(pct, nextPct, { type: "spring", stiffness: 300, damping: 28, mass: 0.4 });
  };

  // Convert pointer X to value
  const valueFromClientX = (clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    const p = clamp((clientX - rect.left) / rect.width, 0, 1);
    return Math.round(min + p * (max - min));
  };

  // Click-to-seek
  const onTrackPointerDown = (e) => {
    const next = valueFromClientX(e.clientX);
    setValueAndAnimate(next);
  };

  // Drag updates live
  const onDrag = (_e, info) => {
    const { track, handle } = sizesRef.current;
    const maxX = Math.max(0, track - handle);
    const p = clamp(info.point.x - trackRef.current.getBoundingClientRect().left, 0, maxX) / (maxX || 1);
    const liveVal = Math.round(min + p * (max - min));
    setValue(liveVal);
    if (onChange) onChange(liveVal);
    pct.set(p);
  };

  // Keyboard support via hidden range input
  const onRangeChange = (e) => setValueAndAnimate(Number(e.target.value));

  return (
    <div className={`elastic-slider ${className}`}>
      <div className="elastic-slider-header">
        <span>{leftIcon}</span>
        <span className="elastic-slider-label">
          {label}: {value}
        </span>
        <span>{rightIcon}</span>
      </div>

      <div
        className="elastic-slider-track"
        ref={trackRef}
        onPointerDown={onTrackPointerDown}
      >
        <motion.div
          className="elastic-slider-fill"
          style={{ scaleX: pct, originX: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
        />
        <motion.button
          type="button"
          className="elastic-slider-handle"
          ref={handleRef}
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0.12}
          dragMomentum={false}
          style={{ x }}
          whileDrag={{ scale: 1.15 }}
          aria-label={`${label} handle`}
          onDrag={onDrag}
        />
      </div>

      {/* Accessible keyboard control */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onRangeChange}
        className="elastic-slider-input-visually-hidden"
        aria-label={label}
      />
    </div>
  );
}
