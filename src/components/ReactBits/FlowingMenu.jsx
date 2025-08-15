import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./FlowingMenu.css";

function FlowingMenu({ 
  items = [
    {
      link: '#home',
      text: 'Home',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2a88?q=80&w=600&auto=format&fit=crop'
    },
    {
      link: '#about', 
      text: 'About',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'
    },
    {
      link: '#services',
      text: 'Services', 
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
    }
  ]
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const menuItems = menu.querySelectorAll('.menu-item');
    
    menuItems.forEach((item) => {
      const image = item.querySelector('.menu-image');
      const text = item.querySelector('.menu-text');
      
      const tl = gsap.timeline({ paused: true });
      
      tl.to(image, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(text, {
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      }, 0);
      
      item.addEventListener('mouseenter', () => tl.play());
      item.addEventListener('mouseleave', () => tl.reverse());
    });
  }, []);

  return (
    <div ref={menuRef} className="flowing-menu">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}

function MenuItem({ link, text, image }) {
  return (
    <a href={link} className="menu-item">
      <div className="menu-image-container">
        <img src={image} alt={text} className="menu-image" />
      </div>
      <div className="menu-text">{text}</div>
    </a>
  );
}

export default FlowingMenu;
