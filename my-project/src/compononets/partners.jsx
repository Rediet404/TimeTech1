import { useState, useEffect } from 'react';

const Partners = () => {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const items = [
    { src: '/images/bishoftu.png', alt: 'partner logo' },
    { src: '/images/telebirr-logo.png', alt: 'partner logo' },
    { src: '/images/elbethel.png', alt: 'partner logo' },
    { src: '/images/mald.png', alt: 'partner logo' },
  ];

  const itemWidth = window.innerWidth / 3;
  const totalItems = items.length;
  
  const clonedItems = [items[totalItems - 1], ...items, items[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPosition((prevPosition) => prevPosition - itemWidth);
    }, 2000); 

    return () => clearInterval(interval);
  }, [itemWidth]);

  
  useEffect(() => {
    if (position <= -itemWidth * (totalItems + 1)) {
      setTimeout(() => {
        setIsTransitioning(false);
        setPosition(-itemWidth); 
      }, 500); 
    } else if (position === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setPosition(-itemWidth * totalItems); 
      }, 1);
    }
  }, [position, totalItems, itemWidth]);

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(${position}px)` }}
        >
          {clonedItems.map((item, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: itemWidth }}>
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[100px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
