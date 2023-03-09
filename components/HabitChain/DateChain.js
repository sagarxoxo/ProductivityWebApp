import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Form } from "react-bootstrap";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function DateChain({ eveData }) {
  const [editSwitch, setEditSwitch] = useState(true);
  const [habitTitle, setHabitTitle] = useState("Habit Chain");

  function handleSelectedDates(info) {
    const docUpdateEvent = doc(db, "date chain", eveData.id);
    const newEvent = {
      start: info.startStr,
      end: info.endStr,
      color: "red",
    };

    const filterEvent = eveData.event.filter(
      (data) => data.start === info.startStr
    );

    if (filterEvent.length !== 0) {
      const updatedData = eveData.event.filter(
        (data) => data.start !== info.startStr
      );
      updateDoc(docUpdateEvent, {
        event: updatedData,
      });
      // setEvents((prevData) =>
      //   prevData.filter((data) => data.start !== info.startStr)
      // );
    } else {
      updateDoc(docUpdateEvent, {
        event: [...eveData.event, newEvent],
      })
        .then((res) => console.log("update", res))
        .catch((err) => console.log(err));
      // setEvents((prevEvent) => [...prevEvent, newEvent]);
    }
  }

  const handleSave = (id) => {
    const docUpdateEvent = doc(db, "date chain", id);
    setEditSwitch(true);

    updateDoc(docUpdateEvent, {
      title: habitTitle,
    });
  };

  const handleDelete = (id) => {
    const docDeleteEvent = doc(db, "date chain", id);

    deleteDoc(docDeleteEvent);
  };

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
          {editSwitch && <h2>{eveData.title}</h2>}
          {editSwitch && (
            <div>
              <BsPencilSquare onClick={() => setEditSwitch(false)} />
              <BsFillTrashFill onClick={() => handleDelete(eveData.id)} />
            </div>
          )}
          {!editSwitch && (
            <button onClick={() => handleSave(eveData.id)}>Save</button>
          )}
        </div>
        <div className="calend">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            eventLimit={true}
            defaultView="dayGridMonth"
            events={eveData?.event}
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
