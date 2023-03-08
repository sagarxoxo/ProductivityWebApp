import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Form } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

export default function DateChain() {
  const [event, setEvents] = useState([
    { start: "2022-03-16", end: "2022-03-17", color: "red" },
    { start: "2022-03-17", end: "2022-03-18", color: "red" },
  ]);

  const [editSwitch, setEditSwitch] = useState(true);
  const [habitTitle, setHabitTitle] = useState("habit Title");

  function handleSelectedDates(info) {
    const newEvent = {
      start: info.startStr,
      end: info.endStr,
      color: "red",
    };

    const filterEvent = event.filter((data) => data.start === info.startStr);

    if (filterEvent.length !== 0) {
      setEvents((prevData) =>
        prevData.filter((data) => data.start !== info.startStr)
      );
    } else {
      setEvents((prevEvent) => [...prevEvent, newEvent]);
    }
  }

  return (
    <div className="calendarContainer">
      <div className="NotiSec">
        <div className="d-flex flex-row justify-content-between pt-4 title-sec-calend">
          {!editSwitch && (
            <Form.Group className="w-100 pe-4 height-50">
              <Form.Check
                type="text"
                name="habitTitle"
                className="form-sty"
                value={habitTitle}
                onChange={(e) => setHabitTitle(e.target.value)}
              />
            </Form.Group>
          )}
          {editSwitch && <h2>{habitTitle}</h2>}
          {editSwitch && <BsPencilSquare />}
          {!editSwitch && (
            <button onClick={() => setEditSwitch(true)}>Save</button>
          )}
        </div>
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
