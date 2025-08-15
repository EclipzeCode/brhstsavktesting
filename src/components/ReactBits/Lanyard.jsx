import "./Lanyard.css";

const Lanyard = ({ 
  position = [0, 0, 30], 
  gravity = [0, -40, 0],
  className = ""
}) => {
  return (
    <div className={`lanyard ${className}`}>
      <div className="lanyard-chain">
        <div className="lanyard-link"></div>
        <div className="lanyard-link"></div>
        <div className="lanyard-link"></div>
        <div className="lanyard-link"></div>
        <div className="lanyard-link"></div>
      </div>
      <div className="lanyard-badge">
        <div className="badge-content">
          <h3>BR TSA</h3>
          <p>Member</p>
        </div>
      </div>
    </div>
  );
};

export default Lanyard;
