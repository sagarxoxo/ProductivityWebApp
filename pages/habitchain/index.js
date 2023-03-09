import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import DateChain from "../../components/HabitChain/DateChain";
import { db } from "../../firebase/firebaseConfig";
import styles from "../../styles/HabitChain.module.css";

export default function HabitChain() {
  const eve = [{ start: "2022-03-09", end: "2022-03-10", color: "red" }];

  const [event, setEvent] = useState([]);

  const collectionDateChain = collection(db, "date chain");

  const addNewDateChain = () => {
    const userID = localStorage.getItem("users");

    addDoc(collectionDateChain, {
      title: "Habit Chain",
      event: eve,
      uid: userID,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const userID = localStorage.getItem("users");
    const q = query(collectionDateChain, where("uid", "==", userID));

    const fetchData = onSnapshot(q, (snapshot) => {
      let listData = [];
      snapshot.docs.forEach((item) => {
        listData.push({ ...item.data(), id: item.id });
        // setEvent((prevData) => [...prevData, { ...item.data(), id: item.id }]);
      });
      setEvent(listData);
    });

    return () => {
      fetchData();
    };

    // const fetchData = async () => {
    //   getDocs(collectionDateChain).then((res) => {
    //     setEvent(
    //       res.docs.map((item) => {
    //         return { ...item.data(), id: item.id };
    //       })
    //     );
    //   });
    // };
    // fetchData();
  }, []);

  console.log(event);

  return (
    <div className={styles.habitchainConatiner}>
      <Container>
        <Row>
          <Col lg={4}>
            <div className={styles.addNewCalenderContainer}>
              <h2 onClick={addNewDateChain}>Add New</h2>
              <p>Create multiple habit chain</p>
            </div>
          </Col>
          {event?.map((eveData) => {
            return (
              <Col lg={4}>
                <DateChain eveData={eveData} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
