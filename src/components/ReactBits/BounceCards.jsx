import { useEffect } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  images = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
    "https://images.unsplash.com/photo-1494790108755-2616b612b665?q=80&w=300",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300"
  ],
  transformStyles = [
    { transform: "translate(0px, 0px) rotate(-2deg)" },
    { transform: "translate(10px, 10px) rotate(1deg)" },
    { transform: "translate(-5px, 5px) rotate(-1deg)" },
    { transform: "translate(5px, -5px) rotate(2deg)" }
  ],
  enableHover = true
}) {
  useEffect(() => {
    if (!enableHover) return;

    const cards = document.querySelectorAll('.bounce-card');
    
    cards.forEach(card => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      };
      
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [enableHover]);

  return (
    <div className="bounce-cards-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="bounce-card"
          style={transformStyles[index] || {}}
        >
          <img src={image} alt={`Bounce card ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
