import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import GradientText from './GradientText';
import './FeatureCards.css';

const ParticleCard = ({ children, className = "", disableAnimations = false }) => {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  const createParticles = useCallback(() => {
    if (disableAnimations) return;
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 300,
        y: Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    setParticles(newParticles);
  }, [disableAnimations]);

  useEffect(() => {
    createParticles();
  }, [createParticles]);

  return (
    <div ref={cardRef} className={`particle-card ${className}`}>
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="card-content">{children}</div>
    </div>
  );
};

const FeatureCards = () => {
  const gridRef = useRef(null);

  const cardsData = [
    {
      title: "Nationwide Organization",
      description: "Recognized nationwide with many members across the nation, and coveted by many major universities and schools, similar to DECA/FBLA/HOSA, but not restricted to a certain disciple, instead covering all of STEM.",
      icon: "🌐"
    },
    {
      title: "Wide Variety of Events", 
      description: "With over 40 events, there's something for everyone, and a low distribution of students in each event.",
      icon: "🎯"
    },
    {
      title: "Conferences",
      description: "By qualifying to nationals, you can embark on trips to major cities such as Washington D.C. With a low cost as well, you can network with peers on a national scale easier than other competitions.",
      icon: "✈️"
    },
    {
      title: "Leadership Opportunities",
      description: "Our rapidly growing board of officers has officer positions and applications available every year, providing a valuable addition to your resume.",
      icon: "👑"
    }
  ];

  return (
    <div className="feature-cards-container">
      <h2 className="feature-cards-title">
        <GradientText colors={["#8400ff", "#00c1ff"]}>
          Why Choose BR TSA?
        </GradientText>
      </h2>
      <div ref={gridRef} className="feature-cards-grid">
        {cardsData.map((card, index) => (
          <ParticleCard key={index} className="feature-card">
            <div className="feature-icon">{card.icon}</div>
            <h3 className="feature-title">{card.title}</h3>
            <p className="feature-description">{card.description}</p>
          </ParticleCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
