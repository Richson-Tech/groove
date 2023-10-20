import React, { useState } from 'react';

const Rooms = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(true);
    };

  return (
    <div>
      <select
        className={`rounded-md border p-2 mt-1 mb-3 w-52 focus:outline-none border-[#2b3146] font-[poppins] text-base text-[#777777] ${clicked ? 'bg-white' : 'bg-transparent'}`}
        onClick={handleClick}
        placeholder='Rooms'
      >
        <option value="option1">Room 01</option>
        <option value="option2">Room 02</option>
        <option value="option3">Room 03</option>
      </select>
    </div>
  );
};

export default Rooms;
