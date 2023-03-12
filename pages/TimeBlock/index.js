import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import styles from "../../styles/Timeblock.module.css";
import TimePicker from "react-time-picker/dist/entry.nostyle";
import TaskCard from "../../components/TimeBlockComponents/TaskCard";
import DailyTaskTimeBlock from "../../components/TimeBlockComponents/DailyTaskTimeBlock";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function TimeBlock() {
  const [task, setTask] = useState([]);

  const collectionTimeTask = collection(db, "time task");

  const addTaskNew = async () => {
    const userID = localStorage.getItem("users");

    setTask((prevData) => [...prevData, { title: "Title", value: "" }]);
    await updateDoc(doc(db, "time task", userID), {
      task,
    });
  };

  useEffect(() => {
    const userID = localStorage.getItem("users");
    const q = query(collectionTimeTask, where("uid", "==", userID));

    const fetchData = onSnapshot(q, (snapshot) => {
      let listData = [];
      snapshot.docs.forEach((item) => {
        listData.push({ ...item.data(), id: item.id });
      });
      setTask(
        listData[0].task ? listData[0].task : [{ title: "Title", value: "" }]
      );
    });

    return () => {
      fetchData();
    };
  }, []);

  return (
    <div className={styles.timeBlock}>
      <Container>
        <Row>
          <Col lg={6}>
            <DailyTaskTimeBlock task={task} />
          </Col>
          <Col lg={6}>
            <button className={styles.addNewTsk} onClick={addTaskNew}>
              <h4>Add New Task</h4>
            </button>
            {task?.map((data, index) => {
              return (
                <TaskCard
                  key={index}
                  title={data.title}
                  value={data.value}
                  setTask={setTask}
                  task={task}
                  index={index}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//     const dailyTask = [
//     {
//         id: 0,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 1,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 2,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 3,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 4,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 5,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 6,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 7,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 8,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 9,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 10,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 11,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 12,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 13,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 14,
//         taskName: "",
//         taskCompleted: false
//     },
//     ]

//     const [tdData, setTdData] = useState(dailyTask)

//     function onTimeChange(id){
//      const num = Number(value?.slice(0,2)) + id

//      if(num == 12 || num == 0){
//        return 12
//      }
//      else if(num >= 12){
//         return num - 12
//      }
//      else{
//         return num
//      }

//     }
