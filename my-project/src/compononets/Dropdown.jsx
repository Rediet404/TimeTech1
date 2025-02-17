import React, { useState } from "react";

const Dropdown = ({
  items,
  onSelect,
  defaultSelected = "Select an option",
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const handleSelect = (id, label) => {
    setSelectedItem(label);
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button
        className="inline-flex justify-between w-96 px-4 h-16 items-center text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem}
        <svg
          className="w-5 h-5 ml-2 -mr-1 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 0l-.707.707-3.293 3.879a1 1 0 01-1.414 0L5.292 8.414a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 w-80 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1 text-base text-gray-700">
            {items.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing on click
              >
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={name}
                    value={item.id}
                    checked={selectedItem === item.label}
                    onChange={() => handleSelect(item.id, item.label)}
                    className="text-gray-600 border-gray-300 focus:ring-gray-500"
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
<Dropdown
items={[
  { id: 1, label: "Individual" },
  { id: 2, label: "Group" },
  { id: 3, label: "Family" },
  { id: 4, label: "Couple" },
]}
onSelect={handleSelect}
defaultSelected="Product type"
name="product-type"
/>
export default Dropdown;
