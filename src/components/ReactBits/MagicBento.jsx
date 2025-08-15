import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";

const cardData = [
  {
    color: "#060010",
    title: "Biotechnology Design",
    description: "Solve a modern biotech problem with research, a solution, and a multimedia presentation.",
    label: "Pre-Med",
  },
  {
    color: "#060010", 
    title: "Data Science and Analytics",
    description: "Analyze a financial or societal issue using data, then present findings with a poster and visuals.",
    label: "Finance",
  },
  {
    color: "#060010",
    title: "Forensic Science", 
    description: "Take a test and analyze a mock patient, then report your findings using medical skills.",
    label: "Pre-Med",
  },
  {
    color: "#060010",
    title: "Debating Technological Issues",
    description: "Research a tech topic and debate for or against it using evidence, summaries, and different takes, similar to Public Forum or Lincoln Douglass Debate",
    label: "Public Speaking",
  },
    {
    color: "#060010",
    title: "Photographic Technology",
    description: "Create a photo portfolio showing technical skill and a clear message.",
    label: "Photography & Design",
  },
    {
    color: "#060010",
    title: "Webmaster",
    description: "Design and launch a website for the annual challenge, then present your process.",
    label: "Computer Science",
  },
  {
    color: "#060010",
    title: "Prepared Presentation",
    description: "Give a 3–5 minute talk on the year’s theme with a slide deck.",
    label: "Public Speaking",
  },
  {
    color: "#060010",
    title: "Robotics", 
    description: "Build and document a robot from open-source parts to solve a set challenge.",
    label: "Engineering",
  },
    {
    color: "#060010",
    title: "With over 30+ other events,", 
    description: "there's an event out there for everyone's interests.",
    label: "And more!",
  },
];

const createParticleElement = (color = "132, 0, 255") => {
  const particle = document.createElement("div");
  particle.className = "magic-particle";
  particle.style.background = `rgb(${color})`;
  return particle;
};

const ParticleCard = ({ 
  card, 
  particleCount = 12,
  glowColor = "132, 0, 255",
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true
}) => {
  const cardRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleElements = [];
    for (let i = 0; i < particleCount; i++) {
      particleElements.push(createParticleElement(glowColor));
    }
    setParticles(particleElements);
  }, [particleCount, glowColor]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (enableSpotlight) {
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [enableSpotlight, enableTilt]);

  const handleMouseLeave = useCallback(() => {
    if (enableTilt && cardRef.current) {
      gsap.to(cardRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [enableTilt]);

  const handleClick = useCallback(() => {
    if (clickEffect && cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { scale: 1 },
        { 
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        }
      );
    }
  }, [clickEffect]);

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card ${enableBorderGlow ? 'glow-border' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ 
        '--glow-color': `rgb(${glowColor})`,
        transformStyle: 'preserve-3d'
      }}
    >
      {enableSpotlight && <div className="spotlight-overlay" />}
      
      <div className="card__header">
        <div className="card__label">{card.label}</div>
        {enableStars && <div className="stars">✦</div>}
      </div>
      
      <div className="card__content">
        <h2 className="card__title">{card.title}</h2>
        <p className="card__description">{card.description}</p>
      </div>

      {particles.map((_, index) => (
        <div key={index} className="magic-particle" />
      ))}
    </div>
  );
};

const MagicBento = (props) => {
  const {
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    enableTilt = true,
    enableMagnetism = true,
    clickEffect = true,
    spotlightRadius = 300,
    particleCount = 12,
    glowColor = "132, 0, 255"
  } = props;

  return (
    <div className="magic-bento-grid">
      {cardData.map((card, index) => (
        <ParticleCard
          key={index}
          card={card}
          particleCount={particleCount}
          glowColor={glowColor}
          enableStars={enableStars}
          enableSpotlight={enableSpotlight}
          enableBorderGlow={enableBorderGlow}
          enableTilt={enableTilt}
          enableMagnetism={enableMagnetism}
          clickEffect={clickEffect}
        />
      ))}
    </div>
  );
};

export default MagicBento;
