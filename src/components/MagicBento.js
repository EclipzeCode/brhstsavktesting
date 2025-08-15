import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: "#060010",
    title: "Nationwide Organization",
    description:
      "Recognized nationwide with many members across the nation, and coveted by many major universities and schools, similar to DECA/FBLA/HOSA, but not restricted to a certain disciple, instead covering all of STEM.",
    label: "Network",
  },
  {
    color: "#060010",
    title: "Wide Variety of Events",
    description:
      "With over 40 events, there's something for everyone, and a low distribution of students in each event.",
    label: "Compete",
  },
  {
    color: "#060010",
    title: "Conferences",
    description:
      "By qualifying to nationals, you can embark on trips to major cities such as Washington D.C. With a low cost as well, you can network with peers on a national scale easier than other competitions.",
    label: "Travel",
  },
  {
    color: "#060010",
    title: "Leadership Opportunities",
    description:
      "Our rapidly growing board of officers has officer positions and applications available every year, providing a valuable addition to your resume.",
    label: "Lead",
  },
];

const MagicBento = (props) => {
  return (
    <div className="card-grid bento-section">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="card__header">
            <div className="card__label">{card.label}</div>
          </div>
          <div className="card__content">
            <h2 className="card__title">{card.title}</h2>
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;
