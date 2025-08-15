import "./FlyingPosters.css";

const FlyingPosters = ({ items = [] }) => {
  return (
    <div className="flying-posters">
      {items.map((item, index) => (
        <div key={index} className="poster">
          <img src={item.image} alt={item.title} />
          <div className="poster-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlyingPosters;
