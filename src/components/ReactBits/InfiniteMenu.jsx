import "./InfiniteMenu.css";

const InfiniteMenu = ({ items = [] }) => {
  return (
    <div className="infinite-menu">
      <div className="infinite-menu-track">
        {items.map((item, index) => (
          <div key={index} className="infinite-menu-item">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMenu;
