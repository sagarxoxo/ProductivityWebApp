import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import styles from "../../styles/Timeblock.module.css";
import TimePicker from "react-time-picker/dist/entry.nostyle";
import { db } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";

function DailyTaskTimeBlock(props) {
  const [value, onChange] = useState();
  const [act, setAct] = useState(false);
  const [dailyTask, setDailyTask] = useState([
    {
      id: 0,
      taskName: "Read Book",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 1,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 2,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 3,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 4,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 5,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 6,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 7,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 8,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 9,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 10,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 11,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 12,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 13,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
    {
      id: 14,
      taskName: "",
      rewards: "",
      taskCompleted: false,
    },
  ]);

  const collectionTimeTask = collection(db, "time task");

  function onTimeChange(id) {
    const num = Number(value?.slice(0, 2)) + id;

    if (num === 12 || num === 0) {
      return 12;
    } else if (num >= 12) {
      if (num > 24) {
        return num - 24;
      } else {
        return num - 12;
      }
    } else if (num <= 12) {
      return num;
    }
  }
  console.log("g", props.task);
  const saveTime = async () => {
    const userID = localStorage.getItem("users");

    await setDoc(doc(db, "time task", userID), {
      time: value,
      dailyTask,
      uid: userID,
      task: props.task,
    });
  };

  useEffect(() => {
    const userID = localStorage.getItem("users");
    const q = query(collectionTimeTask, where("uid", "==", userID));

    const fetchData = onSnapshot(q, (snapshot) => {
      let listData = [];
      snapshot.docs.forEach((item) => {
        listData.push({ ...item.data(), id: item.id });
        // setEvent((prevData) => [...prevData, { ...item.data(), id: item.id }]);
      });
      //   console.log("d", listData[0].time);
      onChange(listData[0]?.time);
      setDailyTask((prevData) =>
        listData[0]?.dailyTask ? listData[0]?.dailyTask : prevData
      );
    });

    return () => {
      fetchData();
    };
  }, []);

  function handleChange(e, id) {
    const { type, checked, name, value } = e.target;
    setDailyTask(
      dailyTask.map((data) => {
        if (id === data.id) {
          return { ...data, [name]: type === "checkbox" ? checked : value };
        } else {
          return data;
        }
      })
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>Time Block</h2>
        <div className={styles.timepc}>
          <TimePicker onChange={onChange} value={value} />
          <Button className={styles.btnSave} onClick={saveTime}>
            Save
          </Button>
        </div>
      </div>
      <Table className={styles.stTable}>
        <thead>
          <tr>
            <th>Time</th>
            <th></th>
            <th>Daily Task</th>
            <th>Rewards</th>
          </tr>
        </thead>
        <tbody>
          {dailyTask?.map((taskData, index) => {
            return (
              <tr key={index} className={styles.tr}>
                <td className={styles.tablesideHeader}>
                  {onTimeChange(taskData.id)}:00{" "}
                </td>
                <td>
                  <Form>
                    <div className={styles.cardTask}>
                      <Form.Group>
                        <Form.Check
                          type="checkbox"
                          name="taskCompleted"
                          className={styles.formDesignCheckbox}
                          checked={taskData.taskCompleted}
                          onChange={(e) => handleChange(e, taskData.id)}
                        />
                      </Form.Group>
                    </div>
                  </Form>
                </td>
                <td>
                  <Form>
                    <div className={styles.cardTask}>
                      <Form.Control
                        placeholder=""
                        name="taskName"
                        className={styles.formDesign}
                        value={taskData.taskName}
                        onChange={(e) => handleChange(e, taskData.id)}
                      />
                    </div>
                  </Form>
                </td>
                <td>
                  <Form.Control
                    placeholder=""
                    className={styles.formDesign}
                    name="rewards"
                    value={taskData.rewards}
                    onChange={(e) => handleChange(e, taskData.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DailyTaskTimeBlock;
