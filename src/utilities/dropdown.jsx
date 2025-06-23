import React, { useState } from "react";

function Dropdown({ text, MainData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilterData] = useState(MainData);

  const isChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter data based on input
    const filtered = MainData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilterData(filtered);

    // Open dropdown when typing starts
    if (value && !isOpen) {
      setIsOpen(true);
    }

    // Close dropdown if input is empty
    if (!value) {
      setIsOpen(false);
    }
  };

  const isClicked = (item) => {
    setInputValue(item);
    setIsOpen(false);
  };

  const handleFocus = () => {
    if (inputValue) {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={`flex justify-center relative  bg-black/30 ${
        isOpen ? "rounded-t-xl" : "rounded-xl"
      }`}
    >
      <input
        type="text"
        placeholder={text}
        value={inputValue}
        onChange={isChange}
        onFocus={handleFocus}
        className="inputElement"
      />

      <button onClick={() => setIsOpen(!isOpen)} className="p-2 cursor-pointer">
        ▼
      </button>

      {isOpen && (
        <div className="absolute mt-1 bg-black/50 shadow-lg z-10 right-0 top-[45px] w-full max-h-60 overflow-y-auto rounded-b-xl">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <p
                key={index}
                className="p-4 hover:bg-black/70 cursor-pointer"
                onClick={() => isClicked(data)}
              >
                {data}
              </p>
            ))
          ) : (
            <p className="p-4 text-gray-400">No matches found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
