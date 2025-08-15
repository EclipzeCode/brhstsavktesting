import "./Folder.css";

const Folder = ({ 
  size = 1, 
  color = "#8400ff", 
  className = "" 
}) => {
  return (
    <div className={`folder ${className}`} style={{ transform: `scale(${size})` }}>
      <div className="folder-back" style={{ backgroundColor: color }}></div>
      <div className="folder-front" style={{ backgroundColor: color }}>
        <div className="folder-tab" style={{ backgroundColor: color }}></div>
      </div>
      <div className="folder-icon">FOLDER</div>
    </div>
  );
};

export default Folder;
