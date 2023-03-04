import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function DateChain() {
  const [event, setEvents] = useState([
    { start: "2022-03-16", end: "2022-03-17", color: "red" },
    { start: "2022-03-17", end: "2022-03-18", color: "red" },
  ]);

  function handleSelectedDates(info) {
    let check;
    let i;
    // for( i=0; i <= event.length; i++){
    //     if(event[i].start === info.startStr){
    //         check = true
    //     }
    //     else{
    //         check = false
    //     }
    // }
    // let exists = Object.values(event[0]).includes("test1");

    const newEvent = {
      start: info.startStr,
      end: info.endStr,
      color: "red",
    };

    setEvents((prevEvent) => [...prevEvent, newEvent]);
  }

  console.log(event);

  return (
    <div className="calendarContainer">
      <div className="NotiSec">
        <div className="calend">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            eventLimit={true}
            defaultView="dayGridMonth"
            events={event}
            weekends={true}
            selectable={true}
            select={handleSelectedDates}
            eventClick={(event) => {
              console.log(event);
            }}
          />
        </div>
      </div>
    </div>
  );
}
