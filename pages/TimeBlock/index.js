import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import styles from "../../styles/Timeblock.module.css"
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import TaskCard from '../../components/TimeBlockComponents/TaskCard';
import DailyTaskTimeBlock from '../../components/DailyTaskTimeBlock';

export default function TimeBlock() {

  const [weekTask, setWeekTask] = useState();
  const [weekTask1, setWeekTask1] = useState();

  useEffect(() => {
    localStorage.getItem("Week Project Task") && setWeekTask(localStorage.getItem("Week Project Task"))
    localStorage.getItem("Week Learning Task") && setWeekTask1(localStorage.getItem("Week Learning Task"))
  },[])


  return (
    <div className={styles.timeBlock}>
    <Container>
    <Row>
        <Col lg={6}>
            <DailyTaskTimeBlock />
        </Col>
        <Col lg={6}>
            <TaskCard title={"Week Project Task"} weekTask={weekTask} setWeekTask={setWeekTask} />
            <TaskCard title={"Week Learning Task"} weekTask1={weekTask1} setWeekTask1={setWeekTask1}/>
        </Col>
    </Row>
    </Container>
    </div>
  )
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

