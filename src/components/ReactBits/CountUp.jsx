import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  onStart,
  onUpdate,
  onComplete,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
      if (onUpdate) {
        onUpdate(latest);
      }
    });

    return () => springValue.clearListeners();
  }, [springValue, onUpdate]);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        if (onStart) {
          onStart();
        }
        motionValue.set(to);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [motionValue, isInView, to, delay, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (latest.toFixed(0) === to.toString()) {
        if (onComplete) {
          onComplete();
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, to, onComplete]);

  return <span className={className} ref={ref}>{from}</span>;
}
