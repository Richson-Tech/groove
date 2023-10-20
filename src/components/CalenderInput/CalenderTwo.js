import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="rounded-md border p-2 focus:outline-none bg-transparent border-[#2b3146] font-[poppins] text-base"
        placeholderText='Departure Date'
      />
    </div>
  );
};

export default CalendarInput;
