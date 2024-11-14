import  { useState } from 'react';

const Partners = () => {
  const [position, setPosition] = useState(0);
  
  const itemWidth = screen; // Width of each item including margin (adjust as needed)
  const visibleItems = 3; // Number of visible items at once

  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'
  ];

  const handleNext = () => {
    if (position > -(itemWidth * (items.length - visibleItems))) {
      setPosition(position - itemWidth);
    }
  };

  const handlePrev = () => {
    if (position < 0) {
      setPosition(position + itemWidth);
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={handlePrev} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        disabled={position === 0}
      >
        ‹
      </button>

      <div className="overflow-hidden w-[360px]"> {/* Adjust width based on number of visible items */}
        <div 
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[100px] mx-2 text-center bg-gray-200 p-4">
              {item}
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={handleNext} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        disabled={position <= -(itemWidth * (items.length - visibleItems))}
      >
        ›
      </button>
    </div>
  );
};

export default Partners;
