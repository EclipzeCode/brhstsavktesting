import "./GlassIcons.css";

const gradientMapping = {
  blue: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  purple: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  green: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  orange: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  red: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  pink: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
};

const GlassIcons = ({ 
  items = [
    { icon: '🏠', label: 'Home', color: 'blue' },
    { icon: '👥', label: 'Team', color: 'purple' },
    { icon: '📚', label: 'Resources', color: 'green' },
    { icon: 'ℹ️', label: 'About', color: 'orange' }
  ],
  className = "" 
}) => {
  return (
    <div className={`glass-icons ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="glass-icon"
          style={{
            background: gradientMapping[item.color] || gradientMapping.blue
          }}
        >
          <div className="glass-icon-content">
            <span className="glass-icon-emoji">{item.icon}</span>
            <span className="glass-icon-label">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassIcons;
