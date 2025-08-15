import React from 'react';
import './FlowingMenu.css';

function FlowingMenu({ items = [] }) {
  return (
    <div className="flowing-menu-wrap">
      <nav className="flowing-menu">
        {items.map((item, idx) => (
          <div key={idx} className="flowing-menu__item">
            <a href={item.link} className="flowing-menu__item-link">
              {item.text}
            </a>
            <div className="flowing-marquee">
              <div className="flowing-marquee__content">
                <span>{item.text}</span>
                <div 
                  className="flowing-marquee__img"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default FlowingMenu;
