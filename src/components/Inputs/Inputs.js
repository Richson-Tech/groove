import React, { useState } from 'react';

const Input = () => {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <select
        className={`rounded-md border p-2 mt-2 w-48 focus:outline-none border-[#2b3146] font-[poppins] text-base text-[#777777] ${clicked ? 'bg-white' : 'bg-transparent'}`}
        onClick={handleClick}
        placeholder='Adult'
      >
        <option value="option1">Adult</option>
        <option value="option2">Old</option>
        <option value="option3">Younger</option>
      </select>
    </div>
  );
};

export default Input;
