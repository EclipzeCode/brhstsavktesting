import { useRef, useEffect, useState } from "react";
import "./GooeyNav.css";

const GooeyNav = ({
  items = [],
  initialActiveIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <div className="gooey-nav">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`gooey-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <span className="gooey-icon">{item.icon}</span>
          <span className="gooey-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default GooeyNav;
