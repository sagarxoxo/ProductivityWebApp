import React, { useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';

export default function DateChain() {

    const [event, setEvents] = useState([
        {start: '2022-12-13', end: '2022-12-14'},
        {start: '2022-12-14', end: '2022-12-15'},
        ]
      );

    function handleSelectedDates(info){
        let check 
        let i
        // for( i=0; i <= event.length; i++){
        //     if(event[i].start === info.startStr){
        //         check = true
        //     }
        //     else{
        //         check = false
        //     }
        // }
        console.log(check)


        const newEvent = {
          start: info.startStr,
          end: info.endStr,
          color: "red"
        };
    
        setEvents(prevEvent =>  [
            ...prevEvent,
            newEvent
          ]
        )
        console.log(event)
    }


  return (
    <div className='calendarContainer'>
    <div className='NotiSec'>
      <div className='calend'>
      <FullCalendar
            plugins={[
                dayGridPlugin,
                interactionPlugin,
            ]}
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
  )
}
