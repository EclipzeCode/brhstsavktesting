import "./DecayCard.css";

const DecayCard = ({ 
  children, 
  image, 
  width = 200, 
  height = 300,
  className = "" 
}) => {
  return (
    <div 
      className={`decay-card ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="decay-card-image">
        <img src={image} alt="Card" />
      </div>
      <div className="decay-card-content">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;
