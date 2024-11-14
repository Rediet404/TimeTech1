import { useState } from 'react';

const Partners = () => {
  const [position, setPosition] = useState(0);

  const items = [
    { src: 'src/assets/bishoftu.png', alt: 'partner logo' },
    { src: 'src/assets/telebirr-logo.png', alt: 'partner logo' },
    { src: 'src/assets/elbethel.png', alt: 'partner logo' },
    { src: 'src/assets/mald.png', alt: 'partner logo' }
  ];

  const itemWidth = window.innerWidth / 3;

  const handleNext = () => {
    if (position <= -(itemWidth * (items.length - 3))) {
      setPosition(0); 
    } else {
      setPosition(position - itemWidth); 
    }
  };

  const handlePrev = () => {
    if (position === 0) {
      setPosition(-(itemWidth * (items.length - 3))); 
    } else {
      setPosition(position + itemWidth); 
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={handlePrev} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        ‹
      </button>

      <div className="overflow-hidden w-full">
        <div 
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: itemWidth }}>
              <div className="overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-[200px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={handleNext} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default Partners;
