import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { db } from "../../firebase/firebaseConfig";
import styles from "../../styles/Timeblock.module.css";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
export default function TaskCard(props) {
  const [formData, setFormData] = useState(props.value);
  const [editSwitch, setEditSwitch] = useState(true);
  const [title, setTitle] = useState(props.title);

  const saveTasks = async () => {
    const userID = localStorage.getItem("users");

    const data = props.task.map((data, index) => {
      if (index === props.index) {
        return { title, value: formData };
      } else {
        return data;
      }
    });

    await updateDoc(doc(db, "time task", userID), {
      task: data,
    });

    setEditSwitch(true);
  };

  const deleteTasks = async () => {
    const userID = localStorage.getItem("users");

    const data = props.task.filter((data, index) => index !== props.index);

    await updateDoc(doc(db, "time task", userID), {
      task: data,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {!editSwitch && (
          <Form.Group className="w-90 pe-4 height-50">
            <Form.Check
              type="text"
              name="title"
              className="form-sty"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        )}
        {editSwitch && <h4>{props.title}</h4>}
        {editSwitch && (
          <div>
            <BsPencilSquare onClick={() => setEditSwitch(false)} />
            <BsFillTrashFill onClick={deleteTasks} />
            <button className={styles.btnSave} onClick={saveTasks}>
              Save Task
            </button>
          </div>
        )}
        {!editSwitch && (
          <button className={styles.btnSave} onClick={saveTasks}>
            Save Title
          </button>
        )}
      </div>
      <div className={styles.taskInt}>
        <Form>
          <Form.Control
            as="textarea"
            style={{ height: "140px" }}
            name="formData"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
        </Form>
      </div>
    </div>
  );
}
