import { useState } from "react";
import "./CardSwap.css";

const CardSwap = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    { title: "Event Progress", description: "Discuss progress on projects for events" },
    { title: "Q&A", description: "Answer questions about competitions, events, and general questions" },
    { title: "Test Prep", description: "Prepare for test events with practice questions and mock exams" },
    { title: "Competition Networking", description: "Discuss with fellow members on teams for events, along with rooming information" },
    { title: "Officer Elections", description: "Towards the end of the year, elections will be held for new officers." }
  ];

  return (
    <div className="card-swap">
      <div className="card-container">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`swap-card ${index === currentCard ? 'active' : ''}`}
            onClick={() => setCurrentCard(index)}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSwap;
