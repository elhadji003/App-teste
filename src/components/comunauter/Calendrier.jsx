import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendrier() {
  const [calendarDate, setCalendarDate] = useState(new Date());

  return (
    <div className="w-4/12 bg-white p-6 rounded shadow">
      <h3 className="text-2xl font-semibold mb-4">Calendrier</h3>
      <Calendar
        onChange={setCalendarDate}
        value={calendarDate}
        className="rounded"
      />
    </div>
  );
}
