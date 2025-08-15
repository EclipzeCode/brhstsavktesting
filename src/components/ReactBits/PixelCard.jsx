import "./PixelCard.css";

const PixelCard = ({ 
  children, 
  variant = "blue", 
  className = "" 
}) => {
  return (
    <div className={`pixel-card pixel-card--${variant} ${className}`}>
      <div className="pixel-card__content">
        {children}
      </div>
    </div>
  );
};

export default PixelCard;
