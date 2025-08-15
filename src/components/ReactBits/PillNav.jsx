import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "./PillNav.css";

const PillNav = ({
  items = [
    { label: "Home", id: "home", path: "/" },
    { label: "Team", id: "team", path: "/team" },
    { label: "Resources", id: "resources", path: "/resources" },
    { label: "About", id: "about", path: "/about" },
    { label: "Meetings", id: "meetings", path: "/meetings" },
    { label: "Tournament", id: "tournament", path: "/tournament" }
  ],
  onItemClick,
  className = ""
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active index based on current path
  const getActiveIndex = () => {
    const currentPath = location.pathname;
    const activeIndex = items.findIndex(item => item.path === currentPath);
    return activeIndex >= 0 ? activeIndex : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex());

  const handleItemClick = (index, item) => {
    setActiveIndex(index);
    if (onItemClick) {
      onItemClick(item, index);
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className={`pill-nav ${className}`}>
      <div className="pill-nav-container">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`pill-nav-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleItemClick(index, item)}
          >
            {index === activeIndex && (
              <motion.div
                className="pill-nav-background"
                layoutId="pill-nav-background"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
            <span className="pill-nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default PillNav;
