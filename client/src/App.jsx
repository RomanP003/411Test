import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response);
  }

  useEffect(() => {
    fetchAPI();
  });

  const handleEventClick = (clickInfo) => {
    alert(clickInfo.event.title + ' Copied to Clipboard');
    navigator.clipboard.writeText(clickInfo.event.title);
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left:'prev, next, today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        events={[
          { title: 'event 3', date: '2025-03-10' },
          { title: 'event 2', date: '2025-03-27' },
          { title: 'event 1', date: '2025-03-28' },
        ]}

        editable={true}

        eventClick={handleEventClick}
      />
      <div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
